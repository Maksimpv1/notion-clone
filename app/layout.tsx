import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";


export const metadata: Metadata = {
  title: "Notion-clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header  />
          <div className="flex min-h-screen">
            <Sidebar/>
            <div className="flex-1 p-5 bg-green-50 overflow-y-auto 
            scrollbar-hide">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
