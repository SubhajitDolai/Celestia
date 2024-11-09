"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Notes, and Projects in Harmony. Welcome to <span className="font-thin">Celestia</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium px-20">
        Celestial: The Unified Space Where Ideas Flow and Productivity Grows.
      </h3>
      <Button>
        Enter Celestia
        <ArrowRight></ArrowRight>
      </Button>
    </div>
  );
}