import { useQuery } from "@tanstack/react-query";

import { getBoardsByUserId } from "../services/get-boards-by-user-id";

export function useBoardsData({ userId }: { userId: number }) {
  const query = useQuery({
    queryFn: () => getBoardsByUserId({ userId }),
    queryKey: ["user-boards", { userId }],
    refetchOnWindowFocus: true,
  });

  return query;
}
