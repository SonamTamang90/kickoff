import * as Headless from "@headlessui/react";
import NextLink, { type LinkProps } from "next/link";
import React, { forwardRef } from "react";

export const Link = forwardRef<
  HTMLAnchorElement,
  LinkProps & React.ComponentPropsWithoutRef<"a">
>((props, ref) => {
  return (
    <Headless.DataInteractive>
      <NextLink {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
