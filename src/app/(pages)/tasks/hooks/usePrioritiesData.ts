import { useQuery } from "@tanstack/react-query";
import { getPriorities } from "../services/get-priorities.service";

export function usePrioritiesData() {
  const query = useQuery({
    queryFn: () => getPriorities(),
    queryKey: ["tasks-priorities"],
    refetchOnWindowFocus: true,
  });

  return query;
}
