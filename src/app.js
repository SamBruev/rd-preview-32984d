/* =====================================================================
   RED DECK — каркас сайта
   Роутер, шапка, подвал, язык, наблюдатель появления, помощники.
   Дизайн — утверждённое направление 2b из design-handoff-2026-08.
   Контент — только из content.js. Ничего не выдумываем в разметке.
   ===================================================================== */
(function (root) {
  'use strict';

  const RD = root.RD;
  const doc = document;

  /* ---------- АДРЕСАЦИЯ: ДВА РЕЖИМА ----------
     На хостинге сайт живёт по настоящим адресам: /parks/sokolniki,
     /coaches, /prices. Это не косметика: при хеш-маршрутизации все
     шестнадцать страниц были для поисковика одним документом с одним
     заголовком, и локальные запросы вроде «скейт-парк Химки» уходили
     в никуда.
     Самодостаточный RED-DECK.html открывается двойным щелчком по
     file://, где pushState запрещён политикой происхождения, — там
     остаётся хеш. Режим определяется по протоколу, настраивать
     ничего не нужно.
     RD_BASE — префикс, если сайт лежит не в корне домена
     (например, /red-deck/ на GitHub Pages). Задаётся в index.html.
     Объявлено первым: ниже от этих значений зависят и пути к файлам,
     и построение ссылок. */
  const PATHMODE = location.protocol === 'http:' || location.protocol === 'https:';
  const BASE = String(root.RD_BASE || '').replace(/\/+$/, '');
  /* Путь к файлу из папки assets. На вложенном адресе /parks/sokolniki
     относительный путь разрешался бы в /parks/assets/ и ломался. */
  function asset(p) { return (PATHMODE ? BASE + '/' : '') + p; }

  /* ---------- 1. СОСТОЯНИЕ ---------- */
  const S = {
    lang: 'ru',
    park: 'sokolniki',
    dir: 'skate',
    fmt: 'sekciya',
    menu: false,
    route: { id: 'home', param: null }
  };

  try {
    const saved = localStorage.getItem('rd-park');
    if (saved && RD.park(saved)) S.park = saved;
    const lang = localStorage.getItem('rd-lang');
    if (lang === 'en' || lang === 'ru') S.lang = lang;
  } catch (e) {}

  /* ---------- 2. СЛОВАРЬ САЙТА ---------- */
  const DICT = {
    ru: {
      brand: 'Red Deck',
      hours: 'ежедневно 10:00–22:00',
      book: 'Записаться',
      call: 'Позвонить',
      menu: 'Меню',
      close: 'Закрыть',
      skip: 'К основному содержанию',
      more: 'Подробнее',
      nav: {
        sekciya: 'Секция', personal: 'Персональные', freeride: 'Катание',
        parks: 'Парки', prices: 'Цены', safety: 'Безопасность',
        gift: 'Сертификат', game: 'Игра', faq: 'Вопросы', contacts: 'Контакты',
        coaches: 'Тренеры',
        booking: 'Запись', legal: 'Документы', home: 'Главная',
        privacy: 'Политика конфиденциальности'
      },
      ftrFormats: 'ФОРМАТЫ', ftrParks: 'ПАРКИ', ftrDocs: 'ДОКУМЕНТЫ',
      /* «Крытых» — единственное слово в подвале, которое отличает клуб от
         уличной площадки и объясняет занятия зимой. «Москвы» проверено:
         все три адреса, включая Правобережную, 1Б, картографы держат
         за Москвой. Решение владельца 19.08.2026. */
      ftrAbout: 'Сеть крытых скейт-парков Москвы. Скейтбординг и ролики, дети и взрослые. ООО «РЕД ДЕК 3.0».',
      disclaimer: 'Цены действуют на момент публикации. Итоговую стоимость администратор подтверждает при записи.',
      docs: [['legal', 'Договор-оферта и правила'], ['privacy', 'Политика конфиденциальности']],
      tbd: 'уточняется',
      address: 'Адрес', phone: 'Телефон', hoursL: 'Часы',
      sectionRow: 'Секция, занятие',
      personalRow: 'Персональная, 60 мин',
      rideRow: 'Свободное катание',
      rideStatus: 'Катание открыто',
      always: 'почти всегда', byLoad: 'по загрузке',
      from: 'от',
      notFound: 'Такой страницы нет',
      notFoundLead: 'Ссылка устарела или в адресе опечатка. Вернитесь на главную — оттуда видно всё.',
      toHome: 'На главную',
      langRu: 'Русский', langEn: 'English'
    },
    en: {
      brand: 'Red Deck',
      hours: 'daily 10:00–22:00',
      book: 'Book',
      call: 'Call',
      menu: 'Menu',
      close: 'Close',
      skip: 'Skip to main content',
      more: 'More',
      nav: {
        sekciya: 'Section', personal: 'One-to-one', freeride: 'Free-ride',
        parks: 'Parks', prices: 'Prices', safety: 'Safety',
        gift: 'Gift card', game: 'Game', faq: 'FAQ', contacts: 'Contacts',
        coaches: 'Coaches',
        booking: 'Booking', legal: 'Documents', home: 'Home',
        privacy: 'Privacy policy'
      },
      ftrFormats: 'FORMATS', ftrParks: 'PARKS', ftrDocs: 'DOCUMENTS',
      ftrAbout: 'A network of indoor skateparks in Moscow. Skateboarding and inline skating, children and adults. RED DECK 3.0 LLC.',
      disclaimer: 'Prices are current as published. The administrator confirms the final price when you book.',
      docs: [['legal', 'Offer agreement and rules'], ['privacy', 'Privacy policy']],
      tbd: 'to be confirmed',
      address: 'Address', phone: 'Phone', hoursL: 'Hours',
      sectionRow: 'Section, one class',
      personalRow: 'One-to-one, 60 min',
      rideRow: 'Free-ride',
      rideStatus: 'Free-ride open',
      always: 'almost always', byLoad: 'depends on traffic',
      from: 'from',
      notFound: 'No such page',
      notFoundLead: 'The link is out of date or the address has a typo. Go back to the home page — everything is visible from there.',
      toHome: 'Home',
      langRu: 'Русский', langEn: 'English'
    }
  };

  /* ---------- 3. ПОМОЩНИКИ ---------- */
  function L() { return S.lang; }
  function D() { return DICT[S.lang]; }
  function P(o) { if (o == null) return ''; return typeof o === 'string' ? o : (o[S.lang] || o.ru || ''); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function money(n) {
    if (n == null) return '<span class="unk">' + esc(D().tbd) + '</span>';
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
  }

  /* пометка достоверности: 'c' молча, 'w' молча (рабочая), 'o' — честная плашка */
  function f(html, status) {
    if (status === 'o') return html + '<span class="tbd">' + esc(D().tbd) + '</span>';
    return html;
  }

  function tel(p) { return String(p || '').replace(/[^+\d]/g, ''); }

  /* overflow:hidden на body не держит фон в Safari на iOS — фиксируем позицию */
  let lockY = 0;
  function lockScroll(on) {
    const b = doc.body;
    if (on) {
      lockY = root.scrollY || 0;
      b.style.position = 'fixed';
      b.style.top = -lockY + 'px';
      b.style.left = '0';
      b.style.right = '0';
      b.style.overflow = 'hidden';
    } else if (b.style.position === 'fixed') {
      b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.overflow = '';
      root.scrollTo(0, lockY);
    } else {
      b.style.overflow = '';
    }
  }

  /* картинка: webp + jpg, всегда с alt.
     opts.eager — для первого экрана: он же LCP, лениво его грузить нельзя.
     opts.mobile — вертикальный кадр для телефона: горизонтальный кроп
     на 390 px срезает как раз то, ради чего снимали. */
  const PH_SIZE = {
    '16x9': [1199, 674], '4x5': [1080, 1350], '9x16': [1080, 1920]
  };
  /* Корень для картинок. При настоящих адресах он абсолютный: страница
     /parks/sokolniki лежит на два уровня глубже, и относительный путь
     увёл бы браузер в /parks/assets/. В файловом режиме остаётся
     относительным — там абсолютный путь указывает в корень диска. */
  const AST = asset('assets/photo/');
  function img(name, alt, cls, opts) {
    if (!name) return '';
    opts = opts || {};
    const key = (name.match(/(16x9|4x5|9x16)$/) || [])[0];
    const dim = PH_SIZE[key] || [1200, 800];
    return '<picture>' +
      (opts.mobile
        ? '<source media="(max-width: 759px)" srcset="' + AST + opts.mobile + '.webp" type="image/webp">' +
          '<source media="(max-width: 759px)" srcset="' + AST + opts.mobile + '.jpg">'
        : '') +
      '<source srcset="' + AST + name + '.webp" type="image/webp">' +
      '<img src="' + AST + name + '.jpg" alt="' + esc(alt) + '"' +
      ' width="' + dim[0] + '" height="' + dim[1] + '"' +
      (opts.eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"') +
      (cls ? ' class="' + cls + '"' : '') + '>' +
      '</picture>';
  }

  /* Скругления парков. С 19.08.2026 у всех одинаково — оба нижних угла.
     Карта осталась таблицей, а не константой: если владелец снова захочет
     разводить парки по углам, менять придётся одну строку.
     Заглушка вместо отсутствующего фото берёт ту же пару, иначе она
     перестаёт читаться как тот же объект. */
  const CORNER = { sokolniki: 'curve-bl curve-br', khimki: 'curve-bl curve-br', mosaic: 'curve-bl curve-br' };

  /* блок фото парка с честной заглушкой, когда снимка нет */
  function parkPhoto(p, ratio, key) {
    const crn = CORNER[p.slug] || 'curve-bl curve-br';
    if (p.photo) {
      const k = key || 'wide';
      return '<figure class="rv rv-ph" style="margin:0">' +
        '<div class="ph ' + crn + '" style="aspect-ratio:' + ratio + '">' +
        img(p.photo[k], P(p.photo[k + 'Alt']) || P(p.name)) + '</div>' +
        '<figcaption class="cap">' + esc(P(p.name)) + ' · ' + esc(P(p.photo[k + 'Alt']) || '') + '</figcaption>' +
        '</figure>';
    }
    return '<div class="stub rv ' + crn + '" style="aspect-ratio:' + ratio + '">' +
      '<span class="mono">' + esc(P(p.photoNote)) + '</span></div>';
  }

  function ycUrl(slug) {
    const p = RD.park(slug);
    if (p && p.yclients && p.yclients.company) {
      return (RD.yclientsBase || 'https://yclients.com/') + 'company/' + p.yclients.company + '/';
    }
    return 'tel:' + tel(p ? p.phone : '');
  }

  function parksOrdered() { return RD.parks.slice().sort(function (a, b) { return a.order - b.order; }); }

  /* Копия карточки парка живёт в его собственном модуле src/parks/<slug>.js.
     Так три чата правят каждый свой парк и не задевают чужой файл.
     Запасной вариант — общий слой RD.parkLevel. */
  function parkCard(slug) {
    const mod = root.RDPark && root.RDPark[slug];
    if (mod && mod.card) return mod.card;
    return (RD.parkLevel && RD.parkLevel[slug]) || { tag: '', tagStatus: 'o', body: '' };
  }

  function minOf(rows, key) {
    const v = (rows || []).map(function (r) { return r[key]; })
      .filter(function (x) { return typeof x === 'number' && isFinite(x); });
    return v.length ? Math.min.apply(null, v) : null;
  }
  function personalFrom(slug) { return minOf(RD.pricing.personal.byPark[slug], 60); }
  function trialFrom(slug) { return minOf(RD.pricing.personal.byPark[slug], 'trial'); }
  function rideLine(p) {
    const fr = p.freeride;
    if (fr.weekend && fr.weekend !== fr.weekday) return money(fr.weekday) + ' / ' + money(fr.weekend);
    return money(fr.weekday);
  }

  /* ---------- 4. ФЛАГИ ДЛЯ ПЕРЕКЛЮЧАТЕЛЯ ЯЗЫКА ---------- */
  /* Флаги — отдельными файлами в assets/flags, оба в общей рамке 3:2.
     Американский не растянут: он перестроен в этом холсте по своим же
     правилам — тринадцать полос, крыж в 7/13 высоты и 2/5 длины,
     пятьдесят звёзд рядами 6-5-6-5-6-5-6-5-6. Так делают все наборы
     флаговых иконок, и по-другому нельзя: подлинные пропорции у флагов
     разные (2:3 и 1:1,9), и при общей высоте один оказался бы заметно
     шире другого. В переключателе это читается как разный статус. */
  /* Переключатель языка — буквами, а не флагами. Два флага приносили
     на каждый экран синий #0039A6 и два чужих красных: в системе из трёх
     цветов это было самое цветное пятно сайта, и стояло оно выше всех
     фотографий, которые сайт намеренно обесцвечивает. Заодно флаг —
     плохой указатель языка: английский не принадлежит одной стране. */
  const FLAG_RU = '<span class="lang__c" aria-hidden="true">RU</span>';
  const FLAG_US = '<span class="lang__c" aria-hidden="true">EN</span>';

  /* ---------- 5. МАРШРУТЫ ---------- */
  /* Таблица маршрутов собирается из RD.pages, а не дублирует её.
     Раньше списка было два, и они разошлись: в content.js была страница
     «Тренеры», в app.js её не было — пункт меню вёл на «Такой страницы
     нет». Один источник истины закрывает этот класс ошибок целиком.
     '/game' живёт только здесь: страницы игры в RD.pages нет, она
     открывается со страницы безопасности. */
  const ROUTES = RD.pages.map(function (p) { return { id: p.id, path: p.path }; })
    .concat([{ id: 'game', path: '/game' }]);

  /* Проверка на рассинхрон: страница объявлена, а рисовать её нечем.
     Молчит в консоли, пока всё сходится. */
  if (root.console && root.console.warn) {
    setTimeout(function () {
      const miss = ROUTES.filter(function (r) {
        return r.id !== 'home' && r.id !== 'park' && r.id !== 'game' &&
               !(root.RDPages && root.RDPages[r.id]);
      }).map(function (r) { return r.id; });
      if (miss.length) console.warn('RED DECK: маршрут без страницы — ' + miss.join(', '));
    }, 0);
  }

  const NAV_MAIN = ['sekciya', 'personal', 'freeride', 'parks', 'prices', 'safety'];
  const NAV_MENU = ['home', 'sekciya', 'personal', 'freeride', 'parks', 'prices', 'coaches', 'safety', 'gift', 'game', 'faq', 'contacts'];

  function parse(pathOrHash) {
    const raw = (pathOrHash == null ? '' : String(pathOrHash)).replace(/^#/, '') || '/';
    /* «#main» и прочие якоря внутри страницы — не маршруты */
    if (raw.charAt(0) !== '/') return null;
    let path = raw.split('?')[0];
    if (path.length > 1) path = path.replace(/\/+$/, '') || '/';
    for (let i = 0; i < ROUTES.length; i++) {
      const r = ROUTES[i];
      if (r.path.indexOf(':') === -1) {
        if (r.path === path) return { id: r.id, param: null };
      } else {
        const base = r.path.split('/:')[0];
        if (path.indexOf(base + '/') === 0) {
          const param = path.slice(base.length + 1);
          if (param) return { id: r.id, param: param };
        }
      }
    }
    return { id: path === '/' ? 'home' : '404', param: null };
  }

  function href(id, param) {
    const r = ROUTES.filter(function (x) { return x.id === id; })[0];
    const path = r ? (param ? r.path.replace(/:\w+/, function () { return param; }) : r.path) : '/';
    return PATHMODE ? (BASE + path) : ('#' + path);
  }

  /* Текущий маршрут из адреса. Возвращает null, если это якорь внутри
     страницы (#main) — такие переходы маршрутом не считаются. */
  function currentPath() {
    if (!PATHMODE) {
      const raw = (location.hash || '').replace(/^#/, '');
      return raw.charAt(0) === '/' ? raw : null;
    }
    let p = location.pathname;
    if (BASE && p.indexOf(BASE) === 0) p = p.slice(BASE.length);
    if (p.charAt(0) !== '/') p = '/' + p;
    /* статические страницы лежат как /prices/index.html */
    p = p.replace(/\/index\.html?$/, '/');
    return p;
  }

  /* ---------- 6. ШАПКА ---------- */
  function header() {
    const d = D();
    const nav = NAV_MAIN.map(function (id) {
      const on = S.route.id === id || (id === 'parks' && S.route.id === 'park');
      return '<a class="navlink" href="' + href(id) + '"' + (on ? ' aria-current="page"' : '') + '>' +
        esc(d.nav[id]) + '</a>';
    }).join('');

    return '<header class="hdr" id="hdr">' +
      '<div class="hdr__in">' +
      '<a class="hdr__logo" href="' + href('home') + '" aria-label="Red Deck — ' + esc(d.nav.home) + '">' +
      '<img src="' + asset('assets/brand/reddeck-logo.png') + '" alt="Red Deck" width="76" height="51"></a>' +
      '<nav class="hdr__nav" aria-label="' + esc(d.menu) + '">' + nav + '</nav>' +
      '<div class="hdr__right">' +
      /* Телефон в шапке. Единственный работающий способ записаться —
         звонок, а на десктопе нижней панели нет: до правки номер на
         экране появлялся только после прокрутки до подвала. Номер идёт
         от текущего парка: на странице Химок звонит в Химки. */
      '<span class="mono hdr__hrs">' + esc(d.hours) +
      '<a class="hdr__tel" href="tel:' + tel(RD.park(S.park).phone) + '">' +
      esc(RD.park(S.park).phone) + '</a></span>' +
      '<div class="lang" role="group" aria-label="' + esc(RD.ui[S.lang].langLabel) + '">' +
      '<button type="button" data-lang="ru" aria-pressed="' + (S.lang === 'ru') + '" title="' + esc(d.langRu) + '">' + FLAG_RU + '<span class="sr">' + esc(d.langRu) + '</span></button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (S.lang === 'en') + '" title="' + esc(d.langEn) + '">' + FLAG_US + '<span class="sr">' + esc(d.langEn) + '</span></button>' +
      '</div>' +
      '<a class="btn btn--ink btn--sm hdr__book" href="' + href('booking') + '">' + esc(d.book) + '</a>' +
      /* Кнопка меню — чистый бургер, решение владельца 19.08.2026
         после двух заходов со «стойкой для скейтов». Утилита должна
         узнаваться мгновенно; фирменность несут логотип и соседняя
         красная кнопка. */
      '<button class="burger" type="button" id="burger" aria-expanded="false" aria-controls="menu" aria-label="' + esc(d.menu) + '">' +
      '<span></span><span></span><span></span></button>' +
      '</div></div></header>';
  }

  function menu() {
    const d = D();
    const items = NAV_MENU.map(function (id, i) {
      const on = S.route.id === id || (id === 'parks' && S.route.id === 'park');
      /* --mi — номер строки для лесенки появления в motion.css */
      return '<a href="' + href(id) + '"' + (on ? ' aria-current="page"' : '') +
        ' style="--mi:' + i + '">' +
        '<i>' + (i < 9 ? '0' : '') + (i + 1) + '</i>' + esc(d.nav[id]) + '</a>';
    }).join('');
    return '<div class="menu" id="menu" data-open="0" role="dialog" aria-modal="true" aria-label="' + esc(d.menu) + '">' +
      '<div class="menu__top">' +
      '<span class="mono" style="color:rgba(255,255,255,.55)">' + esc(d.menu) + '</span>' +
      '<button class="btn btn--ghost btn--sm" type="button" id="menu-close">' + esc(d.close) + '</button>' +
      '</div>' +
      '<nav class="menu__list">' + items + '</nav>' +
      '<div class="menu__foot">' +
      '<div class="lang lang--menu" role="group" aria-label="' + esc(RD.ui[S.lang].langLabel) + '">' +
      '<button type="button" data-lang="ru" aria-pressed="' + (S.lang === 'ru') + '" title="' + esc(d.langRu) + '">' + FLAG_RU + '<span class="sr">' + esc(d.langRu) + '</span></button>' +
      '<button type="button" data-lang="en" aria-pressed="' + (S.lang === 'en') + '" title="' + esc(d.langEn) + '">' + FLAG_US + '<span class="sr">' + esc(d.langEn) + '</span></button>' +
      '</div>' +
      '<a class="btn btn--ghost" href="tel:' + tel(RD.park(S.park).phone) + '">' + esc(d.call) + '</a>' +
      '<a class="btn btn--primary btn--wide" href="' + href('booking') + '">' + esc(d.book) + '</a>' +
      '</div></div>';
  }

  /* ---------- 7. ПОДВАЛ ---------- */
  function footer() {
    const d = D();
    const fmt = [
      ['sekciya', d.nav.sekciya], ['personal', d.nav.personal],
      ['freeride', d.nav.freeride], ['safety', d.nav.safety], ['gift', d.nav.gift]
    ].map(function (x) { return '<a href="' + href(x[0]) + '">' + esc(x[1]) + '</a>'; }).join('');

    const parks = parksOrdered().map(function (p) {
      return '<span class="ftr__park"><a href="' + href('park', p.slug) + '">' + esc(P(p.name)) + '</a>' +
        '<a class="tel" href="tel:' + tel(p.phone) + '">' + esc(p.phone) + '</a></span>';
    }).join('');

    const docs = d.docs.map(function (t) {
      return '<a href="' + href(t[0]) + '">' + esc(t[1]) + '</a>';
    }).join('');

    return '<footer class="ftr">' +
      '<div class="shell ftr__in">' +
      '<div><span class="ftr__brand"><img src="' + asset('assets/brand/reddeck-logo-white.png') + '" alt="Red Deck" width="78" height="53" loading="lazy" decoding="async"></span>' +
      '<p class="t-small" style="max-width:34ch;color:var(--on-dark-2)">' + esc(d.ftrAbout) + '</p>' +
      /* Каналы клуба. Кроме вежливости это ещё и способ убедиться,
         что клуб живой: в ленте видно свежие даты, а на сайте — нет. */
      (RD.social && RD.social.links.length
        ? '<div class="ftr__soc">' + RD.social.links.map(function (s) {
            return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a>';
          }).join('') + '</div>'
        : '') +
      '</div>' +
      '<div class="ftr__col"><span class="mono ftr__h">' + esc(d.ftrFormats) + '</span>' + fmt + '</div>' +
      '<div class="ftr__col"><span class="mono ftr__h">' + esc(d.ftrParks) + '</span>' + parks + '</div>' +
      '<div class="ftr__col"><span class="mono ftr__h">' + esc(d.ftrDocs) + '</span>' + docs + '</div>' +
      '</div>' +
      '<div class="ftr__note"><div class="shell"><span class="mono">' + esc(d.disclaimer) + '</span></div></div>' +
      '</footer>';
  }

  /* ---------- 8. НИЖНЯЯ ПАНЕЛЬ ---------- */
  function bookbar() {
    const d = D();
    const p = RD.park(S.park);
    return '<div class="bookbar" id="bookbar" data-on="0">' +
      '<a class="btn btn--primary" href="tel:' + tel(p.phone) + '">' + esc(d.call) + '</a>' +
      '<a class="btn btn--ghost" href="' + href('booking') + '">' + esc(d.book) + '</a>' +
      '</div>';
  }

  /* ---------- 9. ХЕЛПЕРЫ ДЛЯ СТРАНИЦ ---------- */
  const H = {
    RD: RD, S: S, L: L, D: D, P: P, esc: esc, money: money, f: f, tel: tel,
    img: img, parkPhoto: parkPhoto, ycUrl: ycUrl, href: href, asset: asset,
    parks: parksOrdered, personalFrom: personalFrom, trialFrom: trialFrom, rideLine: rideLine, minOf: minOf,
    parkCard: parkCard,
    park: function () { return RD.park(S.park); }
  };
  root.RDH = H;

  /* ---------- 10. РЕНДЕР ---------- */
  let ctl = null;
  /* первая отрисовка — не смена маршрута: фокус не двигаем */
  let booted = false;

  function render() {
    /* Перерисовка выбрасывает старую разметку меню вместе с его открытым
       состоянием, но не снимает блокировку прокрутки — она живёт на body,
       а body не перерисовывается. Раньше это чинил только route();
       смена языка из меню оставляла страницу с position:fixed навсегда:
       меню исчезало, прокрутка не работала, и выйти из этого руками было
       нельзя. Снимаем здесь — тогда ни один будущий вызов render() не
       сможет заморозить страницу. */
    S.menu = false;
    lockScroll(false);

    const pages = root.RDPages || {};
    const id = S.route.id;
    let body = '';

    if (id === 'home' && root.RDHome) body = root.RDHome.page(H);
    else if (pages[id]) body = pages[id](H, S.route.param);
    else body = pages.notFound ? pages.notFound(H) : '';

    /* страница, дочитанная до конца, не должна упираться в подвал:
       дальше идёт единственное действие, которое реально работает — звонок */
    /* freeride исключён: человеку, который хочет кататься сегодня,
       блок «дождитесь набора в секцию» в конце страницы предлагал
       ровно противоположное. Страница закрывается онлайн-записью. */
    const WITH_INTAKE = { sekciya: 'full', faq: 'full', personal: 'compact',
                          prices: 'compact', safety: 'compact', parks: 'compact', park: 'compact' };
    if (WITH_INTAKE[id] && root.RDIntake) body += root.RDIntake(H, WITH_INTAKE[id] === 'compact');

    doc.documentElement.lang = S.lang;
    doc.title = pageTitle();
    const skipEl = doc.querySelector('.skip');
    if (skipEl) skipEl.textContent = D().skip;
    /* Описание страницы — своё на каждую. Одинаковое описание на
       шестнадцати страницах поисковик считает дублем и выбирает
       фрагмент сам, обычно неудачно. Берём вводный абзац страницы:
       он и написан для человека, и всегда соответствует содержимому.
       Запасной вариант — общее описание сети. */

    const appEl = doc.getElementById('app');
    appEl.innerHTML =
      header() +
      '<main id="main" class="page-in" tabindex="-1">' + body + '</main>' +
      footer() + bookbar() + menu();

    /* Описание ставим после сборки страницы: оно читает вводный абзац
       из уже отрисованного #main. До innerHTML там ещё прошлая страница. */
    const metaD = doc.querySelector('meta[name="description"]');
    if (metaD) metaD.setAttribute('content', pageDescr());

    bind();
    observe();
  }

  function pageTitle() {
    const d = D();
    const id = S.route.id;
    const base = 'Red Deck';
    /* Заголовок повторяет дескриптор подвала слово в слово и добирает
       названия парков: «скейт-парк Химки» и «скейт-парк Сокольники» —
       запросы, по которым в клуб и приезжают, а <title> для них
       сильнейший сигнал. */
    if (id === 'home') return base + ' — ' + (S.lang === 'ru'
      ? 'крытые скейт-парки Москвы: Сокольники, Дубровка, Химки'
      : 'indoor skateparks in Moscow: Sokolniki, Dubrovka, Khimki');
    /* Заголовок страницы парка добирает услугу и город: «Химки — Red Deck»
       не отвечает ни на один поисковый запрос, «Скейт-парк в Химках»
       отвечает ровно на тот, по которому в парк и приезжают. */
    if (id === 'park' && RD.park(S.route.param)) {
      const p = RD.park(S.route.param);
      return (S.lang === 'ru' ? 'Скейт-парк ' : 'Skatepark ') +
        P(p.nameIn || p.name) + ' — ' + base;
    }
    return (d.nav[id] || d.notFound) + ' — ' + base;
  }

  /* Описание страницы для поисковой выдачи и для карточки в мессенджере. */
  const DESCR_FALLBACK = {
    ru: 'Red Deck — сеть крытых скейт-парков Москвы: Сокольники, Дубровка, Химки. Секция, персональные тренировки и свободное катание. Ежедневно 10:00–22:00.',
    en: 'Red Deck — a network of indoor skateparks in Moscow: Sokolniki, Dubrovka, Khimki. Group section, one-to-one lessons and free-ride. Daily 10:00–22:00.'
  };
  function pageDescr() {
    const el = doc.querySelector('#main .t-lede, #main .hero__lead');
    const s = el ? String(el.textContent || '').replace(/\s+/g, ' ').trim() : '';
    return s.length > 60 ? s.slice(0, 300) : DESCR_FALLBACK[S.lang];
  }

  /* ---------- 11. СОБЫТИЯ ---------- */
  function bind() {
    if (ctl) ctl.abort();
    ctl = new AbortController();
    const sig = { signal: ctl.signal };

    /* язык */
    doc.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.lang = b.getAttribute('data-lang');
        try { localStorage.setItem('rd-lang', S.lang); } catch (e) {}
        render();
        const back = doc.querySelector('[data-lang="' + S.lang + '"]');
        if (back) back.focus();
        if (root.RDApp_say) root.RDApp_say(S.lang === 'ru' ? 'Русский язык' : 'English');
      }, sig);
    });

    /* меню */
    const burger = doc.getElementById('burger');
    const menuEl = doc.getElementById('menu');
    const hdr = doc.getElementById('hdr');
    const hdrNav = doc.querySelector('.hdr__nav');
    const bar = doc.getElementById('bookbar');
    const mainEl = doc.getElementById('main');
    const ftrEl = doc.querySelector('.ftr');
    /* menuNav помнит, что запись в историю сделали мы: при закрытии
       меню кнопкой её надо снять, иначе «назад» после этого просто
       вернёт открытое меню. */
    let menuNav = false;
    function setMenu(on, fromHistory) {
      if (on && !S.menu && !fromHistory) {
        try { history.pushState({ rdMenu: 1 }, '', location.href); menuNav = true; } catch (e) {}
      } else if (!on && S.menu && menuNav && !fromHistory) {
        menuNav = false;
        /* Снимаем свою запись из истории, только если она всё ещё
           наверху. Переход по ссылке из открытого меню уже заменил её
           через pushState — слепой back() в этот момент откатывал
           только что совершённый переход, и человек, выбравший
           «Парки», оказывался на главной. */
        if (history.state && history.state.rdMenu) {
          try { history.back(); } catch (e) {}
        }
      } else if (fromHistory) {
        menuNav = false;
      }
      S.menu = on;
      menuEl.setAttribute('data-open', on ? '1' : '0');
      burger.setAttribute('aria-expanded', on ? 'true' : 'false');
      lockScroll(on);
      [mainEl, ftrEl, hdrNav, bar, doc.querySelector('.skip')].forEach(function (el) {
        if (!el) return;
        if ('inert' in HTMLElement.prototype) el.inert = on;
        else if (on) el.setAttribute('aria-hidden', 'true'); else el.removeAttribute('aria-hidden');
      });
      if (on) {
        const first = menuEl.querySelector('a, button');
        if (first) first.focus();
      } else {
        /* бургер мог исчезнуть при переходе на широкий экран */
        const back = burger.offsetParent ? burger : mainEl;
        if (back) back.focus({ preventScroll: true });
      }
    }
    root.RDApp_setMenu = setMenu;

    /* на широком экране бургера нет — закрывать меню было бы нечем */
    const wide = matchMedia('(min-width: 1100px)');
    const onWide = function () { if (wide.matches && S.menu) setMenu(false); };
    if (wide.addEventListener) wide.addEventListener('change', onWide, sig);

    /* фокус не должен выпадать из открытого диалога */
    menuEl.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !S.menu) return;
      const f = menuEl.querySelectorAll('a[href], button:not([disabled])');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    }, sig);
    if (burger) burger.addEventListener('click', function () { setMenu(!S.menu); }, sig);
    const mc = doc.getElementById('menu-close');
    if (mc) mc.addEventListener('click', function () { setMenu(false); }, sig);
    if (menuEl) {
      menuEl.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setMenu(false); }, sig);
      });
    }
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && S.menu) setMenu(false);
    }, sig);

    /* прилипшая шапка получает линейку только когда страница уехала */
    let lastStuck = null, lastBar = null, ticking = false;
    function apply() {
      ticking = false;
      const y = root.scrollY || 0;
      const stuck = y > 4;
      if (hdr && stuck !== lastStuck) { hdr.setAttribute('data-stuck', stuck ? '1' : '0'); lastStuck = stuck; }
      /* на телефоне панель нужна сразу: это главное действие,
         а не награда за долистывание */
      const on = matchMedia('(max-width: 1099px)').matches ? true : y > 420;
      if (bar && on !== lastBar) {
        bar.setAttribute('data-on', on ? '1' : '0');
        doc.body.classList.toggle('has-bookbar', on);
        lastBar = on;
      }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }
    root.addEventListener('scroll', onScroll, { signal: ctl.signal, passive: true });
    root.addEventListener('resize', onScroll, { signal: ctl.signal, passive: true });
    apply();

    /* Выбор парка — единая точка. Делегируем на документ, а не вешаем на
       каждый узел: карточки парков на странице записи перерисовываются
       при смене формата, и прямые слушатели на них умирали вместе
       со старой разметкой. */
    /* Переход по ссылке — не «Назад»: страницу открываем сверху.
       Флаг снимает route() сразу после чтения. */
    doc.addEventListener('click', function (e) {
      const a = e.target && e.target.closest
        ? e.target.closest(PATHMODE ? 'a[href^="/"]' : 'a[href^="#/"]') : null;
      if (a) byLink = true;
    }, sig);

    doc.addEventListener('click', function (e) {
      const el = e.target && e.target.closest ? e.target.closest('[data-park]') : null;
      if (!el) return;
      const slug = el.getAttribute('data-park');
      if (!RD.park(slug)) return;
      S.park = slug;
      try { localStorage.setItem('rd-park', slug); } catch (err) {}
      if (el.hasAttribute('data-rerender')) { render(); return; }
      /* на странице записи смена парка живёт и в сводке выбора:
         обновляем её и цены форматов; вне записи вызов — пустой */
      if (el.tagName !== 'A' && root.RDPages && root.RDPages.refreshBooking) {
        root.RDPages.refreshBooking(H);
        refocus('data-park', slug);
      }
    }, sig);

    /* выбор направления и формата */
    /* Делегирование на документ, а не прямые слушатели: чипы сводки
       на странице записи перерисовываются при каждом выборе, и прямые
       слушатели умирали вместе со старой разметкой. */
    /* на ссылке смену состояния делает переход, перерисовка лишняя;
       на кнопке обновляем точечно, не трогая всю страницу */
    function refocus(attr, val) {
      const el = doc.querySelector('#bk-choice [' + attr + '="' + val + '"]');
      if (el) el.focus();
    }
    function pickHandler(attr, key) {
      doc.addEventListener('click', function (e) {
        const el = e.target && e.target.closest ? e.target.closest('[' + attr + ']') : null;
        if (!el) return;
        S[key] = el.getAttribute(attr);
        if (el.tagName === 'A') return;
        const inBox = !!el.closest('#bk-choice');
        doc.querySelectorAll('[' + attr + ']').forEach(function (x) {
          if (x.tagName === 'A') return;
          x.setAttribute('aria-pressed', String(x.getAttribute(attr) === S[key]));
        });
        if (root.RDPages && root.RDPages.refreshBooking) root.RDPages.refreshBooking(H);
        /* перерисованный чип — новый узел: фокус возвращаем адресно */
        if (inBox) refocus(attr, S[key]); else el.focus();
      }, sig);
    }
    pickHandler('data-dir', 'dir');
    pickHandler('data-fmt', 'fmt');

    /* Видео по клику: до нажатия страница несёт только кадр-обложку,
       сам ролик (17 МБ с media.reddeck.ru) не грузится вовсе. */
    doc.addEventListener('click', function (e) {
      const b = e.target && e.target.closest ? e.target.closest('[data-video]') : null;
      if (!b) return;
      const box = b.closest('.vid');
      if (!box) return;
      const v = doc.createElement('video');
      v.src = b.getAttribute('data-video');
      v.controls = true; v.autoplay = true;
      v.setAttribute('playsinline', '');
      v.className = 'vid__player';
      box.appendChild(v);
      b.remove();
    }, sig);

    /* Заявка без бэкенда: собираем сообщение и открываем WhatsApp
       администратора выбранного парка; у парка без WhatsApp — SMS.
       Лид не теряется, даже если человеку неудобно звонить. */
    const lf = doc.getElementById('lead-form');
    if (lf) {
      lf.addEventListener('submit', function (e) {
        e.preventDefault();
        const fd = new FormData(lf);
        const p = RD.park(String(fd.get('park') || '')) || RD.park(S.park);
        const dirO = RD.disciplines.filter(function (z) { return z.slug === S.dir; })[0];
        const fmtO = RD.formats.filter(function (z) { return z.slug === S.fmt; })[0];
        const ru = L() === 'ru';
        const lines = [
          ru ? 'Заявка с сайта Red Deck' : 'Request from the Red Deck website',
          (ru ? 'Имя: ' : 'Name: ') + (String(fd.get('name') || '').trim() || '—'),
          (ru ? 'Телефон: ' : 'Phone: ') + String(fd.get('phone') || '').trim(),
          (ru ? 'Парк: ' : 'Park: ') + P(p.short),
          (ru ? 'Направление: ' : 'Discipline: ') + (dirO ? P(dirO.name) : '—'),
          (ru ? 'Формат: ' : 'Format: ') + (fmtO ? P(fmtO.name) : '—')
        ];
        const note = String(fd.get('note') || '').trim();
        if (note) lines.push((ru ? 'Комментарий: ' : 'Comment: ') + note);
        const msg = encodeURIComponent(lines.join('\n'));
        const wa = RD.social && RD.social.whatsapp && RD.social.whatsapp[p.slug];
        const url = wa
          ? 'https://wa.me/' + wa.replace(/[^\d+]/g, '') + '?text=' + msg
          : 'sms:' + tel(p.phone) + '?body=' + msg;
        root.open(url, '_blank', 'noopener');
        const done = doc.getElementById('lead-done');
        if (done) done.hidden = false;
        if (root.RDApp_say) root.RDApp_say(ru ? 'Заявка собрана, открыт мессенджер' : 'Request prepared, messenger opened');
        if (typeof root.ym === 'function') root.ym(93223004, 'reachGoal', 'lead_form');
      }, sig);
    }

    /* мягкий скролл к блоку на этой же странице */
    doc.querySelectorAll('[data-scroll]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const t = doc.getElementById(el.getAttribute('data-scroll'));
        if (!t) return;
        t.scrollIntoView({
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start'
        });
      }, sig);
    });

    if (root.RDHome && root.RDHome.bind) root.RDHome.bind(sig, render);
    if (root.RDPages && root.RDPages.bind) root.RDPages.bind(sig, render);
    if (S.route.id === 'game' && root.RDGame && root.RDGame.bind) {
      root.RDGame.bind({ sig: sig, S: S, H: H, L: L, esc: esc });
    }
  }

  /* ---------- 12. ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ ---------- */
  let io = null;
  function observe() {
    if (io) { io.disconnect(); io = null; }

    const els = Array.prototype.slice.call(doc.querySelectorAll('.rv, .rise'));
    if (!('IntersectionObserver' in root)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        obs.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

    /* сначала читаем всю геометрию, потом пишем классы: иначе на каждом
       элементе получается принудительный пересчёт макета */
    const vh = innerHeight * 0.92;
    const tops = els.map(function (el) { return el.getBoundingClientRect().top; });
    els.forEach(function (el, i) {
      if (tops[i] < vh) { el.classList.add('is-in'); return; }
      io.observe(el);
    });
  }

  /* ---------- 13. НАВИГАЦИЯ ----------
     Позиция прокрутки по маршрутам. Страница Химок — почти одиннадцать
     экранов: уйти с середины и вернуться на самый верх означает искать
     заново. Переход по ссылке по-прежнему открывает страницу сверху —
     это ожидаемо; восстанавливаем только «Назад» и «Вперёд», где человек
     рассчитывает вернуться туда, где был. */
  const POS = Object.create(null);
  let lastKey = currentPath() || '/';
  let byLink = false;

  function route() {
    const key = currentPath() || lastKey;
    /* сохраняем, откуда уходим */
    POS[lastKey] = root.scrollY || 0;
    const back = !byLink && POS[key] != null;
    const restore = back ? POS[key] : 0;
    byLink = false;
    lastKey = key;

    const next = parse(currentPath());
    if (!next) {
      /* якорь внутри страницы. Но если это холодный старт по ссылке вида
         index.html#main, страницы ещё нет — сначала собираем главную. */
      const app = doc.getElementById('app');
      if (!app.firstChild) { S.route = { id: 'home', param: null }; render(); }
      const t = doc.getElementById(location.hash.slice(1));
      if (t) { t.focus({ preventScroll: false }); }
      return;
    }
    /* меню могло остаться открытым после кнопки «Назад» — иначе
       body застревает в overflow:hidden и страница перестаёт скроллиться */
    S.menu = false;
    lockScroll(false);
    S.route = next;
    /* Страница парка задаёт текущий парк. Без этого нижняя панель и кнопка
       «Позвонить» в шапке набирали парк, выбранный когда-то раньше: человек
       читал Химки, жал «Позвонить» и попадал в Сокольники за 25 км.
       В localStorage не пишем — это не выбор пользователя, а контекст
       страницы; сделанный руками выбор парка должен пережить прогулку
       по чужим страницам. */
    if (next.id === 'park' && RD.park(next.param)) S.park = next.param;
    const el = doc.documentElement;
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = 'auto';
    root.scrollTo(0, restore);
    render();
    requestAnimationFrame(function () {
      if (Math.abs((root.scrollY || 0) - restore) > 1) root.scrollTo(0, restore);
      el.style.scrollBehavior = prev;
      /* Фокус переносим только при смене маршрута. На холодной загрузке
         это уводило точку входа в середину страницы: первый Tab попадал
         в контент, а до skip-ссылки и шапки прямым Tab было не добраться. */
      const main = doc.getElementById('main');
      if (main && booted) main.focus({ preventScroll: true });
      booted = true;
      if (root.RDApp_say) root.RDApp_say(pageTitle());
      /* Виртуальный просмотр для счётчиков: переходы идут без
         перезагрузки, и без этого Метрика видела бы один hit за визит.
         На превью и локально счётчики не загружены — вызовы молчат. */
      if (typeof root.ym === 'function') root.ym(93223004, 'hit', location.href, { title: doc.title });
      if (root.dataLayer && root.dataLayer.push) root.dataLayer.push({ event: 'page_view', page_path: location.pathname });
    });
  }

  if (PATHMODE) {
    /* Настоящие адреса: переход делает pushState, «Назад» — popstate.
       hashchange оставлен для якорей внутри страницы (#main из
       skip-ссылки) — route() на них возвращает null и не перерисовывает. */
    root.addEventListener('popstate', route);
    /* Захват, а не всплытие: обработчик закрытия меню живёт глубже
       по дереву и срабатывал бы раньше — его history.back() откатывал
       только что сделанный переход, и «Парки» из меню открывали
       главную. В захвате мы успеваем первыми. */
    doc.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = a.getAttribute('href') || '';
      /* внешние ссылки, телефоны, почта и якоря обрабатывает браузер */
      if (!/^\//.test(url)) return;
      if (a.host && a.host !== location.host) return;
      if (!parse(BASE && url.indexOf(BASE) === 0 ? url.slice(BASE.length) : url)) return;
      e.preventDefault();
      if (url === location.pathname) { root.scrollTo(0, 0); return; }
      /* Переход из открытого меню: наверху истории лежит запись самого
         меню — заменяем её, а не строим поверх. «Назад» с новой страницы
         тогда возвращает туда, где меню открывали, а не в открытое меню. */
      if (history.state && history.state.rdMenu) history.replaceState(null, '', url);
      else history.pushState(null, '', url);
      route();
    }, true);
  } else {
    root.addEventListener('hashchange', route);
  }

  /* «Назад» при открытом меню закрывает меню, а не уносит со страницы.
     На Android это системный жест и первый рефлекс — без перехвата
     человек терял страницу, которую читал. Слушатель общий для обоих
     режимов адресации: запись в историю делает setMenu, и она одна
     и та же и при хеше, и при настоящих путях. */
  root.addEventListener('popstate', function (e) {
    if (S.menu && root.RDApp_setMenu) { root.RDApp_setMenu(false, true); }
  }, true);
  root.RDApp = { render: render, route: route, S: S, H: H, pathMode: PATHMODE };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', route);
  else route();
})(typeof window !== 'undefined' ? window : this);
