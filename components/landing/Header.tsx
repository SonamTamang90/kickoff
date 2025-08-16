"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
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

// Smooth scroll function
const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 100; // Offset for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      smoothScrollToSection(sectionId);
    }
  };

  return (
    <li>
      <motion.div
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <PopoverButton
          as="button"
          onClick={handleClick}
          className="block py-2 w-full text-left hover:text-teal-500 transition-colors"
        >
          {children}
        </PopoverButton>
      </motion.div>
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
            <MobileNavItem href="#tournaments">Tournaments</MobileNavItem>
            <MobileNavItem href="#champions">Champions</MobileNavItem>
            <MobileNavItem href="#features">Features</MobileNavItem>
            <MobileNavItem href="#reviews">Reviews</MobileNavItem>
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

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      smoothScrollToSection(sectionId);
    }
  };

  return (
    <li>
      <motion.button
        onClick={handleClick}
        className={clsx(
          "relative text-sm uppercase cursor-pointer tracking-wide font-semibold text-dark-600 block px-3 py-2 transition",
          isActive ? "text-teal-500" : "hover:text-white"
        )}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
            layoutId="activeNav"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </motion.button>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithoutRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex px-3">
        <NavItem href="#tournaments">Tournaments</NavItem>
        <NavItem href="#champions">Champions</NavItem>
        <NavItem href="#features">Features</NavItem>
        <NavItem href="#reviews">Reviews</NavItem>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="h-[60px] pointer-events-none w-full z-50 flex items-center justify-center flex-none flex-col fixed top-0 bg-black">
      <Container className="w-full">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
          <div className="pointer-events-auto flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Button
                href="/login"
                variant="plain"
                color="white"
                className="text-dark-300 uppercase font-medium hover:text-teal-500"
              >
                Sign In
              </Button>
              <Button
                href="/register"
                variant="solid"
                color="primary"
                className="!rounded-full uppercase font-medium"
              >
                Get Started
              </Button>
            </div>
            <MobileNavigation className="pointer-events-auto md:hidden" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
