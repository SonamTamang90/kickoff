"use client";
import React from "react";
import clsx from "clsx";

// Social provider icons
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
    <path
      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
      fill="#EA4335"
    />
    <path
      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
      fill="#4285F4"
    />
    <path
      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
      fill="#FBBC05"
    />
    <path
      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
      fill="#34A853"
    />
  </svg>
);

type SocialProvider = "google";

interface SocialButtonProps {
  provider: SocialProvider;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

const SocialButton = ({
  provider,
  onClick,
  href,
  disabled = false,
  className,
}: SocialButtonProps) => {
  const providerConfig = {
    google: {
      name: "Google",
      icon: <GoogleIcon />,
    },
  };

  const baseClasses = clsx(
    "flex w-full items-center justify-center gap-3 rounded-lg border border-dark-800 bg-dark-975 px-3 py-2.5 text-sm font-semibold text-white transition-colors",
    "hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-dark-900",
    className
  );

  const config = providerConfig[provider];

  if (href && !disabled) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {config.icon}
        <span className="text-sm font-semibold">{config.name}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {config.icon}
      <span className="text-sm font-semibold">{config.name}</span>
    </button>
  );
};

interface SocialAuthProps {
  /** Custom className for the container */
  className?: string;
  /** Show divider text */
  showDivider?: boolean;
  /** Custom divider text */
  dividerText?: string;
  /** Providers to show */
  providers?: SocialProvider[];
  /** Callback when a provider is clicked */
  onProviderClick?: (provider: SocialProvider) => void;
  /** Custom hrefs for providers */
  providerHrefs?: Partial<Record<SocialProvider, string>>;
  /** Disabled state */
  disabled?: boolean;
  /** Layout: stacked or grid */
  layout?: "stacked" | "grid";
}

const SocialAuth = ({
  className,
  showDivider = true,
  dividerText = "Or continue with",
  providers = ["google"],
  onProviderClick,
  providerHrefs = {},
  disabled = false,
  layout = "grid",
}: SocialAuthProps) => {
  const handleProviderClick = (provider: SocialProvider) => {
    if (!disabled) {
      onProviderClick?.(provider);
    }
  };

  const gridClasses =
    layout === "grid" && providers.length > 1 ? "grid grid-cols-2 gap-4" : "space-y-3";

  return (
    <div className={clsx("w-full", className)}>
      {showDivider && (
        <div className="relative mb-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-dark-900" />
          </div>
          <div className="relative flex justify-center text-sm font-medium">
            <span className="bg-black px-6 text-dark-400">{dividerText}</span>
          </div>
        </div>
      )}

      <div className={gridClasses}>
        {providers.map((provider) => (
          <SocialButton
            key={provider}
            provider={provider}
            onClick={() => handleProviderClick(provider)}
            href={providerHrefs[provider]}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialAuth;
