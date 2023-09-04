"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-sm text-white px-3 py-1 rounded"
      >
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={50}
          height={50}
          src={image}
          alt=""
          priority
          className="w-14 rounded-full"
        />
      </Link>
    </li>
  );
}
