/* =====================================================================
   RED DECK — мини-игра «Держись на доске»
   Задача не развлечь, а закрепить правила парка через действие.
   Перед стартом — чек-лист защиты: без него кнопка «Поехали» не работает.
   Один тап — олли. Двойной тап — кикфлип (больше очков, но дольше в воздухе).
   Падения разные, и каждое объясняет ровно одно правило.
   ===================================================================== */
(function (root) {
  'use strict';

  const RD = root.RD;

  const TXT = {
    ru: {
      eyebrow: 'Мини-игра',
      title: 'Держись на доске',
      lead: 'Про правила парка — но без лекции. Играть можно в автобусе, пока ждёте тренировку.',
      checkTitle: 'Сначала как в настоящем парке',
      checkLead: 'В Red Deck на площадку не выходят, пока не пройдены эти три пункта. В игре — то же самое.',
      checks: [
        'Без шлема и защиты на площадку не выхожу',
        'Смотрю по сторонам — никому не мешаю',
        'Еду на фигуру, к которой готов, а не на самую большую'
      ],
      go: 'Поехали',
      goBlocked: 'Отметьте все три пункта',
      how: 'Как играть',
      howBody: 'Тап или пробел — олли. Двойной тап или двойной пробел — кикфлип: очков вдвое больше, но в воздухе вы дольше. Конусы перепрыгиваются, перила — тоже, но повыше.',
      score: 'Очки', best: 'Рекорд', dist: 'Метры', scoreUnit: 'очков',
      again: 'Ещё раз', book: 'Цены — для родителей', rules: 'Правила, которые ты применил',
      overTitle: 'Заезд закончен',
      lesson: 'Так падают все. Что это значит в парке',
      trickOllie: 'олли', trickFlip: 'кикфлип',
      pause: 'Пауза', resume: 'Продолжить', startSay: 'Заезд начался. Тап или пробел — олли, двойной — кикфлип.',
      falls: [
        { t: 'Рано оттолкнулись', l: 'Олли делается у самого препятствия, а не за метр до него. В парке тренер как раз ставит момент отталкивания.' },
        { t: 'Поздно оттолкнулись', l: 'Скорость важнее храбрости: если подъехали слишком близко, безопаснее объехать и зайти заново.' },
        { t: 'Не хватило высоты', l: 'На перила заходят выше, чем на конус. Поэтому в парке фигуры осваивают по порядку: сначала малый радиус, потом большой.' },
        { t: 'Не докрутили кикфлип', l: 'Кикфлип держит вас в воздухе дольше. Пока трюк не стабилен, на нём не заходят на сложные фигуры.' },
        { t: 'Приземлились боком', l: 'Именно поэтому наколенники и налокотники не «на всякий случай», а обязательны.' }
      ],
      gearOn: 'Защита надета',
      quit: 'Выйти'
    },
    en: {
      eyebrow: 'Mini game',
      title: 'Stay on the board',
      lead: 'About the rules of the park, without the lecture. Playable on a phone while you wait.',
      checkTitle: 'First, same as in the real park',
      checkLead: 'At Red Deck nobody rolls out before these three. Same here.',
      checks: [
        'I don’t roll out without a helmet and pads',
        'I look around — I’m not in anyone’s way',
        'I ride the feature I’m ready for, not the biggest one'
      ],
      go: 'Roll out',
      goBlocked: 'Tick all three',
      how: 'How to play',
      howBody: 'Tap or space — ollie. Double tap or double space — kickflip: twice the points, longer in the air. Cones and rails both need a jump; rails need more of one.',
      score: 'Points', best: 'Best', dist: 'Metres', scoreUnit: 'points',
      again: 'Again', book: 'Prices — for parents', rules: 'The rules you just used',
      overTitle: 'Run over',
      lesson: 'Everyone falls like this. What it means in a real park',
      trickOllie: 'ollie', trickFlip: 'kickflip',
      pause: 'Paused', resume: 'Resume', startSay: 'Run started. Tap or space for an ollie, double for a kickflip.',
      falls: [
        { t: 'Popped too early', l: 'An ollie happens right at the obstacle, not a metre before it. Timing the pop is exactly what a coach fixes.' },
        { t: 'Popped too late', l: 'Speed beats bravery: if you are already too close, roll around and set up again.' },
        { t: 'Not enough height', l: 'A rail needs more air than a cone. That is why features are learned in order: small radius first.' },
        { t: 'Kickflip not finished', l: 'A kickflip keeps you in the air longer. Until it is consistent, you do not take it to hard features.' },
        { t: 'Landed sideways', l: 'This is exactly why knee and elbow pads are mandatory, not optional.' }
      ],
      gearOn: 'Gear on',
      quit: 'Quit'
    }
  };

  /* палитра совпадает с утверждённым дизайном: три цвета и их оттенки */
  const C = {
    ink: '#000000', paper: '#FFFFFF', red: '#FF0000', white: '#FFFFFF',
    surface: '#141414', muted: '#8A8A8A', wood: '#B9B9B9'
  };

  let best = 0;
  try { best = parseInt(localStorage.getItem('rd-game-best') || '0', 10) || 0; } catch (e) {}

  root.RDGame = {
    /* --------- разметка страницы игры --------- */
    page: function (h) {
      const esc = h.esc, L = h.L;
      const t = TXT[L()] || TXT.ru;
      return '<section class="g-intro"><div class="shell">' +
        '<p class="kick kick--plain">' + esc(t.eyebrow) + '</p>' +
        '<h1 class="t-h1">' + esc(t.title) + '</h1>' +
        '<p class="t-lead">' + esc(t.lead) + '</p>' +
        '</div></section>' +

        '<section class="g-wrap"><div class="shell g-wrap__in">' +

        /* чек-лист защиты — шлюз в игру */
        '<div class="g-check bordered curve-bl curve-br" id="g-check">' +
        '<h2 class="t-h3">' + esc(t.checkTitle) + '</h2>' +
        '<p class="t-small t-muted" style="margin-top:8px">' + esc(t.checkLead) + '</p>' +
        '<ul class="g-check__list">' + t.checks.map((c, i) =>
          '<li><label><input type="checkbox" data-gcheck="' + i + '"><span class="g-check__box" aria-hidden="true"></span>' +
          '<span class="g-check__txt">' + esc(c) + '</span></label></li>').join('') + '</ul>' +
        '<button class="btn btn--primary btn--block" type="button" id="g-go" aria-disabled="true">' +
        esc(t.goBlocked) + '</button>' +
        '<details class="g-how"><summary>' + esc(t.how) + '</summary>' +
        '<p class="t-small">' + esc(t.howBody) + '</p></details>' +
        '</div>' +

        /* поле игры */
        '<div class="g-stage" id="g-stage" hidden>' +
        '<div class="g-hud">' +
        '<span class="g-hud__gear"><i aria-hidden="true"></i>' + esc(t.gearOn) + '</span>' +
        '<span class="g-hud__s">' + esc(t.score) + ' <b id="g-score">0</b></span>' +
        '<span class="g-hud__s">' + esc(t.dist) + ' <b id="g-dist">0</b></span>' +
        '<span class="g-hud__s">' + esc(t.best) + ' <b id="g-best">' + best + '</b></span>' +
        '<button type="button" id="g-quit" class="g-hud__x">' + esc(t.quit) + '</button>' +
        '</div>' +
        '<canvas id="g-canvas" width="900" height="420" role="img" ' +
        'aria-label="' + esc(L() === 'en' ? 'Skater game field' : 'Игровое поле со скейтером') + '"></canvas>' +
        '<div class="g-controls">' +
        '<button type="button" class="btn btn--ghost" id="g-ollie">' + esc(t.trickOllie) + '</button>' +
        '<button type="button" class="btn btn--primary" id="g-flip">' + esc(t.trickFlip) + '</button>' +
        '</div>' +
        '</div>' +

        /* итог заезда */
        '<div class="g-over bordered curve-bl curve-br" id="g-over" hidden>' +
        '<h2 class="t-h3" id="g-over-t">' + esc(t.overTitle) + '</h2>' +
        '<p class="g-over__sc"><span id="g-over-score">0</span> <i id="g-over-unit">' + esc(t.scoreUnit) + '</i></p>' +
        '<p class="t-eyebrow t-muted" style="margin-top:18px">' + esc(t.lesson) + '</p>' +
        '<p class="t-body" id="g-over-l" style="margin-top:8px;font-size:15px"></p>' +
        '<div class="g-over__cta">' +
        '<button class="btn btn--primary" type="button" id="g-again">' + esc(t.again) + '</button>' +
        '<a class="btn btn--ghost" href="#/safety">' + esc(t.rules) + '</a>' +
        '<a class="lnk" href="#/sekciya">' + esc(t.book) + ' <span>→</span></a>' +
        '</div></div>' +

        '</div></section>';
    },

    /* --------- логика --------- */
    bind: function (ctx) {
      const sig = ctx.sig, L = ctx.L;
      const t = TXT[L()] || TXT.ru;

      const checkEls = Array.prototype.slice.call(document.querySelectorAll('[data-gcheck]'));
      const go = document.getElementById('g-go');
      const stage = document.getElementById('g-stage');
      const over = document.getElementById('g-over');
      const gate = document.getElementById('g-check');
      const canvas = document.getElementById('g-canvas');
      if (!canvas || !go) return;

      const refresh = function () {
        const all = checkEls.every((c) => c.checked);
        go.setAttribute('aria-disabled', String(!all));
        go.textContent = all ? t.go : t.goBlocked;
      };
      checkEls.forEach((c) => c.addEventListener('change', refresh, sig));
      refresh();

      const ctxd = canvas.getContext('2d');
      let W = 900, H = 420, dpr = 1;

      function resize() {
        const box = canvas.parentNode.getBoundingClientRect();
        W = Math.max(240, Math.floor(box.width));
        H = Math.round(Math.min(460, Math.max(260, W * 0.46)));
        dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctxd.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      /* ---- состояние заезда ---- */
      let S = null, raf = null, running = false;

      function reset() {
        S = {
          t: 0, speed: 4.2, score: 0, dist: 0,
          groundY: 0, x: 0,
          y: 0, vy: 0, air: false, trick: null, spin: 0,
          obs: [], nextObs: 520,
          dropIn: 1,            // 1 → 0: съезд с радиуса на старте
          fall: null, shake: 0,
          lastTap: 0
        };
        S.groundY = Math.round(H * 0.74);
        S.y = S.groundY;
        S.x = Math.round(Math.min(118, H * .33) + 46);
      }

      /* ---- ввод ---- */
      function ollie() {
        if (!running || S.air || S.dropIn > 0) return;
        S.air = true; S.vy = -Math.min(13.5, 9.6 + S.speed * .28); S.trick = 'ollie'; S.spin = 0;
      }
      function kickflip() {
        if (!running || S.dropIn > 0) return;
        if (!S.air) { S.air = true; S.vy = -Math.min(15.2, 11 + S.speed * .3); }
        S.trick = 'flip'; S.spin = 0;
      }
      function tap() {
        const now = performance.now();
        if (now - S.lastTap < 260) { kickflip(); S.lastTap = 0; }
        else { S.lastTap = now; ollie(); }
      }

      canvas.addEventListener('pointerdown', function (e) { e.preventDefault(); tap(); }, sig);
      document.getElementById('g-ollie').addEventListener('click', ollie, sig);
      document.getElementById('g-flip').addEventListener('click', kickflip, sig);
      document.addEventListener('keydown', function (e) {
        if (!running) return;
        const ae = document.activeElement || {};
        if ((e.code === 'Space' || e.key === ' ') && !/^(BUTTON|A|INPUT|SUMMARY)$/.test(ae.tagName || '')) {
          e.preventDefault(); tap();
        }
        if (e.key === 'Escape') stop(null);
      }, sig);

      /* ---- отрисовка ---- */
      function drawSkater(g, x, y, spin, trick, fallen) {
        g.save();
        g.translate(x, y);
        if (fallen) g.rotate(fallen * 1.15);

        // доска
        g.save();
        g.translate(0, 2);
        if (trick === 'flip') g.rotate(spin);
        g.fillStyle = C.ink;
        g.fillRect(-16, 0, 32, 3.5);
        g.fillStyle = C.red;
        g.fillRect(-16, 3.5, 32, 1.6);
        g.fillStyle = C.muted;
        g.beginPath(); g.arc(-10, 7, 2.6, 0, 6.284); g.arc(10, 7, 2.6, 0, 6.284); g.fill();
        g.restore();

        const crouch = fallen ? 0 : (trick && S && S.air ? -3 : 0);
        // ноги
        g.strokeStyle = C.ink; g.lineWidth = 3.4; g.lineCap = 'round';
        g.beginPath(); g.moveTo(-7, 0); g.lineTo(-3, -14 + crouch); g.moveTo(8, 0); g.lineTo(3, -14 + crouch); g.stroke();
        // наколенники
        g.fillStyle = C.red;
        g.beginPath(); g.arc(-5, -7 + crouch / 2, 2.7, 0, 6.284); g.arc(5.5, -7 + crouch / 2, 2.7, 0, 6.284); g.fill();
        // корпус
        g.strokeStyle = C.ink; g.lineWidth = 4.6;
        g.beginPath(); g.moveTo(0, -14 + crouch); g.lineTo(0, -28 + crouch); g.stroke();
        // руки
        g.lineWidth = 3;
        g.beginPath();
        g.moveTo(0, -24 + crouch); g.lineTo(-11, -18 + crouch);
        g.moveTo(0, -24 + crouch); g.lineTo(10, -30 + crouch);
        g.stroke();
        // налокотники
        g.fillStyle = C.red;
        g.beginPath(); g.arc(-6, -21 + crouch, 2.3, 0, 6.284); g.arc(5.5, -27 + crouch, 2.3, 0, 6.284); g.fill();
        // голова
        g.fillStyle = C.paper;
        g.beginPath(); g.arc(0, -33 + crouch, 5.2, 0, 6.284); g.fill();
        // шлем
        g.fillStyle = C.red;
        g.beginPath(); g.arc(0, -34 + crouch, 6.2, Math.PI, 6.284); g.fill();
        g.fillRect(-6.2, -34 + crouch, 12.4, 2.1);
        g.restore();
      }

      function drawObstacle(g, o, gy) {
        g.save(); g.translate(o.x, gy);
        if (o.kind === 'cone') {
          g.fillStyle = C.red;
          g.beginPath(); g.moveTo(0, 0); g.lineTo(9, 0); g.lineTo(4.5, -o.h); g.closePath(); g.fill();
          g.fillStyle = C.paper; g.fillRect(1.5, -o.h * .62, 6, 3);
        } else if (o.kind === 'rail') {
          g.strokeStyle = C.muted; g.lineWidth = 3;
          g.beginPath(); g.moveTo(0, -o.h); g.lineTo(o.w, -o.h); g.stroke();
          g.lineWidth = 2.4;
          g.beginPath(); g.moveTo(3, -o.h); g.lineTo(3, 0); g.moveTo(o.w - 3, -o.h); g.lineTo(o.w - 3, 0); g.stroke();
        } else {
          g.fillStyle = C.wood; g.fillRect(0, -o.h, o.w, o.h);
          g.fillStyle = 'rgba(16,16,17,.16)'; g.fillRect(0, -o.h, o.w, 3);
        }
        g.restore();
      }

      function draw() {
        const g = ctxd, gy = S.groundY;
        g.clearRect(0, 0, W, H);

        // фон и «крыша» парка
        g.fillStyle = C.paper; g.fillRect(0, 0, W, H);
        g.strokeStyle = 'rgba(16,16,17,.07)'; g.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
          g.beginPath(); g.moveTo(0, 26 + i * 18); g.lineTo(W, 20 + i * 18); g.stroke();
        }

        // стартовый радиус слева — четверть окружности, как в логотипе
        const R = Math.min(118, H * .33);
        g.fillStyle = C.red;
        g.beginPath();
        g.moveTo(0, gy - R); g.arc(0, gy, R, -Math.PI / 2, 0); g.lineTo(0, gy); g.closePath();
        g.fill();

        // земля
        g.strokeStyle = C.ink; g.lineWidth = 2;
        g.beginPath(); g.moveTo(0, gy + 9); g.lineTo(W, gy + 9); g.stroke();
        g.fillStyle = 'rgba(16,16,17,.05)'; g.fillRect(0, gy + 9, W, H - gy - 9);

        // тряска при падении
        if (S.shake > 0) { g.save(); g.translate((Math.random() - .5) * S.shake, (Math.random() - .5) * S.shake); }

        S.obs.forEach((o) => drawObstacle(g, o, gy + 9));

        // скейтер: на старте съезжает с радиуса
        let sx = S.x, sy = S.y;
        if (S.dropIn > 0) {
          const a = 1 - S.dropIn;
          const th = a * Math.PI / 2;
          sx = R * Math.sin(th) * .82 + S.x * a * .18;
          sy = gy - R * Math.cos(th);
        }
        drawSkater(g, sx, sy, S.spin, S.trick, S.fall ? Math.min(1.35, S.fallT || 0) : 0);

        if (S.shake > 0) g.restore();
      }

      /* ---- шаг мира ---- */
      function step() {
        if (!running) return;
        S.t++;

        if (S.dropIn > 0) {
          S.dropIn = Math.max(0, S.dropIn - 0.018);
          draw(); raf = requestAnimationFrame(step); return;
        }

        if (S.fall) {
          S.fallT = (S.fallT || 0) + .08;
          S.shake = Math.max(0, S.shake - 1.2);
          draw();
          if (S.fallT > 1.1) { finish(); return; }
          raf = requestAnimationFrame(step); return;
        }

        S.speed = Math.min(10.5, 4.2 + S.dist / 520);
        S.dist += S.speed / 9;
        // очко за каждые 10 метров: даже неудачный заезд что-то приносит
        const dp = Math.floor(S.dist / 10);
        if (dp > (S.distPts || 0)) { S.score += dp - (S.distPts || 0); S.distPts = dp; }

        // физика прыжка
        if (S.air) {
          S.vy += 0.62;
          S.y += S.vy;
          if (S.trick === 'flip') S.spin += 0.34;
          if (S.y >= S.groundY) {
            S.y = S.groundY; S.air = false; S.vy = 0;
            // кикфлип обязан быть докручен к моменту касания
            if (S.trick === 'flip' && Math.abs((S.spin % 6.283)) > 1.1 && Math.abs((S.spin % 6.283)) < 5.2) {
              return bail(3);
            }
            S.trick = null; S.spin = 0;
          }
        }

        // препятствия
        S.nextObs -= S.speed;
        if (S.nextObs <= 0) {
          const r = Math.random();
          const kind = r < .5 ? 'cone' : (r < .8 ? 'box' : 'rail');
          const h = kind === 'cone' ? 22 : kind === 'box' ? 30 : 42;
          const w = kind === 'cone' ? 9 : kind === 'box' ? 34 : 62;
          S.obs.push({ x: W + 40, kind: kind, h: h, w: w, passed: false });
          S.nextObs = 230 + Math.random() * 210 - S.speed * 8;
        }
        for (let i = S.obs.length - 1; i >= 0; i--) {
          const o = S.obs[i];
          o.x -= S.speed;
          if (o.x + o.w < -20) { S.obs.splice(i, 1); continue; }
          // столкновение
          const feet = S.y;
          const clearance = S.groundY - feet;
          const overlap = S.x + 10 > o.x && S.x - 10 < o.x + o.w;
          if (overlap && clearance < o.h - 3) {
            if (!S.air) return bail(clearance < 4 ? 1 : 0);
            return bail(2);
          }
          if (!o.passed && o.x + o.w < S.x - 14) {
            o.passed = true;
            S.score += S.trick === 'flip' ? 20 : 10;
          }
        }

        document.getElementById('g-score').textContent = S.score;
        document.getElementById('g-dist').textContent = Math.round(S.dist);
        draw();
        raf = requestAnimationFrame(step);
      }

      function bail(kind) {
        S.fall = t.falls[Math.min(kind, t.falls.length - 1)];
        S.fallT = 0; S.shake = 9;
        if (navigator.vibrate) { try { navigator.vibrate(18); } catch (e) {} }
        draw();
        raf = requestAnimationFrame(step);
      }

      function finish() {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        if (S.score > best) {
          best = S.score;
          try { localStorage.setItem('rd-game-best', String(best)); } catch (e) {}
        }
        document.getElementById('g-best').textContent = best;
        document.getElementById('g-over-t').textContent = S.fall ? S.fall.t : t.overTitle;
        document.getElementById('g-over-score').textContent = S.score;
        document.getElementById('g-over-l').textContent = S.fall ? S.fall.l : '';
        stage.hidden = true;
        over.hidden = false;
        if (window.RDApp_say) window.RDApp_say((S.fall ? S.fall.t + '. ' : '') + S.score + ' ' + t.scoreUnit);
        over.scrollIntoView({ block: 'nearest' });
        const again = document.getElementById('g-again');
        if (again) again.focus({ preventScroll: true });
      }

      function start() {
        gate.hidden = true; over.hidden = true; stage.hidden = false;
        resize(); reset();
        running = true;
        stage.setAttribute('tabindex', '-1');
        stage.focus({ preventScroll: true });
        if (window.RDApp_say) window.RDApp_say(t.startSay);
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(step);
      }

      function stop() {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        stage.hidden = true; over.hidden = true; gate.hidden = false;
        /* Escape и «Выйти» прятали заезд, но фокус оставался на скрытом
           узле и падал в body: клавиатурный игрок терял место и начинал
           Tab с начала документа. Возвращаем на кнопку старта — как это
           уже делает finish(). */
        if (go) go.focus({ preventScroll: true });
      }

      go.addEventListener('click', function () {
        if (go.getAttribute('aria-disabled') === 'true') return;
        start();
      }, sig);
      document.getElementById('g-again').addEventListener('click', start, sig);
      document.getElementById('g-quit').addEventListener('click', stop, sig);
      window.addEventListener('resize', function () {
        if (!running || !S) return;
        const onGround = S.y === S.groundY;
        resize();
        S.groundY = Math.round(H * .74);
        S.x = Math.round(Math.min(118, H * .33) + 46);
        // без пересчёта Y скейтер уходил под нижнюю кромку и падал «сам»
        S.y = onGround ? S.groundY : Math.min(S.y, S.groundY);
      }, sig);

      /* Пауза с возможностью продолжить. Раньше уход на другую вкладку
         останавливал заезд навсегда: возобновления не существовало. */
      let paused = false;
      const pauseEl = document.createElement('div');
      pauseEl.className = 'g-pause'; pauseEl.hidden = true;
      pauseEl.innerHTML = '<button type="button" class="btn btn--primary">' + t.resume + '</button>';
      canvas.parentNode.appendChild(pauseEl);
      const resume = function () {
        if (!paused) return;
        paused = false; pauseEl.hidden = true; running = true;
        S.lastTap = 0; raf = requestAnimationFrame(step);
      };
      pauseEl.querySelector('button').addEventListener('click', resume, sig);
      document.addEventListener('visibilitychange', function () {
        if (document.hidden && running) {
          paused = true; running = false;
          if (raf) cancelAnimationFrame(raf);
          pauseEl.hidden = false;
        }
        /* обратно заезд не запускается сам: игрок мог ещё не смотреть на экран */
      }, sig);

      /* Teardown: уход с маршрута во время заезда оставлял живой rAF,
         который писал в удалённые узлы и падал с TypeError */
      sig.signal.addEventListener('abort', function () {
        running = false; paused = false;
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      });
    }
  };
})(typeof window !== 'undefined' ? window : this);
