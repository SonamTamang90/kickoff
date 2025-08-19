"use client";
import { TextField } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import React from "react";
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
