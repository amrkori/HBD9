import { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

export const useCountdown = (targetDate: Date): CountdownTime => {
  const [currentTargetDate, setCurrentTargetDate] = useState(targetDate);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = currentTargetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the date has passed, set it to next month
        const nextMonth = new Date(currentTargetDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setCurrentTargetDate(nextMonth);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [currentTargetDate]);

  return timeLeft;
};