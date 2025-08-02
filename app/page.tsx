"use client";

import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Intro from "@/components/Intro";

export default function Page() {
  return (
    <Intro>
    <SmoothCursor />
      <div className="relative bg-[#0A030F] w-100% h-screen">
      </div>
    </Intro>
  );
}