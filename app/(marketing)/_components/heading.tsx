"use client"

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Notes, and Projects in Harmony. Welcome to <span className="font-thin">Celestia</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium px-20">
        Celestial: The Unified Space Where Ideas Flow and Productivity Grows.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={'lg'}/>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"} >
            Enter Celestia
            <ArrowRight></ArrowRight>
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton>
          <Button>
            Get Celestia free
            <ArrowRight></ArrowRight>
          </Button>
        </SignUpButton>
      )}
    </div>
  );
}