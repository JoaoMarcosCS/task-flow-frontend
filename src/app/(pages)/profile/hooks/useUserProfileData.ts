import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/get-user-profile.service";

export function useUserProfileData({ userId }: { userId: number }) {
  const query = useQuery({
    queryFn: () => getUserProfile({ userId }),
    queryKey: ["user-profile", { userId }],
    refetchOnWindowFocus: true,
  });

  return query;
}
