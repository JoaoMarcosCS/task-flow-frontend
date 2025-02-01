import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../services/get-roles.service";

export function useRolesData() {
  const query = useQuery({
    queryFn: () => getRoles(),
    queryKey: ["board-roles"],
    refetchOnWindowFocus: true,
  });

  return query;
}
