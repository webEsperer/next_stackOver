'use client'

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SheetClose } from "../../sheet"
import React from "react"

const Navlinks = ({ isMobileNav = false }: { isMobileNav: boolean }) => {
  const pathname = usePathname()

  const userId = 1
  return (<>
    {sidebarLinks.map(link => {
      const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route

        if (link.route === "/profile") {
          if (userId) link.route = `${link.route}/${userId}`;
          else return null;
      }
      
      const LinkComponent = (
        <Link key={link.label} href={link.route} className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}>
          <Image src={link.imgURL} width={20} height={20} alt={link.label} className={cn({ "invert-colors": !isActive })}/>
          <p className={cn(
            isActive ? "base-bold" : "base-medium",
            !isMobileNav && "max-lg:hidden")}>{link.label}</p>

        </Link>
      )

      return (
        isMobileNav ? (<SheetClose asChild key={link.route}>{LinkComponent}</SheetClose>) : (
          <React.Fragment>{LinkComponent}</React.Fragment>
        )
      )

    })}
  </>)
}

export default Navlinks