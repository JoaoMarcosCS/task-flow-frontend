import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full">{children}</div>;
}
