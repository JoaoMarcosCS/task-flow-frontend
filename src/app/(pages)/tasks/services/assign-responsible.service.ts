import { TaskRoutes } from "@/enums/task-routes";
import { api } from "@/services/api";
import { AssignResponsibleInterface } from "../interfaces/assign-responsible.interface";

const assignResponsible = async (body: AssignResponsibleInterface) => {
  const response = await api.post<boolean>(
    `${TaskRoutes.ASSIGN_RESPONSIBLE}`,
    body
  );

  return response.data;
};

export { assignResponsible };
