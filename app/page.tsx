"use client";

import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Intro from "@/components/Intro";
import Hyperspeed from "@/components/file/Hyperspeed/Hyperspeed";

export default function Page() {
  return (
    <Intro>
    <SmoothCursor />
     <div className="relative bg-[#0A030F] w-screen h-screen overflow-hidden">
        <Hyperspeed />
      </div>
    </Intro>
  );
}