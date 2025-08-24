import Container from "@/components/shared/Container";
import HorizontalDragSlide from "@/components/shared/HorizontalDragSlide";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ChampionsHeading = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for scroll-triggered animations
  const marginBottom = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    ["-100%", "-60%", "0%", "0%"]
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center mb-6 sm:mb-8 overflow-hidden relative h-[120px] xs:h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px]"
    >
      <motion.h1
        style={{
          marginBottom,
          backgroundImage:
            "linear-gradient(180deg, rgb(54, 54, 54) 0%, rgb(23, 23, 23) 70%, transparent 100%)",
        }}
        className="text-[4rem] sm:text-[3.8rem] md:text-[6rem] tracking-wider font-heading lg:text-[10rem] font-black select-none bg-clip-text text-transparent text-center"
      >
        CHAMPIONS
      </motion.h1>

      {/* Additional fade overlay for stronger effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 60%, #0a0a0b 100%)",
        }}
      />
    </div>
  );
};

const Champions = () => {
  const champions = [
    {
      id: 1,
      title: "Team Phoenix",
      tournament: "Winter Championship Cup 2024",
      image: "/assets/champion-1.jpg",
      season: "Season 2022",
      prize: "$50,000",
    },
    {
      id: 2,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champion-2.jpg",
      season: "Season 2024",
      prize: "$75,000",
    },
    {
      id: 3,
      title: "Thunder Hawks",
      tournament: "Apex Legends Cup 2024",
      image: "/assets/champion-4.jpg",
      season: "Season 2025",
      prize: "$30,000",
    },
    {
      id: 4,
      title: "Thunder Hawks",
      tournament: "Apex Legends Cup 2024",
      image: "/assets/champion-4.jpg",
      season: "Season 2025",
      prize: "$30,000",
    },
    {
      id: 5,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champion-2.jpg",
      season: "Season 2024",
      prize: "$75,000",
    },
    {
      id: 6,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champion-2.jpg",
      season: "Season 2024",
      prize: "$75,000",
    },
    {
      id: 7,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champion-2.jpg",
      season: "Season 2024",
      prize: "$75,000",
    },
    {
      id: 8,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champion-2.jpg",
      season: "Season 2024",
      prize: "$75,000",
    },
  ];

  return (
    <section id="champions" className="pb-16 lg:pb-28 lg:pt-0">
      <Container>
        <div className="text-left mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6">
          <h2 className="text-2xl font-bold uppercase text-white mb-4 font-heading">
            Hall Champions
          </h2>
          <p className="text-dark-400 text-sm max-w-xs leading-relaxed">
            Celebrate the champions who dominated the competition and claimed
            victory in our biggest tournaments.
          </p>
        </div>

        <ChampionsHeading />

        {/* <ChampionsCarousel champions={champions} /> */}

        <HorizontalDragSlide className="px-4 sm:px-6">
          {champions.map((champion) => (
            <div
              key={champion.id}
              className="overflow-hidden hover:border-primary-500 transition-colors flex-shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mr-6 last:mr-0"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  fill
                  src={champion.image}
                  alt={champion.title}
                  className="w-full h-full object-cover grayscale-75"
                  draggable={false}
                />
              </div>

              <div className="py-6 cursor-pointer group">
                <h3 className="text-white font-bold font-heading uppercase tracking-wide text-lg mb-2 group-hover:underline group-hover:decoration-white transition-all duration-200">
                  {champion.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2 group-hover:underline group-hover:decoration-white transition-all duration-200">
                  {champion.tournament}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">
                    {champion.season}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </HorizontalDragSlide>
      </Container>
    </section>
  );
};

export default Champions;
