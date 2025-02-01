import { api } from "@/services/api";
import { AddMemberInterface } from "../interfaces/add-member.interface";

const addMember = async ({boardId, body}: AddMemberInterface) => {
  const response = await api.post<boolean>(`/board/${boardId}/add-member`, body);

  return response.data;
};

export { addMember };
