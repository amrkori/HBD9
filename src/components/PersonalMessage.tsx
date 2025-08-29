import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const PersonalMessage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-red-100 rounded-2xl p-6 border border-pink-200 shadow-lg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-2 left-2 animate-sparkle">
        <Sparkles className="text-yellow-400" size={16} />
      </div>
      <div className="absolute bottom-2 right-2 animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkles className="text-purple-400" size={14} />
      </div>
      
      <div className="flex items-center justify-center mb-4 relative">
        <Heart className="text-red-500 animate-heartbeat fill-current" size={32} />
        <div className="absolute -top-2 -right-2">
          <Heart className="text-pink-400 fill-current animate-pulse" size={16} />
        </div>
      </div>
      
      <p className="text-center text-gray-700 text-lg leading-relaxed romantic-font text-xl">
        I treasure every moment we spend together. You make my world brighter just by being in it. ❤️
      </p>
      
      <p className="text-center text-pink-600 mt-3 romantic-font">
        You are my sunshine, my moonlight, and all my stars ✨
      </p>
      
      <div className="flex justify-center mt-4 space-x-2">
        <Heart className="text-pink-400 animate-bounce fill-current" size={16} />
        <Heart className="text-red-400 animate-bounce fill-current" size={16} style={{ animationDelay: '0.1s' }} />
        <Heart className="text-pink-500 animate-bounce fill-current" size={16} style={{ animationDelay: '0.2s' }} />
        <Heart className="text-purple-400 animate-bounce fill-current" size={16} style={{ animationDelay: '0.3s' }} />
        <Heart className="text-red-500 animate-bounce fill-current" size={16} style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export default PersonalMessage;