import React from 'react';

const EMOJIS = ['💖', '💝', '💕', '💓', '💗', '💞', '💘', '🌸', '✨', '🎀'];

export function FloatingEmojis() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={`emoji-${i}`}
          className="absolute animate-float-emoji backdrop-blur-sm bg-white/10 
                   rounded-full p-2 shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 10 + 15}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}>
          {EMOJIS[Math.floor(Math.random() * EMOJIS.length)]}
        </div>
      ))}
    </div>
  );
}