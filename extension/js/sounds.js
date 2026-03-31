const Sounds = (() => {
  let ctx = null;
  let enabled = true;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
  }

  function setEnabled(val) {
    enabled = val;
  }

  function play(type) {
    if (!enabled) return;
    try {
      const ac = getCtx();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);

      const now = ac.currentTime;

      switch (type) {
        case 'type':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
          break;

        case 'correct':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523, now);
          osc.frequency.setValueAtTime(659, now + 0.08);
          osc.frequency.setValueAtTime(784, now + 0.16);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;

        case 'combo':
          osc.type = 'square';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.setValueAtTime(554, now + 0.06);
          osc.frequency.setValueAtTime(659, now + 0.12);
          osc.frequency.setValueAtTime(880, now + 0.18);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
          break;

        case 'wrong':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(200, now);
          osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;

        case 'miss':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(330, now);
          osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
          break;

        case 'gameover':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.setValueAtTime(370, now + 0.2);
          osc.frequency.setValueAtTime(330, now + 0.4);
          osc.frequency.setValueAtTime(262, now + 0.6);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
          osc.start(now);
          osc.stop(now + 0.9);
          break;

        case 'highscore':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523, now);
          osc.frequency.setValueAtTime(659, now + 0.1);
          osc.frequency.setValueAtTime(784, now + 0.2);
          osc.frequency.setValueAtTime(1047, now + 0.3);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.setValueAtTime(0.15, now + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
          osc.start(now);
          osc.stop(now + 0.6);
          break;

        case 'start':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(262, now);
          osc.frequency.setValueAtTime(330, now + 0.1);
          osc.frequency.setValueAtTime(392, now + 0.2);
          osc.frequency.setValueAtTime(523, now + 0.3);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;
      }
    } catch (e) {
      // Audio not supported
    }
  }

  return { play, setEnabled, isEnabled: () => enabled };
})();
