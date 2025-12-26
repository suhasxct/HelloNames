export default function Toast({ message, type }) {
  if (!message) return null;

  return (
    <div
      className={`mb-2 text-sm px-3 py-2 rounded ${
        type === "error"
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      {message}
    </div>
  );
}
