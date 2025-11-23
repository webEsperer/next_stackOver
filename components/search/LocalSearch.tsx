"use client";

interface LocalSearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

import Image from "next/image";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlquery, removeKeysFromQuery } from "@/lib/url";
const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: LocalSearchProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        if (searchQuery) {
          const newUrl = formUrlquery({
            params: searchParams.toString(),
            key: "query",
            value: searchQuery,
          });

          router.push(newUrl, { scroll: false });
        } else {
          if (pathName === route) {
            const newUrl = removeKeysFromQuery({
              params: searchParams.toString(),
              keysToRemove: ["query"],
            });

            router.push(newUrl, { scroll: false });
          }
        }
      }, 1000);

    return () => clearTimeout(delayDebounceFn);

  }, [searchQuery, router, route, pathName, searchParams]);
  return (
    <div
      className={`flex min-h-[56px] w-full items-center gap-4 rounded-[10px] px-4 background-light800_darkgradient ${otherClasses}`}
    >
      <Image src={imgSrc} width={24} height={24} alt="search icon" className="cursor-pointer" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="no-focus border-none outline-none paragraph-regular placeholder text-dark400_light700"
      ></Input>
    </div>
  );
};
export default LocalSearch;
