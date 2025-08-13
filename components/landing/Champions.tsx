import Container from "@/components/shared/Container";
import ChampionsCarousel from "./ChampionsCarousel";

const ChampionsHeading = () => {
  return (
    <div className="flex items-center justify-center mb-16 overflow-hidden relative">
      <h1
        className="text-[6rem] font-heading lg:text-[11rem] font-bold select-none whitespace-nowrap bg-clip-text text-transparent"
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
          background: "linear-gradient(180deg, transparent 0%, transparent 60%, #0a0a0b 100%)"
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
      image: "/assets/champions-1.png",
      season: "Season 2024",
      prize: "$50,000",
    },
    {
      id: 2,
      title: "Digital Wolves",
      tournament: "Valorant Masters 2024",
      image: "/assets/champions-2.png",
      season: "Season 2024",
      prize: "$75,000",
    },
    {
      id: 3,
      title: "Thunder Hawks",
      tournament: "Apex Legends Cup 2024",
      image: "/assets/champions-3.png",
      season: "Season 2024",
      prize: "$30,000",
    },
  ];

  return (
    <section className="py-32 lg:pb-28 lg:pt-0">
      <Container>
        <div className="text-left mb-24 lg:mb-20">
          <h2 className="text-4xl lg:text-3xl font-bold text-white mb-4 font-heading">
            Last Season Champions
          </h2>
          <p className="text-dark-400 text-xl lg:text-base max-w-lg leading-relaxed">
            Celebrate the champions who dominated the competition and claimed
            victory in our biggest tournaments.
          </p>
        </div>

        <ChampionsHeading />

        <ChampionsCarousel champions={champions} />
      </Container>
    </section>
  );
};

export default Champions;
