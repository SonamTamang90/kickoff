"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/Button";
import Logo from "../shared/Logo";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>
) => {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center justify-center rounded-full bg-white/90 p-2 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        <Bars3Icon className="h-5 w-5 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/tournaments">Browse</MobileNavItem>
            <MobileNavItem href="/create">Organize</MobileNavItem>
            <MobileNavItem href="/guide">Features</MobileNavItem>
            <MobileNavItem href="/pricing">Pricing</MobileNavItem>
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Button
            href="/login"
            variant="plain"
            color="white"
            className="w-full text-dark-300 hover:text-teal-500 justify-center"
          >
            Sign In
          </Button>
          <Button
            href="/register"
            variant="solid"
            color="primary"
            className="w-full !rounded-full justify-center"
          >
            Get Started
          </Button>
        </div>
      </PopoverPanel>
    </Popover>
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
        <div className="border border-dark-700 px-4 py-2 backdrop-blur-xs rounded-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Logo />
            </div>
            <div className="flex flex-1 justify-center">
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
            <div className="flex flex-1 justify-end">
              <div className="pointer-events-auto flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
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
                <MobileNavigation className="pointer-events-auto md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
