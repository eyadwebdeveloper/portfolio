import { useEffect, useRef } from "react";

const STAR_COUNT = 220;
const PALETTE = [
  [255, 255, 255],
  [180, 200, 255],
  [200, 170, 255],
  [100, 220, 255],
  [255, 200, 230],
];

function randPalette() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

// Animated starfield background: twinkling stars, parallax on mouse move,
// and periodic shooting stars. Ported 1:1 from the vanilla canvas loop,
// wrapped in a single effect so it starts/stops cleanly with the component.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");

    let W, H;
    let stars = [];
    let shooters = [];
    const mouse = { x: 0, y: 0 };
    let rafId;
    let shooterTimeout;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function makeStar() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        color: randPalette(),
        baseAlpha: Math.random() * 0.55 + 0.15,
        alpha: 0,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 3),
      };
    }

    function makeShooter() {
      const startX = Math.random() * W * 1.2;
      const startY = Math.random() * H * 0.5;
      const angle = Math.PI / 6 + (Math.random() * Math.PI) / 8;
      const speed = Math.random() * 6 + 5;
      const len = Math.random() * 110 + 60;
      const color = randPalette();
      return {
        x: startX,
        y: startY,
        angle,
        speed,
        len,
        color,
        alpha: 0,
        life: 0,
        maxLife: Math.floor(Math.random() * 28 + 22),
        done: false,
      };
    }

    function spawnShooter() {
      shooters.push(makeShooter());
      const delay = Math.random() * 5000 + 3000;
      shooterTimeout = setTimeout(spawnShooter, delay);
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);

      const px = [(mouse.x - W / 2) * 0.006, (mouse.x - W / 2) * 0.015, (mouse.x - W / 2) * 0.028];
      const py = [(mouse.y - H / 2) * 0.006, (mouse.y - H / 2) * 0.015, (mouse.y - H / 2) * 0.028];

      const isDark = document.documentElement.dataset.theme !== "light";
      if (isDark) {
        const blobs = [
          { x: W * 0.8, y: H * 0.15, r: 260, c: "109,40,217", a: 0.035 },
          { x: W * 0.12, y: H * 0.75, r: 200, c: "8,145,178", a: 0.028 },
          { x: W * 0.5, y: H * 0.5, r: 180, c: "139,92,246", a: 0.018 },
        ];
        blobs.forEach((b) => {
          const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
          g.addColorStop(0, `rgba(${b.c},${b.a})`);
          g.addColorStop(1, `rgba(${b.c},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      stars.forEach((s) => {
        const pulse = Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
        s.alpha = s.baseAlpha + pulse * s.baseAlpha * 0.6;

        const ox = px[s.layer];
        const oy = py[s.layer];
        const sx = (s.x + ox + W) % W;
        const sy = (s.y + oy + H) % H;

        if (s.r > 1.1) {
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 5);
          const [r, g, b] = s.color;
          glow.addColorStop(0, `rgba(${r},${g},${b},${s.alpha * 0.4})`);
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(sx, sy, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        const [r, g, b] = s.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(s.alpha, 1)})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.r > 1.3 && s.alpha > 0.5) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${s.alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          const arm = s.r * 4;
          ctx.beginPath();
          ctx.moveTo(sx - arm, sy);
          ctx.lineTo(sx + arm, sy);
          ctx.moveTo(sx, sy - arm);
          ctx.lineTo(sx, sy + arm);
          ctx.stroke();
        }
      });

      shooters.forEach((s) => {
        if (s.done) return;
        s.life++;
        if (s.life >= s.maxLife) {
          s.done = true;
          return;
        }

        const progress = s.life / s.maxLife;
        s.alpha = progress < 0.25 ? progress / 0.25 : 1 - (progress - 0.25) / 0.75;

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        const [r, g, b] = s.color;
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.7, `rgba(${r},${g},${b},${s.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},${s.alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        const hg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
        hg.addColorStop(0, `rgba(${r},${g},${b},${s.alpha * 0.9})`);
        hg.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });
      shooters = shooters.filter((s) => !s.done);

      rafId = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
    }
    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    resize();
    stars = Array.from({ length: STAR_COUNT }, makeStar);
    spawnShooter();
    rafId = requestAnimationFrame(draw);

    window.addEventListener("resize", onResize);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(shooterTimeout);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas id="starfield" ref={canvasRef} />;
}
