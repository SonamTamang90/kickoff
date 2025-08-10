import Hero from "@/components/landing/Hero";
import Tournaments from "@/components/landing/Tournaments";
import Champions from "@/components/landing/Champions";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Tournaments />
      <Champions />
      <Features />
      <CTA />
    </>
  );
};

export default Home;
