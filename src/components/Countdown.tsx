import React from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';
import { CountdownTime } from '../types';

interface CountdownProps {
  timeLeft: CountdownTime;
}

const Countdown: React.FC<CountdownProps> = ({ timeLeft }) => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-red-50 rounded-2xl p-6 border border-pink-200 shadow-lg">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="text-pink-600 animate-pulse" size={24} />
          <h3 className="text-xl font-semibold text-gray-800 romantic-font">
            UR Next BIRTHDAY
          </h3>
          <Heart className="text-red-500 fill-current animate-heartbeat" size={20} />
        </div>
        <Clock className="text-pink-400 mx-auto animate-pulse" size={20} />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-lg p-3 shadow-md border border-pink-100 animate-glow">
              <div className="text-2xl md:text-3xl font-bold text-pink-600 romantic-font">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium romantic-font">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;