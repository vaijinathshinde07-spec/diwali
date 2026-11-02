import React, { useState } from 'react';
import { Sparkles, Heart, Send, SendHorizontal } from 'lucide-react';
import { LanternWish, PRESET_WISHES, createLanternWish } from '../utils/diwaliState';
import { romanticAudio } from '../utils/audioSynth';

interface CinematicEndingProps {
  onTriggerBurst: () => void;
}

export const CinematicEnding: React.FC<CinematicEndingProps> = ({ onTriggerBurst }) => {
  const [lanterns, setLanterns] = useState<LanternWish[]>([
    {
      id: 'initial-1',
      text: 'May Rutuja’s year ahead be filled with boundless laughter and dreams fulfilled.',
      author: 'For Rutuja',
      createdAt: Date.now() - 5000,
    },
    {
      id: 'initial-2',
      text: 'May every step you take be guarded with grace and joy.',
      author: 'For Rutuja',
      createdAt: Date.now() - 2000,
    },
  ]);

  const [customWish, setCustomWish] = useState<string>('');
  const [isLaunching, setIsLaunching] = useState<boolean>(false);

  const handleLaunchLantern = (wishText: string) => {
    if (!wishText.trim()) return;
    setIsLaunching(true);
    romanticAudio.playChime(1174.66, 0.2, 2.5);
    romanticAudio.playSparkle();
    onTriggerBurst();

    const newWish = createLanternWish(wishText, 'Rutuja');
    setLanterns((prev) => [newWish, ...prev.slice(0, 7)]);
    setCustomWish('');

    setTimeout(() => {
      setIsLaunching(false);
    }, 1200);
  };

  const handleIgniteCelebration = () => {
    romanticAudio.playSparkle();
    romanticAudio.playChime(1318.51, 0.22, 2.8);
    onTriggerBurst();
  };

  return (
    <section id="wishes" className="relative py-28 px-6 max-w-5xl mx-auto text-center">
      {/* Background Starry Night Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(120, 24, 60, 0.35) 0%, rgba(20, 4, 13, 0.6) 55%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtle Decorative Filigree */}
        <div className="flex items-center gap-3 text-xs font-cinzel tracking-[0.35em] uppercase text-[#F5D77F]/90 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Cinematic Finale</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Master Emotional Quote */}
        <div className="relative py-8 px-6 sm:px-12 rounded-3xl burgundy-glass border border-[#F5D77F]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#FFF8E7] leading-relaxed font-light">
            &ldquo;If every diya had a wish, mine would be to see you happy always.&rdquo;
          </p>

          <h3 className="mt-8 font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFDF7]">
            Happy Diwali,{' '}
            <span className="gold-gradient-text font-serif italic font-semibold">
              Rutuja
            </span>{' '}
            <span className="inline-block text-rose-500 animate-pulse">❤️</span>
          </h3>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleIgniteCelebration}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#801838] to-[#B8224C] hover:from-[#A01E47] hover:to-[#D12656] text-[#FFF9E9] text-xs font-cinzel uppercase tracking-wider font-semibold border border-[#F5D77F]/60 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
              <span>Ignite Celebration Sparklers</span>
            </button>
          </div>
        </div>

        {/* Interactive Sky Lantern Wishing Ritual */}
        <div className="mt-16 w-full max-w-2xl text-left burgundy-glass-card rounded-2xl p-6 sm:p-8 border-[#D4AF37]/25">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D4AF37]/15">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#FFF8E7] font-normal">
                Release a Wishing Sky Lantern
              </h4>
              <p className="text-xs text-[#E5C378]/70 font-sans mt-0.5">
                Cast your wish into the Diwali sky and let the universe carry it into reality.
              </p>
            </div>
            <span className="text-xl">🏮</span>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2 mb-4">
            {PRESET_WISHES.slice(0, 2).map((wish, idx) => (
              <button
                key={idx}
                onClick={() => setCustomWish(wish)}
                className="text-[11px] font-sans px-3 py-1 rounded-full bg-[#1A0612] hover:bg-[#2C0A1E] text-[#E5C378]/90 border border-[#D4AF37]/20 transition-colors text-left"
              >
                ✦ &ldquo;{wish.slice(0, 48)}...&rdquo;
              </button>
            ))}
          </div>

          {/* Input & Send Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLaunchLantern(customWish);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={customWish}
              onChange={(e) => setCustomWish(e.target.value)}
              placeholder="Type your Diwali wish here, Rutuja..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#0F040A] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FFF8E7] placeholder-[#D4AF37]/40 focus:outline-none focus:border-[#F5D77F] transition-colors"
              maxLength={140}
            />
            <button
              type="submit"
              disabled={!customWish.trim() || isLaunching}
              className="px-5 py-2.5 rounded-xl bg-[#801838] hover:bg-[#A31E46] disabled:opacity-40 text-[#FFF9EA] text-xs font-cinzel font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all border border-[#F5D77F]/50 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Launch Lantern</span>
            </button>
          </form>

          {/* Floating Lanterns List */}
          <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 space-y-2.5">
            <p className="text-[11px] font-cinzel uppercase tracking-widest text-[#D4AF37]/70">
              Lanterns Floating in Rutuja&apos;s Sky:
            </p>
            <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar pr-1">
              {lanterns.map((l) => (
                <div
                  key={l.id}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#14040E]/80 border border-[#D4AF37]/10 text-xs text-[#E5D7BE]"
                >
                  <span className="text-amber-400 mt-0.5 animate-pulse">🏮</span>
                  <div className="flex-1">
                    <p className="italic text-[#FDE68A]">&ldquo;{l.text}&rdquo;</p>
                    <span className="text-[10px] text-[#D4AF37]/50 uppercase tracking-widest">
                      {l.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
