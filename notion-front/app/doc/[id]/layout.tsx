import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import React, { ReactNode } from "react";
interface DocLayoutProps {
  children: ReactNode;
  params: {
    id: string;
  };
}

async function DocLayout({ children, params }: DocLayoutProps) {
  await auth.protect();

  const { id } = await params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
