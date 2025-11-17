"use client";

import Image from "next/image";
import { Button } from "../button";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/constants/routes";
import { toast } from "sonner";
// import { toast } from "sonner";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: true });
    } catch (error) {

      toast(error instanceof Error ? error.message : "An error occurred during sign-in")
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="rounded-2 min-h-12 flex-1 px-4 py-3.5 body-medium text-dark200_light800 background-dark400_light900"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="icons/github.svg"
          width={20}
          height={20}
          alt="Github logo"
          className="mr-2.5 object-contain invert-colors"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className="rounded-2 min-h-12 flex-1 px-4 py-3.5 body-medium text-dark200_light800 background-dark400_light900" onClick={() => handleSignIn("google")}>
        <Image src="icons/google.svg" width={20} height={20} alt="Github logo" className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
