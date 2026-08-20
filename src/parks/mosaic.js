/* =====================================================================
   ПАРК МОЗАИКА — для тех, кто уже катается
   Этим файлом владеет чат «Мозаика». Другие чаты его не трогают.

   Характер: профессионально и дерзко. Дерзость не в «ты» и не в сленге
   ради сленга, а в том, что здесь ничего не объясняют и ни перед кем
   не заискивают. Термины без расшифровки, безличные конструкции —
   так райдеры говорят про спот.

   Источник фактов: тренер Red Deck, 18.08.2026 (спайн, длинные
   мини-рамповые радиусы, линии по всему парку). Сравнение с другими
   крытыми парками по имени на сайт не выносим: ст. 5 ФЗ-38.
   ===================================================================== */
(function (root) {
  'use strict';

  const T = {
    ru: {
      kicker: 'Дубровка · ТРЦ «Мозаика», 7-я Кожуховская',
      title: 'Для тех, кто уже катается',
      lead: 'Спайн под перелёты и трансферы в грайнд. Мини-рамповые радиусы длинные — трюк успевает лечь. Линия катится через весь парк, а не вокруг одной фигуры.',

      featKick: 'Что здесь есть',
      featTitle: 'Парк собран под линии, а не под одну фигуру',
      feats: [
        { h: 'Спайн', b: 'Перелетать и уходить в трансфер в скольжение.', status: 'w' },
        {
          h: 'Радиусы', status: 'w',
          num: '0,5–2,35 м', numStatus: 'o',
          b: 'Мини-рамповые и длинные. Трюки на них заходят и повторяются.'
        },
        { h: 'Линии', b: 'Заезд не кончается на первой фигуре — связывается по всему парку.', status: 'w' },
        { h: 'Свободное катание', b: 'По загрузке: площадка компактная, занятия идут по расписанию. Перед выездом — звонок.', status: 'w' }
      ],

      findTitle: 'Как найти вход',
      zonesTitle: 'Состав и размеры',

      phSpine: 'Спайн в центре зала, по краям радиусы',
      phRadius: 'Радиус и бэнк, вид с пола',
      phFloor: 'Общий вид площадки',
      phEntrance: 'Вход в клуб внутри ТРЦ, вывеска Red Deck',
      capEntrance: 'Вход в клуб — по вывеске Red Deck',

      backText: 'Если это первый заход на доску — вам в Химки. Лёгкие радиусы, ничего высокого, тренер рядом.',
      backCta: 'Открыть Химки'
    },
    en: {
      kicker: 'Dubrovka · Mozaika mall, 7th Kozhukhovskaya',
      title: 'For riders who already skate',
      lead: 'A spine you can actually work: airing over, transfer into a grind. Transitions are mini-ramp size and long — tricks land. A line runs across the whole park instead of circling one feature.',

      featKick: 'What is here',
      featTitle: 'The park is built for lines, not for one feature',
      feats: [
        { h: 'Spine', b: 'Air over it, transfer into a grind.', status: 'w' },
        {
          h: 'Transitions', status: 'w',
          num: '0.5–2.35 m', numStatus: 'o',
          b: 'Mini-ramp size and long. Tricks land and repeat.'
        },
        { h: 'Lines', b: 'A run does not end on the first feature — it links across the park.', status: 'w' },
        { h: 'Free-ride', b: 'Depends on how busy it is: the floor is compact and classes run to a timetable. Call before you set off.', status: 'w' }
      ],

      findTitle: 'Finding the entrance',
      zonesTitle: 'Layout and sizes',

      phSpine: 'A spine in the middle of the floor, transitions on both sides',
      phRadius: 'A transition and a bank seen from the floor',
      phFloor: 'General view of the floor',
      phEntrance: 'The club entrance inside the mall, Red Deck sign',
      capEntrance: 'The entrance — look for the Red Deck sign',

      backText: 'First time on a board — go to Khimki. Easy transitions, nothing high, a coach right there.',
      backCta: 'Open Khimki'
    }
  };

  const CARD = {
    tag: { ru: 'Спайн, длинные радиусы, линии', en: 'Spine, long transitions, lines' },
    tagStatus: 'w',
    body: {
      ru: 'Парк для тех, кто уже уверенно едет. Спайн под перелёты и трансферы, длинные мини-рамповые радиусы, линии через всю площадку.',
      en: 'A park for riders who already roll confidently. A spine you can actually work, long mini-ramp transitions and lines that run across the whole floor.'
    }
  };

  const ParkPage = root.RDParkPage;

  /* ---------------------------------------------------------------
     DubrovkaPage — наследник ParkPage. Слаг парка остаётся 'mosaic':
     так он записан в content.js и в адресах страниц, а называется парк
     по району — Дубровка.

     Переопределяет три шага из четырёх: свой герой, свои секции и свой
     переход. Общей остаётся meta — строка адреса, часов и цен у всех
     трёх парков одна и та же, и это ровно то, ради чего база есть.
     --------------------------------------------------------------- */
  function DubrovkaPage() {
    ParkPage.call(this, {
      slug: 'mosaic',
      texts: T,
      card: CARD,
      nextSlug: 'khimki'
    });
  }

  DubrovkaPage.prototype = Object.create(ParkPage.prototype);
  DubrovkaPage.prototype.constructor = DubrovkaPage;

  /* Свой герой, а не базовый: в content.js у парка ещё photo: null,
     и общий каркас отдал бы обычную шапку вместо кадра. Съёмка от
     18.08.2026, людей в кадре нет — согласий не требуется.
     Класс pk--mosaic на секции нужен, чтобы правки вуали остались
     внутри своего модификатора и не задели соседей. */
  /* Свой герой снят 19.08.2026: он повторял базовый, но с плотным
     веилом главной — страница выглядела утопленной в черноту. Базовый
     берёт тот же спайн (wide) и портретный кадр на телефон (tall). */

  DubrovkaPage.prototype.sections = function (h, p, frame) {
    return this.feats(h) + this.zones(h, p, frame);
  };

  /* что здесь есть: спайн, радиусы, линии, свободное катание */
  DubrovkaPage.prototype.feats = function (h) {
    const t = this.text(h), esc = h.esc, f = h.f;

    return '<section class="sec sec--line pk pk--mosaic"><div class="shell">' +
      '<p class="kick kick--plain rv">' + esc(t.featKick) + '</p>' +
      '<h2 class="t-h2 rv" style="--i:1;max-width:20ch;margin-bottom:30px">' + esc(t.featTitle) + '</h2>' +
      '<div class="grid g2 pk__feats">' +
      t.feats.map(function (x, i) {
        /* Размер выносим отдельной строкой, а плашку вешаем на само число:
           состав фигур подтверждён тренером, цифры со старого сайта — нет.
           Умеющему человеку радиус говорит больше любого прилагательного. */
        return '<div class="pk__feat rv" style="--i:' + (i % 2) + '">' +
          '<h3 class="t-h4">' + f(esc(x.h), x.status) + '</h3>' +
          (x.num ? '<p class="pk__num">' + f(esc(x.num), x.numStatus) + '</p>' : '') +
          '<p class="t-body t-muted">' + esc(x.b) + '</p></div>';
      }).join('') +
      '</div></div></section>';
  };

  /* Свой блок зон вместо базового: состав фигур берём из общего слоя,
     а кадры ставим свои — у парка их четыре, и раскладка другая. */
  DubrovkaPage.prototype.zones = function (h, p, frame) {
    const t = this.text(h), esc = h.esc, f = h.f;

    const zoneList = p.zones.map(function (z, i) {
      return '<div class="li rv" style="--i:' + i + '">' +
        '<span class="mono" style="display:block;margin-bottom:6px">' + esc(h.P(z.level)) + '</span>' +
        '<b>' + f(esc(h.P(z.title)), z.status) + '</b><br>' + esc(h.P(z.body)) + '</div>';
    }).join('');

    return '<section class="sec sec--line pk pk--mosaic"><div class="shell">' +
      '<h2 class="t-h2 rv" style="margin-bottom:28px">' + esc(t.zonesTitle) + '</h2>' +
      '<div class="grid g-lead" style="margin-bottom:var(--gap)">' +
      '<div>' + zoneList + '</div>' +
      '<figure class="rv rv-ph" style="margin:0"><div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img('mosaic-radius-16x9', t.phRadius) + '</div></figure>' +
      '</div>' +
      /* нижний ряд во всю ширину: одна колонка текста рядом с тремя
         кадрами дала бы пустую половину экрана */
      '<div class="grid g2">' +
      '<figure class="rv rv-ph" style="margin:0"><div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img('mosaic-floor-16x9', t.phFloor) + '</div></figure>' +
      '<figure class="rv rv-ph" style="--i:1;margin:0"><div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img('mosaic-entrance-16x9', t.phEntrance) + '</div>' +
      '<figcaption class="cap">' + esc(t.capEntrance) + '</figcaption></figure>' +
      '</div></div></section>';
  };

  /* Единственный парк, который уводит назад по маршруту, а не вперёд:
     отсюда и ключи backText/backCta вместо общих nextText/nextCta. */
  DubrovkaPage.prototype.next = function (h, p, frame) {
    const t = this.text(h);
    return frame.next(h, this.nextSlug, t.backText, t.backCta);
  };

  root.RDParks.register(DubrovkaPage);
})(typeof window !== 'undefined' ? window : this);
