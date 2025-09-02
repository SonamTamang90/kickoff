"use client";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
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

// Hook to track active section based on scroll position
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["tournaments", "champions", "features", "reviews"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header
      let foundActiveSection = false;

      // Check if we're in the hero section (top of page)
      if (scrollPosition < 200) {
        setActiveSection("");
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            foundActiveSection = true;
            break;
          }
        }
      }

      // If no section is active and we're not at the top, clear the active section
      if (!foundActiveSection && scrollPosition >= 200) {
        setActiveSection("");
      }
    };

    // Check for URL hash on initial load
    const checkInitialHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sections.includes(hash)) {
        setActiveSection(hash);
        // Scroll to the section after a short delay to ensure page is loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        handleScroll(); // Check initial scroll position if no hash
      }
    };

    window.addEventListener("scroll", handleScroll);
    checkInitialHash();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};

// Smooth scroll function with framer-motion
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
  activeSection,
}: {
  href: string;
  children: React.ReactNode;
  activeSection: string;
}) => {
  const sectionId = href.substring(1);
  const isActive = activeSection === sectionId;

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollToSection(sectionId);
      // Update URL after smooth scroll
      window.history.pushState(null, "", href);
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
          className={clsx(
            "block py-2 w-full text-left transition-colors",
            isActive ? "text-white" : "hover:text-primary"
          )}
        >
          {children}
        </PopoverButton>
      </motion.div>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover> & {
    activeSection: string;
  }
) => {
  const { activeSection, ...popoverProps } = props;

  return (
    <Popover {...popoverProps}>
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
            <MobileNavItem href="#tournaments" activeSection={activeSection}>
              Tournaments
            </MobileNavItem>
            <MobileNavItem href="#champions" activeSection={activeSection}>
              Champions
            </MobileNavItem>
            <MobileNavItem href="#features" activeSection={activeSection}>
              Features
            </MobileNavItem>
            <MobileNavItem href="#reviews" activeSection={activeSection}>
              Reviews
            </MobileNavItem>
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <Button
            href="/login"
            color="white"
            className="w-full text-dark-300 hover:text-primary justify-center"
          >
            Sign In
          </Button>
          <Button
            href="/register"
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
  activeSection,
}: {
  href: string;
  children: React.ReactNode;
  activeSection: string;
}) => {
  const sectionId = href.substring(1);
  const isActive = activeSection === sectionId;

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollToSection(sectionId);
      // Update URL after smooth scroll
      window.history.pushState(null, "", href);
    }
  };

  return (
    <li>
      <motion.button
        onClick={handleClick}
        className={clsx(
          "relative text-sm uppercase cursor-pointer tracking-wide font-semibold block px-3 py-2 transition",
          isActive ? "text-white" : "text-dark-600 hover:text-white"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute top-1/2 left-3 right-3 h-[0.2px] bg-primary -translate-y-1/2 rounded-full"
            layoutId="activeNav"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </motion.button>
    </li>
  );
};

const DesktopNavigation = (
  props: React.ComponentPropsWithoutRef<"nav"> & { activeSection: string }
) => {
  const { activeSection, ...navProps } = props;

  return (
    <nav {...navProps}>
      <ul className="flex px-3">
        <NavItem href="#features" activeSection={activeSection}>
          Features
        </NavItem>
        <NavItem href="#tournaments" activeSection={activeSection}>
          Tournaments
        </NavItem>
        <NavItem href="#champions" activeSection={activeSection}>
          Champions
        </NavItem>

        <NavItem href="#reviews" activeSection={activeSection}>
          Reviews
        </NavItem>
      </ul>
    </nav>
  );
};

const Header = () => {
  const activeSection = useActiveSection();

  return (
    <header className="h-[60px] pointer-events-none w-full z-50 flex items-center justify-center flex-none flex-col fixed top-0 bg-black">
      <Container className="w-full">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo className="pointer-events-auto" />
            <DesktopNavigation
              className="pointer-events-auto hidden md:block"
              activeSection={activeSection}
            />
          </div>
          <div className="pointer-events-auto flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Button href="/login" variant="plain" className="uppercase">
                Sign In
              </Button>
              <Button href="/register" variant="primary" className="uppercase">
                Get Started
              </Button>
            </div>
            <MobileNavigation
              className="pointer-events-auto md:hidden"
              activeSection={activeSection}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
