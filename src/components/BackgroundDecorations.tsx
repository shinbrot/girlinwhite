import React from 'react';
import { Heart, Stars, Sparkles, Cloud, Music, Star } from 'lucide-react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_46%,pink_47%,pink_53%,transparent_54%)] bg-[length:20px_20px] opacity-5" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-100/20 via-transparent to-transparent animate-pulse-slow" />
      
      {/* Floating pixel hearts */}
      {[...Array(12)].map((_, i) => (
        <Heart
          key={`heart-${i}`}
          className="absolute text-pink-300/40 animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      
      {/* Sparkle decorations */}
      {[...Array(15)].map((_, i) => (
        <Sparkles
          key={`sparkle-${i}`}
          className="absolute text-pink-200/50 animate-pulse-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 15 + 8}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Floating clouds */}
      {[...Array(6)].map((_, i) => (
        <Cloud
          key={`cloud-${i}`}
          className="absolute text-pink-100/30 animate-float-reverse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 20}px`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
      
      {/* Musical notes */}
      {[...Array(8)].map((_, i) => (
        <Music
          key={`music-${i}`}
          className="absolute text-pink-200/30 animate-bounce-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 12 + 8}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Star clusters */}
      {[...Array(20)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className="absolute text-pink-100/40 animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-[10%] w-40 h-40 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-[15%] w-48 h-48 bg-pink-100/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-[60%] left-[60%] w-32 h-32 bg-pink-300/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-[20%] right-[30%] w-36 h-36 bg-pink-100/15 rounded-full blur-3xl animate-float-reverse" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full 
                     bg-[radial-gradient(circle,transparent_60%,pink_61%,pink_62%,transparent_63%)] 
                     bg-[length:40px_40px] opacity-5" />
      </div>
    </div>
  );
}