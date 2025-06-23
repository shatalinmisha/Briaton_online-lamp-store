export default async function addClient(client, email) {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "email": email,
    },
    body: JSON.stringify(client),
  });

  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }

  return await response.json();
}