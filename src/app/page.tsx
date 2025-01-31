"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routeGuard } from "@/middlewares/route-guard";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/user-home");
  }, [router]);

  return null;
};

export default routeGuard(Home);
