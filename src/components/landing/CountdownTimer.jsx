import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set the target date (adjust this to your desired end date)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // 2 days from now

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const totalHours = (timeLeft.days * 24) + timeLeft.hours;
    return `${totalHours}hrs ${timeLeft.minutes}mins ${timeLeft.seconds}secs`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:py-4 backdrop-blur-xl" style={{
      background: 'var(--black)',
      borderBottom: '1px solid var(--alpha-white-10)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo/Brand Name */}
        <div className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap flex-shrink-0" style={{ color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
          Archify.io
        </div>
        
        {/* Countdown Timer */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0">
          <span className="font-semibold hidden sm:inline text-sm md:text-base" style={{ color: 'var(--white)' }}>
            Offer ends in:
          </span>
          <span className="font-extrabold text-xs sm:text-base md:text-lg tabular-nums whitespace-nowrap" style={{ color: 'var(--brand-200)' }}>
            {formatTime()}
          </span>
        </div>
        
        {/* CTA Button */}
        <a
          href="https://whop.com/archify-io/social-media-dental-blueprint/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 rounded-lg px-3 sm:px-5 py-2 sm:py-2.5 text-black font-bold text-sm sm:text-base whitespace-nowrap flex-shrink-0 transition-all hover:scale-105 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.5),0_0_30px_rgba(250,204,21,0.3)]"
        >
          <span 
            className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/40 via-transparent to-transparent"
          />
          <span className="relative z-10">Join Now</span>
        </a>
      </div>
    </div>
  );
}

