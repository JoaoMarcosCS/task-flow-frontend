import { UserRoutes } from "@/enums/user-routes";
import { api } from "@/services/api";
import { UserProfileInterface } from "../interfaces/user-profile.interface";

const getUserProfile = async ({ userId }: { userId: number }) => {
  const response = await api.get<UserProfileInterface>(
    `${UserRoutes.GET_USER_BY_ID}${userId}`
  );

  return response.data;
};

export { getUserProfile };
