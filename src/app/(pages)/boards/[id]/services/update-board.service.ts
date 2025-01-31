import { api } from "@/services/api";
import { BoardRoutes } from "@/enums/board-routes";
import { UpdateBoardInterface } from "../interfaces/update-board.interface";

const updateBoard = async (request: UpdateBoardInterface) => {
  const response = await api.patch<boolean>(
    `${BoardRoutes.UPDATE_BOARD}${request.boardId}`,
    request.body
  );

  console.log(JSON.stringify(response.data));
  return response.data;
};

export { updateBoard };
