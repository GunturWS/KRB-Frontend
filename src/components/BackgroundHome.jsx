import React from "react";

export const BackgroundHome = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradWave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b7a51" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8fc1a9" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path d="M0 400 Q360 600 720 400 T1440 400 V900 H0 Z" fill="url(#gradWave)" opacity="0.6" />
        <path d="M0 450 Q360 650 720 450 T1440 450 V900 H0 Z" fill="url(#gradWave)" opacity="0.4" />
      </svg>
    </div>
  );
};
