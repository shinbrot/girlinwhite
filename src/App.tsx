import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { PixelFrame } from './components/PixelFrame';
import { UploadButton } from './components/UploadButton';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { FloatingEmojis } from './components/FloatingEmojis';
import { GlassmorphicCard } from './components/GlassmorphicCard';

const INITIAL_PHOTOS = [
  {
    src: "https://files.catbox.moe/c6y3rr.jpg",
    caption: "First Date ♥",
    angle: -2
  },
  {
    src: "https://files.catbox.moe/5fuj0y.jpg",
    caption: "Labubu Core",
    angle: 1
  },
  {
    src: "https://files.catbox.moe/r513kw.jpg",
    caption: "Girl in White",
    angle: -1
  },
  {
    src: "https://files.catbox.moe/jsgn2x.jpg",
    caption: "Magical Moments",
    angle: 2
  },
  {
    src: "https://files.catbox.moe/ytvk6g.jpg",
    caption: "White Blue Cake",
    angle: -1.5
  }
];

function App() {
  const [showUpload, setShowUpload] = useState(false);
  const [photos, setPhotos] = useState(INITIAL_PHOTOS);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newPhotos = [...photos];
    const draggedPhoto = newPhotos[draggedIndex];
    newPhotos.splice(draggedIndex, 1);
    newPhotos.splice(index, 0, draggedPhoto);
    
    setPhotos(newPhotos);
    setDraggedIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 p-4 md:p-8 relative overflow-hidden">
      <BackgroundDecorations />
      <FloatingEmojis />
      
      <div className="max-w-7xl mx-auto relative">
        <header className="text-center mb-8 md:mb-12">
          <GlassmorphicCard>
            <div className="inline-block relative">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 
                           text-transparent bg-clip-text relative z-10 text-shadow-glow">
                notre histoire d'amour
              </h1>
              <div className="absolute -top-3 -right-3 animate-bounce-slow">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r 
                            from-transparent via-pink-300 to-transparent" />
            </div>
            <p className="mt-2 text-pink-400 text-xs md:text-sm">Forever in bound ♥</p>
          </GlassmorphicCard>
        </header>

        <div className="flex justify-center mb-6 md:mb-10">
          <UploadButton onClick={() => setShowUpload(!showUpload)} />
        </div>

        {showUpload && (
          <div className="max-w-sm mx-auto mb-6 md:mb-10">
            <GlassmorphicCard>
              <input
                type="file"
                className="hidden"
                id="photo-upload"
                accept="image/*"
              />
              <label
                htmlFor="photo-upload"
                className="block text-center p-4 md:p-6 border-2 border-dashed border-pink-200 
                         rounded-lg cursor-pointer hover:border-pink-400 transition-colors">
                <p className="text-pink-500 text-xs md:text-sm">Click to add your special moment</p>
              </label>
            </GlassmorphicCard>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              className="transform hover:z-20"
            >
              <PixelFrame 
                src={photo.src}
                caption={photo.caption}
                angle={photo.angle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;