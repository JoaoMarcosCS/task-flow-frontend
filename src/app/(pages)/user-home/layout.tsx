import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full">{children}</div>;
}
