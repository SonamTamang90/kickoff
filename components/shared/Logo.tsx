"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LogoProps {
  /** Size of the logo */
  size?: "sm" | "md" | "lg";
  /** Custom className for styling */
  className?: string;
  /** Custom href for the link */
  href?: string;
  /** Show as a plain div instead of Link */
  asDiv?: boolean;
}

const Logo = ({
  size = "md",
  className,
  href = "/",
  asDiv = false,
}: LogoProps) => {
  const pathname = usePathname();
  
  // Size configurations
  const sizeConfig = {
    sm: { width: 20, height: 20, textSize: "text-sm", gap: "gap-2" },
    md: { width: 28, height: 28, textSize: "text-base", gap: "gap-3" },
    lg: { width: 36, height: 36, textSize: "text-lg", gap: "gap-4" },
  };

  const config = sizeConfig[size];

  // Smooth scroll function for hero section
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      const headerOffset = 60; // Height of fixed header
      const elementPosition = heroElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle logo click
  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/" && href === "/") {
      e.preventDefault();
      scrollToHero();
    }
  };

  const logoContent = (
    <>
      <Image
        width={config.width}
        height={config.height}
        src="/logo.svg"
        alt="Soccer coach logo"
        className="flex-shrink-0"
      />
      <span
        className={`text-white font-bold uppercase ${config.textSize} tracking-wider font-heading`}
      >
        Kickoff
      </span>
    </>
  );

  const baseClasses = `flex items-center ${config.gap}`;
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  if (asDiv) {
    return <div className={combinedClasses}>{logoContent}</div>;
  }

  return (
    <Link href={href} className={combinedClasses} onClick={handleClick}>
      {logoContent}
    </Link>
  );
};

export default Logo;
