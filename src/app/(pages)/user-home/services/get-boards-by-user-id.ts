import { api } from "@/services/api";
import { BoardRoutes } from "@/enums/board-routes";
import { BoardGenericInterface } from "../interfaces/board-generic";

const getBoardsByUserId = async ({ userId }: { userId: number }) => {
  const response = await api.get<BoardGenericInterface[]>(
    `${BoardRoutes.GET_BOARDS_BY_USER_ID}${userId}`
  );
  return response.data;
};

export { getBoardsByUserId };
