import { FooterBar } from "@/components/commom/menus/FooterBar";
import { HeaderBar } from "@/components/commom/menus/HeaderBar";
import { SideBar } from "@/components/commom/menus/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row ">
      <HeaderBar />
      <SideBar />
      <div className="ms-0 sm:ms-40 sm:mt-32 pt-20 sm:pt-0 pb-28 flex w-full">{children}</div>
      <FooterBar />
    </div>
  );
}
