"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      {/* <Image
        width={28}
        height={28}
        src="/assets/logo-1.svg"
        alt="Soccer coach logo"
      /> */}
      <span className="text-white font-bold uppercase text-base tracking-wider font-heading">
        Kickoff
      </span>
    </Link>
  );
};

export default Logo;
