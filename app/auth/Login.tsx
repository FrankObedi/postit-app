"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="text-sm bg-teal-600 text-white px-3 py-1 rounded"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
