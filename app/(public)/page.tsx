"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/landing/Hero";
import Tournaments from "@/components/landing/Tournaments";
import Champions from "@/components/landing/Champions";
import Features from "@/components/landing/Features";
import Reviews from "@/components/landing/Reviews";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { Loader } from "@/components/shared/Loader";
import React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader loadingText="Welcome to KICKOFF..." showBrand={true} />;
  }

  return (
    <>
      <Hero />
      <Tournaments />
      <Champions />
      <Features />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
