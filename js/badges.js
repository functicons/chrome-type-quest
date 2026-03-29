const BADGES = {
  // Bronze - Easy to earn
  first_steps:    { name: 'First Steps',    icon: '👣', tier: 'bronze', desc: 'Complete your first game' },
  quick_fingers:  { name: 'Quick Fingers',  icon: '✌️', tier: 'bronze', desc: 'Type 10 words in one game' },
  streak_starter: { name: 'Streak Starter', icon: '🔥', tier: 'bronze', desc: 'Get a 3-word streak' },
  speed_demon:    { name: 'Speed Demon',    icon: '💨', tier: 'bronze', desc: 'Reach 10 WPM' },
  word_collector: { name: 'Word Collector', icon: '📚', tier: 'bronze', desc: 'Type 50 total words' },

  // Silver - Moderate
  on_fire:        { name: 'On Fire',        icon: '🔥', tier: 'silver', desc: 'Get a 10-word streak' },
  sharpshooter:   { name: 'Sharpshooter',   icon: '🎯', tier: 'silver', desc: '90%+ accuracy in a game' },
  marathon:       { name: 'Marathon',        icon: '🏃', tier: 'silver', desc: 'Complete a 5-min game' },
  speed_star:     { name: 'Speed Star',     icon: '⭐', tier: 'silver', desc: 'Reach 20 WPM' },
  word_master:    { name: 'Word Master',    icon: '📖', tier: 'silver', desc: 'Type 500 total words' },
  no_miss:        { name: 'No Miss',        icon: '🛡️', tier: 'silver', desc: 'Finish a game with 0 misses' },

  // Gold - Hard
  legendary:      { name: 'Legendary',      icon: '👑', tier: 'gold', desc: 'Get a 20-word streak' },
  perfect_game:   { name: 'Perfect Game',   icon: '💎', tier: 'gold', desc: '100% accuracy in a game' },
  lightning:      { name: 'Lightning Fast',  icon: '⚡', tier: 'gold', desc: 'Reach 30 WPM' },
  word_champion:  { name: 'Word Champion',  icon: '🏆', tier: 'gold', desc: 'Type 2000 total words' },
  unstoppable:    { name: 'Unstoppable',    icon: '🚀', tier: 'gold', desc: 'Play 50 games' }
};

const Badges = (() => {
  // Check which new badges a player earned after a game
  function checkNewBadges(player, gameResult) {
    const earned = player.badges || {};
    const newBadges = [];

    const totalWords = (player.totalWordsTyped || 0) + gameResult.wordsTyped;
    const totalGames = (player.gamesPlayed || 0) + 1;

    const checks = {
      first_steps:    () => true, // completed a game
      quick_fingers:  () => gameResult.wordsTyped >= 10,
      streak_starter: () => gameResult.longestStreak >= 3,
      speed_demon:    () => gameResult.wpm >= 10,
      word_collector: () => totalWords >= 50,
      on_fire:        () => gameResult.longestStreak >= 10,
      sharpshooter:   () => gameResult.accuracy >= 90,
      marathon:       () => gameResult.duration >= 300,
      speed_star:     () => gameResult.wpm >= 20,
      word_master:    () => totalWords >= 500,
      no_miss:        () => gameResult.wordsMissed === 0,
      legendary:      () => gameResult.longestStreak >= 20,
      perfect_game:   () => gameResult.accuracy === 100,
      lightning:      () => gameResult.wpm >= 30,
      word_champion:  () => totalWords >= 2000,
      unstoppable:    () => totalGames >= 50
    };

    for (const [id, check] of Object.entries(checks)) {
      if (!earned[id] && check()) {
        newBadges.push(id);
      }
    }

    return newBadges;
  }

  // Find the next unearned badge closest to being achieved
  function getNextBadgeProgress(player, gameResult) {
    const earned = player.badges || {};
    const totalWords = (player.totalWordsTyped || 0);
    const totalGames = player.gamesPlayed || 0;
    const bestWpm = player.bestWpm || 0;

    const progressChecks = [
      { id: 'quick_fingers',  current: gameResult ? gameResult.wordsTyped : 0, target: 10, unit: 'words' },
      { id: 'streak_starter', current: gameResult ? gameResult.longestStreak : 0, target: 3, unit: 'streak' },
      { id: 'speed_demon',    current: bestWpm, target: 10, unit: 'WPM' },
      { id: 'word_collector', current: totalWords, target: 50, unit: 'words' },
      { id: 'on_fire',        current: gameResult ? gameResult.longestStreak : 0, target: 10, unit: 'streak' },
      { id: 'sharpshooter',   current: gameResult ? gameResult.accuracy : 0, target: 90, unit: '%' },
      { id: 'speed_star',     current: bestWpm, target: 20, unit: 'WPM' },
      { id: 'word_master',    current: totalWords, target: 500, unit: 'words' },
      { id: 'legendary',      current: gameResult ? gameResult.longestStreak : 0, target: 20, unit: 'streak' },
      { id: 'lightning',      current: bestWpm, target: 30, unit: 'WPM' },
      { id: 'word_champion',  current: totalWords, target: 2000, unit: 'words' },
      { id: 'unstoppable',    current: totalGames, target: 50, unit: 'games' }
    ];

    let best = null;
    let bestRatio = -1;

    for (const p of progressChecks) {
      if (earned[p.id]) continue;
      const ratio = Math.min(p.current / p.target, 0.99);
      if (ratio > bestRatio) {
        bestRatio = ratio;
        best = p;
      }
    }

    return best;
  }

  function getBadgeCount(player) {
    const earned = player.badges || {};
    return Object.keys(earned).length;
  }

  function getTotalBadges() {
    return Object.keys(BADGES).length;
  }

  function getBadgesByTier(player) {
    const earned = player.badges || {};
    const tiers = { bronze: [], silver: [], gold: [] };
    for (const [id, badge] of Object.entries(BADGES)) {
      tiers[badge.tier].push({
        id,
        ...badge,
        earned: !!earned[id],
        date: earned[id] ? earned[id].date : null
      });
    }
    return tiers;
  }

  return { checkNewBadges, getNextBadgeProgress, getBadgeCount, getTotalBadges, getBadgesByTier };
})();
