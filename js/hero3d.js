(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = window.matchMedia('(pointer: coarse)');

  function initHeroScene() {
    const canvas = document.getElementById('heroCanvas');
    const scene = document.querySelector('.hero-scene');
    if (!canvas || !scene) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      scene.classList.add('is-fallback');
      return;
    }

    scene.classList.add('is-canvas');
    let running = true;
    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let t = 0;
    let pointerX = 0;
    let pointerY = 0;

    const nodes = [
      { x: 0, y: -110, z: 0, r: 10, kind: 'hub' },
      { x: -120, y: -20, z: 40, r: 8, kind: 'db' },
      { x: 120, y: -10, z: 30, r: 8, kind: 'db' },
      { x: -70, y: 70, z: -20, r: 7, kind: 'cloud' },
      { x: 80, y: 80, z: -30, r: 7, kind: 'cloud' },
      { x: 0, y: 130, z: 10, r: 9, kind: 'lake' },
      { x: -160, y: 40, z: -50, r: 5, kind: 'node' },
      { x: 165, y: 50, z: -45, r: 5, kind: 'node' }
    ];

    const links = [
      [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 6], [2, 7], [5, 3], [5, 4]
    ];

    const particles = Array.from({ length: 28 }, (_, i) => ({
      link: i % links.length,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      size: 1.2 + Math.random() * 1.8
    }));

    function resize() {
      const rect = scene.getBoundingClientRect();
      width = Math.max(280, Math.floor(rect.width));
      height = Math.max(240, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function project(x, y, z) {
      const rotY = pointerX * 0.35 + t * 0.12;
      const rotX = pointerY * 0.2 + 0.35;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;
      let y1 = y * cosX - z1 * sinX;
      z1 = y * sinX + z1 * cosX;

      const perspective = 520;
      const scale = perspective / (perspective + z1 + 180);
      return {
        x: width * 0.52 + x1 * scale,
        y: height * 0.46 + y1 * scale,
        s: scale,
        z: z1
      };
    }

    function drawCylinder(p, baseR, layers) {
      for (let i = layers; i >= 0; i--) {
        const yy = p.y + i * 5 * p.s;
        const rx = baseR * p.s;
        const ry = rx * 0.34;
        ctx.beginPath();
        ctx.ellipse(p.x, yy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = i === 0 ? 'rgba(168, 32, 58, 0.2)' : 'rgba(15, 10, 12, 0.45)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(196, 50, 78, 0.55)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    function draw() {
      if (!running) return;
      t += reduceMotion.matches ? 0 : 0.008;
      ctx.clearRect(0, 0, width, height);

      const projected = nodes.map((n, i) => {
        const bob = reduceMotion.matches ? 0 : Math.sin(t * 1.4 + i) * 4;
        return { ...project(n.x, n.y + bob, n.z), node: n };
      });

      links.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad.addColorStop(0, 'rgba(168, 32, 58, 0.12)');
        grad.addColorStop(0.5, 'rgba(196, 50, 78, 0.4)');
        grad.addColorStop(1, 'rgba(168, 32, 58, 0.12)');
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      if (!reduceMotion.matches) {
        particles.forEach((p) => {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
          const [a, b] = links[p.link];
          const pa = projected[a];
          const pb = projected[b];
          const x = pa.x + (pb.x - pa.x) * p.progress;
          const y = pa.y + (pb.y - pa.y) * p.progress;
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(232, 160, 174, 0.9)';
          ctx.fill();
        });
      }

      projected
        .map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ p }) => {
          const kind = p.node.kind;
          if (kind === 'db' || kind === 'lake') {
            drawCylinder(p, p.node.r + 10, kind === 'lake' ? 3 : 2);
          } else if (kind === 'cloud') {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 14 * p.s, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168, 32, 58, 0.16)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(196, 50, 78, 0.55)';
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.node.r * p.s * 1.4, 0, Math.PI * 2);
            ctx.fillStyle = kind === 'hub' ? 'rgba(168, 32, 58, 0.4)' : 'rgba(168, 32, 58, 0.22)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(232, 160, 174, 0.85)';
            ctx.lineWidth = 1.4;
            ctx.stroke();
          }
        });

      raf = requestAnimationFrame(draw);
    }

    function onPointer(e) {
      if (coarsePointer.matches || reduceMotion.matches) return;
      const rect = scene.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !raf) raf = requestAnimationFrame(draw);
        if (!running && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(scene);

    window.addEventListener('resize', resize);
    scene.addEventListener('pointermove', onPointer);
    resize();
    if (!reduceMotion.matches) raf = requestAnimationFrame(draw);
    else {
      t = 0.8;
      draw();
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function initCardTilt() {
    if (coarsePointer.matches || reduceMotion.matches) return;
    const cards = document.querySelectorAll('.project-card, .cert-card, .stat-card');
    cards.forEach((card) => {
      card.classList.add('tilt-ready');
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * 8;
        const ry = (x - 0.5) * 10;
        card.style.setProperty('--tilt-x', `${rx.toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${ry.toFixed(2)}deg`);
        card.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
        card.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  window.NBVisuals = { initHeroScene, initCardTilt };
})();
