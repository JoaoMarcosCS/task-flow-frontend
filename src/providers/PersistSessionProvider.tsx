"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { removeTokenFromHeader } from "@/utils/remove-token-from-header";
import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "@/app/(auth)/interfaces/token-payload.interface";
import { useUserStore } from "@/store/user.store";
import { addTokenToHeader } from "@/utils/add-token-to-header";

const PersistSessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { push } = useRouter();
  const { updateUser, removeUser } = useUserStore();

  useEffect(() => {
    const userId = Number(Cookie.get("user_id"));
    const token = Cookie.get("auth_token") || "";
    console.log("reiniciando");

    if (!userId || !token) {
      removeUser();
      removeTokenFromHeader();
      Cookie.remove("auth_token");
      Cookie.remove("user_id");
      push("/signIn");
    } else {
      const decodedToken = jwtDecode<TokenPayload>(token);

      const { name, email, userId } = decodedToken;

      addTokenToHeader(token!);

      updateUser({
        accessToken: token,
        email: email,
        name: name,
        id: userId,
      });
    }
  }, [push, updateUser]);

  return <div>{children}</div>;
};

export default PersistSessionProvider;
