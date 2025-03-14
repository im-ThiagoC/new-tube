"use client";

import { UserButton, SignInButton, SignedIn, SignedOut} from "@clerk/nextjs";

import { UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add a menu items for Studio and User Profile*/}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign-In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
