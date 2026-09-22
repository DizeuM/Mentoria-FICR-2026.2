"use client";

import { getUsers } from "@/service/usersService";
import { User } from "@/types/User";
import { useEffect, useState } from "react";


export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    setLoading(true);

    try {
      const data = await getUsers();
      setUsers(data as User[]);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  },[]);
  
  return { users, loading };
}
