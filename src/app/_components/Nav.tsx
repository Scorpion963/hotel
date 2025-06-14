import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex font-bold w-full justify-between mx-auto items-center bg-transparent">
      <h1 className="text-3xl cursor-pointer">Kelv-Inn</h1>
      <div className="flex gap-6 text-xl font-bold">
        <Link
          href="https://github.com/Scorpion963/Kelv-Inn-Resort/releases/download/v0.0.3/Kelv-Inn.Resort.Hotel.Management.System-1.0.exe"
        >
          INSTALL
        </Link>
      </div>
    </nav>
  );
}
