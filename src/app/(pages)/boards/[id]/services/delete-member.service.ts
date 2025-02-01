import { api } from "@/services/api";

const deleteMember = async ({
  userId,
  boardId,
}: {
  boardId: number;
  userId: number;
}) => {
  const response = await api.post<boolean>(`/board/${boardId}/delete-member`, {
    userId: userId,
  });

  return response.data;
};

export { deleteMember };
