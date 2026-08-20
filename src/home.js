/* =====================================================================
   RED DECK — главная

   Порядок задан заказчиком: сначала впечатление вёрт-рампой и чашей,
   потом три парка под разный уровень, потом развилка скейт/ролики.
   К этому добавлено то, чего требовала проверка на конверсию:
     — сразу под героем строка «начинают не с неё» с ценами входа,
       иначе родитель уходит с мыслью, что здесь только вертикаль;
     — блок набора с телефонами и сценарием звонка вместо пустых
       слотов под видео: пустой слот читается как «сайт недоделан»;
     — секция во всех местах подписана единицей, в которой её покупают.
   ===================================================================== */
(function (root) {
  'use strict';

  const T = {
    ru: {
      /* Парки на первом экране живут в одном месте — в кликабельных
         кнопках под лидом. Кикер и лид их больше не повторяют:
         владелец 19.08.2026 поймал тройной дубль. Кикер занят
         форматами — второй осью выбора. Формулировка владельца
         20.08.2026: полные названия форматов; переносить по одному
         слову нельзя — каждый пункт рендерится неразрывным. */
      heroKick: 'Скейт и роллер-секции · персональные тренировки · свободное катание',
      /* Tony Hawk возвращён владельцем 19.08.2026. Утверждение целиком
         про фигуру и про событие 1999 года — про нашу рампу в нём не
         сказано ничего, связь читатель достраивает сам. Имя остаётся
         упоминанием исторического факта, а не рекламным лицом
         (ГК РФ ст. 19 п. 4 — имя в рекламе требует согласия).
         Цифры клуба ушли в полосу академии — она сразу под первым
         экраном, ничего не потерялось. */
      heroHawk: 'Вёрт — фигура, с которой началась слава Tony Hawk и его 900°. У нас она выше четырёх метров: полный размер, а не уменьшенная копия.',
      heroLead: 'Дети с 7 лет и взрослые, скейтборд и ролики. Занятие в секции 2 200 ₽. Доска, защита, забота и профессионализм — с нас.',
      heroCta1: 'Секция скейтборда — подробнее тут',
      heroCta2: 'Выбрать парк',
      scroll: 'Листайте вниз',

      acTitle: 'Академия Red Deck в цифрах',
      acRate: 'Яндекс.Карты',
      acMarks: 'оценок',
      acLead: 'Восемь тренеров, у каждого есть имя, стаж и результаты. От категории тренера зависит цена часа — там же написано, что за ней стоит.',
      acCta: 'Кто ведёт занятия',

      vidKick: 'Видео',
      vidTitle: 'Как катаются наши ученики',
      vidLead: 'Короткий монтаж из зала: проезды учеников — от первых горок до трюков. Видео показывает то, о чём страница рассказывает словами. Нажмите — ролик загрузится и начнёт играть.',
      vidPlay: 'Смотреть видео',
      vidAlt: 'Чаша скейт-парка Red Deck в Сокольниках',

      startTitle: 'Начинают не с вёрт-рампы',
      startLead: 'На вертикаль пускают по допуску тренера и только в полной защите. Первое занятие проходит на малых радиусах, и первое, чему учат, — падать: группироваться, уходить на бок, не выставлять руку.',
      startRows: [
        ['Секция', '2 200 ₽', 'цена одного занятия, платите за месяц'],
        ['Пробное персональное', 'от 1 300 ₽', 'в Химках и на Дубровке · в Сокольниках от 1 400 ₽'],
        ['Свободное катание', 'от 1 000 ₽', 'в Химках и на Дубровке · в Сокольниках 1 200 / 1 500 ₽']
      ],

      /* Две цифры вместо человека в кадре. На пустой архитектурной съёмке
         масштаб не читается — глазу не за что зацепиться, поэтому линейкой
         работает бытовое сравнение. Обе цифры названы владельцем 19.08.2026,
         статус 'w' — публикуем молча, без плашки. */
      scaleFigCap: 'Чтобы было понятно',
      scaleFigs: [
        ['площадь парка в Сокольниках', 'примерно десять школьных спортзалов под одной крышей'],
        ['высота вёрт-рампы', 'почти на метр выше баскетбольного кольца']
      ],

      /* Имя названо как участник исторического события, а не как рекламное
         лицо: утверждение целиком про трюк 1999 года и про тип фигуры.
         Связь со своей рампой читатель достраивает сам — мы её не заявляем.
         Чего здесь нет и не будет: «построена по чертежам». Это недоказуемо,
         а имя в предпринимательской деятельности требует согласия — ГК РФ,
         ст. 19 п. 4. Число попыток не пишем: источники дают 10 и 11. */
      vertKick: 'Что такое вёрт',
      vertBody: 'Вертикальная стена над радиусом: с неё не съезжают, а вылетают вверх и приземляются обратно в ту же стену. Именно на такой рампе разыгрывают чемпионаты в дисциплине «вёрт».',
      vertOurs: 'Рампа в Сокольниках выше четырёх метров: полный соревновательный размер, а не уменьшенная версия.',

      parksKick: 'Три адреса',
      parksTitle: 'Три парка под разный уровень катания',
      parksLead: 'Цены и доступность свободного катания различаются. Выберите тот, до которого реально доедете.',
      parksHint: '',
      bookIn: 'Записаться в ',
      fullPage: 'Вся страница парка',

      dirKick: 'Скейтборд или ролики',
      dirTitle: 'Два направления, одни и те же парки',
      dirLead: 'Тренеры те же, площадка та же. Если ещё не решили — начните с персонального занятия: на нём это как раз и выясняется.',
      dirPick: 'Выбрать и записаться',

      fmtKick: 'Три формата',
      fmtTitle: 'Секция, персональная тренировка или просто покататься',
      fmtLead: 'Секция — то, ради чего сюда ходят месяцами: тот же зал и те же тренеры, а занятие стоит 2 200 ₽ против 4 100 ₽ за персональный час в Химках. Пробное персональное от 1 300 ₽ — это разовый вход попробовать, а не цена регулярных занятий.',
      fmtBadge: 'Начните здесь',
      fmtUnits: {
        sekciya: ['2 200 ₽ за занятие', 'оплата за месяц'],
        personal: ['от 1 300 ₽ пробное', 'час от 4 100 ₽ · зависит от парка'],
        'free-ride': ['от 1 000 ₽ за вход', 'без тренера · зависит от парка']
      },
      fmtCta: 'Записаться в секцию',
      more: 'Подробнее',
      audKick: 'Кому что подходит',
      audTitle: 'Четыре ситуации, с которыми сюда приходят',
      audAsk: 'Частый вопрос',

      rulesTitle: 'Что мы делаем, чтобы падение заканчивалось синяком',
      rulesLead: 'Инструктаж здесь — раздел подписанного договора-оферты, а не три фразы у стойки. Вёрт-рампа открыта не всем, и это правильно.',
      rules: [
        ['Защита обязательна, а не «желательна».', 'Отказ означает недопуск: инструктор обязан удалить нарушителя из зоны катания.'],
        ['Первое, чему учат, — падать.', 'Группироваться, уходить на бок, не выставлять руку. Ребёнок упадёт на первом занятии и на втором — вопрос только в том, чем это закончится.'],
        ['Чего клуб не обещает.', 'Скейтбординг — экстремальный вид спорта. Правила и защита снижают тяжесть падений, но не отменяют их.'],
        ['Фигуры осваивают по порядку.', 'Сначала малый радиус, потом большой. На вёрт-рампу — только с тренером, в полной защите, со страховкой на первых попытках.']
      ],
      rulesCta: 'Как устроена безопасность',
      gameCta: 'Те же правила — в мини-игре',

      askKick: 'Что спросить по телефону',
      askTitle: 'Четыре вещи, которые администратор скажет за минуту',
      askLead: 'Месяц, расписание и размер группы зависят от парка и от того, сколько раз в неделю вы ходите. Всё посчитают и назовут в этом же разговоре, а не «мы перезвоним».',
      askList: [
        'Когда ближайший набор и в какие дни занимается группа',
        'Сколько детей в группе и сколько длится занятие',
        'Сколько выходит месяц при одной, двух или трёх тренировках в неделю',
        'Что взять с собой и что уже входит в стоимость'
      ],

      intakeKick: 'Набор в секцию',
      intakeTitle: 'Группы набираются потоками, примерно раз в месяц',
      intakeLead: 'Прийти в готовую группу «на разок» нельзя — поэтому запись в секцию идёт через администратора: он скажет, когда ближайший набор, и подберёт время под ваш график. Разговор занимает минуту.',
      intakeNow: 'Позвоните сейчас — до 22:00 отвечает администратор парка. Разговор занимает минуту.',
      /* Ссылки под этой строкой подписаны полностью — «WhatsApp · Химки»,
         а не голым именем парка: владелец 20.08.2026 поймал, что ряд
         «Дубровка → Химки → Telegram →» читался как загадка. */
      intakeLate: 'Позже 22:00 или неудобно говорить — напишите, ответят утром:',
      intakeAlt: 'Не хотите ждать набора — персональная тренировка есть каждый день, пробное от 1 300 ₽.',
      intakeAltCta: 'Выбрать время персональной',

      giftKick: 'Подарочный сертификат',
      giftTitle: 'Час в парке с тренером вместо ещё одной коробки',
      giftLead: 'Скейтборд или ролики — направление выбирает получатель. Дарят чаще ролики: «встать и поехать» обычно получается уже на первом занятии. Час с тренером — от 4 100 ₽ в Химках, от 4 500 ₽ на Дубровке, от 4 900 ₽ в Сокольниках. Оформляется в парке, действует 12 месяцев.',
      giftCta: 'Позвонить и оформить',
      giftMore: 'Как это работает',

      gdKick: 'Подбор за минуту',
      gdTitle: 'Три вопроса — и скажем, в какой парк ехать',
      gdLead: 'Ни одной формы и ни одного поля для заполнения. В конце — парк, формат, цена и телефон, по которому запишут.',
      gdStep: 'Шаг',
      gdOf: 'из',
      gdBack: 'Назад',
      gdRestart: 'Ответить заново',
      gdQ: ['Кто поедет', 'Скейтборд или ролики', 'Откуда удобнее ехать'],
      gdWho: [
        ['kid', 'Ребёнок 7–12 лет', 'первый раз на доске или почти'],
        ['teen', 'Подросток 13–17 лет', 'хочет к своим и хочет прогресса'],
        ['adult', 'Взрослый с нуля', 'ни разу не стоял на доске'],
        ['rider', 'Уже катаюсь', 'нужна площадка, а не объяснения']
      ],
      gdGear: [
        ['skate', 'Скейтборд', 'секция, персональные и свободное катание'],
        ['inline', 'Ролики', 'персональные занятия по тому же прайсу']
      ],
      gdFrom: [
        ['center', 'Центр и восток Москвы', 'Сокольнический Вал'],
        ['north', 'Север Москвы и Химки', 'ТЦ «Капитолий», Правобережная'],
        ['south', 'Юго-восток Москвы', 'МЦК «Дубровка», ТРЦ «Мозаика»'],
        ['any', 'Доеду куда угодно', 'тогда подберём по уровню']
      ],
      gdResKick: 'Что получилось',
      gdResPre: 'Вам сюда:',
      gdFmtRow: 'Формат',
      gdPriceRow: 'Цена',
      gdCall: 'Позвонить в ',
      gdParkPage: 'Страница парка',
      gdAltTitle: 'Если готовы ехать дальше',
      gdFmtNames: {
        sekciya: 'Секция',
        personal: 'Персональная тренировка',
        'free-ride': 'Свободное катание'
      },
      gdFmtNote: {
        sekciya: 'Оплата за месяц по числу тренировок в неделю. Группы набираются потоками, примерно раз в месяц — администратор скажет, когда ближайший набор.',
        personal: 'Персональные идут каждый день, ждать набора не нужно. Пробное — разовый вход попробовать, а не цена регулярных занятий.',
        'free-ride': 'Без тренера. Доска и защита в аренду на месте.'
      },
      gdInlineNote: 'На роликах прайсом подтверждены персональные занятия. Есть ли в этом парке группа на роликах — скажет администратор.',
      gdInlineRide: 'Свободное катание на роликах открывают не везде — позвоните перед выездом.',
      gdRideLimited: 'Площадка компактная: свободное катание зависит от занятий и загрузки. Позвоните перед выездом.',
      gdRideAlways: 'Свободное катание открыто почти всегда — места хватает и занятиям, и всем остальным.',
      gdSay: 'Подобрали парк'
    },

    en: {
      heroKick: 'Skate & inline sections · one-to-one lessons · free-ride',
      heroHawk: 'Vert is the feature that made Tony Hawk and his 900° famous. Ours is over four metres: full size, not a scaled-down copy.',
      heroLead: 'Children from 7 and adults, skateboarding and inline. A section class is 2,200 ₽. Board, pads, care and coaching — on us.',
      heroCta1: 'The skate section — details here',
      heroCta2: 'Choose a park',
      scroll: 'Scroll down',

      acTitle: 'The Red Deck academy in numbers',
      acRate: 'Yandex Maps',
      acMarks: 'ratings',
      acLead: 'Eight coaches, each with a name, a record and years behind them. A coach’s category sets the hourly price — and the page explains what sits behind it.',
      acCta: 'Who runs the sessions',

      vidKick: 'Video',
      vidTitle: 'How our students ride',
      vidLead: 'A short cut from the hall: student runs, from first slopes to tricks. The video shows what this page describes in words. Press play — it loads and starts.',
      vidPlay: 'Watch the video',
      vidAlt: 'The bowl at Red Deck Sokolniki',

      startTitle: 'Nobody starts on the vert ramp',
      startLead: 'The vertical wall needs a coach’s clearance and full pads. A first lesson happens on small transitions, and the first thing taught is how to fall: tuck in, go to the side, never put a hand down.',
      startRows: [
        ['Section', '2,200 ₽', 'price of one class, paid monthly'],
        ['Trial one-to-one', 'from 1,300 ₽', 'in Khimki and Dubrovka · from 1,400 ₽ in Sokolniki'],
        ['Free-ride', 'from 1,000 ₽', 'in Khimki and Dubrovka · 1,200 / 1,500 ₽ in Sokolniki']
      ],

      scaleFigCap: 'To put it in scale',
      scaleFigs: [
        ['the floor area in Sokolniki', 'about ten school gyms under one roof'],
        ['the height of the vert ramp', 'nearly a metre above a basketball hoop']
      ],

      vertKick: 'What vert is',
      vertBody: 'A vertical wall above the radius: you do not ride down it, you fly out and land back into the same wall. This is the feature the vert discipline is contested on.',
      vertOurs: 'The Sokolniki ramp stands over four metres: full competition size, not a scaled-down version.',

      parksKick: 'Three addresses',
      parksTitle: 'Three parks for three different levels',
      parksLead: 'Prices and free-ride availability differ. Pick the one you will actually get to.',
      parksHint: '',
      bookIn: 'Book at ',
      fullPage: 'Full park page',

      dirKick: 'Skateboard or inline',
      dirTitle: 'Two disciplines, the same three parks',
      dirLead: 'Same coaches, same floor. If you have not decided — start with a one-to-one lesson: that is exactly where it becomes clear.',
      dirPick: 'Choose and book',

      fmtKick: 'Three formats',
      fmtTitle: 'The section, a one-to-one lesson, or simply a ride',
      fmtLead: 'The section is what people come back to for months: the same floor and the same coaches, and a class costs 2,200 ₽ against 4,100 ₽ for a one-to-one hour. A trial one-to-one from 1,300 ₽ is a one-off way to try, not the price of regular training.',
      fmtBadge: 'Start here',
      fmtUnits: {
        sekciya: ['2,200 ₽ a class', 'paid monthly'],
        personal: ['trial from 1,300 ₽', 'hour from 4,100 ₽ · varies by park'],
        'free-ride': ['from 1,000 ₽ entry', 'no coach · varies by park']
      },
      fmtCta: 'Join the section',
      more: 'More',
      audKick: 'Who it suits',
      audTitle: 'Four situations people arrive with',
      audAsk: 'A common question',

      rulesTitle: 'What we do so that a fall ends in a bruise',
      rulesLead: 'The briefing here is a section of a signed public offer agreement, not three sentences at the counter. The vert ramp is not open to everyone — and that is right.',
      rules: [
        ['Pads are mandatory, not “recommended”.', 'Refusing means no access: the instructor must remove the person from the riding zone.'],
        ['The first thing taught is how to fall.', 'Tuck in, go to the side, never put a hand down. A child will fall in the first lesson and the second — the only question is how it ends.'],
        ['What the club does not promise.', 'Skateboarding is an extreme sport. Rules and pads reduce how hard people fall, but do not eliminate it.'],
        ['Features are learned in order.', 'Small transitions first. The vert ramp — only with a coach, in full pads, spotted on the first attempts.']
      ],
      rulesCta: 'How safety works',
      gameCta: 'The same rules — in the mini game',

      askKick: 'What to ask on the phone',
      askTitle: 'Four things the administrator answers in a minute',
      askLead: 'The month, the timetable and the group size depend on the park and on how often you come. It is not a secret — it is a calculation for you, and you get it in the same call, not “we will get back to you”.',
      askList: [
        'When the next intake is and which days the group trains',
        'How many children are in a group and how long a class lasts',
        'What a month costs at one, two or three classes a week',
        'What to bring and what is already included'
      ],

      intakeKick: 'Section intake',
      intakeTitle: 'Groups are formed in waves, roughly once a month',
      intakeLead: 'You cannot drop into a running group for one session — so the section is booked through the administrator: they will tell you when the next intake is and fit it to your schedule. The call takes a minute.',
      intakeNow: 'Call now — the park administrator answers until 22:00. The call takes a minute.',
      intakeLate: 'After 22:00, or if calling is awkward — write to us, they reply in the morning:',
      intakeAlt: 'Don’t want to wait for the intake — a one-to-one lesson runs every day, trial from 1,300 ₽.',
      intakeAltCta: 'Pick a time for a one-to-one',

      giftKick: 'Gift certificate',
      giftTitle: 'An hour in the park with a coach instead of another box',
      giftLead: 'Skateboard or inline skates — the recipient chooses. Inline is the most-gifted option: getting up and rolling usually happens within the first lesson. An hour with a coach is from 4,100 ₽ in Khimki, 4,500 ₽ in Dubrovka and 4,900 ₽ in Sokolniki. Issued at the park, valid for 12 months.',
      giftCta: 'Call and arrange',
      giftMore: 'How it works',

      gdKick: 'A one-minute match',
      gdTitle: 'Three questions — and we say which park to go to',
      gdLead: 'No form and no fields to fill in. At the end: a park, a format, a price and the phone number that takes the booking.',
      gdStep: 'Step',
      gdOf: 'of',
      gdBack: 'Back',
      gdRestart: 'Start over',
      gdQ: ['Who is coming', 'Skateboard or inline', 'Where are you coming from'],
      gdWho: [
        ['kid', 'A child aged 7–12', 'first time on a board, or close to it'],
        ['teen', 'A teenager 13–17', 'wants their own crowd and real progress'],
        ['adult', 'An adult from zero', 'never stood on a board'],
        ['rider', 'Already riding', 'needs a floor, not explanations']
      ],
      gdGear: [
        ['skate', 'Skateboard', 'section, one-to-one lessons and free-ride'],
        ['inline', 'Inline skates', 'one-to-one lessons on the same price list']
      ],
      gdFrom: [
        ['center', 'Central and eastern Moscow', 'Sokolnichesky Val'],
        ['north', 'Northern Moscow and Khimki', 'Capitoliy mall, Pravoberezhnaya'],
        ['south', 'South-eastern Moscow', 'Dubrovka MCC, Mozaika mall'],
        ['any', 'I can get anywhere', 'then we match by level']
      ],
      gdResKick: 'The result',
      gdResPre: 'Your park:',
      gdFmtRow: 'Format',
      gdPriceRow: 'Price',
      gdCall: 'Call ',
      gdParkPage: 'Full park page',
      gdAltTitle: 'If you are willing to travel further',
      gdFmtNames: {
        sekciya: 'The section',
        personal: 'One-to-one lesson',
        'free-ride': 'Free-ride'
      },
      gdFmtNote: {
        sekciya: 'Paid monthly, by how many times a week you attend. Groups are formed in waves, roughly once a month — the administrator will tell you when the next intake is.',
        personal: 'One-to-one lessons run every day, no waiting for an intake. The trial is a one-off way to try, not the price of regular training.',
        'free-ride': 'No coach. Board and pads for rent on site.'
      },
      gdInlineNote: 'For inline, the price list confirms one-to-one lessons. Whether this park runs an inline group is answered by the administrator.',
      gdInlineRide: 'Inline free-ride is not opened everywhere — call before you set off.',
      gdRideLimited: 'The floor is compact: free-ride depends on classes and how busy it is. Call before you set off.',
      gdRideAlways: 'Free-ride is open almost any time — there is enough room for classes and everyone else.',
      gdSay: 'Park matched'
    }
  };

  /* ---------- карточка выбранного парка ---------- */
  function parkCard(h, swap) {
    const RD = h.RD, P = h.P, esc = h.esc, f = h.f, money = h.money, L = h.L, D = h.D;
    const t = T[L()], d = D();
    const p = RD.park(h.S.park);
    const lvl = h.parkCard(p.slug);
    const fr = p.freeride;
    const trial = h.trialFrom(p.slug), hour = h.personalFrom(p.slug);

    return '<div class="grid g-lead' + (swap ? ' swap' : '') + '" id="parkcard">' +
      '<div>' +
      '<p class="mono" style="margin-bottom:10px">' + f(esc(P(lvl.tag)), lvl.tagStatus) + '</p>' +
      '<h3 class="t-h3" style="margin-bottom:12px">' + esc(P(p.name)) + '</h3>' +
      '<p class="t-body t-muted" style="max-width:46ch;margin-bottom:22px">' + esc(P(lvl.body)) + '</p>' +

      '<div class="rw rw--addr"><span class="rw__k">' + esc(d.address) + '</span>' +
      '<span class="rw__v">' + f(esc(P(p.address)), p.addressStatus) + '</span></div>' +
      '<div class="rw"><span class="rw__k">' + esc(d.sectionRow) + '</span><b>' + money(p.groupPrice) + '</b></div>' +
      '<div class="rw"><span class="rw__k">' + esc(L() === 'ru' ? 'Персональная: пробное · 60 мин' : 'One-to-one: trial · 60 min') +
      '</span><b>' + money(trial) + ' · ' + esc(d.from) + ' ' + money(hour) + '</b></div>' +
      '<div class="rw"><span class="rw__k">' + esc(d.rideRow) + '</span><b>' + h.rideLine(p) + '</b></div>' +
      '<div class="rw rw--last"><span class="rw__k">' + esc(d.rideStatus) + '</span><b>' +
      esc(fr.mode === 'always' ? d.always : d.byLoad) + '</b></div>' +

      '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px">' +
      '<a class="btn btn--primary" href="' + h.href('booking') + '" data-park="' + p.slug + '">' +
      esc(t.bookIn + P(p.nameAcc || p.name)) + '</a>' +
      '<a class="btn btn--ghost" href="' + h.href('park', p.slug) + '">' + esc(t.fullPage) + '</a>' +
      '<a class="btn btn--ghost" href="tel:' + h.tel(p.phone) + '">' + esc(p.phone) + '</a>' +
      '</div></div>' +

      '<div>' + h.parkPhoto(p, '16/10', p.slug === 'sokolniki' ? 'second' : 'wide') + '</div>' +
      '</div>';
  }
  root.RDParkCard = parkCard;

  /* =====================================================================
     ГИД «ПРОКАЧУ ПО ПАРКАМ»

     Единственное действие на сайте дешевле звонка. Три вопроса, ноль полей
     ввода, ни одной новой цифры: парк, формат и цена собираются из
     content.js и модулей парков.

     Порядок решения намеренно такой:
       — география жёстче уровня (человек едет туда, куда доедет),
         поэтому округ, если он назван, определяет парк;
       — уровень определяет формат, а не парк: секцию и персональные ведут
         во всех трёх;
       — если география и уровень расходятся, второй парк показывается
         отдельной строкой, а не подменяет первый молча.

     Ролики: прайсом подтверждены только персональные (DISCIPLINES.inline
     formats.group === 'o'). Поэтому на роликах секция не предлагается —
     вместо неё персональное и честная строка про группу.
     ===================================================================== */

  const GS = { step: 0, who: null, gear: null, from: null };
  const GEO_PARK   = { center: 'sokolniki', north: 'khimki', south: 'mosaic' };
  /* карта уровня повторяет то, что парки пишут о себе в своих модулях:
     Химки — «Первый раз на доске», Дубровка — «для тех, кто уже уверенно
     едет», Сокольники — «От первых шагов до вёрта» */
  const LEVEL_PARK = { kid: 'khimki', teen: 'sokolniki', adult: 'khimki', rider: 'mosaic' };
  /* Когда география не ограничивает, «первым шагам» правильнее ехать
     в Сокольники: там есть и зона для начинающих, и запас времени —
     свободное катание открыто почти всегда. Химки остаются второй
     строкой «если ближе». Без этого ответ «доеду куда угодно» вёл
     родителя в самый маленький парк сети. */
  const ANY_PARK = { kid: 'sokolniki', adult: 'sokolniki' };

  function guideResolve(h) {
    const geo = (GS.from && GS.from !== 'any') ? GEO_PARK[GS.from] : null;
    const any = (!GS.from || GS.from === 'any') ? ANY_PARK[GS.who] : null;
    const lvl = any || LEVEL_PARK[GS.who] || 'sokolniki';
    const a = h.RD.audiences.filter(function (x) { return x.slug === GS.who; })[0];

    let fmt = (a && a.recommend) || 'sekciya';
    let inlineSwap = false;
    if (GS.gear === 'inline' && fmt === 'sekciya') { fmt = 'personal'; inlineSwap = true; }

    return {
      slug: geo || lvl,
      alt: (geo && lvl !== geo) ? lvl : (any && LEVEL_PARK[GS.who] !== any ? LEVEL_PARK[GS.who] : null),
      fmt: fmt,
      inlineSwap: inlineSwap
    };
  }

  function guideStep(h, idx) {
    const t = T[h.L()], esc = h.esc;
    const rows = [t.gdWho, t.gdGear, t.gdFrom][idx];
    const key  = ['who', 'gear', 'from'][idx];

    const opts = rows.map(function (r) {
      return '<button class="gd__opt" type="button" data-g="' + key + '" data-v="' + r[0] + '">' +
        '<span class="gd__optT">' + esc(r[1]) + '</span>' +
        '<span class="gd__optH t-small t-muted">' + esc(r[2]) + '</span>' +
        '</button>';
    }).join('');

    const chosen = [
      GS.who  ? t.gdWho.filter(function (r) { return r[0] === GS.who; })[0]   : null,
      GS.gear ? t.gdGear.filter(function (r) { return r[0] === GS.gear; })[0] : null
    ].filter(Boolean).map(function (r) { return esc(r[1]); }).join(' · ');

    return '<p class="mono gd__count">' + esc(t.gdStep) + ' 0' + (idx + 1) + ' ' + esc(t.gdOf) + ' 03</p>' +
      '<h3 class="t-h3 gd__q" id="gd-q" tabindex="-1">' + esc(t.gdQ[idx]) + '</h3>' +
      (chosen ? '<p class="t-small t-muted gd__crumb">' + chosen + '</p>' : '') +
      '<div class="gd__opts" role="group" aria-labelledby="gd-q">' + opts + '</div>' +
      (idx > 0
        ? '<button class="gd__back lnk" type="button" data-g="back"><span>←</span> ' + esc(t.gdBack) + '</button>'
        : '');
  }

  function guideResult(h) {
    const RD = h.RD, P = h.P, esc = h.esc, money = h.money, L = h.L, D = h.D;
    const t = T[L()], d = D();
    const r = guideResolve(h);
    const p = RD.park(r.slug);
    const card = h.parkCard(r.slug);
    const fr = p.freeride;

    /* цена берётся из тех же функций, что и карточка парка — второй
       источник правды здесь развалился бы при первом же изменении прайса */
    let priceHtml, fmtRoute;
    if (r.fmt === 'sekciya') {
      priceHtml = money(p.groupPrice) + ' ' + esc(L() === 'ru' ? 'за занятие' : 'a class');
      fmtRoute = 'sekciya';
    } else if (r.fmt === 'personal') {
      priceHtml = esc(L() === 'ru' ? 'пробное ' : 'trial ') + money(h.trialFrom(r.slug)) +
        ' · ' + esc(d.from) + ' ' + money(h.personalFrom(r.slug)) +
        ' ' + esc(L() === 'ru' ? 'за час' : 'an hour');
      fmtRoute = 'personal';
    } else {
      priceHtml = h.rideLine(p) + ' ' + esc(L() === 'ru' ? 'за вход' : 'entry');
      fmtRoute = 'freeride';
    }

    const notes = [t.gdFmtNote[r.fmt]];
    if (r.inlineSwap) notes.push(t.gdInlineNote);
    if (r.fmt === 'free-ride') {
      notes.push(fr.mode === 'always' ? t.gdRideAlways : t.gdRideLimited);
      if (GS.gear === 'inline') notes.push(t.gdInlineRide);
    }

    const alt = r.alt ? RD.park(r.alt) : null;
    const altCard = r.alt ? h.parkCard(r.alt) : null;

    return '<div class="gd__res grid g-lead">' +
      '<div>' +
      '<p class="mono gd__count">' + esc(t.gdResKick) + '</p>' +
      '<p class="t-small t-muted" style="margin-bottom:6px">' + esc(t.gdResPre) + '</p>' +
      '<h3 class="t-h3" id="gd-q" tabindex="-1" style="margin-bottom:10px">' + esc(P(p.name)) + '</h3>' +
      '<p class="mono" style="margin-bottom:14px">' + h.f(esc(P(card.tag)), card.tagStatus) + '</p>' +
      '<p class="t-body t-muted" style="max-width:46ch;margin-bottom:22px">' + esc(P(card.body)) + '</p>' +

      '<div class="rw rw--addr"><span class="rw__k">' + esc(d.address) + '</span>' +
      '<span class="rw__v">' + h.f(esc(P(p.address)), p.addressStatus) + '</span></div>' +
      '<div class="rw"><span class="rw__k">' + esc(t.gdFmtRow) + '</span><b>' +
      esc(t.gdFmtNames[r.fmt]) + '</b></div>' +
      '<div class="rw rw--last"><span class="rw__k">' + esc(t.gdPriceRow) +
      '</span><b>' + priceHtml + '</b></div>' +

      notes.map(function (n) {
        return '<p class="t-small t-muted gd__note">' + esc(n) + '</p>';
      }).join('') +

      '<div class="gd__acts">' +
      '<a class="btn btn--primary" href="tel:' + h.tel(p.phone) + '" data-g="pick" data-v="' + p.slug + '">' +
      esc(t.gdCall + P(p.nameAcc || p.name)) + '</a>' +
      '<a class="btn btn--ghost" href="' + h.href('park', p.slug) + '" data-g="pick" data-v="' + p.slug + '">' +
      esc(t.gdParkPage) + '</a>' +
      '<a class="btn btn--ghost" href="' + h.href(fmtRoute) + '">' + esc(t.gdFmtNames[r.fmt]) + '</a>' +
      '</div>' +

      (alt
        ? '<div class="gd__alt">' +
          '<p class="mono" style="margin-bottom:8px">' + esc(t.gdAltTitle) + '</p>' +
          '<p class="t-small"><b>' + esc(P(alt.name)) + '</b> — ' +
          esc(P(altCard.tag)) + '. ' + esc(P(alt.address)) + '</p>' +
          '<a class="lnk" href="' + h.href('park', alt.slug) + '" data-g="pick" data-v="' + alt.slug + '">' +
          esc(t.gdParkPage) + ' <span>→</span></a></div>'
        : '') +

      /* с результата чаще всего хотят переиграть последний ответ — округ,
         а не проходить все три вопроса заново. Поэтому кнопки две. */
      '<div class="gd__again">' +
      '<button class="gd__back lnk" type="button" data-g="back"><span>←</span> ' +
      esc(t.gdBack) + '</button>' +
      '<button class="gd__back lnk" type="button" data-g="restart"><span>←</span> ' +
      esc(t.gdRestart) + '</button>' +
      '</div>' +
      '</div>' +

      '<div>' + h.parkPhoto(p, '16/10', p.slug === 'sokolniki' ? 'second' : 'wide') + '</div>' +
      '</div>';
  }

  function guideBody(h) {
    return GS.step < 3 ? guideStep(h, GS.step) : guideResult(h);
  }

  function guide(h) {
    const t = T[h.L()], esc = h.esc;
    return '<section class="sec sec--line gd" id="guide" aria-labelledby="gd-h">' +
      '<div class="shell">' +
      '<p class="kick kick--plain rv">' + esc(t.gdKick) + '</p>' +
      '<div class="grid g-split gd__head">' +
      '<h2 class="t-h2s rv" id="gd-h" style="--i:1;max-width:18ch">' + esc(t.gdTitle) + '</h2>' +
      '<p class="t-lede rv" style="--i:2">' + esc(t.gdLead) + '</p>' +
      '</div>' +
      '<div class="gd__box" id="gd-body">' + guideBody(h) + '</div>' +
      '</div></section>';
  }

  /* ---------- блок «позвонить и что спросить» — используется и на других страницах ---------- */
  function intake(h, compact) {
    const t = T[h.L()], esc = h.esc, P = h.P;
    const phones = h.parks().map(function (p) {
      return '<a class="btn btn--ghost" href="tel:' + h.tel(p.phone) + '">' +
        esc(P(p.short) + ' ' + p.phone) + '</a>';
    }).join('');

    /* В компактном виде правой колонки нет, а сетка оставалась двойной —
       на шести страницах (парки, три парка, цены, безопасность) низ
       заканчивался пустой правой половиной в 600 px. Сетку включаем
       только когда есть чем занять вторую колонку. */
    /* Полная версия блока (главная) идёт на фото-фоне: спиральная
       лестница из фанеры — выбор владельца 19.08.2026. Фон ч/б под
       тёмной вуалью, текст переходит на белый через класс dark.
       Компактная версия на внутренних страницах остаётся белой. */
    return '<section class="sec sec--line intake' + (compact ? '' : ' intake--photo dark') + '" id="intake" aria-labelledby="intake-h">' +
      (compact ? '' :
        '<div class="intake__bg" aria-hidden="true">' +
        h.img('sokolniki-stairs-4x5', '') + '</div>') +
      '<div class="shell' + (compact ? '' : ' grid g-split') + '">' +
      '<div' + (compact ? ' style="max-width:62ch"' : '') + '>' +
      '<p class="kick kick--plain">' + esc(t.intakeKick) + '</p>' +
      '<h2 class="t-h2s rv" id="intake-h" style="max-width:18ch;margin-bottom:16px">' + esc(t.intakeTitle) + '</h2>' +
      '<p class="t-body t-muted rv" style="--i:1;max-width:48ch;margin-bottom:22px">' + esc(t.intakeLead) + '</p>' +
      '<div class="intake__phones">' + phones + '</div>' +
      '<p class="t-small t-muted" style="margin-top:14px;max-width:44ch">' + esc(t.intakeNow) + '</p>' +
      /* Выход для тех, кто дочитал после 22:00. До этой строки
         единственным действием на сайте был звонок в рабочие часы:
         созревший вечером человек мог только закрыть вкладку.
         WhatsApp есть не у всех парков — показываем те, что есть. */
      (function () {
        const wa = (h.RD.social && h.RD.social.whatsapp) || {};
        const links = h.parks().filter(function (p) { return wa[p.slug]; }).map(function (p) {
          return '<a class="lnk" href="https://wa.me/' + esc(wa[p.slug].replace(/[^\d+]/g, '')) +
            '" target="_blank" rel="noopener">WhatsApp · ' + esc(P(p.short)) + ' <span>→</span></a>';
        }).join('');
        const tg = (h.RD.social && h.RD.social.links.filter(function (x) { return x.id === 'tg'; })[0]) || null;
        const tgLink = tg
          ? '<a class="lnk" href="' + esc(tg.url) + '" target="_blank" rel="noopener">' +
            esc(h.L() === 'ru' ? 'Telegram клуба' : 'Club Telegram') + ' <span>→</span></a>'
          : '';
        return (links || tgLink)
          ? '<p class="t-small t-muted" style="margin-top:18px;max-width:44ch">' + esc(t.intakeLate) + '</p>' +
            '<div class="intake__wa">' + links + tgLink + '</div>'
          : '';
      })() +
      '<p class="t-small t-muted" style="margin-top:22px;max-width:44ch">' + esc(t.intakeAlt) + '</p>' +
      '<a class="lnk" href="' + h.href('personal') + '">' + esc(t.intakeAltCta) + ' <span>→</span></a>' +
      '</div>' +
      (compact ? '' :
        '<div class="box rv" style="--i:2">' +
        '<p class="kick kick--plain">' + esc(t.askKick) + '</p>' +
        '<h3 class="t-h4" style="margin-bottom:14px;max-width:24ch">' + esc(t.askTitle) + '</h3>' +
        '<p class="t-small t-muted" style="margin-bottom:16px;max-width:44ch">' + esc(t.askLead) + '</p>' +
        t.askList.map(function (x, i) {
          return '<div class="li' + (i === t.askList.length - 1 ? ' li--last' : '') + ' t-small">' +
            '<span class="mono" style="margin-right:10px">0' + (i + 1) + '</span>' + esc(x) + '</div>';
        }).join('') +
        '</div>') +
      '</div></section>';
  }
  root.RDIntake = intake;

  root.RDHome = {
    page: function (h) {
      const RD = h.RD, P = h.P, esc = h.esc, f = h.f, money = h.money, L = h.L, D = h.D;
      const t = T[L()], d = D();

      /* ---------- 1. ГЕРОЙ ----------
         Заголовок развёрнут с вёрт-рампы на секцию (решение владельца
         19.08.2026). Две причины, обе взрослые.
         Первая — юридическая: «самая большая в Восточной Европе» это
         превосходная степень со сравнением, а замера нет; ст. 5 ФЗ-38,
         доказывать превосходство пришлось бы клубу.
         Вторая — денежная: вёрт-рампу листает родитель семилетнего,
         и сайт сам это признавал — следующий блок назывался «Начинают
         не с вёрт-рампы». Заголовок, который приходится опровергать
         через экран, выбран не под ту аудиторию.
         Вёрт-рампа никуда не делась: она в кадре первого экрана, в блоке
         про масштаб и на странице Сокольников — но как доказательство
         уровня, а не как первое слово. Красным осталось «крытых»:
         единственное слово, которое отличает клуб от уличной площадки
         и объясняет занятия зимой. */
      /* Правка владельца 19.08.2026: «Скейт-секция в крытых парках»
         прочиталось как один парк и не понравилось названием. Заголовок
         говорит главное числом — парка три, — и возвращает вёрт-рампу
         как крючок. Красное слово — «вёрт-рампа»: единственный текст,
         которому система разрешает чистый красный на тёмном.
         Превосходной степени нет — риск по ст. 5 ФЗ-38 не возвращается. */
      const heroWords = L() === 'ru'
        ? ['Три крытых', 'скейт-парка', 'и <em class="red">вёрт-рампа</em>']
        : ['Three indoor', 'skateparks', 'and a <em class="red">vert ramp</em>'];

      const hero =
        '<section class="hero" aria-labelledby="hero-h">' +
        /* Кадр героя — выбор владельца 19.08.2026: вид из рампы на балкон,
           спиральную лестницу и колонны-«деревья». На телефоне остаётся
           вертикальная съёмка рампы: у нового кадра исходник горизонтальный,
           вертикального выреза из него не собрать без потери качества. */
        '<div class="hero__ph">' + h.img('sokolniki-hall-16x9',
          L() === 'ru' ? 'Зал Red Deck в Сокольниках: рампа, балкон со спиральной лестницей и колонны-«деревья»'
                       : 'The Red Deck Sokolniki hall: the ramp, the balcony with its spiral stair and the tree columns',
          'kb', { eager: true, mobile: 'sokolniki-mobile-9x16' }) + '</div>' +
        '<div class="hero__veil"></div>' +
        '<div class="shell hero__in">' +
        /* каждый формат — неразрывный: «свободное \n катание» с висящим
           словом запрещено владельцем 20.08.2026 */
        '<p class="kick kick--wrap" style="color:#fff"><i class="blink"></i>' +
        t.heroKick.split(' · ').map(function (w, i) {
          return (i ? '<span class="kick__dot" aria-hidden="true">·</span>' : '') +
            '<span class="kick__w">' + esc(w) + '</span>';
        }).join('') + '</p>' +
        '<h1 class="t-hero hero__h is-in" id="hero-h">' +
        heroWords.map(function (w, i) {
          return '<span class="rise"><span style="--i:' + i + '">' + w + '</span></span>';
        }).join('') + '</h1>' +
        '<p class="hero__hawk"><i></i>' + esc(t.heroHawk) + '</p>' +
        '<p class="hero__lead">' + esc(t.heroLead) + '</p>' +
        '<div class="hero__cta">' +
        '<a class="btn btn--primary" href="' + h.href('sekciya') + '">' + esc(t.heroCta1) + '</a>' +
        '</div>' +
        /* Три парка — по имени и кликабельно прямо в первом экране.
           Правка владельца 19.08.2026: строчка-кикер сверху не читалась
           как «у нас три адреса», а до блока парков надо было листать.
           Теперь Сокольники, Дубровка и Химки — три цели для пальца
           на первом же экране. Обезличенную кнопку «Выбрать парк» они
           заменяют собой. */
        '<nav class="hero__parks" aria-label="' + esc(t.parksKick) + '">' +
        h.parks().map(function (p) {
          return '<a class="hero__park" href="' + h.href('park', p.slug) + '">' +
            esc(P(p.short)) + ' <span aria-hidden="true">→</span></a>';
        }).join('') +
        '</nav>' +
        '</div></section>';

      /* ---------- 2. СТАРТОВАЯ ПОЛОСА ---------- */
      const start =
        '<section class="sec" id="start" aria-labelledby="start-h">' +
        '<div class="shell grid g-split">' +
        '<div>' +
        '<h2 class="t-h2s rv" id="start-h" style="max-width:14ch;margin-bottom:16px">' + esc(t.startTitle) + '</h2>' +
        '<p class="t-body t-muted rv" style="--i:1;max-width:46ch">' + esc(t.startLead) + '</p>' +
        '</div>' +
        '<div>' + t.startRows.map(function (r, i) {
          return '<div class="rw rv' + (i === t.startRows.length - 1 ? ' rw--last' : '') + '" style="--i:' + i + '">' +
            '<span style="max-width:26ch">' + esc(r[0]) +
            '<span class="t-small t-muted" style="display:block">' + esc(r[2]) + '</span></span>' +
            '<b>' + esc(r[1]) + '</b></div>';
        }).join('') +
        '<a class="btn btn--primary btn--wide" style="margin-top:22px" href="' + h.href('sekciya') + '">' +
        esc(t.heroCta1) + '</a>' +
        '</div></div></section>';

      /* ---------- 2б. АКАДЕМИЯ: ЦИФРЫ И РЕЗУЛЬТАТЫ ----------
         Первое социальное доказательство на странице. До этого блока
         сайт двадцать экранов говорил о себе сам: размеры, правила,
         цены — и ни одного свидетельства, что сюда кто-то ходит.
         Стоит рано и занимает одну полосу: это не раздел, а опора
         под всё, что читатель уже прочёл.
         Оценка стоит рядом с цифрами намеренно — из четырёх чисел
         проверить со стороны можно только её, и ссылка это позволяет. */
      const ac = RD.academy;
      const figCells = ac.figures.map(function (x, i) {
        return '<div class="acc rv" style="--i:' + i + '">' +
          '<b class="acc__n">' + f(esc(x.value), x.status) + '</b>' +
          '<span class="acc__k">' + esc(P(x.label)) + '</span></div>';
      }).join('');

      const ratePark = RD.park(ac.rating.places[0].park);
      const academy =
        '<section class="sec sec--line" id="academy" aria-labelledby="ac-h">' +
        '<div class="shell">' +
        '<h2 class="sr" id="ac-h">' + esc(t.acTitle) + '</h2>' +
        '<div class="accs">' + figCells +
        '<a class="acc acc--rate rv" style="--i:3" href="' + esc(ac.rating.places[0].url) + '" target="_blank" rel="noopener">' +
        '<b class="acc__n">' + f(esc(ac.rating.value), ac.rating.status) +
        '<span class="acc__m">/' + esc(ac.rating.max) + '</span></b>' +
        '<span class="acc__k">' + esc(t.acRate) + ': ' +
        esc(P(ratePark.short)) + ', ' + ac.rating.places[0].count + ' ' + esc(t.acMarks) + '</span></a>' +
        '</div>' +
        '<div class="grid g-split" style="margin-top:var(--gap)">' +
        '<div>' + ac.results.map(function (r, i) {
          return '<div class="li rv' + (i === ac.results.length - 1 ? ' li--last' : '') + '" style="--i:' + i + '">' +
            '<b>' + f(esc(P(r.title)), r.status) + '</b><br>' +
            '<span class="t-small t-muted">' + esc(P(r.body)) + '</span></div>';
        }).join('') + '</div>' +
        '<div><p class="t-body t-muted rv" style="max-width:44ch;margin-bottom:16px">' + esc(t.acLead) + '</p>' +
        '<a class="lnk" href="' + h.href('coaches') + '">' + esc(t.acCta) + ' <span>→</span></a>' +
        /* Два отзыва прямо здесь, а не только на странице тренеров:
           цифра «4,9» — абстракция, а фраза про раздевалку с феном и про
           то, что тренеры этим живут, — то, что родитель перескажет
           мужу. Оба со страницы клуба в Яндекс.Картах. */
        /* два последних — про ребёнка и про тренеров: то, что родитель
           перескажет дома. Про раздевалку и фен остаётся на странице
           тренеров, где отзывы идут все. */
        '<div class="revs revs--home">' + ac.reviews.slice(2, 4).map(function (r, i) {
          return '<figure class="rev rv" style="--i:' + i + '">' +
            '<blockquote class="t-small">' + esc(P(r.body)) + '</blockquote>' +
            '<figcaption class="mono">' + esc(P(r.name)) + '</figcaption></figure>';
        }).join('') + '</div>' +
        '</div>' +
        '</div></div></section>';

      /* ---------- 2b. ВИДЕО: КАК КАТАЮТСЯ УЧЕНИКИ ----------
         Единственный формат, который показывает катание, а не
         рассказывает о нём (владелец 20.08.2026). Ролик — монтаж
         с действующего сайта клуба, лежит на media.reddeck.ru.
         Грузится только по клику: 17 МБ нельзя вешать на страницу
         фоном. До клика стоит кадр из зала с кнопкой играть. */
      const video =
        '<section class="sec sec--line dark" id="video" aria-labelledby="vid-h">' +
        '<div class="shell grid g-lead">' +
        '<div><p class="kick kick--plain">' + esc(t.vidKick) + '</p>' +
        '<h2 class="t-h2s rv" id="vid-h" style="max-width:18ch;margin-bottom:16px">' + esc(t.vidTitle) + '</h2>' +
        '<p class="t-body rv" style="--i:1;color:var(--on-dark-2);max-width:44ch">' + esc(t.vidLead) + '</p></div>' +
        '<figure class="rv rv-ph" style="margin:0"><div class="ph vid curve-bl curve-br" id="vid-box" style="aspect-ratio:16/9">' +
        h.img('sokolniki-pool-16x9', t.vidAlt) +
        '<button class="vid__play" type="button" data-video="https://media.reddeck.ru/video.mov" aria-label="' + esc(t.vidPlay) + '">' +
        '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l12-7z" fill="currentColor"/></svg>' +
        '</button></div></figure>' +
        '</div></section>';

      /* ---------- 3. МАСШТАБ: ЧАША И РАДИУСЫ ---------- */
      const sc = RD.scale;
      const shots = sc.shots.map(function (s, i) {
        return '<figure class="rv rv-ph" style="--i:' + i + ';margin:0">' +
          '<div class="ph curve-bl curve-br" style="aspect-ratio:' + s.ratio + '">' +
          h.img(s.photo, P(s.cap) + ' — ' + P(sc.kicker)) + '</div>' +
          '<figcaption class="cap">' + esc(P(s.cap)) + '</figcaption></figure>';
      });

      /* цифры берутся из content.js: второго источника правды тут быть не должно */
      const sk = RD.park('sokolniki');
      /* money() клеит рубль через неразрывный пробел — для квадратных метров
         он не нужен, поэтому разряды разбиваем тем же правилом отдельно */
      const spaced = function (n) {
        return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, L() === 'ru' ? ' ' : ',');
      };
      const figVals = [
        sk.area ? spaced(sk.area) + (L() === 'ru' ? ' м²' : ' m²') : null,
        sk.vertHeight ? (sk.vertHeightMin ? (L() === 'ru' ? 'больше ' : 'over ') : '') +
          sk.vertHeight + ' ' + (L() === 'ru' ? 'м' : 'm') : null
      ];
      const figs = t.scaleFigs.map(function (r, i) {
        if (!figVals[i]) return '';
        return '<div class="fig rv" style="--i:' + i + '">' +
          '<b class="fig__n">' + esc(figVals[i]) + '</b>' +
          '<span class="fig__k">' + esc(r[0]) + '</span>' +
          '<span class="fig__h t-small t-muted">' + esc(r[1]) + '</span>' +
          '</div>';
      }).join('');

      const scale =
        '<section class="sec sec--line scale" id="scale" aria-labelledby="scale-h">' +
        '<div class="shell">' +
        '<div class="grid g-split scale__head">' +
        '<div><p class="kick kick--plain rv">' + esc(P(sc.kicker)) + '</p>' +
        '<h2 class="t-h2s rv" id="scale-h" style="--i:1;max-width:18ch">' + esc(P(sc.title)) + '</h2></div>' +
        '<p class="t-lede rv" style="--i:2">' + esc(P(sc.lead)) + '</p>' +
        '</div>' +
        (figs ? '<div class="figs">' + figs + '</div>' : '') +
        '<aside class="vert rv">' +
        '<p class="mono vert__k">' + esc(t.vertKick) + '</p>' +
        '<p class="vert__b">' + esc(t.vertBody) + '</p>' +
        '<p class="t-body vert__o">' + esc(t.vertOurs) + '</p>' +
        '</aside>' +
        '<div class="scale__big">' + shots[0] + '</div>' +
        '<div class="grid g2 scale__pair">' + shots[1] + shots[2] + '</div>' +
        '</div></section>';

      /* ---------- 4. ТРИ ПАРКА ---------- */
      const tabs = h.parks().map(function (p) {
        return '<button class="tab" type="button" data-parktab="' + p.slug + '" ' +
          'aria-pressed="' + (p.slug === h.S.park) + '">' + esc(P(p.name)) + '</button>';
      }).join('');

      /* Телефон получает свою вёрстку парков: три фото-карточки во весь
         кадр вместо табов. Правка владельца 19.08.2026: на телефоне табы
         прятали два парка из трёх — «Сокольники, Химки и Дубровку плохо
         видно», а до самого блока приходилось листать. Карточка — это
         фотография с именем поверх: разглядывать, а не читать. Табы
         остаются на широких экранах, где карточка парка видна целиком. */
      const parksMobile = h.parks().map(function (p, i) {
        const card = h.parkCard(p.slug);
        return '<a class="pkm rv" style="--i:' + i + '" href="' + h.href('park', p.slug) + '">' +
          '<div class="ph pkm__ph curve-bl curve-br">' +
          (p.photo ? h.img(p.photo.wide, P(p.photo.wideAlt) || P(p.name)) : '') +
          '<div class="pkm__ov">' +
          '<span class="mono pkm__tag">' + esc(P(card.tag)) + '</span>' +
          '<strong class="pkm__name">' + esc(P(p.name)) + '</strong>' +
          '<span class="pkm__meta">' +
          h.money(p.groupPrice).replace(/<[^>]+>/g, '') + ' ' +
          esc(L() === 'ru' ? 'за занятие' : 'a class') + ' · ' +
          h.rideLine(p).replace(/<[^>]+>/g, '') + ' ' +
          esc(L() === 'ru' ? 'катание' : 'free-ride') + '</span>' +
          '</div></div></a>';
      }).join('');

      const parks =
        '<section class="sec sec--line" id="parks" aria-labelledby="parks-h">' +
        '<div class="shell">' +
        '<p class="kick kick--plain rv">' + esc(t.parksKick) + '</p>' +
        '<div class="eyebrow-row">' +
        '<h2 class="t-h2 rv" id="parks-h" style="--i:1;max-width:17ch">' + esc(t.parksTitle) + '</h2>' +

        '</div>' +
        '<p class="t-lede rv" style="--i:2;margin-bottom:30px">' + esc(t.parksLead) + '</p>' +
        '<div class="pkms">' + parksMobile + '</div>' +
        '<div class="parks-wide">' +
        '<div class="tabs" role="group" aria-label="' + esc(t.parksKick) + '" style="margin-bottom:34px">' + tabs + '</div>' +
        parkCard(h, false) +
        '</div>' +
        '</div></section>';

      /* ---------- 5. СКЕЙТ ИЛИ РОЛИКИ ---------- */
      const dirs = RD.dirCards.map(function (c, i) {
        return '<a class="dir card-link rv" style="--i:' + i + '" href="' + h.href('booking') + '" data-dir="' + c.slug + '">' +
          /* без кадра рамка осталась бы пустым серым прямоугольником —
             честнее не рисовать её вовсе */
          (c.photo ? '<div class="ph dir__ph curve-bl curve-br">' + h.img(c.photo, P(c.name)) + '</div>' : '') +
          '<div class="dir__body">' +
          '<h3 class="t-h4">' + esc(P(c.name)) + '</h3>' +
          '<p class="t-small t-muted" style="margin-top:10px;max-width:40ch">' + esc(P(c.lead)) + '</p>' +
          '<ul style="margin-top:14px">' + c.points.slice(0, 2).map(function (pt) {
            return '<li class="li t-small">' + f(esc(P(pt)), pt.status) + '</li>';
          }).join('') + '</ul>' +
          '<span class="lnk">' + esc(t.dirPick) + ' <span>→</span></span>' +
          '</div></a>';
      }).join('');

      const dir =
        '<section class="sec sec--line" id="dir" aria-labelledby="dir-h">' +
        '<div class="shell">' +
        '<p class="kick kick--plain rv">' + esc(t.dirKick) + '</p>' +
        '<div class="grid g-split" style="margin-bottom:34px">' +
        '<h2 class="t-h2s rv" id="dir-h" style="--i:1;max-width:16ch">' + esc(t.dirTitle) + '</h2>' +
        '<p class="t-lede rv" style="--i:2">' + esc(t.dirLead) + '</p>' +
        '</div>' +
        '<div class="grid g2 dirs">' + dirs + '</div>' +
        '</div></section>';

      /* ---------- 6. ТРИ ФОРМАТА ---------- */
      /* personal — кадр с родителями и ребёнком в защите: единственная
         фотография с людьми, и она стоит у формата, который покупают
         «попробовать вместе». Фасад здания персональную тренировку
         не продавал. */
      const FPHOTO = { sekciya: 'sokolniki-mobile-4x5', personal: 'khimki-first-4x5', 'free-ride': 'sokolniki-boards-4x5' };
      /* На телефоне окно карточки — 16:9 (home.css), и центр-кроп
         вертикального семейного портрета срезал отцу голову (владелец
         20.08.2026). Для этого кадра есть горизонтальный оригинал —
         на узких экранах подставляется его честный 16:9-кроп. */
      const FMOBILE = { personal: 'khimki-first-16x9' };
      const FROUTE = { sekciya: 'sekciya', personal: 'personal', 'free-ride': 'freeride' };
      const cards = RD.formats.map(function (x, i) {
        const lead = x.slug === 'sekciya';
        const u = t.fmtUnits[x.slug];
        return '<article class="card rv' + (lead ? ' card--lead' : '') + '" style="--i:' + i + '">' +
          '<a class="card-link" href="' + h.href(FROUTE[x.slug]) + '">' +
          '<div class="ph curve-bl curve-br" style="aspect-ratio:4/5">' +
          h.img(FPHOTO[x.slug], P(x.name), '', FMOBILE[x.slug] ? { mobile: FMOBILE[x.slug] } : undefined) + '</div>' +
          '<div class="card__b">' +
          (lead ? '<span class="badge">' + esc(t.fmtBadge) + '</span>' : '') +
          '<div class="card__t"><h3 class="t-h4">' + esc(P(x.name)) + '</h3></div>' +
          '<p class="card__u"><b>' + esc(u[0]) + '</b><span class="t-small t-muted">' + esc(u[1]) + '</span></p>' +
          '<p class="t-small t-muted">' + esc(P(x.forWhom)) + '</p>' +
          '</div></a>' +
          '<div class="card__cta">' +
          (lead
            ? '<a class="btn btn--primary btn--wide" href="' + h.href('sekciya') + '">' + esc(t.fmtCta) + '</a>'
            : '<a class="lnk" href="' + h.href(FROUTE[x.slug]) + '">' + esc(t.more) + ' <span>→</span></a>') +
          '</div></article>';
      }).join('');

      const fmt =
        '<section class="sec sec--line" id="formats" aria-labelledby="fmt-h">' +
        '<div class="shell">' +
        '<p class="kick kick--plain rv">' + esc(t.fmtKick) + '</p>' +
        '<div class="grid g-split" style="margin-bottom:34px">' +
        '<h2 class="t-h2 rv" id="fmt-h" style="--i:1;max-width:16ch">' + esc(t.fmtTitle) + '</h2>' +
        '<p class="t-lede rv" style="--i:2">' + esc(t.fmtLead) + '</p>' +
        '</div>' +
        '<div class="grid g3 cards">' + cards + '</div>' +
        '</div></section>';

      /* ---------- 6b. КОМУ ЧТО ПОДХОДИТ ----------
         Тексты по аудиториям были написаны в контент-слое и не выводились
         ни на одну страницу. Это готовая работа с возражениями. */
      const FR2 = { sekciya: 'sekciya', personal: 'personal', 'free-ride': 'freeride' };
      const aud =
        '<section class="sec sec--line" id="aud" aria-labelledby="aud-h">' +
        '<div class="shell">' +
        '<p class="kick kick--plain rv">' + esc(t.audKick) + '</p>' +
        '<h2 class="t-h2 rv" id="aud-h" style="--i:1;max-width:20ch;margin-bottom:30px">' + esc(t.audTitle) + '</h2>' +
        '<div class="grid g2 auds">' +
        RD.audiences.slice().sort(function (a, b) { return a.order - b.order; }).map(function (a, i) {
          return '<article class="aud rv" style="--i:' + (i % 2) + '">' +
            '<h3 class="t-h4">' + esc(P(a.who)) + '</h3>' +
            '<p class="t-small t-muted aud__pain">' + esc(P(a.pain)) + '</p>' +
            '<p class="t-body">' + esc(P(a.answer)) + '</p>' +
            '<div class="aud__q"><p class="mono">' + esc(t.audAsk) + '</p>' +
            '<p class="t-small"><b>' + esc(P(a.objection.q)) + '</b><br>' +
            '<span class="t-muted">' + esc(P(a.objection.a)) + '</span></p></div>' +
            '<a class="lnk" href="' + h.href(FR2[a.recommend] || 'sekciya') + '">' +
            esc(P((RD.formats.filter(function (z) { return z.slug === a.recommend; })[0] || {}).name)) +
            ' <span>→</span></a></article>';
        }).join('') +
        '</div></div></section>';

      /* ---------- 7. ПРАВИЛА ---------- */
      const rules =
        '<section class="sec sec--line dark" aria-labelledby="rules-h">' +
        '<div class="shell grid g-split">' +
        '<div>' +
        '<h2 class="t-h2 rv" id="rules-h" style="max-width:18ch;margin-bottom:16px">' + esc(t.rulesTitle) + '</h2>' +
        '<p class="t-body rv" style="--i:1;max-width:46ch;color:var(--on-dark-2)">' + esc(t.rulesLead) + '</p>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px">' +
        '<a class="btn btn--ghost" href="' + h.href('safety') + '">' + esc(t.rulesCta) + '</a>' +
        '<a class="lnk" href="' + h.href('game') + '">' + esc(t.gameCta) + ' <span>→</span></a>' +
        '</div></div>' +
        '<div>' + t.rules.map(function (r, i) {
          return '<div class="li' + (i === t.rules.length - 1 ? ' li--last' : '') + ' rv" style="--i:' + i + '">' +
            '<b>' + esc(r[0]) + '</b> <span style="color:var(--on-dark-2)">' + esc(r[1]) + '</span></div>';
        }).join('') + '</div>' +
        '</div></section>';

      /* ---------- 8. СЕРТИФИКАТ ---------- */
      const gift =
        '<section class="on-red" aria-labelledby="gift-h">' +
        '<div class="shell grid g-split" style="padding-block:var(--sec-y);align-items:end">' +
        '<div><p class="kick kick--plain" style="color:#fff">' + esc(t.giftKick) + '</p>' +
        '<h2 class="t-h2 rv" id="gift-h" style="max-width:21ch">' + esc(t.giftTitle) + '</h2></div>' +
        '<div><p class="t-body rv" style="--i:1;margin-bottom:22px">' + esc(t.giftLead) + '</p>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
        '<a class="btn btn--ink" href="tel:' + h.tel(RD.park('sokolniki').phone) + '">' + esc(t.giftCta) + ' <span class="arr">→</span></a>' +
        '<a class="btn btn--onphoto" href="' + h.href('gift') + '">' + esc(t.giftMore) + '</a>' +
        '</div></div></div></section>';

      /* Гид стоит сразу за блоком парков: там у человека впервые возникает
         вопрос «а мне-то в какой», и там же он раньше уходил звонить или
         не уходил вовсе. Перед блоком парков ставить нельзя — третий
         вопрос про округ читается только после того, как стало известно,
         что парков три. */
      /* Порядок идёт за порядком вопросов в голове, а не за порядком
         впечатлений: «это вообще для нас» → «не покалечится ли» →
         «сколько» → «куда ехать». Поэтому подбор поднят сразу под парки,
         блок ситуаций встал до развилки скейт/ролики, а правила — до
         форматов: решение по риску принимается раньше решения по цене.
         Масштаб и вёрт ушли ниже: это подтверждение выбора, а не довод
         при первом знакомстве. */
      /* Блок набора поднят с самого низа (88 % глубины) на позицию
         сразу после подбора: человек только что получил «вам сюда —
         Химки», и телефоны с WhatsApp стоят под рукой, а не через
         семь экранов. Сертификат с главной снят — сезонный товар жил
         между читателем и телефонами; своя страница /gift осталась,
         ссылки в меню и подвале ведут туда. */
      /* Парки — вторым экраном, до всех объяснений. Правка владельца
         19.08.2026: на телефоне до выбора парка приходилось пролистать
         три текстовых блока. Сначала «куда ехать», потом «почему мы». */
      /* Сертификат вернулся на главную (владелец 19.08.2026: «ролики
         приносят деньги, и обучение проще всего дарить») и встал сразу
         за развилкой скейт/ролики — там, где читатель только что увидел
         карточку роликов со строкой про подарок. */
      /* видео — сразу за цифрами академии: цифры утверждают, ролик показывает */
      return hero + parks + start + academy + video + guide(h) + intake(h, false) + aud + rules + dir + gift + fmt + scale;
    },

    /* переключение парка меняет только карточку — страница не прыгает */
    bind: function (sig) {
      const h = root.RDH;
      if (!h) return;
      document.querySelectorAll('[data-parktab]').forEach(function (b) {
        b.addEventListener('click', function () {
          const slug = b.getAttribute('data-parktab');
          if (!h.RD.park(slug) || slug === h.S.park) return;
          h.S.park = slug;
          try { localStorage.setItem('rd-park', slug); } catch (e) {}
          document.querySelectorAll('[data-parktab]').forEach(function (x) {
            x.setAttribute('aria-pressed', String(x.getAttribute('data-parktab') === slug));
          });
          const old = document.getElementById('parkcard');
          if (!old) return;
          const tmp = document.createElement('div');
          tmp.innerHTML = root.RDParkCard(h, true);
          const fresh = tmp.firstChild;
          old.replaceWith(fresh);
          fresh.querySelectorAll('.rv').forEach(function (el) { el.classList.add('is-in'); });
          const bar = document.querySelector('.bookbar a[href^="tel:"]');
          if (bar) bar.setAttribute('href', 'tel:' + h.tel(h.RD.park(slug).phone));
          if (root.RDApp_say) root.RDApp_say(h.P(h.RD.park(slug).name));
        }, sig);
      });

      /* ---------- гид ----------
         Один слушатель на контейнере: тело гида переписывается на каждом
         шаге, и навешивать обработчики заново пришлось бы четыре раза.
         Делегирование переживает подмену innerHTML. */
      const box = document.getElementById('gd-body');
      if (!box) return;

      function redraw(say) {
        box.innerHTML = guideBody(h);
        box.querySelectorAll('.rv').forEach(function (el) { el.classList.add('is-in'); });
        const q = document.getElementById('gd-q');
        if (q) q.focus({ preventScroll: true });
        if (say && root.RDApp_say) root.RDApp_say(say);
      }

      box.addEventListener('click', function (e) {
        const el = e.target.closest ? e.target.closest('[data-g]') : null;
        if (!el || !box.contains(el)) return;
        const g = el.getAttribute('data-g'), v = el.getAttribute('data-v');
        const t = T[h.L()];

        /* выбранный парк должен подхватиться нижней панелью и вкладками:
           иначе человек звонит в один парк, а панель показывает другой */
        if (g === 'pick') {
          if (!h.RD.park(v)) return;
          h.S.park = v;
          try { localStorage.setItem('rd-park', v); } catch (err) {}
          const bar = document.querySelector('.bookbar a[href^="tel:"]');
          if (bar) bar.setAttribute('href', 'tel:' + h.tel(h.RD.park(v).phone));
          return;                      /* ссылка отрабатывает сама */
        }

        e.preventDefault();

        const KEYS = ['who', 'gear', 'from'];

        if (g === 'back') {
          if (GS.step === 0) return;
          GS.step -= 1;
          GS[KEYS[GS.step]] = null;    /* ответ на шаге, куда вернулись, снимается */
          redraw(t.gdQ[GS.step]);
          return;
        }
        if (g === 'restart') {
          GS.step = 0; GS.who = null; GS.gear = null; GS.from = null;
          redraw(t.gdQ[0]);
          return;
        }
        if (KEYS.indexOf(g) !== -1) {
          GS[g] = v;
          GS.step = KEYS.indexOf(g) + 1;
          redraw(GS.step < 3 ? t.gdQ[GS.step] : t.gdSay);
          /* Как только назван парк, он становится текущим — не дожидаясь
             клика по кнопке в результате. Иначе подбор говорил «вам сюда:
             Химки», а красная кнопка внизу экрана звонила в Сокольники:
             самый трудоёмкий сценарий на сайте заканчивался звонком
             не в тот парк. */
          if (GS.step === 3) {
            const pick = guideResolve(h).slug;
            if (h.RD.park(pick)) {
              h.S.park = pick;
              try { localStorage.setItem('rd-park', pick); } catch (err) {}
              const bar = document.querySelector('.bookbar a[href^="tel:"]');
              if (bar) bar.setAttribute('href', 'tel:' + h.tel(h.RD.park(pick).phone));
              document.querySelectorAll('[data-parktab]').forEach(function (x) {
                x.setAttribute('aria-pressed', String(x.getAttribute('data-parktab') === pick));
              });
            }
          }
        }
      }, sig);
    }
  };
})(typeof window !== 'undefined' ? window : this);
