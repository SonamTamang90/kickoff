import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Container from "@/components/shared/Container";

const Hero = () => {
  return (
    <section id="hero" style={{ height: "calc(100vh - 60px)", marginTop: "60px" }}>
      <Container className="h-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-4">
          {/* First Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/hero/hero-1.png"
              alt="Tournament Champions"
              fill
              className="object-cover grayscale-75"
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="lg:text-lg tracking-wide font-heading mb-1 uppercase">
                  Join <span className="font-bold">Tournament</span>
                </h2>
                <p className="text-white text-sm mb-4">
                  Join competitive tournaments and showcase your skills.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  className="text-xs uppercase font-semibold"
                >
                  Register Now →
                </Button>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/hero/hero-2.jpg"
              alt="Team Management"
              fill
              className="object-cover grayscale-75"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="font-heading lg:text-lg mb-1 uppercase">
                  Create <span className="font-bold">Teams</span>
                </h2>
                <p className="text-gray-200 text-sm mb-4">
                  Create and manage your team with powerful collaboration tools.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  className="text-xs uppercase font-semibold"
                >
                  Create Team →
                </Button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/hero/hero-3.jpg"
              alt="Championship Victory"
              fill
              className="object-cover grayscale-75"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="lg:text-lg tracking-wide font-heading mb-1 uppercase">
                  Champions
                </h2>
                <p className="text-gray-200 text-sm mb-4">
                  Rise to the top and claim your championship title.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  className="text-xs uppercase font-semibold"
                >
                  View Rankings →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
