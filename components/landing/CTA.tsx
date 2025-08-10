import Container from "@/components/shared/Container";

const CTA = () => {
  return (
    <section className="py-32 lg:py-28" style={{ backgroundColor: "#0a0a0b" }}>
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-dark-800 bg-teal-600">
          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="text-4xl lg:text-3xl uppercase font-bold text-white mb-6 font-heading">
              Ready to Join the Competition?
            </h2>
            <p className="text-dark-200 text-xl lg:text-base mb-12 leading-relaxed max-w-lg mx-auto">
              Start your journey in competitive gaming. Create tournaments, join
              teams, and showcase your skills on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-colors duration-300">
                Get Started
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
