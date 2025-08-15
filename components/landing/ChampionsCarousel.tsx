"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrophyIcon, CalendarIcon } from "@heroicons/react/24/outline";

interface Champion {
  id: number;
  title: string;
  tournament: string;
  image: string;
  season: string;
  prize: string;
}

interface ChampionsCarouselProps {
  champions: Champion[];
  autoPlayInterval?: number;
}

const ChampionsCarousel = ({ 
  champions, 
  autoPlayInterval = 4000 
}: ChampionsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % champions.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [champions.length, autoPlayInterval, isHovered]);

  const currentChampion = champions[currentIndex];

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl border border-dark-800 bg-dark-800 min-h-[600px] lg:min-h-[700px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChampion.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentChampion.image}
              alt={currentChampion.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Static gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-[1]" />

        {/* Trophy Icon */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-teal-500/20 backdrop-blur-sm rounded-full p-4">
            <TrophyIcon className="w-8 h-8 text-teal-400" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChampion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              <div className="mb-3">
                <h3 className="text-3xl font-semibold font-heading text-white">
                  {currentChampion.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-4">
                {currentChampion.tournament}
              </p>
              
              <div className="flex gap-6">
                <span className="flex items-center gap-2 text-base text-gray-300">
                  <CalendarIcon className="w-5 h-5" />
                  {currentChampion.season}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 right-8 flex gap-3 z-10">
          {champions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-8 border rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white border-white/40 hover:border-white/70"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionsCarousel;