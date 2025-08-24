"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import Container from "@/components/shared/Container";
import Image from "next/image";

interface Review {
  title: string;
  body: string;
  author: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
}

const clubLogos = [
  "brentford-logo.svg",
  "coritiba-logo.svg",
  "galaxy-logo.svg",
  "grêmio-logo.svg",
  "havre-logo.svg",
  "lens-logo.svg",
  "lille-logo.svg",
  "nantes-logo.svg",
  "olympique-logo.svg",
];

const reviews: Array<Review> = [
  {
    title: "Perfect tournament management",
    body: "Organized my first esports tournament with 64 teams seamlessly. The bracket system and live updates kept everything running smoothly.",
    author: "Marcus Rodriguez",
    role: "Tournament Director at Phoenix Esports",
    rating: 5,
    image: `/assets/clubs/${clubLogos[0]}`,
  },
  {
    title: "Game-changing platform",
    body: "Our gaming community has grown 300% since we started using this platform. The team management tools are incredible.",
    author: "Sarah Chen",
    role: "Community Manager at Thunder Wolves",
    rating: 5,
    image: `/assets/clubs/${clubLogos[1]}`,
  },
  {
    title: "So easy to use",
    body: "Set up our first tournament in under 10 minutes. The interface is intuitive and the support team is amazing.",
    author: "Alex Thompson",
    role: "Head Coach at Crimson Raiders",
    rating: 5,
    image: `/assets/clubs/${clubLogos[2]}`,
  },
  {
    title: "Best investment for our clan",
    body: "We've hosted 15 tournaments this year alone. The automated bracket generation and prize distribution saved us countless hours.",
    author: "Jordan Kim",
    role: "Team Captain at Nexus Gaming",
    rating: 5,
    image: `/assets/clubs/${clubLogos[3]}`,
  },
  {
    title: "Professional quality",
    body: "The live streaming integration and spectator features make our tournaments look and feel professional. Sponsors love it!",
    author: "Emily Davis",
    role: "Pro Player at Storm Breakers",
    rating: 5,
    image: `/assets/clubs/${clubLogos[4]}`,
  },
  {
    title: "Incredible team features",
    body: "The team chat, strategy sharing, and roster management tools have transformed how we prepare for competitions.",
    author: "Michael Foster",
    role: "Strategic Analyst at Viper Squad",
    rating: 5,
    image: `/assets/clubs/${clubLogos[5]}`,
  },
  {
    title: "Smooth tournament experience",
    body: "Participated in 20+ tournaments on this platform. Zero technical issues and the matchmaking is always fair.",
    author: "Lisa Park",
    role: "Semi-Pro at Digital Legends",
    rating: 5,
    image: `/assets/clubs/${clubLogos[6]}`,
  },
  {
    title: "Outstanding support",
    body: "Had a scheduling conflict during our championship. The support team resolved it within minutes and saved our tournament.",
    author: "David Wilson",
    role: "Event Coordinator at Elite Gamers",
    rating: 5,
    image: `/assets/clubs/${clubLogos[7]}`,
  },
  {
    title: "Revenue game-changer",
    body: "The sponsorship integration and ticket sales features have turned our tournaments from hobby to profitable business.",
    author: "Jennifer Martinez",
    role: "Business Manager at Quantum Force",
    rating: 5,
    image: `/assets/clubs/${clubLogos[8]}`,
  },
  {
    title: "Mobile-friendly excellence",
    body: "Managing tournaments on mobile is just as smooth as desktop. Can update brackets and communicate with teams anywhere.",
    author: "Ryan O'Connor",
    role: "Team Manager at Shadow Knights",
    rating: 5,
    image: `/assets/clubs/${clubLogos[0]}`,
  },
  {
    title: "Analytics are amazing",
    body: "The detailed tournament analytics help us understand our audience and improve each event. Data-driven decisions made easy.",
    author: "Amanda Wright",
    role: "Data Analyst at Cyber Titans",
    rating: 5,
    image: `/assets/clubs/${clubLogos[1]}`,
  },
  {
    title: "Community building tool",
    body: "Not just tournaments - the community features have helped us build lasting relationships with players and teams.",
    author: "Carlos Mendez",
    role: "Community Lead at Iron Hawks",
    rating: 5,
    image: `/assets/clubs/${clubLogos[2]}`,
  },
];

interface AvatarProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Avatar({ name, image, size = "sm", className }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  if (image) {
    return (
      <div
        className={clsx(
          "relative rounded-full overflow-hidden bg-dark-800 flex items-center justify-center flex-shrink-0",
          sizeClasses[size],
          className
        )}
      >
        <Image
          src={image}
          alt={`${name} avatar`}
          width={size === "lg" ? 48 : size === "md" ? 40 : 32}
          height={size === "lg" ? 48 : size === "md" ? 40 : 32}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.classList.remove("hidden");
              fallback.classList.add("flex");
            }
          }}
        />
        <div
          className={clsx(
            "absolute inset-0 hidden rounded-full bg-primary/20 items-center justify-center",
            sizeClasses[size]
          )}
        >
          <span
            className={clsx(
              "font-semibold text-primary",
              size === "lg"
                ? "text-base"
                : size === "md"
                ? "text-sm"
                : "text-xs"
            )}
          >
            {getInitials(name)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <span
        className={clsx(
          "font-semibold text-primary",
          size === "lg" ? "text-base" : size === "md" ? "text-sm" : "text-xs"
        )}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}

function StarIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: Review["rating"] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-primary/60" : "fill-gray-600"
          )}
        />
      ))}
    </div>
  );
}

function Review({
  title,
  body,
  author,
  role,
  rating,
  image,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Review> & Review) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "rounded-2xl bg-dark-975 border border-dark-900 p-6",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-white">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold font-heading">
          &ldquo;{title}&rdquo;
        </p>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">{body}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar name={author} image={image} />
        <div>
          <p className="text-sm text-white font-medium">{author}</p>
          <p className="text-xs text-gray-400 mt-1">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) {
      return;
    }

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(reviews, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  "md:hidden",
                reviewIndex >= column1.length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0b]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0b]" /> */}
    </div>
  );
}

const Reviews = () => {
  return (
    <section id="reviews" className="pb-16 lg:pb-28 lg:pt-0 px-6">
      <Container>
        <div className="text-left mb-16 lg:mb-20">
          <h2 className="text-2xl font-bold uppercase text-white mb-4 font-heading">
            What Our Community Says
          </h2>
          <p className="text-dark-400 text-sm max-w-xs leading-relaxed">
            Thousands of tournament organizers and players trust our platform to
            deliver exceptional gaming experiences.
          </p>
        </div>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;
