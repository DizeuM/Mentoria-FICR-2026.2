export async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = [
    { id: 1, name: "John Doe", email: "" },
    { id: 2, name: "Jane Smith", email: "" },
    { id: 3, name: "Alice Johnson", email: "" },
  ];

  const data = response;

  return data;
}
