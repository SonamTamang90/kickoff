"use client";
import { TextField } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import React, { useState, useEffect } from "react";
import AuthLayout from "@/components/forms/AuthLayout";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if we're not loading and user is confirmed authenticated
    console.log("Login page useEffect - isLoading:", isLoading, "user:", !!user);
    if (!isLoading && user) {
      console.log("Redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [user, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password. Try demo@kickoff.com / demo123");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearSession = () => {
    console.log("Manual session clear triggered");
    localStorage.clear();
    logout();
    setError("");
    setEmail("");
    setPassword("");
    window.location.reload(); // Force page reload to reset all state
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Checking authentication...</div>
      </div>
    );
  }

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
          placeholder="demo@kickoff.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="demo123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}

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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
