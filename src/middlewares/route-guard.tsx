/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function routeGuard(Component: React.FC) {
  return function WithAuth(props: any) {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("auth_token");

      if (!token) {
        router.push("/signIn");
      }
    }, []);

    return <Component {...props} />;
  };
}
