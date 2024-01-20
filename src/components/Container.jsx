import React from "react";

export default function Container({ children }) {
  return <div className="relative min-w-screen max-w-screen w-full mx-auto h-[100dvh] flex flex-col">{children}</div>;
}
