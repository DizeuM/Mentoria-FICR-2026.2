"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UsersList() {
  const { users, loading } = useUsers();

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}
