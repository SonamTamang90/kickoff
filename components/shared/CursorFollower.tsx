"use client";

import { useState, useEffect, useRef } from "react";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const animationRef = useRef<number>();

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
      const isClickable =
        target.closest(
          'button, a, [role="button"], [onClick], .cursor-pointer'
        ) ||
        target.matches(
          'button, a, [role="button"], [onClick], .cursor-pointer'
        ) ||
        target.closest("[data-clickable]") ||
        target.matches("[data-clickable]");

      setIsHoveringClickable(!!isClickable);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setDelayedPosition(mousePosition);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringClickable(false);
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

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-[width,height] duration-300 ${
        isHoveringClickable ? "w-10 h-10" : "w-5 h-5"
      }`}
      style={{
        left: 0,
        top: 0,
        transform: `translate(${
          delayedPosition.x - (isHoveringClickable ? 16 : 10)
        }px, ${delayedPosition.y - (isHoveringClickable ? 16 : 10)}px)`,
        willChange: "transform",
      }}
    >
      {/* Main circle */}
      <div className="w-full h-full bg-primary/40 rounded-full transition-all duration-300" />

      {/* Ripple effect - only show when NOT hovering over clickable elements */}
      {!isHoveringClickable && (
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" />
      )}
    </div>
  );
};

export default CursorFollower;
