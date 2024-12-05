"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const path = usePathname();

  useEffect(() => {

    console.log(path)

}, []);

  return (
    <div className="p-6 px-10 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-blue-100">
      {/* Logo Section */}
      <div className="hidden md:flex gap-10 items-center">
        <Image src="/logo.svg" width={150} height={150} alt="Home Logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex gap-10">
          <Link href={"/"}>
            {" "}
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              For Sale
            </li>
          </Link>
          <Link href={"/about"}>
            {" "}
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              About
            </li>
          </Link>
          <Link href={"/agent-finder"}>
            {" "}
            <li className="hover:text-purple-600 cursor-pointer font-bold">
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button className="flex gap-2">
          <Plus className="h-5 w-5" /> Post Your Ad
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}

export default Header;
