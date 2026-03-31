const App = (() => {
  let game = null;
  let particles = null;
  let gameoverParticles = null;
  let currentScreen = 'welcome';
  let lastDuration = 60;
  let selectedDifficulty = 'easy';
  let selectedSpeed = 'slow';
  let isTabMode = false;

  async function init() {
    game = new Game();
    detectMode();
    setupParticles();
    setupEventListeners();
    await showMenu();
  }

  function detectMode() {
    // In a Chrome extension popup, width is fixed at 420px.
    // In a tab, it will be wider. Also check if opened with ?mode=tab
    const params = new URLSearchParams(window.location.search);
    isTabMode = params.get('mode') === 'tab' || window.innerWidth > 500;
    if (isTabMode) {
      document.body.classList.add('tab-mode');
      // Show the in-game fullscreen toggle
      const fsToggle = document.getElementById('btn-fs-toggle');
      if (fsToggle) fsToggle.classList.remove('hidden');
    }
  }

  function setupParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
      particles = new ParticleSystem(canvas);
    }
    const goCanvas = document.getElementById('gameover-particles');
    if (goCanvas) {
      gameoverParticles = new ParticleSystem(goCanvas);
    }
  }

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById('screen-' + id);
    if (screen) {
      screen.classList.add('active');
      screen.scrollTop = 0;
    }
    // Reset any scroll on body/html
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
    currentScreen = id;
  }

  // === WELCOME SCREEN ===
  async function loadWelcomeScreen() {
    const players = await Storage.getPlayers();
    const playerIds = Object.keys(players);
    const existingArea = document.getElementById('existing-players');
    const playerList = document.getElementById('player-list');
    const newForm = document.getElementById('new-player-form');
    const selectArea = document.getElementById('player-select-area');

    newForm.classList.add('hidden');
    selectArea.classList.remove('hidden');

    // Show home button if there's an active player to return to
    const homeBtn = document.getElementById('btn-welcome-home');
    const active = await Storage.getActivePlayer();
    if (active) {
      homeBtn.classList.remove('hidden');
    } else {
      homeBtn.classList.add('hidden');
    }

    if (playerIds.length > 0) {
      existingArea.classList.remove('hidden');
      playerList.innerHTML = '';

      for (const id of playerIds) {
        const p = players[id];
        const btn = document.createElement('button');
        btn.className = 'player-btn';
        btn.innerHTML = `
          <span class="avatar-circle small" style="background:${p.color}"><span class="avatar-emoji">${p.emoji || '🚀'}</span></span>
          <span class="player-btn-name">${escHtml(p.name)}</span>
          <span class="player-btn-score">🏅${Badges.getBadgeCount(p)} · ${p.bestWpm || 0} wpm</span>
        `;
        btn.addEventListener('click', async () => {
          await Storage.setActivePlayer(id);
          await showMenu();
        });

        // Wrap player button + delete button in a row
        const row = document.createElement('div');
        row.className = 'player-row';

        const del = document.createElement('button');
        del.className = 'player-delete-btn';
        del.innerHTML = '&#128465;';
        del.title = 'Remove player';
        del.addEventListener('click', async (e) => {
          e.stopPropagation();
          if (confirm(`Remove ${p.name}? Their scores will be deleted.`)) {
            await Storage.deletePlayer(id);
            await loadWelcomeScreen();
          }
        });

        row.appendChild(btn);
        row.appendChild(del);
        playerList.appendChild(row);
      }

    } else {
      existingArea.classList.add('hidden');
    }

    showScreen('welcome');
  }

  // === MAIN MENU ===
  async function showMenu() {
    const player = await Storage.getActivePlayer();
    const totalBadges = Badges.getTotalBadges();

    if (player) {
      document.getElementById('menu-avatar').style.background = player.color;
      document.getElementById('menu-emoji').textContent = player.emoji || '🚀';
      document.getElementById('menu-player-name').textContent = `Hi, ${player.name}!`;
      const badgeCount = Badges.getBadgeCount(player);
      document.getElementById('menu-best-score').textContent = player.bestWpm || 0;
      document.getElementById('menu-badge-count').textContent = '🏅 ' + badgeCount + '/' + totalBadges;
      const settings = await Storage.getSettings();
      applyTheme(settings.theme || 'dark');
    } else {
      // No player yet — show guest defaults
      document.getElementById('menu-avatar').style.background = '#5CB8FF';
      document.getElementById('menu-emoji').textContent = '🚀';
      document.getElementById('menu-player-name').textContent = 'New Player';
      document.getElementById('menu-best-score').textContent = '0';
      document.getElementById('menu-badge-count').textContent = '🏅 0/' + totalBadges;
      applyTheme('dark');
    }

    showScreen('menu');
  }


  // === GAME ===
  function startGame(duration) {
    lastDuration = duration;
    showScreen('game');

    // Reset UI
    document.getElementById('game-score').textContent = '0';
    formatTimer(document.getElementById('game-timer'), duration);
    document.getElementById('game-timer').classList.remove('warning', 'critical');
    document.getElementById('game-streak').classList.add('hidden');
    document.getElementById('combo-text').classList.add('hidden');
    document.getElementById('pause-overlay').classList.add('hidden');
    // Reset miss hearts
    document.querySelectorAll('.miss-dot').forEach(d => {
      d.classList.remove('used', 'just-lost');
    });

    const input = document.getElementById('game-input');
    input.value = '';

    if (particles) {
      particles.clear();
      setTimeout(() => particles.resize(), 50);
    }

    // Setup game callbacks
    game.onScoreChange = (score, points) => {
      const el = document.getElementById('game-score');
      el.textContent = score;
      el.classList.add('score-pop');
      setTimeout(() => el.classList.remove('score-pop'), 200);
      showFloatingPoints(points);
    };

    game.onTimerUpdate = (timeRemaining) => {
      const timerEl = document.getElementById('game-timer');
      formatTimer(timerEl, timeRemaining);
      timerEl.classList.remove('warning', 'critical');
      if (timeRemaining <= 10) {
        timerEl.classList.add('critical');
      } else if (timeRemaining <= 30) {
        timerEl.classList.add('warning');
      }
    };

    game.onMissCountChange = (missCount) => {
      const dots = document.querySelectorAll('.miss-dot');
      dots.forEach((dot, i) => {
        if (i < missCount) {
          if (!dot.classList.contains('used')) {
            dot.classList.add('just-lost');
            setTimeout(() => dot.classList.remove('just-lost'), 500);
          }
          dot.classList.add('used');
        }
      });
    };

    game.onWordMissed = () => {
      const mascot = document.getElementById('mascot-game');
      if (mascot) {
        mascot.querySelector('.mascot-mouth')?.classList.replace('happy', 'sad');
        setTimeout(() => {
          mascot.querySelector('.mascot-mouth')?.classList.replace('sad', 'happy');
        }, 1000);
      }
    };

    game.onStreakChange = (streak) => {
      const el = document.getElementById('game-streak');
      if (streak >= 2) {
        el.classList.remove('hidden');
        el.querySelector('.streak-count').textContent = streak;
        if (streak >= 10) {
          el.classList.add('on-fire');
        } else if (streak >= 5) {
          el.classList.add('hot');
          el.classList.remove('on-fire');
        } else {
          el.classList.remove('hot', 'on-fire');
        }
      } else {
        el.classList.add('hidden');
        el.classList.remove('hot', 'on-fire');
      }
    };

    game.onWordComplete = (word) => {
      const px = word.x + (word.text.length * 9);
      const py = word.y;
      const streak = game.streak;

      if (particles) {
        // Intensity scales with streak, capped so it doesn't go wild
        const intensity = 1 + Math.min(streak, 12) * 0.12;
        const cc = Math.round(12 * intensity); // confetti count
        const sc = Math.round(5  * intensity); // star count
        const rc = Math.round(10 * intensity); // ribbon count
        const rg = Math.round(14 * intensity); // ring count

        // 8 distinct recipes — one is picked at random every time
        const recipes = [
          () => { particles.spawnConfetti(px, py, cc); particles.spawnStars(px, py, sc); },
          () => { particles.spawnRing(px, py, word.color, rg); particles.spawnStars(px, py, 4); },
          () => { particles.spawnFirework(px, py); },
          () => { particles.spawnRibbons(px, py, rc); particles.spawnStars(px, py, sc); },
          () => { particles.spawnConfetti(px, py, cc); particles.spawnRing(px, py, word.color, Math.round(rg * 0.7)); },
          () => { particles.spawnFirework(px, py); particles.spawnRing(px, py, word.color, 12); },
          () => { particles.spawnRibbons(px, py, rc); particles.spawnConfetti(px, py, Math.round(cc * 0.6)); },
          () => { particles.spawnStars(px, py, sc * 2); particles.spawnRing(px, py, word.color, 10); particles.spawnRing(px, py, '#FFE66D', 8); },
        ];
        recipes[Math.floor(Math.random() * recipes.length)]();

        // Bonus effect — chance grows with streak, also random
        const bonusChance = streak >= 10 ? 1.0 : streak >= 5 ? 0.65 : streak >= 3 ? 0.35 : 0;
        if (Math.random() < bonusChance) {
          const bonuses = [
            () => particles.spawnStars(px, py, 6),
            () => particles.spawnRing(px, py, '#ffffff', 10),
            () => particles.spawnConfetti(px, py, 10),
            () => particles.spawnRibbons(px, py, 6),
          ];
          bonuses[Math.floor(Math.random() * bonuses.length)]();
        }
      }

      spawnWordFloat(word);
    };

    game.onCombo = (text) => {
      const el = document.getElementById('combo-text');
      el.textContent = text;
      el.classList.remove('hidden');
      el.classList.add('combo-animate');
      setTimeout(() => {
        el.classList.remove('combo-animate');
        el.classList.add('hidden');
      }, 1200);
    };

    game.onGameOver = async (result) => {
      await showGameOver(result);
    };

    // 3-second countdown before game starts
    runCountdown(['3', '2', '1', 'GO!'], () => {
      input.focus();
      game.start(duration, selectedDifficulty, selectedSpeed);
    });
  }

  function runCountdown(steps, onDone) {
    const overlay = document.getElementById('countdown-overlay');
    const numEl = document.getElementById('countdown-number');
    overlay.classList.remove('hidden');

    let i = 0;
    function showStep() {
      if (i >= steps.length) {
        overlay.classList.add('hidden');
        onDone();
        return;
      }
      const label = steps[i];
      numEl.textContent = label;
      numEl.className = 'countdown-number' + (label === 'GO!' ? ' go-text' : '');
      // Force reflow to restart animation
      void numEl.offsetWidth;
      numEl.style.animation = 'none';
      void numEl.offsetWidth;
      numEl.style.animation = '';
      i++;
      setTimeout(showStep, 900);
    }
    showStep();
  }

  // Floating word ghost — the completed word flies upward briefly
  function spawnWordFloat(word) {
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;
    const el = document.createElement('div');
    el.className = 'word-float';
    el.textContent = '✓ ' + word.text;
    el.style.left = word.x + 'px';
    el.style.top = word.y + 'px';
    el.style.color = word.color;
    gameArea.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  function formatTimer(el, seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    el.textContent = m + ':' + String(s).padStart(2, '0');
  }

  function showFloatingPoints(points) {
    const scoreEl = document.getElementById('game-score');
    const floater = document.createElement('div');
    floater.className = 'floating-points' + (points < 0 ? ' negative' : '');
    floater.textContent = (points > 0 ? '+' : '') + points;
    scoreEl.parentElement.appendChild(floater);
    setTimeout(() => floater.remove(), 800);
  }

  // === GAME OVER ===
  async function showGameOver(result) {
    showScreen('gameover');

    // Reset progress bar
    document.getElementById('progress-fill').style.width = '0%';

    const saveResult = await Storage.saveGameResult(result);
    const { isPersonalBest, isGlobalRecord, newBadges } = saveResult;

    // Title
    const title = document.getElementById('gameover-title');
    if (isGlobalRecord) {
      title.textContent = 'GLOBAL CHAMPION!';
    } else if (result.wordsMissed >= 3) {
      title.textContent = '3 MISSES!';
    } else {
      title.textContent = "TIME'S UP!";
    }

    // High score / record banner
    const hsEl = document.getElementById('new-highscore');
    if (isGlobalRecord) {
      hsEl.classList.remove('hidden');
      hsEl.querySelector('span').innerHTML = '&#127775; NEW #1 RECORD! &#127775;';
      Sounds.play('highscore');
    } else if (isPersonalBest) {
      hsEl.classList.remove('hidden');
      hsEl.querySelector('span').innerHTML = '&#127775; NEW PERSONAL BEST! &#127775;';
      Sounds.play('highscore');
    } else {
      hsEl.classList.add('hidden');
    }

    // New badges earned
    const badgesEl = document.getElementById('gameover-badges');
    const badgeListEl = document.getElementById('gameover-badge-list');
    if (newBadges.length > 0) {
      badgesEl.classList.remove('hidden');
      badgeListEl.innerHTML = '';
      newBadges.forEach((id, i) => {
        const badge = BADGES[id];
        const item = document.createElement('div');
        item.className = 'gameover-badge-item';
        item.style.animationDelay = (i * 0.15) + 's';
        item.innerHTML = `<span class="badge-icon">${badge.icon}</span><span class="badge-name">${badge.name}</span>`;
        badgeListEl.appendChild(item);
      });
    } else {
      badgesEl.classList.add('hidden');
    }

    // Next badge progress
    const player = await Storage.getActivePlayer();
    const nextBadge = Badges.getNextBadgeProgress(player, result);
    const progressEl = document.getElementById('gameover-progress');
    if (nextBadge) {
      progressEl.classList.remove('hidden');
      const badge = BADGES[nextBadge.id];
      const pct = Math.round((nextBadge.current / nextBadge.target) * 100);
      document.getElementById('progress-label').textContent =
        `Next: ${badge.icon} ${badge.name} — ${nextBadge.current}/${nextBadge.target} ${nextBadge.unit}`;
      setTimeout(() => {
        document.getElementById('progress-fill').style.width = Math.min(pct, 99) + '%';
      }, 300);
    } else {
      progressEl.classList.add('hidden');
    }

    // Animate score counting up
    const scoreEl = document.getElementById('gameover-score');
    animateNumber(scoreEl, 0, result.score, 1000);

    // Rate display
    const wpmEl = document.getElementById('gameover-wpm');
    animateNumber(wpmEl, 0, result.wpm, 1200);

    // Stars based on WPM (1-3)
    const starsEl = document.getElementById('gameover-stars');
    let starCount = 1;
    if (result.wpm >= 15) starCount = 2;
    if (result.wpm >= 30) starCount = 3;
    starsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const star = document.createElement('span');
      star.className = 'star-icon' + (i < starCount ? ' earned' : '');
      star.innerHTML = '&#9733;';
      star.style.animationDelay = (i * 0.2) + 's';
      starsEl.appendChild(star);
    }

    // Stats
    document.getElementById('stat-words').textContent = result.wordsTyped;
    document.getElementById('stat-accuracy').textContent = result.accuracy + '%';
    document.getElementById('stat-streak').textContent = result.longestStreak;

    // Confetti!
    if (gameoverParticles) {
      gameoverParticles.canvas.width = gameoverParticles.canvas.parentElement.offsetWidth;
      gameoverParticles.canvas.height = gameoverParticles.canvas.parentElement.offsetHeight;
      setTimeout(() => gameoverParticles.spawnExplosion(60), 300);
      if (isPersonalBest || isGlobalRecord) {
        setTimeout(() => gameoverParticles.spawnExplosion(40), 800);
        setTimeout(() => gameoverParticles.spawnExplosion(40), 1300);
      }
    }
  }

  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // === BADGE SHOWCASE ===
  async function showBadgeShowcase() {
    showScreen('badges');
    const player = await Storage.getActivePlayer();
    if (!player) return;

    const tiers = Badges.getBadgesByTier(player);
    const count = Badges.getBadgeCount(player);
    const total = Badges.getTotalBadges();

    document.getElementById('badge-count-header').textContent = count + ' / ' + total + ' earned';

    const showcase = document.getElementById('badge-showcase');
    showcase.innerHTML = '';

    for (const [tierName, badges] of Object.entries(tiers)) {
      const section = document.createElement('div');
      section.className = 'badge-tier-section';

      const label = document.createElement('div');
      label.className = 'badge-tier-label ' + tierName;
      label.textContent = tierName.charAt(0).toUpperCase() + tierName.slice(1);
      section.appendChild(label);

      const grid = document.createElement('div');
      grid.className = 'badge-grid';

      for (const badge of badges) {
        const card = document.createElement('div');
        card.className = 'badge-card ' + (badge.earned ? 'earned' : 'locked');
        let html = `<span class="badge-card-icon">${badge.icon}</span>`;
        html += `<span class="badge-card-name">${badge.name}</span>`;
        if (!badge.earned) {
          html += `<span class="badge-card-hint">${badge.desc}</span>`;
        } else {
          const d = new Date(badge.date);
          html += `<span class="badge-card-hint">${d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>`;
        }
        card.innerHTML = html;
        grid.appendChild(card);
      }

      section.appendChild(grid);
      showcase.appendChild(section);
    }
  }

  // === LEADERBOARD ===
  async function showLeaderboard() {
    showScreen('leaderboard');

    // All players tab
    const leaderboard = await Storage.getLeaderboard();
    const activePlayer = await Storage.getActivePlayer();
    const listEl = document.getElementById('leaderboard-list');
    listEl.innerHTML = '';

    if (leaderboard.length === 0) {
      listEl.innerHTML = '<div class="empty-state">No scores yet! Play a game first.</div>';
    } else {
      const medals = ['&#129351;', '&#129352;', '&#129353;']; // gold, silver, bronze
      leaderboard.forEach((p, i) => {
        const row = document.createElement('div');
        row.className = 'lb-row' + (activePlayer && p.id === activePlayer.id ? ' current-player' : '');
        const rank = i < 3 ? medals[i] : `#${i + 1}`;
        row.innerHTML = `
          <span class="lb-rank">${rank}</span>
          <span class="avatar-circle tiny" style="background:${p.color}"><span class="avatar-emoji">${p.emoji || '🚀'}</span></span>
          <span class="lb-name">${escHtml(p.name)}</span>
          <span class="lb-score">${p.bestWpm || 0} <small>wpm</small></span>
        `;
        listEl.appendChild(row);
      });
    }

    // History tab
    await loadHistory();

    // Activate first tab
    document.querySelector('.tab-btn[data-tab="all"]').classList.add('active');
    document.querySelector('.tab-btn[data-tab="history"]').classList.remove('active');
    document.getElementById('tab-all').classList.add('active');
    document.getElementById('tab-history').classList.remove('active');
  }

  async function loadHistory() {
    const history = await Storage.getPlayerHistory();
    const listEl = document.getElementById('history-list');
    listEl.innerHTML = '';

    if (history.length === 0) {
      listEl.innerHTML = '<div class="empty-state">No games played yet!</div>';
      return;
    }

    history.forEach(g => {
      const row = document.createElement('div');
      row.className = 'history-row';
      const date = new Date(g.date);
      const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      const durLabel = g.duration ? Math.round(g.duration / 60) + 'm' : '?';
      row.innerHTML = `
        <span class="hist-date">${dateStr}</span>
        <span class="hist-diff">${durLabel}</span>
        <span class="hist-score">${g.wpm || 0} <small>wpm</small></span>
        <span class="hist-words">${g.wordsTyped} words</span>
        <span class="hist-accuracy">${g.accuracy}%</span>
      `;
      listEl.appendChild(row);
    });
  }

  // === EVENT LISTENERS ===
  function setupEventListeners() {
    // Welcome screen
    // Welcome screen home button - go back to menu
    document.getElementById('btn-welcome-home').addEventListener('click', () => {
      showMenu();
    });

    // Reset all data
    document.getElementById('btn-reset-data').addEventListener('click', async () => {
      if (confirm('This will delete ALL players, scores, and badges. Are you sure?')) {
        const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;
        if (isExtension) {
          await new Promise(r => chrome.storage.local.remove('typequest', r));
        } else {
          localStorage.removeItem('typequest');
        }
        await loadWelcomeScreen();
        showScreen('welcome');
      }
    });

    document.getElementById('btn-new-player').addEventListener('click', () => {
      document.getElementById('player-select-area').classList.add('hidden');
      document.getElementById('new-player-form').classList.remove('hidden');
      document.getElementById('input-player-name').focus();
      // Default selections
      document.querySelector('.emoji-option').classList.add('selected');
      document.querySelector('.color-dot').classList.add('selected');
    });

    document.getElementById('btn-cancel-new').addEventListener('click', () => {
      document.getElementById('new-player-form').classList.add('hidden');
      document.getElementById('player-select-area').classList.remove('hidden');
    });

    // Emoji picker
    let selectedEmoji = '🐶';
    document.getElementById('emoji-picker').addEventListener('click', (e) => {
      const opt = e.target.closest('.emoji-option');
      if (!opt) return;
      document.querySelectorAll('.emoji-option').forEach(d => d.classList.remove('selected'));
      opt.classList.add('selected');
      selectedEmoji = opt.textContent;
    });

    // Color picker
    let selectedColor = '#FF6B9D';
    document.getElementById('color-picker').addEventListener('click', (e) => {
      const dot = e.target.closest('.color-dot');
      if (!dot) return;
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
      dot.classList.add('selected');
      selectedColor = dot.dataset.color;
    });

    // Create player
    document.getElementById('btn-create-player').addEventListener('click', async () => {
      const name = document.getElementById('input-player-name').value.trim();
      if (!name) {
        document.getElementById('input-player-name').classList.add('shake');
        setTimeout(() => document.getElementById('input-player-name').classList.remove('shake'), 500);
        return;
      }
      await Storage.createPlayer(name, selectedColor, selectedEmoji);
      await showMenu();
    });

    // Enter key on name input
    document.getElementById('input-player-name').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('btn-create-player').click();
      }
    });

    // Click player badge to switch player
    document.getElementById('menu-player-badge').addEventListener('click', async () => {
      game.stop();
      await loadWelcomeScreen();
      showScreen('welcome');
    });

    // Toggle buttons (difficulty + time)
    document.querySelectorAll('.toggle-btn[data-difficulty]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedDifficulty = btn.dataset.difficulty;
      });
    });

    document.querySelectorAll('.toggle-btn[data-speed]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSpeed = btn.dataset.speed;
      });
    });

    document.querySelectorAll('.toggle-btn[data-duration]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        lastDuration = parseInt(btn.dataset.duration, 10);
      });
    });

    // Start game button
    document.getElementById('btn-start-game').addEventListener('click', async () => {
      const player = await Storage.getActivePlayer();
      if (!player) {
        await loadWelcomeScreen();
        showScreen('welcome');
        return;
      }
      startGame(lastDuration);
    });

    // Leaderboard
    document.getElementById('btn-leaderboard').addEventListener('click', showLeaderboard);
    document.getElementById('btn-back-menu').addEventListener('click', showMenu);

    // Badges
    document.getElementById('btn-badges').addEventListener('click', showBadgeShowcase);
    document.getElementById('btn-badges-home').addEventListener('click', showMenu);

    // Leaderboard tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      });
    });

    // Game input
    const gameInput = document.getElementById('game-input');
    gameInput.addEventListener('input', () => {
      if (!game.running) return;
      const result = game.handleInput(gameInput.value);
      if (result !== gameInput.value) {
        gameInput.value = result;
      }
    });

    // Prevent losing focus during game
    gameInput.addEventListener('blur', () => {
      if (currentScreen === 'game' && game.running) {
        setTimeout(() => gameInput.focus(), 10);
      }
    });

    // Pause button
    document.getElementById('btn-pause').addEventListener('click', () => {
      if (!game.running) return;
      game.paused = true;
      document.getElementById('pause-overlay').classList.remove('hidden');
    });

    // Resume button
    document.getElementById('btn-resume').addEventListener('click', () => {
      game.paused = false;
      game.lastTime = performance.now();
      document.getElementById('pause-overlay').classList.add('hidden');
      document.getElementById('game-input').focus();
    });

    // Stop button - exit game immediately
    document.getElementById('btn-stop').addEventListener('click', () => {
      game.stop();
      document.getElementById('pause-overlay').classList.add('hidden');
      showMenu();
    });

    document.getElementById('btn-quit').addEventListener('click', () => {
      game.stop();
      document.getElementById('pause-overlay').classList.add('hidden');
      showMenu();
    });

    // Game over buttons
    document.getElementById('btn-play-again').addEventListener('click', () => {
      startGame(lastDuration);
    });

    document.getElementById('btn-main-menu').addEventListener('click', showMenu);

    // Fullscreen - open in new tab
    document.getElementById('btn-fullscreen').addEventListener('click', () => {
      const url = chrome.runtime?.getURL
        ? chrome.runtime.getURL('popup.html?mode=tab')
        : window.location.origin + '/popup.html?mode=tab';
      if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
        chrome.tabs.create({ url });
        window.close(); // close the popup
      } else {
        window.open(url, '_blank');
      }
    });

    // In-game fullscreen toggle (Fullscreen API, only in tab mode)
    document.getElementById('btn-fs-toggle').addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const btn = document.getElementById('btn-fs-toggle');
      btn.textContent = document.fullscreenElement ? '\u2716' : '\u26F6';
      btn.title = document.fullscreenElement ? 'Exit fullscreen' : 'Toggle fullscreen';
    });

    // Sound toggle
    // Theme picker
    document.getElementById('btn-theme-toggle').addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('theme-dropdown').classList.toggle('hidden');
    });

    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const theme = btn.dataset.theme;
        await Storage.updateSettings('theme', theme);
        applyTheme(theme);
        document.getElementById('theme-dropdown').classList.add('hidden');
      });
    });

    // Close dropdown when clicking elsewhere
    document.addEventListener('click', () => {
      document.getElementById('theme-dropdown').classList.add('hidden');
    });
  }

  function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'yellow-theme');
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else if (theme === 'yellow') {
      document.body.classList.add('yellow-theme');
    }
    document.getElementById('btn-theme-toggle').setAttribute('data-current', theme);
  }

  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Prevent all scrolling on the page (except leaderboard/history lists)
  document.addEventListener('wheel', (e) => {
    const scrollable = e.target.closest('.leaderboard-list, .history-list, .player-list');
    if (!scrollable) e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    const scrollable = e.target.closest('.leaderboard-list, .history-list, .player-list');
    if (!scrollable) e.preventDefault();
  }, { passive: false });

  // Boot
  document.addEventListener('DOMContentLoaded', init);

  return { init };
})();
