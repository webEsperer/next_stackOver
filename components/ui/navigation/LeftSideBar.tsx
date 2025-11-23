import Link from "next/link";
import Navlinks from "./navbar/Navlinks";
import { Button } from "../button";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar  background-light900_dark200 light-border border-r p-6 pt-36 flex flex-col justify-between h-screen overflow-y-auto shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[256px] sticky left-0 top-0">
      <div className="flex flex-col gap-1">
        <Navlinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none" asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image src="icons/account.svg" width={20} height={20} alt="Account" className="invert-colors lg:hidden"/>
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button className="!important min-h-[41px] w-full rounded-lg border bg-light-700 px-4 py-3 shadow-none small-medium text-dark400_light900 light-border-2 dark:bg-dark-300" asChild>
          <Link href={ROUTES.SIGN_OUT}>
            <Image src="/icons/sign-up.svg" width={20} height={20} alt="Account" className="invert-colors lg:hidden"/>
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
export default LeftSideBar;
