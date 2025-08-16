"use client";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const Tournaments = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [videoLoading, setVideoLoading] = useState<{ [key: number]: boolean }>(
    {}
  );
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = async (tournamentId: number) => {
    setHoveredCard(tournamentId);
    setVideoLoading((prev) => ({ ...prev, [tournamentId]: true }));

    const video = videoRefs.current[tournamentId];
    if (video) {
      try {
        video.currentTime = 0; // Reset video to start
        await video.play();
        setVideoLoading((prev) => ({ ...prev, [tournamentId]: false }));
      } catch (error) {
        console.log("Video autoplay failed:", error);
        setVideoLoading((prev) => ({ ...prev, [tournamentId]: false }));
      }
    }
  };

  const handleMouseLeave = (tournamentId: number) => {
    setHoveredCard(null);
    const video = videoRefs.current[tournamentId];
    if (video) {
      video.pause();
    }
  };

  const tournaments = [
    {
      id: 1,
      title: "Winter Championship Cup",
      subtitle: "Professional Soccer",
      image: "/assets/photo-1.png",
      video: "/video-1.mp4",
      date: "Jan 15-20, 2025",
      prize: "$50,000",
      participants: "32 Teams",
    },
    {
      id: 2,
      title: "Gyalsea Cup",
      subtitle: "Youth Soccer",
      image: "/assets/photo-2.png",
      video: "/video-2.mp4",
      date: "Mar 10-15, 2025",
      prize: "$25,000",
      participants: "16 Teams",
    },
    {
      id: 3,
      title: "Valorant Masters",
      subtitle: "Tactical FPS",
      image: "/assets/photo-3.png",
      video: "/video-3.mp4",
      date: "Feb 5-10, 2025",
      prize: "$75,000",
      participants: "24 Teams",
    },
    {
      id: 4,
      title: "Apex Legends Cup",
      subtitle: "Battle Royale",
      image: "/bento-3.png",
      video: "/video-4.mp4",
      date: "Apr 20-25, 2025",
      prize: "$30,000",
      participants: "20 Teams",
    },
    {
      id: 5,
      title: "Rocket League Pro",
      subtitle: "Car Soccer",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      video: "/video-4.mp4",
      date: "May 12-17, 2025",
      prize: "$40,000",
      participants: "12 Teams",
    },
  ];

  return (
    <section id="tournaments" className="py-16 lg:py-28">
      <Container>
        <div className="text-left mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading uppercase">
            Popular Tournaments
          </h2>
          <p className="text-dark-400 text-base max-w-lg leading-relaxed">
            Discover the most exciting tournaments happening now and join the
            competition.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-auto">
          {/* Tournament cards */}
          {tournaments.slice(0, 4).map((tournament) => (
            <div
              key={tournament.id}
              className="relative group overflow-hidden rounded-2xl border border-dark-800 bg-dark-800 hover:scale-[1.02] transition-transform duration-300 min-h-[480px]"
              onMouseEnter={() => handleMouseEnter(tournament.id)}
              onMouseLeave={() => handleMouseLeave(tournament.id)}
            >
              {/* Background Image */}
              <Image
                src={tournament.image}
                alt={tournament.title}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  hoveredCard === tournament.id ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Hover Video */}
              <video
                ref={(el) => {
                  videoRefs.current[tournament.id] = el;
                }}
                src={tournament.video}
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hoveredCard === tournament.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Loading indicator */}
              {videoLoading[tournament.id] && hoveredCard === tournament.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="relative inline-block">
                  <h3 className="text-2xl font-semibold font-heading text-white">
                    {tournament.title}
                  </h3>
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-white"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredCard === tournament.id ? "100%" : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </div>
                <div className="flex gap-4 mt-2">
                  <span className="flex items-center gap-1 text-sm text-gray-300">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {tournament.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-300">
                    <UsersIcon className="w-4 h-4" />
                    {tournament.participants}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Tournaments;
