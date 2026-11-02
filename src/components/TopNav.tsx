import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

interface TopNavProps {
  activeSection: string;
}

export const TopNav: React.FC<TopNavProps> = ({ activeSection }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggleMusic = () => {
    const nextState = romanticAudio.toggle();
    setIsPlaying(nextState);
  };

  const navLinks = [
    { id: 'hero', label: 'The Night', href: '#hero' },
    { id: 'diyas', label: 'Diyas', href: '#diyas' },
    { id: 'gift', label: 'The Gift', href: '#gift' },
    { id: 'letter', label: 'Letter', href: '#letter' },
    { id: 'wishes', label: 'Wishes', href: '#wishes' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070205]/85 backdrop-blur-md border-b border-[#D4AF37]/15 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#hero"
          className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.25em] text-[#FFF6D5] hover:text-[#F5D77F] transition-colors whitespace-nowrap shrink-0"
        >
          RUTUJA
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-widest uppercase text-[#E5C378]/80 font-sans">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#FFF6D5] font-semibold underline underline-offset-8 decoration-[#D4AF37]'
                    : 'hover:text-[#FFF6D5]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action - Ambient Music & Atmosphere Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleMusic}
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#250918]/80 border border-[#D4AF37]/35 text-[#F5D77F] text-xs font-sans tracking-wide hover:border-[#F5D77F] hover:bg-[#380E25] transition-all whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.12)]"
            aria-label={isPlaying ? 'Mute ambient melody' : 'Play ambient melody'}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#F5D77F] animate-pulse" />
                <span className="flex items-center gap-0.5 h-3" aria-hidden="true">
                  <span className="w-0.5 h-3 bg-[#F5D77F] animate-[pulse_0.8s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-2 bg-[#F5D77F] animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" />
                  <span className="w-0.5 h-3.5 bg-[#F5D77F] animate-[pulse_0.7s_ease-in-out_infinite_0.4s]" />
                </span>
                <span className="hidden sm:inline text-xs font-medium">Ambient Music</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                <span className="text-xs font-medium">Sound: Off</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
