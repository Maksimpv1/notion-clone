import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import React, { ReactNode } from "react";
interface Params {
  id: string; 
}
interface DocLayoutProps {
  children: ReactNode;
  params: Promise<Params>; 
}

async function DocLayout({ children, params }: DocLayoutProps) {
  await auth.protect();

  const { id } = await params;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
