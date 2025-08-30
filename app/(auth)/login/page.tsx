"use client";
import { TextField } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import AuthLayout from "@/components/forms/AuthLayout";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Just prevent default - no actual authentication logic
    console.log("Login form submitted", { email, password });
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:text-primary-600"
          >
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
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
