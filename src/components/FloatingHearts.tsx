import React from 'react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  return (
    <div className="absolute -top-2 left-0">
      {[...Array(3)].map((_, i) => (
        <Heart
          key={i}
          className="absolute w-4 h-4 text-pink-400 animate-float-heart"
          style={{
            left: `${i * 10}px`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}