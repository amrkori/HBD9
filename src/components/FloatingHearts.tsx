import React, { useEffect, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

interface FloatingElement {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'star' | 'sparkle';
  color: string;
}

const FloatingHearts: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const colors = ['text-pink-400', 'text-red-400', 'text-purple-400', 'text-yellow-400', 'text-rose-400'];
  const types: ('heart' | 'star' | 'sparkle')[] = ['heart', 'heart', 'heart', 'star', 'sparkle'];

  useEffect(() => {
    const createElement = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: Date.now() + i,
          left: Math.random() * 100,
          size: Math.random() * 20 + 12,
          duration: Math.random() * 20 + 15,
          delay: i * 1.5,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setElements(newElements);
    };

    createElement();
    const interval = setInterval(createElement, 25000);

    return () => clearInterval(interval);
  }, []);

  const renderElement = (element: FloatingElement) => {
    const props = {
      size: element.size,
      className: `${element.color} fill-current`
    };

    switch (element.type) {
      case 'star':
        return <Star {...props} />;
      case 'sparkle':
        return <Sparkles {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-40"
          style={{
            left: `${element.left}%`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {renderElement(element)}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;