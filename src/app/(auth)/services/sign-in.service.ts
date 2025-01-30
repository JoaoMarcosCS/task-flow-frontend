import { api } from "@/services/api";
import { SignInProps } from "../signIn/schemas/sign-in.schema";
import { AuthRoutes } from "@/enums/auth-routes";

const signInService = async (body: SignInProps) => {
  const response = await api.post(AuthRoutes.SIGN_IN, body);

  console.log(JSON.stringify(response.data));

  return response.data;
};

export { signInService };
