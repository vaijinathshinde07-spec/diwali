import React from 'react';
import { Flame, Sparkles, Check, Heart } from 'lucide-react';
import { DiyaItem, calculateLitPercentage, areAllDiyasLit } from '../utils/diwaliState';
import { romanticAudio } from '../utils/audioSynth';

interface DiyaRitualProps {
  diyas: DiyaItem[];
  onToggleDiya: (id: string) => void;
  onLightAll: () => void;
}

export const DiyaRitual: React.FC<DiyaRitualProps> = ({
  diyas,
  onToggleDiya,
  onLightAll,
}) => {
  const litPercentage = calculateLitPercentage(diyas);
  const allLit = areAllDiyasLit(diyas);

  const handleDiyaClick = (id: string, isCurrentlyLit: boolean) => {
    if (!isCurrentlyLit) {
      romanticAudio.playChime(784, 0.16, 1.2);
      romanticAudio.playSparkle();
    } else {
      romanticAudio.playChime(440, 0.08, 0.6);
    }
    onToggleDiya(id);
  };

  const handleLightAllClick = () => {
    romanticAudio.playSparkle();
    onLightAll();
  };

  return (
    <section id="diyas" className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 text-xs font-cinzel tracking-[0.3em] uppercase text-[#F5D77F]/90 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Interactive Diwali Ritual</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FFF8E7] tracking-tight">
          The 5 Sacred Lights of{' '}
          <span className="gold-gradient-text font-serif italic font-semibold">
            Rutuja
          </span>
        </h2>

        <p className="mt-4 font-sans text-sm sm:text-base text-[#D4AF37]/80 leading-relaxed font-light">
          Each diya represents a heartfelt blessing woven for you tonight. Click to
          light each sacred flame and awaken its blessing.
        </p>

        {/* Progress bar and Light All action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 bg-[#1A0813] border border-[#D4AF37]/25 px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="text-xs font-cinzel uppercase tracking-wider text-[#E5D7BE]">
              Sacred Flames Lit:
            </span>
            <span className="text-sm font-semibold font-mono tabular-nums text-[#F5D77F]">
              {diyas.filter((d) => d.isLit).length} / {diyas.length}
            </span>
            <div className="w-20 h-2 bg-[#0B0307] rounded-full overflow-hidden border border-[#D4AF37]/20">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] transition-all duration-500 rounded-full"
                style={{ width: `${litPercentage}%` }}
              />
            </div>
          </div>

          {!allLit && (
            <button
              onClick={handleLightAllClick}
              className="px-5 py-2.5 rounded-full bg-[#801838]/80 hover:bg-[#A31E46] text-[#FFF7E3] text-xs font-cinzel uppercase tracking-wider font-semibold border border-[#F5D77F]/40 transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              Light All Lamps at Once
            </button>
          )}
        </div>
      </div>

      {/* Diyas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {diyas.map((diya, index) => {
          return (
            <div
              key={diya.id}
              onClick={() => handleDiyaClick(diya.id, diya.isLit)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleDiyaClick(diya.id, diya.isLit);
                }
              }}
              className={`group relative cursor-pointer text-left rounded-2xl p-6 sm:p-7 transition-all duration-500 overflow-hidden ${
                diya.isLit
                  ? 'burgundy-glass-card shadow-[0_10px_35px_rgba(212,175,55,0.15)] border-[#F5D77F]/40'
                  : 'bg-[#12050D]/80 border border-[#D4AF37]/15 hover:border-[#D4AF37]/35'
              }`}
            >
              {/* Flame Radial Aura when Lit */}
              {diya.isLit && (
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-[#FFAA00]/25 via-[#FF6600]/15 to-transparent blur-2xl"
                  aria-hidden="true"
                />
              )}

              {/* Top Row: Index and Diya Flame Visual */}
              <div className="flex items-start justify-between">
                <span className="font-cinzel text-xs font-bold tracking-widest text-[#D4AF37]/60">
                  0{index + 1}
                </span>

                {/* Animated Realistic Diya Flame Widget */}
                <div className="relative flex flex-col items-center">
                  {diya.isLit ? (
                    <div className="relative w-6 h-9 flex items-center justify-center animate-flame">
                      <div className="absolute w-5 h-8 rounded-[50%_50%_35%_35%/60%_60%_40%_40%] bg-gradient-to-t from-[#FF3D00] via-[#FFAE00] to-[#FFFBEB] opacity-95 shadow-[0_0_16px_#FFAE00]" />
                      <div className="absolute bottom-0.5 w-2.5 h-5 rounded-[50%_50%_35%_35%/60%_60%_40%_40%] bg-white blur-[0.4px]" />
                    </div>
                  ) : (
                    <div className="w-5 h-8 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                      <div className="w-1 h-3 bg-[#522914] rounded-t-sm" />
                    </div>
                  )}

                  {/* Brass Diya Bowl Miniature */}
                  <div
                    className={`-mt-0.5 w-14 h-4 rounded-b-[20px] rounded-t-[4px] border-t transition-all ${
                      diya.isLit
                        ? 'bg-gradient-to-b from-[#B45309] to-[#451A03] border-[#FDE68A]/70 shadow-[0_4px_12px_rgba(0,0,0,0.6)]'
                        : 'bg-[#291306] border-[#78350F]'
                    }`}
                  />
                </div>
              </div>

              {/* Title & Meaning */}
              <div className="mt-6">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FFF8E7] group-hover:text-[#FFF] transition-colors">
                  {diya.name}
                </h3>
                <p className="mt-1 text-xs text-[#E5C378]/70 font-sans tracking-wide">
                  {diya.meaning}
                </p>
              </div>

              {/* Blessing Content */}
              <div className="mt-5 pt-4 border-t border-[#D4AF37]/15">
                <p
                  className={`font-serif italic text-sm leading-relaxed transition-colors ${
                    diya.isLit ? 'text-[#FDE68A]' : 'text-[#8A7A64]'
                  }`}
                >
                  &ldquo;{diya.blessing}&rdquo;
                </p>
              </div>

              {/* Status Hint */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-sans">
                <span
                  className={`flex items-center gap-1.5 uppercase tracking-wider font-semibold ${
                    diya.isLit ? 'text-[#F59E0B]' : 'text-[#857056]'
                  }`}
                >
                  {diya.isLit ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Shining Brightly</span>
                    </>
                  ) : (
                    <span>Click to Ignite</span>
                  )}
                </span>
                <span className="text-[#D4AF37]/50 text-[10px] uppercase tracking-widest">
                  Blessing for Rutuja
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Supreme Unlock Banner when all are lit */}
      {allLit && (
        <div className="mt-12 burgundy-glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto border-[#F5D77F]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#801838] border border-[#F5D77F] mb-4">
            <Heart className="w-6 h-6 text-[#FDE68A] animate-pulse" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FFFDF8]">
            All 5 Sacred Flames Are Glowing for You
          </h3>

          <p className="mt-3 text-sm sm:text-base text-[#F5D77F] font-sans max-w-xl mx-auto leading-relaxed font-light">
            Every shadow disappears when your warmth enters the room, Rutuja. May
            this festival surround your path with the finest blessings this
            universe has to offer.
          </p>
        </div>
      )}
    </section>
  );
};
