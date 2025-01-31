import { api } from "@/services/api";
import { SignInProps } from "../../signIn/schemas/sign-in.schema";
import { UserRoutes } from "@/enums/user-routes";

const signUpService = async (body: SignInProps) => {
  const response = await api.post(UserRoutes.CREATE_USER, body);

  return response.data;
};

export { signUpService };
