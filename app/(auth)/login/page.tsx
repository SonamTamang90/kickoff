"use client";
import Logo from "@/components/shared/Logo";
import { TextField } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import SocialAuth from "@/components/forms/SocialAuth";
import React from "react";
import Image from "next/image";
import AuthLayout from "@/components/forms/AuthLayout";
import Link from "next/link";

const Login = () => {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle={
        <>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:text-primary-600"
          >
            Sign up
          </Link>
        </>
      }
    >
      <form action="#" method="POST" className="space-y-6">
        <TextField
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="remember-me"
              className="block text-sm/6 text-dark-400"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm/6">
            <a
              href="#"
              className="font-semibold text-dark-200 hover:text-primary"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <Button
          type="submit"
          variant="solid"
          color="primary"
          className="w-full py-2.5"
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;

{
  /* <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo />
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-dark-200">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm/6 text-dark-400">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold text-primary hover:text-primary-600"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <TextField
                  label="Email address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                />

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      htmlFor="remember-me"
                      className="block text-sm/6 text-dark-400"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm/6">
                    <a
                      href="#"
                      className="font-semibold text-dark-200 hover:text-primary"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="solid"
                  color="primary"
                  className="w-full py-2.5"
                >
                  Sign in
                </Button>
              </form>
            </div>

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
    </div> */
}
