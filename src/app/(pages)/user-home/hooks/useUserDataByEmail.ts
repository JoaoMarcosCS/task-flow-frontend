import { useQuery } from "@tanstack/react-query";
import { getUserByEmail } from "../services/get-user-by-email.service";

export function useUserDataByEmail({ email }: { email: string }) {
  const query = useQuery({
    queryFn: () => getUserByEmail({ email }),
    queryKey: ["user-data", { email }],
  });

  return query;
}
