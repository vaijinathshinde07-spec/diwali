import React, { useState } from 'react';
import { Gift, Sparkles, Heart, RotateCcw, Star, Flame } from 'lucide-react';
import { ROMANTIC_TOKENS, RomanticToken } from '../utils/diwaliState';
import { romanticAudio } from '../utils/audioSynth';

interface MagicGiftBoxProps {
  onTriggerBurst: () => void;
}

export const MagicGiftBox: React.FC<MagicGiftBoxProps> = ({ onTriggerBurst }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<RomanticToken | null>(null);

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);
      romanticAudio.playChime(1046.5, 0.2, 2.5);
      romanticAudio.playSparkle();
      onTriggerBurst();
    }
  };

  const handleCloseGift = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setSelectedToken(null);
    romanticAudio.playChime(523.25, 0.1, 0.8);
  };

  return (
    <section id="gift" className="relative py-24 px-6 max-w-5xl mx-auto text-center">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 text-xs font-cinzel tracking-[0.3em] uppercase text-[#F5D77F]/90 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Surprise Unboxing</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8E7] tracking-tight">
          The Magic Gift for{' '}
          <span className="gold-gradient-text font-serif italic font-semibold">
            Rutuja
          </span>
        </h2>

        <p className="mt-4 font-sans text-sm sm:text-base text-[#D4AF37]/80 font-light max-w-lg mx-auto">
          Wrapped with love, bound by champagne gold ribbon, and holding a secret
          treasured message crafted solely for you.
        </p>
      </div>

      {/* Interactive 3D Gift Box Container */}
      <div className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
        {/* Radiant Ambient Light Beam behind box */}
        <div
          className={`absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-t from-[#D4AF37]/30 via-[#B8224C]/25 to-transparent blur-3xl transition-all duration-1000 pointer-events-none ${
            isOpen ? 'scale-125 opacity-90' : 'scale-90 opacity-40'
          }`}
          aria-hidden="true"
        />

        {!isOpen ? (
          /* Unopened 3D Gift Box */
          <button
            onClick={handleOpenGift}
            className="group relative cursor-pointer focus:outline-none transition-transform duration-500 hover:scale-105 active:scale-95"
            aria-label="Click to open Rutuja's Diwali Gift Box"
          >
            {/* The 3D Gift Box Visual */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Box Base (Deep Velvet Burgundy) */}
              <div className="absolute inset-x-4 bottom-2 top-14 rounded-2xl bg-gradient-to-br from-[#681128] via-[#480A1A] to-[#24030B] border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] overflow-hidden">
                {/* Vertical Gold Satin Ribbon on Base */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-[#B8860B] via-[#F5D77F] to-[#996515] shadow-[0_0_12px_rgba(245,215,127,0.4)]" />
                {/* Horizontal Gold Satin Ribbon on Base */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 bg-gradient-to-b from-[#B8860B] via-[#F5D77F] to-[#996515] shadow-[0_0_12px_rgba(245,215,127,0.4)]" />
              </div>

              {/* Box Lid (Overhangs slightly) */}
              <div className="absolute inset-x-0 top-6 h-18 rounded-2xl bg-gradient-to-b from-[#8C1B3B] via-[#611025] to-[#400716] border border-[#F5D77F]/60 shadow-[0_12px_30px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                {/* Vertical Ribbon on Lid */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-[#B8860B] via-[#F5D77F] to-[#996515]" />
              </div>

              {/* Realistic Gold Satin Bow on top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 flex items-center justify-center pointer-events-none">
                {/* Left Bow Loop */}
                <div className="w-10 h-8 rounded-[60%_30%_60%_30%] bg-gradient-to-tr from-[#996515] via-[#F5D77F] to-[#FFF6D5] -rotate-45 shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-[#FFF6D5]/40" />
                {/* Center Knot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#784F0E] shadow-[0_2px_8px_rgba(0,0,0,0.6)] border border-[#FFF6D5]" />
                {/* Right Bow Loop */}
                <div className="w-10 h-8 rounded-[30%_60%_30%_60%] bg-gradient-to-tl from-[#996515] via-[#F5D77F] to-[#FFF6D5] rotate-45 shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-[#FFF6D5]/40" />
              </div>

              {/* Shimmer sweep animation over the box */}
              <div className="absolute inset-x-4 bottom-2 top-6 rounded-2xl pointer-events-none animate-shimmer opacity-40" />
            </div>

            {/* Glowing CTA Prompt */}
            <div className="mt-4 flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#801838]/90 text-[#FFF9E8] font-cinzel text-xs font-semibold uppercase tracking-widest border border-[#F5D77F] shadow-[0_0_20px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform">
                <Gift className="w-3.5 h-3.5 text-[#F5D77F] animate-bounce" />
                <span>Tap to Open Your Surprise</span>
              </span>
              <span className="mt-2 text-xs text-[#D4AF37]/75 font-sans">
                ✦ Prepared with infinite love ✦
              </span>
            </div>
          </button>
        ) : (
          /* Opened Gift Box & Secret Romantic Reveal */
          <div className="relative z-20 w-full max-w-2xl text-center burgundy-glass-card rounded-3xl p-8 sm:p-12 border-[#F5D77F]/60 shadow-[0_0_80px_rgba(212,175,55,0.3)] animate-[scaleIn_0.6s_ease-out]">
            {/* Top Ribbon & Re-wrap action */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-[#F5D77F]">
                <Sparkles className="w-4 h-4 text-[#F5D77F]" />
                <span>The Secret Note Unveiled</span>
              </div>
              <button
                onClick={handleCloseGift}
                className="flex items-center gap-1.5 text-xs text-[#E5C378]/80 hover:text-[#FFF] font-sans transition-colors"
                title="Wrap gift again"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-wrap Gift</span>
              </button>
            </div>

            {/* Radiant Heart Icon */}
            <div className="my-6 inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-tr from-[#801838] to-[#B8224C] border border-[#F5D77F] shadow-[0_0_30px_rgba(245,215,127,0.4)]">
              <Heart className="w-8 h-8 text-[#FFFDF8] fill-rose-500 animate-pulse" />
            </div>

            {/* Secret Message Revealed */}
            <div className="max-w-xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FFFDF9]">
                To the light of my life,{' '}
                <span className="gold-gradient-text font-serif italic">
                  Rutuja
                </span>
              </h3>

              <p className="font-serif italic text-base sm:text-lg text-[#FDE68A] leading-relaxed">
                &ldquo;You are the light that makes every festival brighter, Rutuja.
                In a world full of stars, your smile shines the brightest. Happy
                Diwali to the most magical person.&rdquo;
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#E5D7BE]/80 leading-relaxed font-light">
                This Diwali isn’t just about firecrackers and lamps—it’s a celebration
                of your presence, your sweet laughter, and the kindness you bring to
                everyone around you.
              </p>
            </div>

            {/* 3 Interactive Romantic Keepsake Tokens */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
              <p className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#D4AF37]/90 mb-4">
                ✦ 3 Keepsake Charms for Rutuja ✦
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ROMANTIC_TOKENS.map((token) => {
                  const isSelected = selectedToken?.id === token.id;
                  return (
                    <button
                      key={token.id}
                      onClick={() => {
                        setSelectedToken(isSelected ? null : token);
                        romanticAudio.playChime(880, 0.12, 1.0);
                      }}
                      className={`p-3.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-[#400B1E] border border-[#F5D77F] shadow-[0_0_20px_rgba(245,215,127,0.25)]'
                          : 'bg-[#180611]/80 border border-[#D4AF37]/20 hover:border-[#F5D77F]/50 hover:bg-[#250918]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {token.id === 'starlight' && (
                          <Star className="w-3.5 h-3.5 text-[#F5D77F]" />
                        )}
                        {token.id === 'promise' && (
                          <Heart className="w-3.5 h-3.5 text-[#F5D77F]" />
                        )}
                        {token.id === 'magic' && (
                          <Flame className="w-3.5 h-3.5 text-[#F5D77F]" />
                        )}
                        <span className="text-xs font-serif font-medium text-[#FFF]">
                          {token.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#D4AF37]/75 font-sans line-clamp-1">
                        {token.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Token Detail Popup */}
              {selectedToken && (
                <div className="mt-4 p-4 rounded-xl bg-[#280816]/90 border border-[#F5D77F]/40 text-left animate-[fadeIn_0.3s_ease]">
                  <p className="text-xs font-cinzel font-semibold text-[#F5D77F] uppercase tracking-wider">
                    {selectedToken.title} · {selectedToken.subtitle}
                  </p>
                  <p className="mt-1 font-serif text-sm text-[#FFF7DF] italic leading-relaxed">
                    &ldquo;{selectedToken.detail}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
