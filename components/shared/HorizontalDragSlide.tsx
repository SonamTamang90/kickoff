"use client";

import { motion, PanInfo } from "framer-motion";
import { ReactNode, useRef, Children, cloneElement, ReactElement, useState, useEffect } from "react";

interface HorizontalDragSlideProps {
  children: ReactNode;
  className?: string;
}

const HorizontalDragSlide = ({ 
  children, 
  className = ""
}: HorizontalDragSlideProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  
  // Convert children to array and create extended array for smooth infinite scroll
  const childrenArray = Children.toArray(children);
  const totalChildren = childrenArray.length;
  
  // Create extended array for infinite scrolling (fewer repetitions)
  const extendedChildren = [];
  for (let i = 0; i < 5; i++) { // Reduced to 5 repetitions
    extendedChildren.push(...childrenArray);
  }

  // Calculate actual card width after component mounts
  useEffect(() => {
    const updateCardWidth = () => {
      if (constraintsRef.current) {
        const firstCard = constraintsRef.current.querySelector('.flex > div') as HTMLElement;
        if (firstCard) {
          const rect = firstCard.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(firstCard);
          const marginRight = parseFloat(computedStyle.marginRight);
          setCardWidth(rect.width + marginRight);
        }
      }
    };

    // Update on mount and resize
    const timer = setTimeout(updateCardWidth, 100);
    window.addEventListener('resize', updateCardWidth);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);


  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (cardWidth === 0) return; // Wait for cardWidth to be calculated
    
    const threshold = 50;
    
    if (Math.abs(info.velocity.x) > threshold || Math.abs(info.offset.x) > cardWidth / 3) {
      if (info.offset.x > 0) {
        // Dragged right (previous) - only allow if not at initial position
        setCurrentIndex(prev => {
          if (prev <= 0) return 0; // Don't go back if at initial position
          return prev - 1;
        });
      } else {
        // Dragged left (next)  
        setCurrentIndex(prev => {
          const newIndex = prev + 1;
          // Reset to beginning if going too far forward
          if (newIndex > extendedChildren.length - totalChildren) return 0;
          return newIndex;
        });
      }
    }
  };

  // Calculate position based on current index - start at beginning to show first 3 cards
  const currentOffset = -(currentIndex * cardWidth);

  return (
    <div 
      ref={constraintsRef}
      className={`overflow-hidden w-full ${className}`}
    >
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ left: -cardWidth * extendedChildren.length, right: 0 }}
        whileDrag={{ cursor: "grabbing" }}
        className="flex cursor-grab"
        animate={{ x: currentOffset }}
        onDragEnd={handleDragEnd}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        onDragStart={(e) => {
          e.preventDefault();
        }}
      >
        {extendedChildren.map((child, index) => 
          cloneElement(child as ReactElement, { 
            key: `infinite-${index}`,
          })
        )}
      </motion.div>
    </div>
  );
};

export default HorizontalDragSlide;