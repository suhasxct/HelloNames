import { useEffect, useState } from "react";
import { addName, getNames, clearNames } from "./api";
import Toast from "./components/toast";
import NameList from "./components/nameList";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  async function loadNames() {
    const res = await getNames();
    if (res.success) setNames(res.names);
  }

  useEffect(() => {
    loadNames();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setToast({ message: "", type: "" });

    if (!name.trim()) {
      setToast({ message: "Name cannot be empty", type: "error" });
      return;
    }

    setLoading(true);
    const res = await addName(name);
    setLoading(false);

    if (!res.success) {
      setToast({ message: res.message, type: "error" });
      return;
    }

    setToast({ message: "Name added successfully", type: "success" });
    setName("");
    loadNames();
  }

  async function handleClear() {
    await clearNames();
    setToast({ message: "All names cleared", type: "success" });
    loadNames();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4">Hello Names</h1>

        <Toast message={toast.message} type={toast.type} />

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter a name"
          />

          <button
            disabled={loading}
            className="
              w-full bg-blue-500 text-white py-2 rounded
              flex items-center justify-center
              enabled:hover:bg-blue-600
              disabled:opacity-50
              transition
            "
          >
            {loading ? <LoadingSpinner /> : "Submit"}
          </button>
        </form>

        {names.length > 0 && (
          <button
            onClick={handleClear}
            className="mt-3 text-sm text-red-500 hover:underline"
          >
            Clear all names
          </button>
        )}

        <NameList names={names} />
      </div>
    </div>
  );
}

export default App;
