import Image from "next/image";
import Container from "@/components/shared/Container";

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Winter Championship Cup",
      subtitle: "Professional Soccer",
      image: "/bento-1.png",
      date: "Jan 15-20, 2025",
      prize: "$50,000",
      participants: "32 Teams",
    },
    {
      id: 2,
      title: "Spring Premier League",
      subtitle: "Youth Soccer",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center",
      date: "Mar 10-15, 2025",
      prize: "$25,000",
      participants: "16 Teams",
    },
    {
      id: 3,
      title: "Valorant Masters",
      subtitle: "Tactical FPS",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop&crop=center",
      date: "Feb 5-10, 2025",
      prize: "$75,000",
      participants: "24 Teams",
    },
    {
      id: 4,
      title: "Apex Legends Cup",
      subtitle: "Battle Royale",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&crop=center",
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
      date: "May 12-17, 2025",
      prize: "$40,000",
      participants: "12 Teams",
    },
  ];

  return (
    <section className="py-32 lg:py-28" style={{ backgroundColor: "#0a0a0b" }}>
      <Container>
        <div className="text-left mb-24 lg:mb-20">
          <h2 className="text-4xl lg:text-3xl font-bold text-white mb-4">
            Featured Tournaments
          </h2>
          <p className="text-dark-400 text-xl lg:text-base max-w-lg leading-relaxed">
            Join exciting gaming competitions and showcase your skills against
            players worldwide.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-auto">
          {/* Tournament cards */}
          {tournaments.slice(0, 2).map((tournament) => (
            <div
              key={tournament.id}
              className="relative group overflow-hidden rounded-2xl bg-dark-800 hover:scale-[1.02] transition-transform duration-300 min-h-[480px]"
            >
              <Image
                src={tournament.image}
                alt={tournament.title}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white">
                  {tournament.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 lg:mt-24">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-12 rounded-2xl text-lg transition-colors duration-300">
            View All Tournaments
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Tournaments;
