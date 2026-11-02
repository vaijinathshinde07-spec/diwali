import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, ChevronRight } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

interface IntroScreenProps {
  onEnter: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step 0: Initial golden glow
    const t1 = setTimeout(() => setStep(1), 800);
    // Step 1: "Tonight, I have something special for you..."
    const t2 = setTimeout(() => setStep(2), 2600);
    // Step 2: "Something made just for you, Rutuja ❤️" and button reveal
    const t3 = setTimeout(() => setStep(3), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleEnterClick = () => {
    // Start romantic chime and ambient audio
    romanticAudio.playChime(659.25, 0.15, 2.0);
    romanticAudio.start();
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-[#070205] px-6 text-center text-[#F9F5EC] overflow-hidden">
      {/* Deep Burgundy & Midnight Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(120, 24, 60, 0.45) 0%, rgba(35, 8, 20, 0.6) 45%, #070205 85%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Golden Filigree Accent Top */}
      <div
        className={`transition-all duration-1000 ease-out transform ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        } mb-8 flex items-center justify-center gap-3`}
      >
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
        <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#D4AF37]/90 font-medium">
          Diwali Special Celebration
        </span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
      </div>

      {/* Main Cinematic Text Container */}
      <div className="relative z-20 max-w-2xl min-h-[160px] flex flex-col items-center justify-center">
        {/* Line 1: "Tonight, I have something special for you..." */}
        <p
          className={`font-serif text-2xl sm:text-3xl md:text-4xl text-[#F5D77F]/95 font-light tracking-wide transition-all duration-1000 ${
            step >= 1
              ? 'opacity-100 translate-y-0 filter blur-0'
              : 'opacity-0 translate-y-6 filter blur-sm'
          }`}
        >
          &ldquo;Tonight, I have something special for you...&rdquo;
        </p>

        {/* Line 2: "Something made just for you, Rutuja ❤️" */}
        <div
          className={`mt-6 transition-all duration-1000 delay-100 ${
            step >= 2
              ? 'opacity-100 translate-y-0 filter blur-0'
              : 'opacity-0 translate-y-6 filter blur-sm'
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFF6D5]">
            Something made just for you,{' '}
            <span className="gold-gradient-text font-serif italic font-semibold">
              Rutuja
            </span>{' '}
            <span className="inline-block text-rose-500 animate-pulse">❤️</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#D4AF37]/75 font-sans tracking-widest uppercase">
            A Night Full of Magic · Diwali 2026
          </p>
        </div>
      </div>

      {/* ENTER MY SURPRISE BUTTON */}
      <div
        className={`relative z-20 mt-12 transition-all duration-1000 ${
          step >= 3
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={handleEnterClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#801838] via-[#B8224C] to-[#69112B] text-[#FFF7DF] font-sans font-medium tracking-wide shadow-[0_0_35px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(212,175,55,0.45)] hover:border-[#F5D77F] border border-[#D4AF37]/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          aria-label="Enter My Surprise"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5D77F] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FFE58F]" />
          </span>

          <span className="font-cinzel tracking-wider text-sm sm:text-base uppercase font-semibold text-[#FFFDF7]">
            Enter My Surprise
          </span>

          <ChevronRight className="w-4 h-4 text-[#F5D77F] transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="mt-4 text-xs text-[#E5C378]/60 tracking-wider font-light">
          Tap to unveil your personalized night of lights
        </p>
      </div>

      {/* Subtle Floating Diya Motif at bottom */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
          step >= 2 ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 text-xs text-[#D4AF37]/50 font-sans tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]/70" />
          <span>Turn on sound for a cinematic experience</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]/70" />
        </div>
      </div>
    </div>
  );
};
