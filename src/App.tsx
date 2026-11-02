/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { IntroScreen } from './components/IntroScreen';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { DiyaRitual } from './components/DiyaRitual';
import { MagicGiftBox } from './components/MagicGiftBox';
import { RomanticLetter } from './components/RomanticLetter';
import { CinematicEnding } from './components/CinematicEnding';
import { Footer } from './components/Footer';
import { INITIAL_DIYAS, toggleDiyaState, lightAllDiyas, DiyaItem } from './utils/diwaliState';

export default function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('autostart') === '1';
    }
    return false;
  });

  const [diyas, setDiyas] = useState<DiyaItem[]>(INITIAL_DIYAS);
  const [burstCount, setBurstCount] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Trigger golden firework particle burst
  const triggerBurst = () => {
    setBurstCount((prev) => prev + 1);
  };

  const handleToggleDiya = (id: string) => {
    setDiyas((prev) => toggleDiyaState(prev, id));
  };

  const handleLightAllDiyas = () => {
    setDiyas((prev) => lightAllDiyas(prev));
    triggerBurst();
  };

  const scrollToGift = () => {
    const el = document.getElementById('gift');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDiyas = () => {
    const el = document.getElementById('diyas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll listener for top navigation active states
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'diyas', 'gift', 'letter', 'wishes'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070205] text-[#F9F5EC] selection:bg-[#D4AF37]/30 selection:text-[#FFF5DC] font-sans overflow-x-hidden">
      {/* Golden Dust & Ember Canvas */}
      <ParticleCanvas burstTrigger={burstCount} />

      {/* Intro Overlay if not entered */}
      {!hasEntered ? (
        <IntroScreen onEnter={() => setHasEntered(true)} />
      ) : (
        <div className="relative z-20 flex flex-col min-h-screen animate-[fadeIn_0.8s_ease-out]">
          {/* Top Navigation */}
          <TopNav activeSection={activeSection} />

          <main className="flex-1">
            {/* 1. Hero Diwali Scene */}
            <HeroSection
              onScrollToGift={scrollToGift}
              onScrollToDiyas={scrollToDiyas}
            />

            {/* 2. The 5 Sacred Lights of Rutuja */}
            <DiyaRitual
              diyas={diyas}
              onToggleDiya={handleToggleDiya}
              onLightAll={handleLightAllDiyas}
            />

            {/* 3. The 3D Magic Gift Box */}
            <MagicGiftBox onTriggerBurst={triggerBurst} />

            {/* 4. A Letter For You */}
            <RomanticLetter />

            {/* 5. Cinematic Finale & Sky Lantern Wishes */}
            <CinematicEnding onTriggerBurst={triggerBurst} />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
