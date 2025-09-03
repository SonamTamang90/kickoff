"use client";

import { useState, useEffect, useRef } from "react";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isHoveringDraggable, setIsHoveringDraggable] = useState(false);
  const [isHoveringScrollable, setIsHoveringScrollable] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animatePosition = () => {
      setDelayedPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        const lerp = 0.15;

        return {
          x: prev.x + dx * lerp,
          y: prev.y + dy * lerp,
        };
      });

      animationRef.current = requestAnimationFrame(animatePosition);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animatePosition);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isVisible]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;

      // Check for draggable elements (HorizontalDragSlide areas)
      const isDraggable =
        target.closest(".cursor-grab") ||
        target.matches(".cursor-grab") ||
        target.closest("[data-draggable]") ||
        target.matches("[data-draggable]");

      // Check for scrollable cards (Champions cards that should show scroll indicator)
      const isScrollable =
        !isDraggable &&
        (target.closest("#champions .cursor-pointer") ||
          target.matches("#champions .cursor-pointer") ||
          target.closest("[data-scrollable]") ||
          target.matches("[data-scrollable]"));

      // Check for clickable elements (but not if it's draggable or scrollable)
      const isClickable =
        !isDraggable &&
        !isScrollable &&
        (target.closest(
          'button, a, [role="button"], [onClick], .cursor-pointer'
        ) ||
          target.matches(
            'button, a, [role="button"], [onClick], .cursor-pointer'
          ) ||
          target.closest("[data-clickable]") ||
          target.matches("[data-clickable]"));

      setIsHoveringClickable(!!isClickable);
      setIsHoveringDraggable(!!isDraggable);
      setIsHoveringScrollable(!!isScrollable);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setDelayedPosition(mousePosition);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringClickable(false);
      setIsHoveringDraggable(false);
      setIsHoveringScrollable(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mousePosition]);

  if (!isVisible) return null;

  // Determine cursor size and position offset
  const getSize = () => {
    if (isHoveringDraggable) return "w-16 h-8"; // Wider for three circles side by side
    if (isHoveringScrollable) return "w-10 h-10";
    if (isHoveringClickable) return "w-10 h-10";
    return "w-5 h-5";
  };

  const getOffset = () => {
    if (isHoveringDraggable) return { x: 32, y: 16 }; // w-16 = 64px, h-8 = 32px
    if (isHoveringScrollable) return { x: 20, y: 20 }; // w-10 = 40px, half = 20px
    if (isHoveringClickable) return { x: 20, y: 20 }; // w-10 = 40px, half = 20px
    return { x: 10, y: 10 }; // w-5 = 20px, half = 10px
  };

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-[width,height] duration-300 ${getSize()}`}
      style={{
        left: 0,
        top: 0,
        transform: `translate(${delayedPosition.x - getOffset().x}px, ${
          delayedPosition.y - getOffset().y
        }px)`,
        willChange: "transform",
      }}
    >
      {/* Draggable indicator with consistent light colors */}
      {isHoveringDraggable ? (
        <div className="w-full h-full flex items-center justify-between transition-all duration-300 relative">
          {/* Left triangular arrow with dynamic opacity */}
          <div
            className="w-0 h-0 animate-bounce-left"
            style={{
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: "8px solid rgba(255, 103, 32, 0.8)",
            }}
          />

          {/* Center circle */}
          <div className="w-5 h-5 bg-primary/50 rounded-full" />

          {/* Right triangular arrow with dynamic opacity */}
          <div
            className="w-0 h-0 animate-bounce-right"
            style={{
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderLeft: "8px solid rgba(255, 103, 32, 0.8)",
            }}
          />
        </div>
      ) : isHoveringScrollable ? (
        /* Scroll-up indicator for Champions cards */
        <div className="w-full h-full bg-primary/30 rounded-full flex items-center justify-center transition-all duration-300 relative">
          {/* Up arrow with animation */}
          <svg
            className="w-4 h-4 text-white/80 animate-bounce"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>

          {/* Small indicator dots */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full animate-ping" />
          <div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      ) : (
        <>
          {/* Main circle */}
          <div className="w-full h-full bg-primary/40 rounded-full transition-all duration-300" />

          {/* Ripple effect - only show when NOT hovering over clickable elements */}
          {!isHoveringClickable && (
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
          )}
        </>
      )}
    </div>
  );
};

export default CursorFollower;
