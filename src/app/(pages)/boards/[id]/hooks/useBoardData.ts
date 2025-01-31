import { useQuery } from "@tanstack/react-query";
import { getBoardDetails } from "../services/get-board-details-id.service";

export function useBoardDetails({
  userId,
  boardId,
}: {
  userId: number;
  boardId: number;
}) {
  const query = useQuery({
    queryFn: () => getBoardDetails({ userId, boardId }),
    queryKey: ["board-details", { userId, boardId }],
    refetchOnWindowFocus: true,
  });

  return query;
}
