import { api } from "@/services/api";
import { UserInterface } from "../interfaces/user.interface";
import { UserRoutes } from "@/enums/user-routes";

const getUserByEmail = async ({ email }: { email: string }) => {
  const response = await api.get<UserInterface>(
    `${UserRoutes.GET_USER_BY_EMAIL}${email}`
  );
  return response.data;
};

export { getUserByEmail };
