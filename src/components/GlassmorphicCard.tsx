import React from 'react';

export function GlassmorphicCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 
                    rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
      <div className="relative px-4 py-3 bg-white/80 backdrop-blur-lg rounded-xl 
                    shadow-xl border border-pink-100/50 hover:bg-white/90 transition duration-300">
        {children}
      </div>
    </div>
  );
}