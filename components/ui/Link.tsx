import NextLink from "next/link";
import { forwardRef } from "react";

interface LinkProps extends React.ComponentPropsWithoutRef<typeof NextLink> {
  className?: string;
  children: React.ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NextLink {...props} className={className} ref={ref}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";