import Container from "@/components/shared/Container";
import ChampionsCarousel from "./ChampionsCarousel";

const ChampionsHeading = () => {
  return (
    <div className="flex items-center justify-center mb-16 overflow-hidden relative">
      <h1
        className="text-[6rem] tracking-wider font-heading lg:text-[11rem] font-bold select-none whitespace-nowrap bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgb(54, 54, 54) 0%, rgb(23, 23, 23) 70%, transparent 100%)",
        }}
      >
        CHAMPIONS
      </h1>
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
  ];

  return (
    <section id="champions" className="pb-16 lg:pb-28 lg:pt-0">
      <Container>
        <div className="text-left mb-16 lg:mb-20 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {champions.map((champion) => (
            <div
              key={champion.id}
              className="overflow-hidden hover:border-primary-500 transition-colors"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={champion.image}
                  alt={champion.title}
                  className="w-full h-full object-cover grayscale-75"
                />
              </div>
              <div className="py-6">
                <h3 className="text-white font-bold font-heading uppercase tracking-wide text-lg mb-2">
                  {champion.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
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
        </div>
      </Container>
    </section>
  );
};

export default Champions;
