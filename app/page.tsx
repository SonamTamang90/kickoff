import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[url(/assets/hero-2.png)] bg-cover bg-center">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative min-h-screen flex items-end">
        <div className="p-8 pb-16">
          <div>
            <h1 className="text-5xl font-bold text-white leading-none tracking-tight">
              Smarter Tournaments.
              <br />
              <span className="text-lime-400">Better Outcomes.</span>.
            </h1>
            <p className="text-xl text-gray-300 mt-4 font-light max-w-lg">
              Streamline your esports events with next-gen tournament tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
