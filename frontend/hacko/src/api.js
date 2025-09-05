const API_URL = "http://localhost:8081/api/users";

export async function fetchUsers() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

export async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
