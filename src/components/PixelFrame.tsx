import React, { useState } from 'react';
import { Heart, Sparkles, Share2, MessageCircle, Download } from 'lucide-react';
import { FloatingHearts } from './FloatingHearts';

export function PixelFrame({ src, caption, angle = 0 }: { 
  src: string; 
  caption: string;
  angle?: number;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1000);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(src);
    alert('Link copied to clipboard! 💝');
  };

  return (
    <div 
      className={`relative group transform hover:z-10 transition-all duration-500
                ${isZoomed ? 'scale-110' : 'hover:scale-105'}`}
      style={{ 
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'center center'
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 
                    opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <div className="relative w-72 bg-white p-2 rounded-lg shadow-xl">
        <div 
          className="relative overflow-hidden rounded-md cursor-pointer"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={src}
            alt={caption}
            className="w-full h-48 object-cover transition-all duration-700
                     [image-rendering:pixelated] hover:filter hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full 
                        group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm font-medium text-center">{caption}</p>
          </div>
        </div>
        
        <div className="mt-2 px-2 flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={handleLike}
              className="relative flex items-center gap-1 text-pink-500 hover:text-pink-600 
                       transition-colors duration-300"
            >
              <Heart
                className={`w-5 h-5 transition-transform duration-300 
                         ${isLiked ? 'fill-pink-500 scale-110' : ''}`}
              />
              {showHearts && <FloatingHearts />}
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleShare}
              className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <a 
              href={src} 
              download
              className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>

        {showComments && (
          <div className="mt-2 p-2 border-t border-pink-100">
            <form onSubmit={handleComment} className="flex gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-2 py-1 text-sm border border-pink-200 rounded-full 
                         focus:outline-none focus:border-pink-400"
              />
              <button
                type="submit"
                className="px-3 py-1 text-sm bg-pink-500 text-white rounded-full 
                         hover:bg-pink-600 transition-colors"
              >
                Send
              </button>
            </form>
            <div className="mt-2 max-h-24 overflow-y-auto">
              {comments.map((text, i) => (
                <p key={i} className="text-sm text-gray-600 py-1">
                  {text}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute -top-1 -right-1">
        <Sparkles className="w-4 h-4 text-pink-400 animate-ping-slow" />
      </div>
    </div>
  );
}