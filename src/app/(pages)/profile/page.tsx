"use client";

import { routeGuard } from "@/middlewares/route-guard";
import { useUserStore } from "@/store/user.store";
import { useUserProfileData } from "./hooks/useUserProfileData";
import { RenderIf } from "@/components/commom/RenderIf";
import { Loader2, Pen } from "lucide-react";
import Link from "next/link";

const Profile = () => {
  const { user } = useUserStore((state) => state);

  const userId = user?.id ?? 0;

  const { data: userProfile, isLoading: isProfileLoading } = useUserProfileData(
    { userId }
  );

  return (
    <div className="w-full flex flex-col">
      <div>
        <div className="">
          <h1 className="text-2xl font-semibold sm:text-start text-center flex gap-2">
            Perfil
            <Link href={"/profile/edit"}>
              <Pen />
            </Link>
          </h1>
          <p className="text-muted-foreground sm:text-start text-center">
            Veja suas informações pessoais
          </p>
        </div>
        <div className="mt-6">
          <RenderIf shouldRender={isProfileLoading}>
            <p className="flex gap-4">
              <Loader2 className="animate-spin" /> Estamos carregando suas
              informações
            </p>
          </RenderIf>
          <RenderIf shouldRender={!isProfileLoading}>
            <div>
              <p className="text-muted-foreground sm:text-start text-center">
                Nome:
              </p>
              <h1 className="text-2xl font-semibold">{userProfile?.name}</h1>
              <br />
              <p className="text-muted-foreground sm:text-start text-center">
                Email:
              </p>
              <h1 className="text-2xl font-semibold">{userProfile?.email}</h1>
            </div>
          </RenderIf>
        </div>
      </div>
    </div>
  );
};

export default routeGuard(Profile);
