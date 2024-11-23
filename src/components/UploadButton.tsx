import React from 'react';
import { Camera } from 'lucide-react';

export function UploadButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative group bg-gradient-to-r from-pink-400 to-pink-500 
                 text-white px-5 py-2 rounded-full shadow-lg 
                 hover:shadow-pink-200/50 hover:shadow-xl
                 transform transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 
                    rounded-full transition-opacity duration-300" />
      <div className="flex items-center gap-2">
        <Camera className="w-4 h-4" />
        <span className="text-sm font-medium">Add Memory</span>
      </div>
    </button>
  );
}