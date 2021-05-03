import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  // segundo parametro eu passo um metodo, que é uma função que vai retornar os dados
  const { data } = await api.get("users");

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}
export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 segundos
    //terceiro parametro, passo o tempo que os dados precisam ser recarregados
  });
}
