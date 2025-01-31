import { useQuery } from "@tanstack/react-query";
import { getTasksByUserId } from "../services/get-tasks-by-user-id.service";

export function useTasksData({ userId }: { userId: number }) {
  const query = useQuery({
    queryFn: () => getTasksByUserId({ userId }),
    queryKey: ["user-tasks", { userId }],
    refetchOnWindowFocus: true,
  });

  return query;
}
