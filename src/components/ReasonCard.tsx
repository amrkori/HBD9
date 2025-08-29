import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ReasonCardProps {
  reason: string;
  currentIndex: number;
  totalReasons: number;
  isAnimating: boolean;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ 
  reason, 
  currentIndex, 
  totalReasons, 
  isAnimating 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 romantic-font">
          Reasons Why I Love You
        </h2>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <Sparkles className="text-pink-400" size={16} />
          Reason <span className="font-semibold text-pink-600">{currentIndex + 1}</span> of{' '}
          <span className="font-semibold text-pink-600">{totalReasons}</span>
          <Sparkles className="text-pink-400" size={16} />
        </p>
      </div>
      
      <div 
        className={`bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl min-h-[200px] flex items-center justify-center relative overflow-hidden transition-all duration-500 border border-pink-100 ${
          isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
        }`}
      >
        <div className="absolute top-4 right-4 animate-heartbeat">
          <Heart className="text-pink-300 fill-current" size={24} />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed font-medium romantic-font">
          {reason}
        </p>
        
        <div className="absolute bottom-4 left-4 animate-heartbeat" style={{ animationDelay: '0.5s' }}>
          <Heart className="text-pink-300 fill-current" size={20} />
        </div>
        
        {/* Floating sparkles */}
        <div className="absolute top-8 left-8 animate-sparkle">
          <Sparkles className="text-yellow-300" size={12} />
        </div>
        <div className="absolute bottom-8 right-8 animate-sparkle" style={{ animationDelay: '1s' }}>
          <Sparkles className="text-purple-300" size={10} />
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;