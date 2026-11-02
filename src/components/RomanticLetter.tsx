import React, { useState } from 'react';
import { Sparkles, Heart, Copy, Check, Feather } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

export const RomanticLetter: React.FC = () => {
  const [isUnsealed, setIsUnsealed] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const letterText = `Dear Rutuja,

This Diwali, I wish that your life shines with happiness, your dreams turn into beautiful realities, and your smile never fades. You make ordinary moments feel special. May your world always be filled with love, warmth and endless reasons to smile.`;

  const handleSealClick = () => {
    setIsUnsealed(!isUnsealed);
    romanticAudio.playChime(784, 0.15, 1.2);
    romanticAudio.playSparkle();
  };

  const handleCopyWish = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    romanticAudio.playChime(1046.5, 0.1, 0.8);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="letter" className="relative py-24 px-6 max-w-4xl mx-auto">
      {/* Section Kicker */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 text-xs font-cinzel tracking-[0.3em] uppercase text-[#F5D77F]/90 mb-3">
          <Feather className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>A Personal Keepsake</span>
          <Feather className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8E7] tracking-tight">
          A Letter For You,{' '}
          <span className="gold-gradient-text font-serif italic font-semibold">
            Rutuja
          </span>
        </h2>

        <p className="mt-3 font-sans text-sm text-[#D4AF37]/80 font-light">
          Written from the heart, sealed with gold, and sent across the festive lights.
        </p>
      </div>

      {/* Luxury Parchment / Dark Vellum Card */}
      <div className="relative rounded-3xl p-8 sm:p-14 burgundy-glass-card border border-[#F5D77F]/30 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(212,175,55,0.12)] overflow-hidden">
        {/* Subtle Watermark Monogram */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 font-serif italic text-[160px] sm:text-[220px] text-[#D4AF37]/[0.03] select-none font-bold"
          aria-hidden="true"
        >
          R
        </div>

        {/* Top Decorative Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            {/* Gold Wax Seal with R Monogram */}
            <button
              onClick={handleSealClick}
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#EAB308] via-[#B45309] to-[#78350F] border-2 border-[#FEF08A] shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_15px_rgba(234,179,8,0.4)] hover:scale-105 active:scale-95 transition-transform"
              title="Click to toggle seal"
              aria-label="Gold Wax Seal with Rutuja Monogram"
            >
              <span className="font-serif italic text-xl font-bold text-[#FFFBEB] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                R
              </span>
              <span className="absolute -inset-1 rounded-full border border-[#FDE68A]/40 animate-ping opacity-25 pointer-events-none" />
            </button>

            <div>
              <p className="font-cinzel text-xs uppercase tracking-widest text-[#F5D77F]">
                Royal Royalties Edition
              </p>
              <p className="text-[11px] text-[#D4AF37]/60 font-sans">
                Diwali Night · Exclusively Rutuja
              </p>
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyWish}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F0713]/80 hover:bg-[#340A1E] text-xs font-sans text-[#E5C378] hover:text-[#FFF] border border-[#D4AF37]/25 transition-all"
            aria-label="Copy letter text"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied to Heart</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#F5D77F]" />
                <span>Copy Wish</span>
              </>
            )}
          </button>
        </div>

        {/* The Letter Body */}
        <div className="mt-8 space-y-6">
          <p className="font-serif text-2xl sm:text-3xl text-[#FFF8E7] font-normal tracking-wide">
            Dear Rutuja,
          </p>

          <p className="font-serif text-lg sm:text-2xl text-[#FCE7A1] leading-relaxed font-light tracking-wide indent-6">
            This Diwali, I wish that your life shines with happiness, your
            dreams turn into beautiful realities, and your smile never fades.
          </p>

          <p className="font-serif text-lg sm:text-2xl text-[#FCE7A1] leading-relaxed font-light tracking-wide indent-6">
            You make ordinary moments feel special. May your world always be
            filled with love, warmth and endless reasons to smile.
          </p>
        </div>

        {/* Elegant Letter Sign-off */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#D4AF37]/80">
              With Endless Warmth & Admiration,
            </p>
            <p className="mt-2 font-script text-3xl sm:text-4xl text-[#F5D77F] tracking-wide">
              Yours in celebration ❤️
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#E5C378]/70 font-sans">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Always cheering for your happiness</span>
          </div>
        </div>
      </div>
    </section>
  );
};
