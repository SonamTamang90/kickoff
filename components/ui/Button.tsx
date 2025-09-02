import * as Headless from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { Link } from "./Link";

const styles = {
  base: [
    // Base
    "relative isolate inline-flex items-center justify-center gap-x-2 rounded-full border text-base/6 font-semibold",
    // Sizing
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
    // Focus
    "focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-primary",
    // Disabled
    "data-disabled:opacity-50",
    // Icon
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]",
  ],
  variants: {
    base: [
      // Base variant using your dark theme colors
      "border-dark-800 bg-dark-900 text-dark-100 data-active:bg-dark-800 data-hover:bg-dark-800",
      // Icon
      "[--btn-icon:var(--color-dark-400)] data-active:[--btn-icon:var(--color-dark-300)] data-hover:[--btn-icon:var(--color-dark-300)]",
    ],
    primary: [
      // Primary variant using your custom primary color
      "border-transparent bg-primary text-white data-active:bg-primary-600 data-hover:bg-primary-600",
      // Icon
      "[--btn-icon:var(--color-white)]",
    ],
    outline: [
      // Outline variant for dark website
      "border-dark-700 text-dark-100 data-active:bg-dark-900/50 data-hover:bg-dark-900/50",
      // Icon
      "[--btn-icon:var(--color-dark-400)] data-active:[--btn-icon:var(--color-dark-300)] data-hover:[--btn-icon:var(--color-dark-300)]",
    ],
    plain: [
      // Plain variant for dark website - no horizontal padding
      "border-transparent text-dark-200 data-active:bg-dark-900/30 data-hover:bg-dark-900/30 !px-0",
      // Icon
      "[--btn-icon:var(--color-dark-400)] data-active:[--btn-icon:var(--color-dark-300)] data-hover:[--btn-icon:var(--color-dark-300)]",
    ],
  },
};

type ButtonProps = {
  variant?: keyof typeof styles.variants;
  className?: string;
  children: React.ReactNode;
} & (
  | Omit<Headless.ButtonProps, "as" | "className">
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, "className">
);

export const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const classes = clsx(className, styles.base, styles.variants[variant]);

    return "href" in props ? (
      <Link
        {...props}
        className={classes}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      >
        <TouchTarget>{children}</TouchTarget>
      </Link>
    ) : (
      <Headless.Button
        {...props}
        className={clsx(classes, "cursor-default")}
        ref={ref}
      >
        <TouchTarget>{children}</TouchTarget>
      </Headless.Button>
    );
  }
);

Button.displayName = "Button";

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export const TouchTarget = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  );
};
