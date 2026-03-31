# Type Quest — Typing Practice for Kids

A fun Chrome extension where kids practice typing words that fall from the sky. Race against the clock, earn badges, and climb the leaderboard!

## Features

- **Falling words** with emoji hints for young learners
- **Three vocabulary levels** — Easy, Medium, Hard
- **Three speed settings** — Slow, Normal, Fast
- **Timed rounds** — 1 min, 2 min, or 5 min
- **WPM-based leaderboard** across multiple player profiles
- **Badge rewards** at 15 WPM milestones (5 → 100 WPM)
- **3-miss rule** — missing three words ends the game early
- **Light / Dark / Yellow themes**
- **Fullscreen mode** for distraction-free play

## Installation

1. **Download or clone this repo**
   ```bash
   git clone https://github.com/functicons/chrome-type-quest.git
   ```

2. **Open Chrome** and go to `chrome://extensions`

3. **Enable Developer Mode** — toggle in the top-right corner

4. **Click "Load unpacked"** and select the `extension/` folder inside this repo

5. The Type Quest icon will appear in your Chrome toolbar — click it to play!

## Development

All extension source files live in `extension/`:

```
extension/
  manifest.json      # Chrome extension manifest (v3)
  popup.html         # All screens (welcome, game, leaderboard, badges)
  css/
    style.css        # Styles + dark / light / yellow themes
  js/
    app.js           # Screen routing, game setup, UI logic
    game.js          # Core game loop (falling words, timer, scoring)
    storage.js       # Player profiles & history (chrome.storage.local)
    badges.js        # WPM milestone badge definitions & checks
    words.js         # Word lists (easy / medium / hard) + emoji map
    particles.js     # Confetti & star particle system
    sounds.js        # Sound effects
  images/
    icon16.png
    icon48.png
    icon128.png
```

After editing any file, go to `chrome://extensions` and click the reload button on the Type Quest card to pick up changes.
