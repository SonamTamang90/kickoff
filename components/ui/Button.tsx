import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "inline-flex items-center justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors",
  outline:
    "inline-flex items-center justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors",
  plain:
    "inline-flex items-center justify-center text-sm font-semibold transition-colors",
};

const variantStyles = {
  solid: {
    primary:
      "relative overflow-hidden bg-primary text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-primary-600 active:text-white/80 before:transition-colors",
    lime: "relative overflow-hidden bg-lime-400 text-black before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-black/10 active:bg-lime-500 active:text-black/80 before:transition-colors",
    cyan: "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-teal-900 hover:bg-white/90 active:bg-white/90 active:text-teal-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    primary:
      "border-primary text-primary hover:border-primary-600 hover:bg-primary/10 active:bg-primary/20 active:text-primary-600/80",
    lime: "border-lime-400 text-lime-400 hover:border-lime-500 hover:bg-lime-400/10 active:bg-lime-400/20 active:text-lime-500/80",
    white:
      "border-white text-white hover:border-white/80 hover:bg-white/10 active:bg-white/20 active:text-white/80",
    gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
  plain: {
    primary: "text-primary hover:text-primary-600 active:text-primary-600/80",
    lime: "text-lime-400 hover:text-lime-500 active:text-lime-500/80",
    white: "text-white hover:text-primary active:text-white/60",
    gray: "text-gray-700 hover:text-gray-900 active:text-gray-900/80",
  },
};

type ButtonProps = (
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    }
  | {
      variant: "plain";
      color?: keyof typeof variantStyles.plain;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
    | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
        href?: undefined;
      })
  );

export const Button = ({ className, ...props }: ButtonProps) => {
  props.variant ??= "solid";
  props.color ??= "primary";

  className = clsx(
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : props.variant === "solid"
      ? variantStyles.solid[props.color]
      : props.variant === "plain"
      ? variantStyles.plain[props.color]
      : undefined,
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
};
