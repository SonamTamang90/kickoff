import Hero from "@/components/landing/Hero";
import Tournaments from "@/components/landing/Tournaments";
import Champions from "@/components/landing/Champions";
import Features from "@/components/landing/Features";
import Reviews from "@/components/landing/Reviews";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import React from "react";

const Home = () => {
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
