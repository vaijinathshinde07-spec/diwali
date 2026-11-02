/**
 * Web Audio API romantic ambient soundscape generator.
 * Zero external audio files required, runs reliably in all modern browsers.
 */

class RomanticSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      this.isPlaying = true;

      // Warm romantic drone chords (D-Major pentatonic: D3, F#3, A3, C#4, E4)
      const droneFreqs = [146.83, 220.00, 277.18, 329.63];
      droneFreqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

        // Gentle volume breath
        gain.gain.setValueAtTime(0.02 + idx * 0.01, this.ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start();
      });

      // Play soft sparkling chime arpeggios periodically
      const melodyNotes = [587.33, 659.25, 739.99, 880.00, 987.77, 1174.66, 1318.51];
      let noteIndex = 0;

      this.intervalId = window.setInterval(() => {
        if (!this.isPlaying || !this.ctx) return;
        const note = melodyNotes[noteIndex % melodyNotes.length];
        this.playChime(note, 0.08, 1.8);
        noteIndex = (noteIndex + 1 + Math.floor(Math.random() * 2)) % melodyNotes.length;
      }, 2400);

    } catch (e) {
      console.warn('AudioContext not started:', e);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.4);
      setTimeout(() => {
        if (!this.isPlaying && this.ctx) {
          this.ctx.close();
          this.ctx = null;
          this.masterGain = null;
        }
      }, 500);
    }
  }

  /**
   * Play a delicate golden chime when user lights a diya or opens the gift.
   */
  public playChime(freq = 880, volume = 0.12, duration = 1.2) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  /**
   * Sparkler / Firework sound effect
   */
  public playSparkle() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const freqs = [1046.50, 1318.51, 1567.98, 2093.00];
      freqs.forEach((f, i) => {
        setTimeout(() => {
          this.playChime(f, 0.06, 0.8);
        }, i * 90);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  }
}

export const romanticAudio = new RomanticSoundEngine();
