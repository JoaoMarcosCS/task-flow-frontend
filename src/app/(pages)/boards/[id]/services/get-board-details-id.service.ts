import { api } from "@/services/api";
import { BoardRoutes } from "@/enums/board-routes";
import { BoardDetailsResponseInterface } from "../interfaces/board-details.interface";

const getBoardDetails = async ({
  boardId,
  userId,
}: {
  boardId: number;
  userId: number;
}) => {
  const response = await api.get<BoardDetailsResponseInterface>(
    `${BoardRoutes.GET_BOARD_BY_USER_ID}${userId}/${boardId}`
  );

  console.log(JSON.stringify(response.data));
  return response.data;
};

export { getBoardDetails };
