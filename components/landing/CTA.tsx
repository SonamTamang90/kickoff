import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CTA = () => {
  return (
    <section className="py-32 lg:pb-28 lg:pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-dark-800 bg-teal-600">
          <div className="relative z-10 text-left py-20 px-8">
            <h2 className="text-4xl lg:text-3xl uppercase font-bold text-white mb-6 font-heading">
              Ready to Join the Competition?
            </h2>
            <p className="text-dark-200 text-xl lg:text-base mb-12 leading-relaxed max-w-lg">
              Start your journey in competitive gaming. Create tournaments, join
              teams, and showcase your skills on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="solid"
                color="white"
                className="py-3 px-8 rounded-2xl text-lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                color="white"
                className="py-3 px-8 rounded-2xl text-lg flex items-center gap-2"
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
