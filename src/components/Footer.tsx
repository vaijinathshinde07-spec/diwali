import React from 'react';
import { Heart, ChevronUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#D4AF37]/15 bg-[#050104] py-12 px-6 text-center text-xs text-[#E5C378]/60 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-cinzel text-sm font-semibold tracking-widest text-[#FFF8E7]">
            RUTUJA
          </span>
          <span aria-hidden="true">·</span>
          <span>A Night Full of Magic</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#F5D77F]/80">
          <span>Crafted with love for Rutuja</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>· Diwali 2026</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A0612] hover:bg-[#2C0A1E] text-[#E5C378] hover:text-[#FFF] border border-[#D4AF37]/20 transition-colors"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
