import React, { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

export default function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Car className="w-20 h-20 text-purple-500 animate-float mx-auto" />
          <div className="absolute inset-0 bg-purple-500 opacity-20 animate-pulse rounded-full" />
        </div>
        <h1 className="text-5xl font-bold text-white mt-6 animate-glow">
          MYTHATIC <span className="text-purple-500">ROLEPLAY</span>
        </h1>
        <p className="text-gray-400 mt-2 animate-pulse-slow">Sri Lanka's Premier MTA:SA Experience</p>
        <div className="mt-8 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-500 mt-2 text-sm">{progress}%</p>
      </div>
    </div>
  );
}