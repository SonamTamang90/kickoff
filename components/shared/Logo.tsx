"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        width={36}
        height={36}
        src="/assets/logo.svg"
        alt="Soccer coach logo"
      />
      <span className="text-white font-bold uppercase text-xl font-heading">
        Kick<span className="text-teal-500">off</span>
      </span>
    </Link>
  );
};

export default Logo;
