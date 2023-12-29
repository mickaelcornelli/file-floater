"use client";

import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="font-bold text-xl">File Floater</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggler />

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
