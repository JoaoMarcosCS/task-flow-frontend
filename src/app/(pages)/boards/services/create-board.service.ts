import { api } from "@/services/api";
import { CreateBoardInterface } from "../interfaces/create-task.interface";
import { BoardRoutes } from "@/enums/board-routes";

const createBoard = async (body: CreateBoardInterface) => {
  
  const response = await api.post<boolean>(`${BoardRoutes.CREATE_BOARD}`, body);

  return response.data;
};

export { createBoard };
