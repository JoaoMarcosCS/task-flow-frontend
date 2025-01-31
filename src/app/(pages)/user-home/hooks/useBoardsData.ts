import { useQuery } from "@tanstack/react-query";
import { GetBoardsByUserIdParams } from "../interfaces/get-boards-by-user-id-params.interface";
import { getBoardsByUserId } from "../services/get-boards-by-user-id";

export function useBoardsData({ userId }: GetBoardsByUserIdParams) {
  const query = useQuery({
    queryFn: () => getBoardsByUserId({ userId }),
    queryKey: ["user-boards", { userId }],
    refetchOnWindowFocus: true,
  });

  return query;
}
