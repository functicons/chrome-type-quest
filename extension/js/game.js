class Game {
  constructor() {
    this.duration = 60; // seconds
    this.timeRemaining = 60;
    this.difficulty = 'easy';
    this.speed = 'normal';
    this.words = [];
    this.score = 0;
    this.streak = 0;
    this.longestStreak = 0;
    this.wordsTyped = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.running = false;
    this.paused = false;
    this.lastSpawn = 0;
    this.gameTime = 0;
    this.animFrame = null;
    this.lastTime = 0;
    this.usedWords = new Set();

    this.wordColors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8A5C', '#5CB8FF', '#34D399', '#FB7185', '#818CF8'];

    this.onScoreChange = null;
    this.onTimerUpdate = null;
    this.onStreakChange = null;
    this.onWordComplete = null;
    this.onWordMissed = null;
    this.onMissCountChange = null;
    this.onGameOver = null;
    this.onCombo = null;
  }

  getConfig() {
    const speedConfigs = {
      slow:   { fallSpeed: 25, maxWords: 3, spawnInterval: 2500 },
      normal: { fallSpeed: 40, maxWords: 4, spawnInterval: 1800 },
      fast:   { fallSpeed: 60, maxWords: 6, spawnInterval: 1200 }
    };
    return speedConfigs[this.speed];
  }

  getSpeedMultiplier() {
    const elapsed = this.duration - this.timeRemaining;
    return 1 + (elapsed / 120) * 0.5; // gradual ramp
  }

  start(durationSeconds, difficulty, speed) {
    this.duration = durationSeconds;
    this.timeRemaining = durationSeconds;
    this.difficulty = difficulty || 'easy';
    this.speed = speed || 'normal';
    this.words = [];
    this.score = 0;
    this.streak = 0;
    this.longestStreak = 0;
    this.wordsTyped = 0;
    this.wordsMissed = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.running = true;
    this.paused = false;
    this.lastSpawn = 0;
    this.gameTime = 0;
    this.lastTime = performance.now();
    this.usedWords.clear();

    Sounds.play('start');
    // Spawn initial words so there's always something to type
    const initialCount = Math.min(2, this.getConfig().maxWords);
    for (let i = 0; i < initialCount; i++) {
      this.spawnWord();
    }
    this.loop();
  }

  stop() {
    this.running = false;
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
  }

  spawnWord() {
    const conf = this.getConfig();
    if (this.words.length >= conf.maxWords) return;

    let word;
    let attempts = 0;
    do {
      word = getRandomWord(this.difficulty);
      attempts++;
    } while (this.usedWords.has(word) && attempts < 30);

    this.usedWords.add(word);
    if (this.usedWords.size > 40) {
      const arr = [...this.usedWords];
      this.usedWords = new Set(arr.slice(-20));
    }

    const gameArea = document.getElementById('game-area');
    const areaWidth = gameArea ? gameArea.offsetWidth : 400;
    const emojiWidth = getWordEmoji(word) ? 28 : 0;
    const wordWidth = word.length * 18 + 30 + emojiWidth;
    const minX = 15;
    const maxX = Math.max(minX, areaWidth - wordWidth - 15);
    let x = minX + Math.random() * (maxX - minX);

    for (let i = 0; i < 5; i++) {
      const overlaps = this.words.some(w => Math.abs(w.x - x) < wordWidth && w.y < 60);
      if (!overlaps) break;
      x = minX + Math.random() * (maxX - minX);
    }

    this.words.push({
      text: word,
      x,
      y: -10,
      typed: 0,
      color: this.wordColors[Math.floor(Math.random() * this.wordColors.length)],
      speed: conf.fallSpeed * (0.85 + Math.random() * 0.3),
      shaking: false,
      shakeTime: 0,
      highlight: false
    });
  }

  loop() {
    if (!this.running) return;

    const now = performance.now();
    const dt = Math.min(now - this.lastTime, 50) / 1000;
    this.lastTime = now;
    this.gameTime += dt * 1000;

    if (!this.paused) {
      // Update timer
      this.timeRemaining -= dt;
      if (this.onTimerUpdate) this.onTimerUpdate(Math.max(0, this.timeRemaining));

      if (this.timeRemaining <= 0) {
        this.timeRemaining = 0;
        this.endGame();
        return;
      }

      this.update(dt);
    }

    this.animFrame = requestAnimationFrame(() => this.loop());
  }

  update(dt) {
    const conf = this.getConfig();
    const speedMult = this.getSpeedMultiplier();
    const gameArea = document.getElementById('game-area');
    const areaHeight = gameArea ? gameArea.offsetHeight : 400;

    // Move words down
    for (let i = this.words.length - 1; i >= 0; i--) {
      const w = this.words[i];
      w.y += w.speed * speedMult * dt;

      if (w.shaking) {
        w.shakeTime -= dt;
        if (w.shakeTime <= 0) w.shaking = false;
      }

      // Word reached bottom - miss penalty
      if (w.y > areaHeight - 20) {
        this.words.splice(i, 1);
        this.wordsMissed++;
        this.score = Math.max(0, this.score - 20);
        this.streak = 0;
        Sounds.play('miss');
        if (this.onScoreChange) this.onScoreChange(this.score, -20);
        if (this.onStreakChange) this.onStreakChange(this.streak);
        if (this.onMissCountChange) this.onMissCountChange(this.wordsMissed);
        if (this.onWordMissed) this.onWordMissed();

        if (this.wordsMissed >= 3) {
          this.endGame();
          return;
        }
      }
    }

    // Spawn new words
    this.lastSpawn += dt * 1000;
    const spawnInt = conf.spawnInterval / speedMult;
    if (this.lastSpawn >= spawnInt && this.words.length < conf.maxWords) {
      this.spawnWord();
      this.lastSpawn = 0;
    }

    this.render();
  }

  handleInput(inputValue) {
    if (!this.running || this.words.length === 0) return '';

    const value = inputValue.toLowerCase();
    if (value.length === 0) {
      this.words.forEach(w => w.typed = 0);
      return '';
    }

    this.totalKeystrokes++;

    // Find the best matching word (lowest/closest to bottom)
    let bestMatch = null;
    let bestY = -1;

    for (const w of this.words) {
      const target = w.text.toLowerCase();
      if (target.startsWith(value)) {
        if (w.y > bestY) {
          bestY = w.y;
          bestMatch = w;
        }
      }
    }

    if (bestMatch) {
      this.correctKeystrokes++;
      bestMatch.typed = value.length;
      bestMatch.highlight = true;

      for (const w of this.words) {
        if (w !== bestMatch) {
          w.typed = 0;
          w.highlight = false;
        }
      }

      Sounds.play('type');

      // Word complete!
      if (value === bestMatch.text.toLowerCase()) {
        this.wordCompleted(bestMatch);
        return '';
      }

      return value;
    } else {
      // Wrong keystroke - penalty
      this.score = Math.max(0, this.score - 5);
      if (this.onScoreChange) this.onScoreChange(this.score, -5);

      const partialMatch = this.words.find(w => w.typed > 0);
      if (partialMatch) {
        partialMatch.shaking = true;
        partialMatch.shakeTime = 0.3;
      }
      Sounds.play('wrong');
      return value.slice(0, -1);
    }
  }

  wordCompleted(word) {
    const idx = this.words.indexOf(word);
    if (idx !== -1) this.words.splice(idx, 1);

    this.streak++;
    this.wordsTyped++;
    if (this.streak > this.longestStreak) this.longestStreak = this.streak;

    let multiplier = 1;
    if (this.streak >= 10) multiplier = 5;
    else if (this.streak >= 5) multiplier = 3;
    else if (this.streak >= 3) multiplier = 2;

    const points = Math.round(word.text.length * 10 * multiplier);
    this.score += points;

    Sounds.play('correct');

    if (this.onScoreChange) this.onScoreChange(this.score, points);
    if (this.onStreakChange) this.onStreakChange(this.streak);
    if (this.onWordComplete) this.onWordComplete(word);

    // Immediately spawn a replacement so there's always something to type
    if (this.words.length < this.getConfig().maxWords) {
      this.spawnWord();
    }

    if (this.streak === 3) {
      if (this.onCombo) this.onCombo('NICE!');
      Sounds.play('combo');
    } else if (this.streak === 5) {
      if (this.onCombo) this.onCombo('AMAZING!');
      Sounds.play('combo');
    } else if (this.streak === 10) {
      if (this.onCombo) this.onCombo('ON FIRE!');
      Sounds.play('combo');
    } else if (this.streak === 20) {
      if (this.onCombo) this.onCombo('LEGENDARY!');
      Sounds.play('combo');
    }
  }

  endGame() {
    this.running = false;
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }

    Sounds.play('gameover');

    const accuracy = this.totalKeystrokes > 0
      ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)
      : 0;

    const elapsedMinutes = (this.duration - this.timeRemaining) / 60;
    const wpm = elapsedMinutes > 0 ? Math.round(this.wordsTyped / elapsedMinutes) : 0;

    if (this.onGameOver) {
      this.onGameOver({
        score: this.score,
        duration: this.duration,
        difficulty: this.difficulty,
        speed: this.speed,
        wpm,
        wordsTyped: this.wordsTyped,
        wordsMissed: this.wordsMissed,
        accuracy,
        longestStreak: this.longestStreak
      });
    }
  }

  render() {
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;

    const areaHeight = gameArea.offsetHeight;
    gameArea.querySelectorAll('.falling-word').forEach(el => el.remove());

    for (const w of this.words) {
      const el = document.createElement('div');
      el.className = 'falling-word';
      if (w.shaking) el.classList.add('shake');
      if (w.highlight) el.classList.add('active-word');
      if (w.y > areaHeight * 0.68) el.classList.add('word-danger');
      if (w.y > areaHeight * 0.84) el.classList.add('word-critical');

      el.style.left = w.x + 'px';
      el.style.top = w.y + 'px';
      el.style.setProperty('--word-color', w.color);

      const emoji = getWordEmoji(w.text);
      let html = emoji ? `<span class="word-emoji">${emoji}</span>` : '';
      for (let i = 0; i < w.text.length; i++) {
        const cls = i < w.typed ? 'letter typed' : 'letter';
        html += `<span class="${cls}">${w.text[i]}</span>`;
      }
      el.innerHTML = html;

      gameArea.appendChild(el);
    }
  }
}
