import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, Volume2, VolumeX, Heart } from 'lucide-react';

interface ControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onRandom: () => void;
  onToggleMusic: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isMusicPlaying: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  onPrevious,
  onNext,
  onRandom,
  onToggleMusic,
  canGoPrevious,
  canGoNext,
  isMusicPlaying
}) => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="p-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 shadow-md"
      >
        <ChevronLeft size={24} className="text-pink-700" />
      </button>
      
      <button
        onClick={onRandom}
        className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 animate-glow relative"
      >
        <Shuffle size={24} />
        <div className="absolute -top-1 -right-1">
          <Heart className="text-yellow-300 fill-current animate-pulse" size={12} />
        </div>
      </button>
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 shadow-md"
      >
        <ChevronRight size={24} className="text-pink-700" />
      </button>
      
      <div className="ml-4">
        <button
          onClick={onToggleMusic}
          className="p-3 rounded-full bg-gradient-to-r from-yellow-100 to-pink-100 hover:from-yellow-200 hover:to-pink-200 transition-all duration-200 hover:scale-110 shadow-md"
        >
          {isMusicPlaying ? (
            <Volume2 size={24} className="text-pink-600 animate-pulse" />
          ) : (
            <VolumeX size={24} className="text-pink-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Controls;