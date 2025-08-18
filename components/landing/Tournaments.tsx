"use client";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { CalendarMinus2, Users } from "lucide-react";

const Tournaments = () => {

  const tournaments = [
    {
      id: 1,
      title: "#Winter Championship Cup",
      description:
        "The ultimate professional soccer tournament bringing together the world's best teams in a thrilling winter showdown. Experience elite competition with international stars battling for glory in this prestigious championship.",
      image: "/assets/tournaments/tournament-1.jpg",
      date: "November, 2025",
      prize: "$50,000",
      participants: "32 Teams",
    },
    {
      id: 2,
      title: "Gyalsea Cup",
      description:
        "A premier youth soccer tournament designed to showcase emerging talent and foster the next generation of soccer stars. Watch rising players compete in an inspiring display of skill, teamwork, and determination.",
      image: "/assets/tournaments/tournament-3.jpg",
      date: "Mar 10-15, 2025",
      prize: "$25,000",
      participants: "16 Teams",
    },
    {
      id: 3,
      title: "Valorant Masters",
      description:
        "The most anticipated tactical FPS championship featuring top-tier professional teams competing in intense strategic battles. Witness precise gunplay, tactical mastery, and clutch moments that define esports excellence.",
      image: "/assets/tournaments/tournament-4.jpg",
      date: "Feb 5-10, 2025",
      prize: "$75,000",
      participants: "24 Teams",
    },
    {
      id: 4,
      title: "Apex Legends Cup",
      description:
        "High-octane battle royale action where squads fight for survival in the ultimate test of skill, strategy, and teamwork. Experience heart-pounding moments as teams navigate intense firefights and strategic positioning.",
      image: "/assets/tournaments/tournament-2.jpg",
      date: "Apr 20-25, 2025",
      prize: "$30,000",
      participants: "20 Teams",
    },
    {
      id: 5,
      title: "Rocket League Pro",
      description:
        "Fast-paced vehicular soccer combining precision driving with aerial acrobatics. Watch professional players execute incredible shots, saves, and team plays in this unique fusion of sports and gaming.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      date: "May 12-17, 2025",
      prize: "$40,000",
      participants: "12 Teams",
    },
  ];

  return (
    <section id="tournaments" className="py-16 lg:py-28">
      <Container>
        <div className="text-left mb-16 lg:mb-20 px-6">
          <h2 className="text-2xl font-bold text-white mb-4 font-heading uppercase">
            Popular Tournaments
          </h2>
          <p className="text-dark-400 text-sm max-w-xs leading-relaxed">
            Discover the most exciting tournaments happening now and join the
            competition.
          </p>
        </div>
      </Container>

      {/* Featured Tournament Card - Full Width */}
      <div className="relative">
        {tournaments.slice(0, 1).map((tournament) => (
          <div
            key={tournament.id}
            className="group relative"
          >
            {/* Full Viewport Width Image */}
            <div className="relative overflow-hidden bg-dark-800 min-h-[500px] lg:min-h-[700px] w-screen ml-[calc(-50vw+50%)]">
              <Image
                src={tournament.image}
                alt={tournament.title}
                fill
                className="object-cover grayscale transition-all duration-500"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Title Overlay on Top Left - Using Container */}
            <div className="absolute top-0 left-0 right-0 pt-8 lg:pt-12">
              <Container>
                <div className="w-full px-6">
                  <div className="relative inline-block">
                    <h3 className="text-xl tracking-wider uppercase font-extrabold font-heading text-primary">
                      {tournament.title}
                    </h3>
                  </div>
                </div>
              </Container>
            </div>

            {/* Content Overlay at Bottom - Using Container */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 lg:pb-12">
              <Container>
                <div className="w-full px-6">
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-200 tracking-wide text-sm leading-relaxed max-w-lg">
                        {tournament.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-3 text-gray-300">
                        <CalendarMinus2 className="w-5 h-5" />
                        <span className="text-sm font-bold text-white">
                          {tournament.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-200">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-bold text-white">
                          {tournament.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tournaments;
