/* =====================================================================
   ПАРК СОКОЛЬНИКИ — флагман
   Этим файлом владеет чат «Сокольники». Другие чаты его не трогают.

   Характер: все три регистра сразу, но не смешанные. Общая рамка
   спокойная и уверенная, внутри — три дорожки под три аудитории:
   с нуля (доброжелательно), боул и линии (по-скейтерски),
   вёрт (сдержанно и строго).

   Главная мысль: масштаб продаётся как простор, а не как вызов.
   Большой парк — это не «сложно», это «вам не тесно».
   ===================================================================== */
(function (root) {
  'use strict';

  const T = {
    ru: {
      kicker: 'Сокольники · Сокольнический Вал',
      title: 'Флагман сети — и единственный с вёрт-рампой',
      lead: 'Большой парк — это не про сложность. Это про то, что вам не тесно: занятие и свободное катание идут одновременно и не мешают друг другу. Поэтому кататься здесь можно почти всегда.',

      laneKick: 'Кому что подойдёт',
      laneTitle: 'Три дорожки под три разных уровня',
      lanes: [
        {
          /* Отдельная зона первых шагов не подтверждена — поэтому она здесь
             не заявляется вовсе. Всё сказанное подтверждено, статус 'w',
             плашка «уточняется» с заголовка уходит: на заголовке она
             читалась как неуверенность в самом обучении новичков. */
          h: 'С нуля',
          b: 'Начало то же, что в Химках: доска, стойка, первый спуск. Разница только в том, что здесь просторнее — никого не надо обходить и никто не торопит.',
          status: 'w'
        },
        {
          h: 'Боул и линии',
          b: 'Чаша, радиусы, минька — единственный боул в сети. Скорость берётся с радиусов и держится по кругу: линия идёт целиком, а не собирается по кускам. Занятие в это время идёт рядом и не пересекается.',
          status: 'w'
        },
        {
          /* Последняя фраза про миньку — ступень к вёрту. Она держится на
             том, что в парке есть (минька и радиусы), а не на методике,
             поэтому статус остаётся 'w'. Если тренер подтвердит порядок
             допуска, формулировку можно усилить. */
          h: 'Вёрт',
          b: 'Самая большая вёрт-рампа в Восточной Европе. Заезд по допуску тренера, в полной защите, со страховкой на первых попытках. Новичков сюда не выпускают — и это не ограничение, а условие того, что вы до неё дорастёте. Дорога к ней короче, чем кажется: минька и радиусы боула — то же катание, только ниже.',
          status: 'w'
        }
      ],

      bowlAlt: 'Чаша и радиусы скейт-парка Red Deck в Сокольниках',
      bowlCap: 'Чаша и радиусы',

      findTitle: 'Вход не с главной аллеи',
      zonesTitle: 'Что стоит в парке',

      nextText: 'Уже уверенно катаетесь и хотите линии и спайн? На Дубровке парк собран именно под это.',
      nextCta: 'Открыть Дубровку'
    },
    en: {
      kicker: 'Sokolniki · Sokolnichesky Val',
      title: 'The flagship — and the only one with a vert ramp',
      lead: 'A big park is not about difficulty. It is about not being crowded: a class and free-ride run at the same time without colliding. That is why you can ride here almost any time.',

      laneKick: 'Who it suits',
      laneTitle: 'Three lanes for three levels',
      lanes: [
        { h: 'From zero', b: 'The same start as in Khimki: the board, the stance, the first roll down. The only difference is the room — nobody to ride around and nobody rushing you.', status: 'w' },
        { h: 'Bowl and lines', b: 'The bowl, transitions, a mini — the only bowl in the network. Speed comes off the transitions and holds around the loop: a line runs whole instead of being pieced together. A class runs alongside and never crosses it.', status: 'w' },
        { h: 'Vert', b: 'The largest vert ramp in Eastern Europe. Access with a coach’s clearance, in full pads, spotted on the first attempts. Beginners are not let onto it — and that is not a restriction, it is the condition of growing into it. The way there is shorter than it looks: the mini and the bowl transitions are the same riding, only lower.', status: 'w' }
      ],

      bowlAlt: 'The bowl and transitions at Red Deck Sokolniki',
      bowlCap: 'The bowl and transitions',

      findTitle: 'The entrance is not off the main alley',
      zonesTitle: 'What the park is made of',

      nextText: 'Riding confidently and after lines and a spine? Dubrovka is built exactly for that.',
      nextCta: 'Open Dubrovka'
    }
  };

  /* короткая копия для карточки на главной — ею владеет этот же чат */
  const CARD = {
    tag: { ru: 'От первых шагов до вёрта', en: 'From first steps to vert' },
    tagStatus: 'w',
    body: {
      ru: 'Самый большой парк сети и единственный с вёрт-рампой. Места хватает, чтобы одновременно шло занятие и катались все остальные, поэтому свободное катание открыто почти всегда.',
      en: 'The largest park in the network and the only one with a vert ramp. There is enough room to run a class and let everyone else ride at the same time, so free-ride is open almost any time.'
    }
  };

  const ParkPage = root.RDParkPage;

  /* ---------------------------------------------------------------
     SokolnikiPage — наследник ParkPage.

     Из четырёх шагов шаблонного метода парк переопределяет два: meta
     (тёмный блок «как найти вход» снят) и sections (три дорожки плюс
     общий блок зон). Герой и переход в соседний парк остаются базовыми
     — значит, их правка в базе дойдёт сюда сама.
     --------------------------------------------------------------- */
  function SokolnikiPage() {
    ParkPage.call(this, {
      slug: 'sokolniki',
      texts: T,
      card: CARD,
      nextSlug: 'mosaic'
    });
  }

  SokolnikiPage.prototype = Object.create(ParkPage.prototype);
  SokolnikiPage.prototype.constructor = SokolnikiPage;

  /* false — без тёмного блока «вход не с главной аллеи»: убран по
     решению владельца. Объяснение про вход остаётся в content.js
     (howToFind) и работает там, где действительно нужно. */
  SokolnikiPage.prototype.meta = function (h, p, frame) {
    return frame.meta(h, p, false);
  };

  SokolnikiPage.prototype.sections = function (h, p, frame) {
    return this.lanes(h) + this.zones(h, p, frame);
  };

  /* три дорожки под три уровня — главный блок этой страницы */
  SokolnikiPage.prototype.lanes = function (h) {
    const t = this.text(h), esc = h.esc, f = h.f;

    return '<section class="sec sec--line pk pk--sokolniki"><div class="shell">' +
      '<p class="kick kick--plain rv">' + esc(t.laneKick) + '</p>' +
      '<h2 class="t-h2 rv" style="--i:1;max-width:18ch;margin-bottom:30px">' + esc(t.laneTitle) + '</h2>' +
      '<div class="grid g3 pk__lanes">' +
      t.lanes.map(function (l, i) {
        return '<div class="pk__lane rv" style="--i:' + i + '">' +
          '<h3 class="t-h4">' + f(esc(l.h), l.status) + '</h3>' +
          '<p class="t-body t-muted">' + esc(l.b) + '</p></div>';
      }).join('') +
      '</div>' +
      /* Кадр чаши: до сих пор он жил только в галерее масштаба на главной,
         а на странице парка единственного боула сети не было видно.
         h.img() принимает имя кадра напрямую, поэтому content.js не нужен.
         Угол Сокольников по карте углов — снизу справа. */
      '<figure class="rv rv-ph" style="margin:36px 0 0">' +
      '<div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img('sokolniki-bowl-16x9', t.bowlAlt) + '</div>' +
      '<figcaption class="cap">' + esc(t.bowlCap) + '</figcaption></figure>' +
      '</div></section>';
  };

  root.RDParks.register(SokolnikiPage);
})(typeof window !== 'undefined' ? window : this);
