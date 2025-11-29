"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let isFirstMove = true;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (followerRef.current) {
        if (isFirstMove) {
          // First move: fade in and move to mouse position
          gsap.to(followerRef.current, {
            x: e.clientX - 25,
            y: e.clientY - 25,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          isFirstMove = false;
        } else {
          // Subsequent moves: smooth follow
          gsap.to(followerRef.current, {
            x: e.clientX - 25,
            y: e.clientY - 25,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed w-12 h-12 border-2 border-purple-500/50 rounded-full pointer-events-none z-10 hidden md:block"
      style={{
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
        opacity: 0,
      }}
    />
  );
}
