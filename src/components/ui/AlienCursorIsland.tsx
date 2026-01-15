"use client";

import dynamic from "next/dynamic";

const AlienCursor = dynamic(
  () => import("./alien-cursor").then((m) => m.AlienCursor),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function AlienCursorIsland() {
  return <AlienCursor />;
}
