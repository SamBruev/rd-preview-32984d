/* =====================================================================
   ПАРК ХИМКИ — сюда приходят в первый раз
   Этим файлом владеет чат «Химки». Другие чаты его не трогают.

   Характер: понятно, просто, доброжелательно. Короткие фразы, обычные
   слова, ни одного термина без расшифровки. Тон администратора, который
   отвечает по телефону, а не бренда, который себя продаёт.

   Читатель, на котором проверяется каждая фраза: мать 30–45, впервые в
   жизни думающая про скейт. Если фразу нельзя понять без словаря —
   фраза переписывается. Поэтому слова «радиус», «минька», «спайн» на
   этой странице не встречаются: тренер говорит «лёгкие радиуса», а
   страница пишет «низкие и пологие фигуры».

   Что на самом деле беспокоит новичка: не боль, а стыд. «Я буду выглядеть
   глупо», «все вокруг умеют», «я кому-нибудь помешаю». Родитель добавляет
   своё: «я ничего в этом не понимаю» и «куда мне деться на полтора часа».
   Взрослый с нуля добавляет третье: «я буду единственным взрослым среди
   детей». Блоки отвечают именно на это, а не перечисляют фигуры.

   Источник фактов: тренер Red Deck, 18.08.2026 — лёгкие маленькие радиусы,
   ничего масштабного, парк для совсем начинающих. Организационная часть
   («первый визит», «что взять») опирается на правила клуба из content.js:
   инструктаж, согласие, защита и запрет родителям выходить на площадку —
   всё это подтверждённые пункты договора, а не наши предположения.
   ===================================================================== */
(function (root) {
  'use strict';

  const T = {
    ru: {
      kicker: 'Химки · ТЦ «Капитолий»',
      /* Заголовок и первая фраза лида — формулировка владельца
         19.08.2026. Восклицательные знаки сняты по его же тон-гайду.
         «Маленькая» заменена на «компактную» по всей странице —
         тоже его правка. */
      title: 'Твой первый парк',
      /* «Радиусы лёгкие и маленькие» — слова тренера. Для читателя,
         который никогда не был в скейт-парке, «радиус» пустой звук,
         поэтому на сайте это «низкие и пологие фигуры».
         «Падать здесь невысоко» намеренно не написано: в зонах парка
         числится мини-рампа, её высота неизвестна, а обещание высоты
         наугад давать нельзя. */
      /* «Здесь не умеет никто» снята владельцем 20.08.2026 — странная
         формулировка. Смысл тот же — вокруг такие же начинающие. */
      lead: 'Много новичков — среди них ты будешь чувствовать себя уютно. Все вокруг тоже только начинают: площадка компактная, фигуры низкие и пологие, тренер видит всю площадку целиком.',

      calmKick: 'Что обычно беспокоит',
      calmTitle: 'Четыре вещи, из‑за которых сюда не решаются приехать',
      calm: [
        { q: 'А если я упаду?', a: 'Упадёте. Все падают, и первое, чему здесь учат, — падать правильно: группироваться, уходить на бок, не выставлять руку. Площадка собрана под первые шаги, высоких фигур на ней нет.', status: 'w' },
        { q: 'А если все вокруг умеют, а я нет?', a: 'В Химках рядом с вами такие же начинающие. Никто не крутит трюки у вас над головой.', status: 'w' },
        { q: 'Я кому-нибудь помешаю?', a: 'На площадку заходят по очереди и смотрят по сторонам — это первое правило, которое объясняет тренер. Не строгость, а способ не столкнуться.', status: 'c' },
        { q: 'Что мне делать, пока идёт занятие?', a: 'Площадка на втором этаже торгового центра: тепло, есть где сесть и куда сходить. Стоять на улице и ждать не нужно.', status: 'w' }
      ],

      /* Взрослый с нуля — вторая аудитория этой страницы, и до сих пор
         страница говорила только с родителем. Барьер у взрослого другой:
         не падение, а «я буду единственным взрослым среди детей».
         Единственный честный ответ — персональное занятие: оно есть
         каждый день и подтверждено прайсом. Взрослых групп в Химках мы
         не обещаем: данных о них нет. */
      adultKick: 'Если вам не двенадцать',
      adultTitle: 'Взрослые здесь тоже начинают с нуля',
      adultBody: 'Взрослому обычно мешает не страх упасть, а мысль, что он будет единственным взрослым среди детей. На персональном занятии этого вопроса нет: тренер, площадка и вы. Ждать, пока наберётся группа, не нужно — персональные идут каждый день.',
      adultTrial: 'Пробное персональное занятие —',
      adultCta: 'Как устроены персональные',

      /* Организационная тревога снимается дешевле любой другой: человек
         не знает сценария и поэтому не едет. Пять шагов — ровно то, что
         подтверждено правилами клуба. Чего мы не знаем (сколько именно
         приезжать заранее, где раздевалка в этом ТЦ) — не выдумываем, а
         сводим к одной строке с телефоном внизу блока. */
      firstKick: 'Как это устроено',
      firstTitle: 'Как проходит первый визит',
      steps: [
        { h: 'Приезжайте заранее', b: 'До начала нужно оформить бумаги и переодеться. На месте вас встретит администратор — скажите, на какое занятие и на чьё имя записывались.', status: 'w' },
        { h: 'Подпишете согласие', b: 'Информированное согласие — приложение к договору, в нём правила площадки. За ребёнка подписывает родитель или законный представитель.', status: 'c' },
        { h: 'Тренер проведёт инструктаж', b: 'Перед первым выходом на площадку он объясняет правила: в каком порядке заходят на площадку, как уступать, что делать при падении. Это не три фразы у стойки — вводный инструктаж прописан в договоре.', status: 'c' },
        { h: 'Снаряжение выдадут на месте', b: 'Своё приносить не нужно. Что именно входит в стоимость занятия, а что берётся в аренду, администратор скажет при записи.', status: 'w' },
        { h: 'Родитель смотрит со стороны', b: 'Смотреть занятие можно, выходить на площадку — нельзя: в зоне катания только те, кто катается, и тренер. Это правило клуба, а не решение конкретного тренера.', status: 'c' }
      ],
      firstAsk: 'Осталось что-то непонятным — позвоните и спросите. Сколько детей в группе, кто ведёт занятие, что делать, если ребёнок испугался: это нормальные вопросы, а не неудобные.',

      /* Врезка со сборами. Одежда и обувь — дословно те же требования,
         что в правилах безопасности, только переведённые с языка
         регламента на язык человека, который собирает ребёнка из дома. */
      kitTitle: 'Что взять с собой',
      kit: [
        { h: 'Одежда', b: 'Спортивная, без шнурков и длинных завязок. Шнурок, попавший в колесо, — обычная причина падения.', status: 'c' },
        { h: 'Обувь', b: 'Закрытая, на плоской нескользящей подошве. Сандалии и обувь на каблуке на площадку не пустят.', status: 'c' },
        { h: 'Шлем и защиту брать не нужно', b: 'Они есть на месте. Детям до 16 лет шлем обязателен во всех зонах, а на тренировке полный комплект надевают все — независимо от возраста и опыта.', status: 'c' },
        { h: 'Доску тоже покупать рано', b: 'Доска и защита есть в аренду на месте. Сначала стоит понять, пойдёт ли вообще, и только потом тратиться.', status: 'w' }
      ],
      kitRent: 'Аренда на месте: полный комплект защиты —',
      kitRentBoard: 'доска —',
      hallCap: 'Вход в зал: второй этаж, вывеска видна из общего прохода',
      peopleCap: 'День рождения парка, сентябрь 2025',

      findTitle: 'Как найти вход',
      zonesTitle: 'Что стоит на площадке',

      /* Переход дальше по сети. Тренер сказал прямо: «дойти до
         определённого уровня и потом оттуда надо уезжать». В разговоре
         это честно, на сайте прочиталось бы как «наш парк — тупик»,
         поэтому развёрнуто в маршрут внутри клуба.
         ЖДЁТ РЕШЕНИЯ ВЛАДЕЛЬЦА: публикуем этот блок или нет. */
      nextText: 'Когда в Химках станет тесно — а это случится, и это хорошая новость — вас ждут на Дубровке. Тот же клуб, те же тренеры, другие фигуры.',
      nextCta: 'Посмотреть Дубровку'
    },
    en: {
      kicker: 'Khimki · Capitol mall',
      title: 'Your first park',
      lead: 'Plenty of first-timers — an easy place to feel at home. Everyone around you is just starting too: the venue is compact, the features low and mellow, and the coach sees the whole floor.',

      calmKick: 'What usually worries people',
      calmTitle: 'Four reasons people put off coming',
      calm: [
        { q: 'What if I fall?', a: 'You will. Everyone does, and the first thing taught here is how to fall properly: tuck in, go to the side, never put a hand down. The floor is set up for first steps — there are no high features on it.', status: 'w' },
        { q: 'What if everyone else can and I can’t?', a: 'In Khimki the people next to you are beginners too. Nobody is throwing tricks over your head.', status: 'w' },
        { q: 'Will I get in someone’s way?', a: 'Riders take the floor one at a time and look around — it is the first rule the coach explains. Not strictness, just how you avoid a collision.', status: 'c' },
        { q: 'What do I do while the class runs?', a: 'The venue is on the second floor of a mall: warm, somewhere to sit, somewhere to go. No waiting outside.', status: 'w' }
      ],

      adultKick: 'If you are not twelve',
      adultTitle: 'Adults start from zero here too',
      adultBody: 'What usually stops an adult is not the fear of falling but the thought of being the only adult among children. A one-to-one lesson removes the question: the coach, the floor and you. No waiting for a group to fill up — one-to-one lessons run every day.',
      adultTrial: 'A trial one-to-one lesson —',
      adultCta: 'How one-to-one works',

      firstKick: 'How it works',
      firstTitle: 'How a first visit goes',
      steps: [
        { h: 'Come a little early', b: 'There is paperwork to sign and clothes to change before the start. The administrator will meet you — say which class you are here for and whose name the booking is under.', status: 'w' },
        { h: 'You sign the consent form', b: 'The informed consent is an annex to the contract and contains the rules of the floor. For a child it is signed by a parent or legal guardian.', status: 'c' },
        { h: 'The coach runs a briefing', b: 'Before the first time on the floor he explains the rules: the order in which riders take the floor, how to give way, what to do when you fall. Not three sentences at the counter — the induction briefing is written into the contract.', status: 'c' },
        { h: 'Gear is handed out on site', b: 'You do not need to bring your own. What is included in the price of a lesson and what is rented, the administrator will tell you when you book.', status: 'w' },
        { h: 'Parents watch from the side', b: 'Watching is fine, stepping onto the floor is not: only riders and the coach are in the riding zone. That is a club rule, not one coach’s decision.', status: 'c' }
      ],
      firstAsk: 'Still unclear about something — call and ask. How many children are in a group, who runs the class, what to do if a child gets scared: these are normal questions, not awkward ones.',

      kitTitle: 'What to bring',
      kit: [
        { h: 'Clothes', b: 'Sportswear with no laces or long drawstrings. A lace caught in a wheel is a common cause of a fall.', status: 'c' },
        { h: 'Shoes', b: 'Closed, with a flat non-slip sole. Sandals and heels are not allowed on the floor.', status: 'c' },
        { h: 'No need to bring a helmet or pads', b: 'They are here. Under 16 — a helmet in every riding zone; at a lesson everyone wears the full set, regardless of age or experience.', status: 'c' },
        { h: 'It is too early to buy a board', b: 'Boards and pads are for rent on site. First find out whether it clicks at all, then spend the money.', status: 'w' }
      ],
      kitRent: 'Rental on site: full set of pads —',
      kitRentBoard: 'board —',
      hallCap: 'The entrance: second floor, the sign is visible from the walkway',
      peopleCap: 'The park’s birthday party, September 2025',

      findTitle: 'Finding the entrance',
      zonesTitle: 'What is on the floor',

      nextText: 'When Khimki starts feeling small — and it will, and that is good news — Dubrovka is waiting. Same club, same coaches, different features.',
      nextCta: 'See Dubrovka'
    }
  };

  const CARD = {
    tag: { ru: 'Первый раз на доске', en: 'First time on a board' },
    tagStatus: 'w',
    body: {
      ru: 'Самая компактная площадка сети, и в этом её смысл: фигуры низкие и пологие, ничего высокого, вся площадка видна целиком. Второй этаж торгового центра — ждать на улице не нужно.',
      en: 'The most compact venue in the network, and that is the point: low and gentle features, nothing high, the whole floor visible at once. Second floor of a mall — no waiting outside.'
    }
  };

  const ParkPage = root.RDParkPage;

  /* ---------------------------------------------------------------
     KhimkiPage — наследник ParkPage.

     Самая длинная страница сети: кроме общих блоков у неё три своих —
     четыре барьера, реплика взрослому и сценарий первого визита. При
     этом переопределяет она только два шага шаблонного метода: hero и
     sections. Всё остальное — база. Ровно этого от наследования и ждут:
     объём своего кода не превращается в объём своих исключений.
     --------------------------------------------------------------- */
  function KhimkiPage() {
    ParkPage.call(this, {
      slug: 'khimki',
      texts: T,
      card: CARD,
      nextSlug: 'mosaic'
    });
  }

  KhimkiPage.prototype = Object.create(ParkPage.prototype);
  KhimkiPage.prototype.constructor = KhimkiPage;

  /* Свой герой вместо базового. Причина: как только у парка появляется
     p.photo, базовый герой разворачивает кадр на весь экран, а исходники
     съёмки Химок — 1199 px по длинной стороне. На 1440 и на retina это
     заметно мягче остального сайта. Кадр живёт в боковой колонке, где
     разрешения хватает с запасом. */
  /* Свой герой снят 19.08.2026: белая шапка с портретом сбоку выглядела
     «страницей без фона» рядом с двумя другими парками. Работает базовый
     полноэкранный герой: широкий кадр зала, на телефоне — семейный
     портрет (photo.tall). Сам портрет дополнительно живёт в блоке
     первого визита, где он по смыслу. */

  KhimkiPage.prototype.sections = function (h, p, frame) {
    return this.calm(h) +
      this.adults(h, p) +
      this.first(h, p) +
      this.zones(h, p, frame);
  };

  /* четыре барьера — по-прежнему главный блок страницы */
  KhimkiPage.prototype.calm = function (h) {
    const t = this.text(h), esc = h.esc, f = h.f;

    return '<section class="sec sec--line pk pk--khimki"><div class="shell">' +
      '<p class="kick kick--plain rv">' + esc(t.calmKick) + '</p>' +
      '<h2 class="t-h2 rv" style="--i:1;max-width:20ch;margin-bottom:30px">' + esc(t.calmTitle) + '</h2>' +
      '<div class="grid g2 pk__calm">' +
      t.calm.map(function (c, i) {
        return '<div class="pk__q rv" style="--i:' + (i % 2) + '">' +
          '<p class="pk__q-h">' + esc(c.q) + '</p>' +
          '<p class="t-body t-muted">' + f(esc(c.a), c.status) + '</p></div>';
      }).join('') +
      '</div></div></section>';
  };

  /* отдельная реплика взрослому: короткая, без уговоров */
  /* Общий кадр с праздника стоит именно здесь, а не в галерее: он
     единственный отвечает на «я буду единственным взрослым среди детей»
     быстрее любого абзаца — на нём видно, что возрасты в зале разные. */
  KhimkiPage.prototype.adults = function (h, p) {
    const t = this.text(h), esc = h.esc, money = h.money, P = h.P;

    return '<section class="sec sec--line pk pk--khimki"><div class="shell grid g-lead">' +
      '<div>' +
      '<p class="kick kick--plain rv">' + esc(t.adultKick) + '</p>' +
      '<h2 class="t-h2s rv" style="--i:1;max-width:18ch;margin-bottom:22px">' + esc(t.adultTitle) + '</h2>' +
      '<p class="t-lede rv" style="--i:2;max-width:46ch">' + esc(t.adultBody) + '</p>' +
      '<p class="t-body rv" style="--i:3;margin-top:16px">' + esc(t.adultTrial) + ' <b>' +
      money(h.trialFrom(p.slug)) + '</b></p>' +
      '<a class="btn btn--ghost rv" style="--i:3;margin-top:20px" href="' + h.href('personal') + '">' +
      esc(t.adultCta) + '</a>' +
      '</div>' +
      '<figure class="rv rv-ph" style="margin:0">' +
      '<div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img(p.photo.people, P(p.photo.peopleAlt)) + '</div>' +
      '<figcaption class="cap">' + esc(t.peopleCap) + '</figcaption></figure>' +
      '</div></section>';
  };

  /* сценарий первого визита слева, сборы — тёмной врезкой справа */
  KhimkiPage.prototype.first = function (h, p) {
    const t = this.text(h), esc = h.esc, f = h.f, money = h.money, P = h.P;

    return '<section class="sec sec--line pk pk--khimki"><div class="shell grid g-lead">' +
      '<div>' +
      '<p class="kick kick--plain rv">' + esc(t.firstKick) + '</p>' +
      '<h2 class="t-h2s rv" style="--i:1;max-width:16ch;margin-bottom:26px">' + esc(t.firstTitle) + '</h2>' +
      '<div class="pk__steps">' +
      t.steps.map(function (s, i) {
        return '<div class="pk__step rv" style="--i:' + i + '">' +
          '<span class="mono">' + ('0' + (i + 1)) + '</span>' +
          '<p class="pk__step-h">' + esc(s.h) + '</p>' +
          '<p class="t-body t-muted">' + f(esc(s.b), s.status) + '</p></div>';
      }).join('') +
      '</div>' +
      '<p class="t-small t-muted rv" style="margin-top:22px;max-width:46ch">' + esc(t.firstAsk) + '</p>' +
      '<a class="btn btn--ghost btn--sm rv" style="margin-top:16px" href="tel:' + h.tel(p.phone) + '">' +
      esc(p.phone) + '</a>' +
      '</div>' +
      '<div>' +
      /* Семейный портрет переехал сюда из шапки: блок рассказывает
         про первый визит — кадр с родителями и ребёнком в защите
         отвечает ровно на этот вопрос. */
      '<figure class="rv rv-ph" style="margin:0 0 var(--gap)">' +
      '<div class="ph curve-bl curve-br" style="aspect-ratio:4/5">' +
      h.img(p.photo.first, P(p.photo.firstAlt)) + '</div></figure>' +
      '<div class="dark box rv" style="padding:clamp(24px,4vw,36px)">' +
      '<h2 class="t-h4" style="margin-bottom:16px">' + esc(t.kitTitle) + '</h2>' +
      t.kit.map(function (k, i) {
        return '<div class="li' + (i === t.kit.length - 1 ? ' li--last' : '') + '">' +
          '<b>' + esc(k.h) + '</b><br>' + f(esc(k.b), k.status) + '</div>';
      }).join('') +
      '<p class="t-small" style="color:var(--on-dark-2);margin-top:18px">' +
      esc(t.kitRent) + ' <b>' + money(p.rental.full) + '</b>, ' +
      esc(t.kitRentBoard) + ' <b>' + money(p.rental.board) + '</b></p>' +
      '</div>' +
      /* кадр вывески: «куда именно идти» словами объясняется хуже, чем
         одним снимком витрины в общем проходе торгового центра */
      '<figure class="rv rv-ph" style="margin:var(--gap) 0 0">' +
      '<div class="ph curve-bl curve-br" style="aspect-ratio:16/9">' +
      h.img(p.photo.hall, P(p.photo.hallAlt)) + '</div>' +
      '<figcaption class="cap">' + esc(t.hallCap) + '</figcaption></figure>' +
      '</div></div></section>';
  };

  root.RDParks.register(KhimkiPage);
})(typeof window !== 'undefined' ? window : this);
