const Storage = (() => {
  const DEFAULT_DATA = {
    players: {},
    gameHistory: [],
    activePlayerId: null
  };

  // Use chrome.storage.local if available, fallback to localStorage for dev
  const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;

  async function load() {
    if (isExtension) {
      return new Promise(resolve => {
        chrome.storage.local.get('typequest', result => {
          resolve(result.typequest || { ...DEFAULT_DATA });
        });
      });
    }
    const raw = localStorage.getItem('typequest');
    return raw ? JSON.parse(raw) : { ...DEFAULT_DATA };
  }

  async function save(data) {
    if (isExtension) {
      return new Promise(resolve => {
        chrome.storage.local.set({ typequest: data }, resolve);
      });
    }
    localStorage.setItem('typequest', JSON.stringify(data));
  }

  function generateId() {
    return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  async function getPlayers() {
    const data = await load();
    // Migrate old players missing bestWpm
    let needsSave = false;
    for (const p of Object.values(data.players || {})) {
      if (p.bestWpm === undefined) {
        p.bestWpm = 0;
        p.bestDuration = null;
        needsSave = true;
      }
      if (!p.badges) {
        p.badges = {};
        needsSave = true;
      }
    }
    if (needsSave) await save(data);
    return data.players || {};
  }

  async function getActivePlayer() {
    const data = await load();
    if (!data.activePlayerId || !data.players[data.activePlayerId]) return null;
    return { id: data.activePlayerId, ...data.players[data.activePlayerId] };
  }

  async function setActivePlayer(playerId) {
    const data = await load();
    data.activePlayerId = playerId;
    await save(data);
  }

  async function createPlayer(name, color, emoji) {
    const data = await load();
    const id = generateId();
    data.players[id] = {
      name: name.trim(),
      color,
      emoji: emoji || '🚀',
      createdAt: Date.now(),
      bestWpm: 0,
      bestDuration: null,
      gamesPlayed: 0,
      totalWordsTyped: 0,
      badges: {},
      settings: { sound: true }
    };
    data.activePlayerId = id;
    await save(data);
    return id;
  }

  async function deletePlayer(playerId) {
    const data = await load();
    delete data.players[playerId];
    data.gameHistory = data.gameHistory.filter(g => g.playerId !== playerId);
    if (data.activePlayerId === playerId) {
      const remaining = Object.keys(data.players);
      data.activePlayerId = remaining.length > 0 ? remaining[0] : null;
    }
    await save(data);
  }

  async function saveGameResult(result) {
    const data = await load();
    const player = data.players[data.activePlayerId];
    if (!player) return;

    const entry = {
      playerId: data.activePlayerId,
      score: result.score,
      duration: result.duration,
      difficulty: result.difficulty,
      wpm: result.wpm,
      wordsTyped: result.wordsTyped,
      accuracy: result.accuracy,
      longestStreak: result.longestStreak,
      date: Date.now()
    };

    data.gameHistory.push(entry);

    if (data.gameHistory.length > 100) {
      data.gameHistory = data.gameHistory.slice(-100);
    }

    // Check badges before updating stats
    if (!player.badges) player.badges = {};
    const newBadges = Badges.checkNewBadges(player, result);
    const now = Date.now();
    for (const badgeId of newBadges) {
      player.badges[badgeId] = { earned: true, date: now };
    }

    // Check if beating global #1
    const allPlayers = Object.values(data.players);
    const currentGlobalBest = Math.max(...allPlayers.map(p => p.bestWpm || 0));
    const isGlobalRecord = result.wpm > currentGlobalBest;

    // Update player stats
    player.gamesPlayed++;
    player.totalWordsTyped += result.wordsTyped;
    let isPersonalBest = false;
    if (result.wpm > (player.bestWpm || 0)) {
      player.bestWpm = result.wpm;
      player.bestDuration = result.duration;
      isPersonalBest = true;
    }
    await save(data);

    return { isPersonalBest, isGlobalRecord, newBadges };
  }

  async function getLeaderboard() {
    const data = await load();
    return Object.entries(data.players)
      .map(([id, p]) => ({ id, ...p }))
      .sort((a, b) => (b.bestWpm || 0) - (a.bestWpm || 0));
  }

  async function getPlayerHistory(playerId) {
    const data = await load();
    return data.gameHistory
      .filter(g => g.playerId === (playerId || data.activePlayerId))
      .sort((a, b) => b.date - a.date)
      .slice(0, 15);
  }

  async function updateSettings(key, value) {
    const data = await load();
    const player = data.players[data.activePlayerId];
    if (player) {
      player.settings[key] = value;
      await save(data);
    }
  }

  async function getSettings() {
    const player = await getActivePlayer();
    return player ? player.settings : { sound: true };
  }

  return {
    getPlayers,
    getActivePlayer,
    setActivePlayer,
    createPlayer,
    deletePlayer,
    saveGameResult,
    getLeaderboard,
    getPlayerHistory,
    updateSettings,
    getSettings
  };
})();
