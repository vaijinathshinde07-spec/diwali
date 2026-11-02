import React from 'react';
import { Sparkles, Flame, Gift, ArrowDown } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

interface HeroSectionProps {
  onScrollToGift: () => void;
  onScrollToDiyas: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToGift,
  onScrollToDiyas,
}) => {
  const handleDiyaClick = () => {
    romanticAudio.playChime(880, 0.18, 1.5);
    romanticAudio.playSparkle();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden"
    >
      {/* Background Cinematic Atmosphere Image with Luxury Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/src/assets/images/diwali_luxury_backdrop_1793563982815.jpg"
          alt="Luxury Diwali Festive Scene"
          className="h-full w-full object-cover object-center opacity-30 scale-105 filter blur-[2px]"
          referrerPolicy="no-referrer"
        />
        {/* Radial Darkening Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(35, 7, 22, 0.5) 0%, rgba(12, 3, 9, 0.85) 60%, #070205 100%)',
          }}
        />
      </div>

      {/* Rotating Sacred Golden Mandala Backdrop */}
      <div className="absolute z-0 pointer-events-none opacity-20 flex items-center justify-center">
        <img
          src="/src/assets/images/rutuja_golden_mandala_1793563982496.jpg"
          alt="Golden Filigree Mandala"
          className="w-[580px] h-[580px] sm:w-[720px] sm:h-[720px] max-w-none object-contain animate-[spin_120s_linear_infinite]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle kicker without pills */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-cinzel tracking-[0.35em] uppercase text-[#F5D77F]/90 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>A Night Full of Magic</span>
          <span aria-hidden="true">·</span>
          <span>Diwali 2026</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Master Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FFF8E7] leading-[1.1] max-w-3xl">
          Happy Diwali,{' '}
          <span className="gold-gradient-text font-serif italic font-semibold drop-shadow-[0_4px_30px_rgba(212,175,55,0.4)]">
            Rutuja
          </span>
        </h1>

        {/* Poetic Subheading */}
        <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-[#E5D7BE] font-light max-w-2xl leading-relaxed tracking-wide text-balance">
          May the divine golden glow of tonight’s lamps illuminate your pathway,
          awaken your boldest dreams, and fill your heart with timeless happiness.
        </p>

        {/* Central Realistic Interactive Diya */}
        <div className="my-10 relative flex flex-col items-center">
          {/* Flame Halo Glow */}
          <div
            className="absolute -top-10 w-36 h-36 rounded-full bg-gradient-to-t from-[#FF7A00]/40 via-[#FFB703]/25 to-transparent blur-2xl animate-pulse-glow pointer-events-none"
            aria-hidden="true"
          />

          {/* Clickable Realistic Diya Element */}
          <button
            onClick={handleDiyaClick}
            className="group relative flex flex-col items-center focus:outline-none"
            aria-label="Interactive Sacred Diya - Click to ignite blessings"
          >
            {/* The Flame */}
            <div className="relative w-8 h-12 flex items-center justify-center animate-flame">
              {/* Outer Golden Aura */}
              <div className="absolute w-7 h-11 rounded-[50%_50%_35%_35%/60%_60%_40%_40%] bg-gradient-to-t from-[#FF3D00] via-[#FFAE00] to-[#FFFBEB] opacity-90 shadow-[0_0_20px_#FFAE00]" />
              {/* Inner White Hot Core */}
              <div className="absolute bottom-1 w-3.5 h-7 rounded-[50%_50%_35%_35%/60%_60%_40%_40%] bg-white/95 blur-[0.5px]" />
              {/* Wick Base */}
              <div className="absolute -bottom-1 w-1 h-2 bg-[#422006] rounded-full" />
            </div>

            {/* Brass / Terracotta Diya Bowl with Gold Carving */}
            <div className="relative -mt-1 w-24 h-7 rounded-b-[40px] rounded-t-[8px] bg-gradient-to-b from-[#B45309] via-[#92400E] to-[#451A03] border-t border-[#FBBF24]/60 shadow-[0_8px_20px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(251,191,36,0.4)] flex items-center justify-center">
              {/* Delicate Gold Rim Pattern */}
              <div className="absolute inset-x-2 top-0 h-[1.5px] bg-[#FDE68A]/70" />
              <div className="w-16 h-2 rounded-full bg-[#78350F]/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" />
            </div>

            {/* Reflection Pool Under Diya */}
            <div className="w-32 h-3 mt-1 rounded-[100%] bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent blur-[2px]" />

            <span className="mt-3 text-[11px] font-sans tracking-widest uppercase text-[#F5D77F]/75 group-hover:text-[#FFF] transition-colors">
              ✦ Tap to ignite your blessing ✦
            </span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={onScrollToGift}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#931B41] to-[#671029] text-[#FFF9EA] font-cinzel text-xs uppercase tracking-widest font-semibold border border-[#F5D77F]/50 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Gift className="w-4 h-4 text-[#F5D77F]" />
            <span>Unwrap The Magic Gift</span>
          </button>

          <button
            onClick={onScrollToDiyas}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#180611]/80 text-[#E5D7BE] hover:text-[#FFF] font-cinzel text-xs uppercase tracking-widest font-medium border border-[#D4AF37]/25 hover:border-[#F5D77F]/60 hover:bg-[#250918] transition-all"
          >
            <Flame className="w-4 h-4 text-[#F5D77F]" />
            <span>The 5 Sacred Lights</span>
          </button>
        </div>

        {/* Ambient Indicator */}
        <div className="mt-14 flex items-center gap-6 text-xs text-[#E5C378]/70 font-sans">
          <span>Handcrafted with Love</span>
          <span aria-hidden="true">·</span>
          <span>Exclusive for Rutuja</span>
          <span aria-hidden="true">·</span>
          <span>A Night of Eternal Lights</span>
        </div>
      </div>
    </section>
  );
};
