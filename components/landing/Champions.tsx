import Container from "@/components/shared/Container";
import ChampionsCarousel from "./ChampionsCarousel";

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
    <section
      className="py-32 lg:pb-28 lg:pt-0 relative"
      style={{ backgroundColor: "#0a0a0b" }}
    >
      {/* Large background text */}
      <div className="absolute top-72 left-4  lg:top-4 lg:left-6 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className="text-[6rem] font-heading lg:text-[11rem] font-bold select-none whitespace-nowrap bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(23, 23, 23) 0%, rgb(54, 54, 54) 100%)",
          }}
        >
          CHAMPIONS
        </h1>
      </div>

      <Container className="relative z-10">
        <div className="text-left mb-24 lg:mb-20">
          <h2 className="text-4xl lg:text-3xl font-bold text-white mb-4 font-heading">
            Last Season Champions
          </h2>
          <p className="text-dark-400 text-xl lg:text-base max-w-lg leading-relaxed">
            Celebrate the champions who dominated the competition and claimed
            victory in our biggest tournaments.
          </p>
        </div>

        <ChampionsCarousel champions={champions} />
      </Container>
    </section>
  );
};

export default Champions;
