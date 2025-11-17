"use client"


import Image from "next/image";
import Link from "next/link";
import {Theme} from "./Theme";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 shadow-light-300 dark:shadow-none text-dark-100 dark:text-light-900 z-50 gap-5 p-6 sm:px-12">
      <Link className="flex-center gap-1" href="/">
        <Image src="/images/site-logo.svg" width={30} height={30} alt="logo" />
        <p className="h2-bold max-sm:hidden">Dev<span className="text-primary-500">Flow</span></p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </div>
  )
}

export default Navbar;