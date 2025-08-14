"use client";
import Container from "@/components/shared/Container";
import {
  TrophyIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Tournament Management",
      description:
        "Create and manage tournaments with ease. Set up brackets, track progress, and handle registrations seamlessly.",
      icon: TrophyIcon,
    },
    {
      id: 2,
      title: "Team Collaboration",
      description:
        "Connect with your teammates, share strategies, and coordinate through our integrated team management system.",
      icon: UsersIcon,
    },
    {
      id: 3,
      title: "Event Scheduling",
      description:
        "Schedule matches, set reminders, and never miss an important game with our comprehensive calendar system.",
      icon: CalendarDaysIcon,
    },
  ];

  return (
    <section id="features" className="pb-16 lg:pb-28 lg:pt-0">
      <Container>
        <div className="text-left mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Platform Features
          </h2>
          <p className="text-dark-400 text-base max-w-lg leading-relaxed">
            Everything you need to organize, participate, and excel in
            competitive gaming tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className="relative p-8 rounded-2xl border border-dark-800 bg-dark-900/50 backdrop-blur-sm hover:bg-dark-800/70 transition-all duration-300"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-col items-start text-left">
                  <div className="mb-6 p-4 rounded-2xl bg-teal-600/20 backdrop-blur-sm">
                    <IconComponent className="w-8 h-8 text-teal-400" />
                  </div>

                  <div className="relative inline-block mb-4">
                    <h3 className="text-xl font-semibold font-heading text-white">
                      {feature.title}
                    </h3>
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-teal-400"
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredFeature === feature.id ? "100%" : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  </div>

                  <p className="text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features;
