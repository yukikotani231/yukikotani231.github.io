"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ページがロード完了するまで待機
    if (document.readyState === "complete") {
      // すでにロード完了している場合
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setIsLoading(false);
        },
      });
    } else {
      // ロード完了を待機
      const handleLoad = () => {
        gsap.to(".loading-screen", {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            setIsLoading(false);
          },
        });
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="loading-screen fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 pointer-events-none"
      style={{
        opacity: 1,
      }}
    >
      {/* スピナー */}
      <div className="relative w-16 h-16">
        {/* 外側の回転リング */}
        <div
          className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-purple-500 rounded-full"
          style={{
            animation: "spin 1.5s linear infinite",
          }}
        />

        {/* 内側の回転リング（反対方向） */}
        <div
          className="absolute inset-2 border-4 border-transparent border-b-pink-500 border-l-pink-500 rounded-full"
          style={{
            animation: "spin-reverse 2s linear infinite",
          }}
        />

        {/* 中央のドット */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
