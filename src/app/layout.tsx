import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import PersistSessionProvider from "@/providers/PersistSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-200`}>
        <ReactQueryProvider>
          <PersistSessionProvider>
            <Toaster expand={false} />
            {children}
          </PersistSessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
