"use client";
import Container from "@/components/shared/Container";
import { Trophy, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      id: 1,
      title: "Tournament Management",
      description:
        "Create and manage tournaments with ease. Set up brackets, track progress, and handle registrations seamlessly.",
      icon: Trophy,
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      title: "Team Collaboration",
      description:
        "Connect with your teammates, share strategies, and coordinate through our integrated team management system.",
      icon: Users,
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      title: "Event Scheduling",
      description:
        "Schedule matches, set reminders, and never miss an important game with our comprehensive calendar system.",
      icon: Calendar,
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <section id="features" className="pb-16 lg:pb-16 lg:pt-24">
      <Container>
        <div className="text-left mb-16 lg:mb-20 px-6">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-4 font-metropholis">
            Platform Features
          </h2>
          <p className="text-dark-400 text-sm max-w-xs leading-relaxed">
            Everything you need to organize, participate, and excel in
            competitive gaming tournaments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6">
          <div className="space-y-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className={`relative p-6 border cursor-pointer transition-all duration-300 bg-dark-975 backdrop-blur-sm`}
                  onClick={() => setActiveFeature(feature.id)}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {activeFeature === feature.id && (
                    <motion.div
                      layoutId="activeFeatureBorder"
                      className="absolute inset-0 border border-primary/30 pointer-events-none"
                      initial={false}
                    />
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        activeFeature === feature.id
                          ? "bg-primary/20"
                          : "bg-dark-800"
                      } backdrop-blur-sm`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          activeFeature === feature.id
                            ? "text-white"
                            : "text-dark-400"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold font-heading mb-2 ${
                          activeFeature === feature.id
                            ? "text-white"
                            : "text-dark-300"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative h-full">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden border border-dark-800 bg-dark-900/50 backdrop-blur-sm h-full"
            >
              <Image
                src={features.find((f) => f.id === activeFeature)?.image || ""}
                alt={features.find((f) => f.id === activeFeature)?.title || ""}
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-semibold text-white font-heading mb-2">
                  {features.find((f) => f.id === activeFeature)?.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  Interactive dashboard preview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
