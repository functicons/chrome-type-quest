class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.running = false;
  }

  resize() {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
  }

  // Standard confetti burst
  spawnConfetti(x, y, count = 20) {
    const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8A5C', '#5CB8FF', '#34D399'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.015 + Math.random() * 0.01,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        shape: Math.random() > 0.5 ? 'rect' : 'circle'
      });
    }
    if (!this.running) this.animate();
  }

  // Golden star burst
  spawnStars(x, y, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 1.5 + Math.random() * 2;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 6 + Math.random() * 4,
        color: '#FFE66D',
        life: 1,
        decay: 0.02,
        rotation: 0,
        rotSpeed: 0.1,
        shape: 'star'
      });
    }
    if (!this.running) this.animate();
  }

  // Expanding ring — zero gravity, evenly spaced
  spawnRing(x, y, color, count = 16) {
    const ringColor = color || '#4ECDC4';
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 4 + Math.random() * 2;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 5 + Math.random() * 3,
        color: ringColor,
        life: 1,
        decay: 0.022,
        rotation: 0,
        rotSpeed: 0,
        shape: 'circle',
        gravity: 0   // perfect ring, no droop
      });
    }
    if (!this.running) this.animate();
  }

  // Firework — radial spark burst + bright white flash core
  spawnFirework(x, y) {
    const colors = ['#FF6B9D', '#FFE66D', '#4ECDC4', '#A855F7', '#FF8A5C', '#5CB8FF', '#34D399', '#FB7185'];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.15;
      const speed = 3 + Math.random() * 5;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.011 + Math.random() * 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        shape: Math.random() > 0.4 ? 'spark' : 'star',
        gravity: 0.1
      });
    }
    // Bright white flash at the origin
    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 2;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        size: 6 + Math.random() * 10,
        color: '#ffffff',
        life: 1,
        decay: 0.07,
        rotation: 0,
        rotSpeed: 0,
        shape: 'circle',
        gravity: 0.02
      });
    }
    if (!this.running) this.animate();
  }

  // Ribbons — long fluttering streamers that drift upward
  spawnRibbons(x, y, count = 12) {
    const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8A5C', '#5CB8FF'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 80,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4,
        vy: -1.5 - Math.random() * 3.5,
        size: 3,
        width: 10 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.007 + Math.random() * 0.007,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.18,
        shape: 'ribbon',
        gravity: 0.05
      });
    }
    if (!this.running) this.animate();
  }

  // Big game-over explosion from screen center
  spawnExplosion(count = 80) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;
    const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#A855F7', '#FF8A5C', '#5CB8FF', '#FF4757', '#34D399'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 6;
      this.particles.push({
        x: cx + (Math.random() - 0.5) * 100,
        y: cy + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        size: 3 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: 0.008 + Math.random() * 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.3,
        shape: ['rect', 'circle', 'star'][Math.floor(Math.random() * 3)]
      });
    }
    if (!this.running) this.animate();
  }

  // === Shape drawers ===

  drawStar(ctx, cx, cy, size, rotation) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const method = i === 0 ? 'moveTo' : 'lineTo';
      ctx[method](Math.cos(angle) * size, Math.sin(angle) * size);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Elongated diamond / spark shape
  drawSpark(ctx, x, y, size, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, -size * 2.5);
    ctx.lineTo(size * 0.45, 0);
    ctx.lineTo(0, size * 2.5);
    ctx.lineTo(-size * 0.45, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.running = true;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      const g = p.gravity !== undefined ? p.gravity : 0.08;
      p.vy += g;
      p.life -= p.decay;
      p.rotation += p.rotSpeed;
      p.vx *= 0.99;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.shape === 'star') {
        this.drawStar(this.ctx, p.x, p.y, p.size * p.life, p.rotation);
      } else if (p.shape === 'spark') {
        this.drawSpark(this.ctx, p.x, p.y, p.size * p.life, p.rotation);
      } else if (p.shape === 'ribbon') {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        const w = p.width * p.life;
        const h = p.size * p.life;
        this.ctx.fillRect(-w / 2, -h / 2, w, h);
        this.ctx.restore();
      } else {
        // rect — square confetti piece
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      }
    }

    this.ctx.globalAlpha = 1;

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.running = false;
    }
  }

  clear() {
    this.particles = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.running = false;
  }
}
