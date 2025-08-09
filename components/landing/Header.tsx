"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/Button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        width={36}
        height={36}
        src="/assets/logo.svg"
        alt="Soccer coach logo"
      />
      <span className="text-dark-300 font-bold uppercase text-sm">
        Soccer <span className="text-teal-500">Coach</span>
      </span>
    </Link>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive ? "text-teal-500" : "hover:text-teal-500"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithoutRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex px-3 text-sm font-medium text-dark-300">
        <NavItem href="/tournaments">Browse</NavItem>
        <NavItem href="/create">Organize</NavItem>
        <NavItem href="/guide">Features</NavItem>
        <NavItem href="/pricing">Pricing</NavItem>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="pointer-events-none fixed top-4 w-full z-50 flex flex-none flex-col">
      <Container className="w-full">
        <div className="relative flex gap-4">
          <div className="flex flex-1">
            <Logo />
          </div>
          <div className="flex flex-1 justify-end md:justify-center">
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
          <div className="flex flex-1 justify-end">
            <div className="pointer-events-auto flex items-center gap-6">
              <Button
                href="/login"
                variant="plain"
                color="white"
                className="text-dark-300 hover:text-teal-500"
              >
                Sign In
              </Button>
              <Button
                href="/register"
                variant="solid"
                color="primary"
                className="!rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
