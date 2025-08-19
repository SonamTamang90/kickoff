import React from "react";
import Logo from "../shared/Logo";
import SocialAuth from "./SocialAuth";
import Image from "next/image";

const AuthLayout = ({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <main className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo />
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-dark-200">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm/6 text-dark-400">{subtitle}</p>
            )}
          </div>

          <div className="mt-10">
            <div>{children}</div>

            <SocialAuth
              className="mt-10"
              onProviderClick={(provider) => {
                console.log(`Login with ${provider}`);
                // Handle social auth logic here
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          fill
          alt=""
          src="/assets/auth-bg.png"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
