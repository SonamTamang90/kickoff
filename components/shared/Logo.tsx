"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoVariant = "image-only" | "text-only" | "image-and-text";

interface LogoProps {
  /** Controls what elements to display */
  variant?: LogoVariant;
  /** Custom className for styling */
  className?: string;
  /** Custom href for the link */
  href?: string;
  /** Show as a plain div instead of Link */
  asDiv?: boolean;
  /** Image source path */
  imageSrc?: string;
  /** Alt text for the logo image */
  imageAlt?: string;
  /** Logo text content */
  text?: string;
}

const Logo = ({
  variant = "image-and-text",
  className,
  href = "/",
  asDiv = false,
  imageSrc = "/assets/logo-1.svg",
  imageAlt = "Soccer coach logo", 
  text = "Kickoff"
}: LogoProps) => {
  const showImage = variant === "image-only" || variant === "image-and-text";
  const showText = variant === "text-only" || variant === "image-and-text";

  const logoContent = (
    <>
      {showImage && (
        <Image
          width={28}
          height={28}
          src={imageSrc}
          alt={imageAlt}
          className="flex-shrink-0"
        />
      )}
      {showText && (
        <span className="text-white font-bold uppercase text-base tracking-wider font-heading">
          {text}
        </span>
      )}
    </>
  );

  const baseClasses = "flex items-center gap-4";
  const combinedClasses = clsx(baseClasses, className);

  if (asDiv) {
    return <div className={combinedClasses}>{logoContent}</div>;
  }

  return (
    <Link href={href} className={combinedClasses}>
      {logoContent}
    </Link>
  );
};

export default Logo;
