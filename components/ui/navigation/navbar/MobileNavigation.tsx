'use client'

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../button";
import Navlinks from "./Navlinks";
import { useEffect, useState } from "react";

const MobileNavigation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/icons/hamburger.svg" width={36} height={36} alt="Menu" className="invert-colors sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="border-none background-light900_dark200">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" width={23} height={23} alt="Logo" />
          <p className="font-space-grotesk text-dark-100 h2-bold dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-80px)]">
          <SheetClose asChild>
            <section className="flex flex-col gap-6 pt-16">
              <Navlinks isMobileNav/>
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium bg-light-800 dark:bg-dark-400 !important min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span></Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_OUT}>
                <Button className="small-medium light-border-2 bg-light-700 dark:bg-dark-300 !important text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">Sign Up</Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
