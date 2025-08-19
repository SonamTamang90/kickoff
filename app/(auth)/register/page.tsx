"use client";
import { TextField } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import AuthLayout from "@/components/forms/AuthLayout";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:text-primary-600"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form action="#" method="POST" className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First name"
          />
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last name"
          />
        </div>

        <TextField
          label="Email address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          required
          autoComplete="new-password"
          placeholder="Create a password"
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
          placeholder="Confirm your password"
        />

        <div className="flex items-start">
          <div className="flex h-6 shrink-0 items-center">
            <div className="group grid size-4 grid-cols-1">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="col-start-1 row-start-1 appearance-none rounded-sm border border-dark-700 bg-dark-900 checked:border-primary-500 checked:bg-primary-500 indeterminate:border-primary-500 indeterminate:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:border-dark-700 disabled:bg-dark-800 disabled:checked:bg-dark-800 forced-colors:appearance-auto"
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
          <label htmlFor="agree-terms" className="ml-3 block text-sm text-dark-400">
            I agree to the{" "}
            <a
              href="#"
              className="font-semibold text-primary hover:text-primary-600"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-semibold text-primary hover:text-primary-600"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <Button
          type="submit"
          variant="solid"
          color="primary"
          className="w-full py-2.5"
        >
          Create Account
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Register;