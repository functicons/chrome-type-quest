const BADGES = {
  // Bronze - WPM milestones (beginner)
  wpm_5:      { name: '5 WPM',       icon: '🐢', tier: 'bronze', desc: 'Reach 5 WPM',  wpm: 5 },
  wpm_8:      { name: '8 WPM',       icon: '🚶', tier: 'bronze', desc: 'Reach 8 WPM',  wpm: 8 },
  wpm_10:     { name: '10 WPM',      icon: '🏃', tier: 'bronze', desc: 'Reach 10 WPM', wpm: 10 },
  wpm_12:     { name: '12 WPM',      icon: '💨', tier: 'bronze', desc: 'Reach 12 WPM', wpm: 12 },
  wpm_15:     { name: '15 WPM',      icon: '🔥', tier: 'bronze', desc: 'Reach 15 WPM', wpm: 15 },

  // Silver - WPM milestones (intermediate)
  wpm_18:     { name: '18 WPM',      icon: '⚡', tier: 'silver', desc: 'Reach 18 WPM', wpm: 18 },
  wpm_20:     { name: '20 WPM',      icon: '⭐', tier: 'silver', desc: 'Reach 20 WPM', wpm: 20 },
  wpm_25:     { name: '25 WPM',      icon: '🌟', tier: 'silver', desc: 'Reach 25 WPM', wpm: 25 },
  wpm_30:     { name: '30 WPM',      icon: '💫', tier: 'silver', desc: 'Reach 30 WPM', wpm: 30 },
  wpm_35:     { name: '35 WPM',      icon: '🏅', tier: 'silver', desc: 'Reach 35 WPM', wpm: 35 },
  wpm_40:     { name: '40 WPM',      icon: '🎯', tier: 'silver', desc: 'Reach 40 WPM', wpm: 40 },

  // Gold - WPM milestones (advanced)
  wpm_50:     { name: '50 WPM',      icon: '👑', tier: 'gold', desc: 'Reach 50 WPM', wpm: 50 },
  wpm_60:     { name: '60 WPM',      icon: '💎', tier: 'gold', desc: 'Reach 60 WPM', wpm: 60 },
  wpm_75:     { name: '75 WPM',      icon: '🏆', tier: 'gold', desc: 'Reach 75 WPM', wpm: 75 },
  wpm_100:    { name: '100 WPM',     icon: '🚀', tier: 'gold', desc: 'Reach 100 WPM', wpm: 100 },
};

const Badges = (() => {
  function checkNewBadges(player, gameResult) {
    const earned = player.badges || {};
    const newBadges = [];
    const wpm = gameResult.wpm;

    for (const [id, badge] of Object.entries(BADGES)) {
      if (!earned[id] && wpm >= badge.wpm) {
        newBadges.push(id);
      }
    }

    return newBadges;
  }

  function getNextBadgeProgress(player, gameResult) {
    const earned = player.badges || {};
    const bestWpm = Math.max(player.bestWpm || 0, gameResult ? gameResult.wpm : 0);

    // Find the lowest unearned badge
    let next = null;
    for (const [id, badge] of Object.entries(BADGES)) {
      if (earned[id]) continue;
      if (!next || badge.wpm < BADGES[next].wpm) {
        next = id;
      }
    }

    if (!next) return null;

    return {
      id: next,
      current: bestWpm,
      target: BADGES[next].wpm,
      unit: 'WPM'
    };
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
