import React from 'react';
import { useState, useRef } from 'react';
import IntroScreen from './components/IntroScreen';
import ReasonCard from './components/ReasonCard';
import Controls from './components/Controls';
import Countdown from './components/Countdown';
import PersonalMessage from './components/PersonalMessage';
import FloatingHearts from './components/FloatingHearts';
import { reasons } from './data/reasons';
import { useCountdown } from './hooks/useCountdown';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [showReasons, setShowReasons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readReasons, setReadReasons] = useLocalStorage<number[]>('readReasons', []);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Set your monthsary date here (year, month[0-11], day)
  const monthsaryDate = new Date(2025, 9, 22); // February 14, 2025 (Valentine's Day)
  const timeLeft = useCountdown(monthsaryDate);

  const handleStart = () => {
    setShowReasons(true);
  };

  const handleReasonChange = (newIndex: number) => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      
      // Mark as read
      if (!readReasons.includes(newIndex)) {
        setReadReasons([...readReasons, newIndex]);
      }
      
      setIsAnimating(false);
    }, 250);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleReasonChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < reasons.length - 1) {
      handleReasonChange(currentIndex + 1);
    }
  };

  const handleRandom = () => {
    let newIndex;
    if (readReasons.length >= reasons.length) {
      // If all reasons have been read, pick any random one
      newIndex = Math.floor(Math.random() * reasons.length);
    } else {
      // Find an unread reason
      do {
        newIndex = Math.floor(Math.random() * reasons.length);
      } while (readReasons.includes(newIndex));
    }
    handleReasonChange(newIndex);
  };

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 relative romantic-bg">
      <FloatingHearts />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {!showReasons ? (
            <div className="min-h-screen flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100 animate-glow">
                <IntroScreen onStart={handleStart} />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-100">
                <ReasonCard
                  reason={reasons[currentIndex]}
                  currentIndex={currentIndex}
                  totalReasons={reasons.length}
                  isAnimating={isAnimating}
                />
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100">
                <Controls
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onRandom={handleRandom}
                  onToggleMusic={handleToggleMusic}
                  canGoPrevious={currentIndex > 0}
                  canGoNext={currentIndex < reasons.length - 1}
                  isMusicPlaying={isMusicPlaying}
                />
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100">
                <Countdown timeLeft={timeLeft} />
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-100">
                <PersonalMessage />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        <source src="/music/love-song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
