import { BoardRoutes } from "@/enums/board-routes";
import { api } from "@/services/api";
import { Role } from "../interfaces/role.interface";

const getRoles = async () => {
  const response = await api.get<Role[]>(`${BoardRoutes.GET_ROLES}`);

  return response.data;
};

export { getRoles };
