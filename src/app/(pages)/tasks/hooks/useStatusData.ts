import { useQuery } from "@tanstack/react-query";
import { getStatus } from "../services/get-status.service";

export function useStatusData() {
  const query = useQuery({
    queryFn: () => getStatus(),
    queryKey: ["tasks-status"],
    refetchOnWindowFocus: true,
  });

  return query;
}
