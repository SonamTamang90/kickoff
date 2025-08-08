import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-gray-900">
      <Image
        src="/hero-2.png"
        alt="Tournament hero background"
        fill
        className="absolute inset-0 -z-10 object-cover"
        priority
        sizes="100vw"
      />

      {/* Content positioned at left bottom */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-screen flex items-end">
        <div className="pb-8 sm:pb-12 lg:pb-20">
          {/* Announcement badge with animated teal gradient border */}
          <div className="mb-8 flex">
            <div className="relative rounded-full px-4 py-1.5 text-sm/6 text-white/90 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300">
              Join the next tournament season.{" "}
              <a
                href="#"
                className="font-semibold text-teal-300 hover:text-teal-200 transition-colors duration-200"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Register now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-4xl font-manrope">
              Bring Your Best Game.
            </h1>
            <p className="mt-4 text-lg  text-pretty text-gray-300 sm:text-lg">
              Create your tournament in minutes or join open competitions.
              Manage teams, schedules, and scores — all in one place.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                Join Tournament
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Create Team <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-teal-400 to-blue-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
