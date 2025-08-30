import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CTA = () => {
  return (
    <section className="pb-16 lg:pb-28 lg:pt-0 px-6">
      <Container>
        <div className="relative overflow-hidden border border-dark-900 bg-dark-975">
          <div className="relative z-10 text-left py-20 px-8">
            <h2 className="text-3xl uppercase font-bold text-white mb-6 font-heading">
              Ready to Join the Competition?
            </h2>
            <p className="text-dark-200 text-sm mb-12 leading-relaxed max-w-xs">
              Start your journey in competitive gaming. Create tournaments, join
              teams, and showcase your skills on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                color="primary"
                className="py-3 px-8 !rounded-full text-lg"
                href="/register"
              >
                Get Started
              </Button>
              <Button
                outline
                className="py-3 px-8 !rounded-full border-white text-white text-lg flex items-center gap-2"
                href="#features"
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
