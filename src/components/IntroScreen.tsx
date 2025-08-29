import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-8 animate-fade-in relative">
      {/* Decorative stars */}
      <div className="absolute -top-8 left-1/4 animate-sparkle">
        <Star className="text-yellow-400" size={20} />
      </div>
      <div className="absolute -top-4 right-1/3 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Star className="text-pink-400" size={16} />
      </div>
      <div className="absolute top-8 left-1/6 animate-sparkle" style={{ animationDelay: '1s' }}>
        <Star className="text-purple-400" size={14} />
      </div>
      
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4 romantic-font animate-glow">
          M<span className="text-pink-400">ARAMY</span>
        </h1>
        <div className="absolute -top-4 -right-4 animate-bounce-slow">
          <Sparkles className="text-yellow-400" size={32} />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-3xl text-gray-700 font-light romantic-font">
        Here are the reasons why I love you...
      </h2>
      
      <div className="text-lg text-pink-600 romantic-font animate-pulse">
        ✨ Made with endless love just for you ✨
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="group bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 animate-heartbeat hover:animate-none"
        >
          <Heart className="group-hover:animate-pulse fill-current" size={24} />
          Show U MY Love
        </button>
      </div>
      
      <div className="mt-12 text-gray-500 text-sm">
        <p className="romantic-font text-base">An app designed especially for you with all my love Maramy ❤️</p>
        <p className="mt-2 text-pink-500">Every word, every detail, crafted with you in mind 💕</p>
      </div>
    </div>
  );
};

export default IntroScreen;