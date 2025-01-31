import { removeTokenFromHeader } from "@/utils/remove-token-from-header";
import Cookie from "js-cookie";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";

export const useSignOut = () => {
  const removeUser = useUserStore((state) => state.removeUser);
  const { push } = useRouter();

  const handleLogout = () => {
    removeUser();
    removeTokenFromHeader();
    Cookie.remove("auth_token");
    push("/signIn");
  };

  return { handleLogout };
};
