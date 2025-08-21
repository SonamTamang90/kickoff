import clsx from "clsx";
import React from "react";

export const Sidebar = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) => {
  return (
    <nav
      {...props}
      className={clsx(className, "flex h-full min-h-0 flex-col")}
    />
  );
};

export const SidebarHeader = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  <div
    {...props}
    className={clsx(className, "flex flex-col border-b border-dark-900 p-4")}
  />;
};
