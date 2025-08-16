import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Container from "@/components/shared/Container";

// const Hero = () => {
//   return (
//     <div className="relative isolate overflow-hidden min-h-screen">
//       <Image
//         src="/hero.png"
//         alt="Tournament hero background"
//         fill
//         className="absolute inset-0 -z-10 object-cover"
//         priority
//         sizes="100vw"
//       />

//       {/* Content positioned at left bottom */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-end">
//         <div className="pb-8 sm:pb-12 lg:pb-20">
//           {/* Announcement badge with animated teal gradient border */}
//           <div className="mb-8 flex">
//             <div className="relative rounded-full px-4 py-1.5 text-sm/6 text-white/90 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300">
//               Join the next tournament season.{" "}
//               <a
//                 href="#"
//                 className="font-semibold text-teal-300 hover:text-teal-200 transition-colors duration-200"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Register now <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           {/* Main content */}
//           <div className="text-left max-w-4xl">
//             <h1 className="text-5xl font-extrabold tracking-normal font-heading uppercase text-balance text-white sm:text-6xl ">
//               Bring Your Best Game.
//             </h1>
//             <p className="mt-4 text-base text-pretty text-gray-200 sm:text-lg">
//               Create your tournament in minutes or join open competitions.
//               Manage teams, <br />
//               schedules, and scores — all in one place.
//             </p>
//             <div className="mt-10 flex items-center gap-x-6">
//               <Button
//                 href="#"
//                 variant="solid"
//                 color="primary"
//                 className="shadow-lg px-3.5 py-3 uppercase"
//               >
//                 Join Tournament
//               </Button>
//               <Button
//                 href="#"
//                 variant="outline"
//                 color="white"
//                 className="px-3.5 py-3 uppercase"
//               >
//                 Create Team <span aria-hidden="true">→</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom gradient overlay */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-teal-400 to-blue-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//         />
//       </div>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <section
      className="bg-black"
      style={{ height: "calc(100vh - 60px)", marginTop: "60px" }}
    >
      <Container className="h-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-4">
          {/* First Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/bento-1.png"
              alt="Tournament Champions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="lg:text-lg tracking-wide font-heading mb-1 uppercase">
                  Join <span className="font-bold">Tournament</span>
                </h2>
                <p className="text-white text-sm mb-4">
                  Join competitive tournaments and showcase your skills.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  color="white"
                  className="text-xs uppercase font-semibold"
                >
                  Register Now →
                </Button>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/assets/hero-3.jpg"
              alt="Team Management"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="lg:text-lg tracking-wide font-heading mb-1 uppercase">
                  Create <span className="font-bold">Teams</span>
                </h2>
                <p className="text-gray-200 text-sm mb-4">
                  Create and manage your team with powerful collaboration tools.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  color="white"
                  className="text-xs uppercase font-semibold"
                >
                  Create Team →
                </Button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="relative group overflow-hidden brightness-75 hover:brightness-100 transition-all duration-500 ease-in-out">
            <Image
              src="/assets/hero-2.jpg"
              alt="Championship Victory"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
              <div className="text-white">
                <h2 className="lg:text-lg tracking-wide font-heading mb-1 uppercase">
                  Champions
                </h2>
                <p className="text-gray-200 text-sm mb-4">
                  Rise to the top and claim your championship title.
                </p>
                <Button
                  href="#"
                  variant="plain"
                  color="white"
                  className="text-xs uppercase font-semibold"
                >
                  View Rankings →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
