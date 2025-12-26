const API_BASE = import.meta.env.VITE_API_URL;

export async function getNames() {
  const res = await fetch(`${API_BASE}/names`);
  return res.json();
}

export async function addName(name) {
  const res = await fetch(`${API_BASE}/names`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
  return res.json();
}

export async function clearNames() {
  const res = await fetch(`${API_BASE}/names`, {
    method: "DELETE",
  });
  return res.json();
}
