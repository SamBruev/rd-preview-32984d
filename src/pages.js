/* =====================================================================
   RED DECK — внутренние страницы
   Общий шаблон: шапка страницы (заголовок + лид слева, действие справа),
   дальше секции. Всё, что не подтверждено, помечается, а не выдумывается.
   ===================================================================== */
(function (root) {
  'use strict';

  const TX = {
    ru: {
      /* общее */
      book: 'Записаться', call: 'Позвонить', prices: 'Все цены и условия',
      askAdmin: 'Спросите у администратора', questions: 'Открытые вопросы',
      whyThis: 'Почему этот формат', forWhom: 'Кому подходит',
      park: 'Парк', trial: 'Пробное', cat: 'Категория',
      min: 'мин', included: 'Что входит', rental: 'Аренда',
      zones: 'Зоны и фигуры', howFind: 'Как найти вход', route: 'Маршрут на Яндекс.Картах',

      /* секция */
      secKick: 'Главный формат',
      secTitle: 'Секция — самый доступный способ начать',
      secLead: 'Группа, один тренер, фиксированное время в неделю. Занятие стоит 2 200 ₽ против 4 100 ₽ за персональный час в Химках — в других парках разрыв ещё больше. Ребёнок ходит в один и тот же состав.',
      secPriceH: 'Сколько стоит',
      secMonthH: 'Оплата за месяц',
      secMonth: 'Абонементов нет и не будет. Секция оплачивается за месяц: стоимость зависит от того, сколько раз в неделю ребёнок ходит.',
      secNoTrialH: 'Секция начинается с ближайшего набора',
      secNoTrial: 'Наборы в новые группы идут потоками, примерно раз в месяц, — прийти в готовую группу «на разок» нельзя. Зато персональная тренировка есть каждый день: тренер занят только вашим ребёнком, никто не смотрит и не торопит. Пробное — от 1 300 ₽.',
      secBuyH: 'Начать можно без покупок',
      secBuy: 'Доска и защита есть в аренду на месте: элемент 350–400 ₽, полный комплект 650–900 ₽, доска 650–900 ₽. Свой комплект на старте покупать не нужно. Что из этого уже входит в занятие — спросите при записи, это зависит от услуги и парка.',
      secNoPass: 'Платите за месяц — за то количество тренировок в неделю, которое реально ходите.',
      secTeenH: 'Если тебе 13–17',
      secTeen: 'Здесь не «программа», а конкретный трюк, который выйдет в этом месяце. Группа своя, тренер один и тот же. Цена, которую можно показать родителям: 2 200 ₽ за занятие, доска и защита на месте.',
      secParentH: 'Четыре вещи, которые стоит знать родителю',
      secParent: [
        ['Покупать доску заранее не нужно.', 'Доска и защита есть в аренду на месте. Что именно входит в стоимость занятия — уточняется по каждой услуге.'],
        ['Ребёнок упадёт на первом занятии.', 'Это нормальная часть обучения. Поэтому защита обязательна, а не «желательна», и порядок освоения фигур соблюдается жёстко.'],
        ['Родители не выходят в зону катания.', 'Смотреть можно, стоять на площадке — нет: это правило про безопасность обеих сторон, а не про удобство клуба.'],
        ['Цена занятия не зависит от категории тренера.', 'В секции она одинакова. Различаются только персональные занятия.']
      ],
      secInlineH: 'Ролики — тот же клуб',
      secInline: 'Персональные занятия на роликах есть во всех трёх парках. Группу на роликах набирают не везде — позвоните, скажем, где идёт набор. Мы не обещаем формат, которого может не быть.',

      /* персональные */
      perKick: 'Быстрее всего результат',
      perTitle: 'Персональная тренировка',
      perLead: 'Один на один с тренером. Единственный способ попробовать сразу, не дожидаясь набора в секцию.',
      perWhyH: 'Когда начинают с персональной',
      perAdultH: 'Взрослым с нуля',
      perAdult: 'Главный страх — не упасть, а оказаться единственным взрослым среди детей. Поэтому взрослые чаще начинают один на один: на вас никто не смотрит, темп ваш. И честно: взрослые падают тяжелее детей, поэтому защита и порядок освоения фигур для вас важнее, а не менее важны.',
      perToSec: 'Дальше — в секцию: то же место и тот же тренер, но регулярно и заметно дешевле за занятие.',
      perTblH: 'Цены по паркам и длительности',
      perTblNote: 'Категории тренеров различаются ценой. Кто свободен на ваше время и сколько это стоит — скажет администратор.',
      perPairH: 'Занятие вдвоём',
      perPair: 'Два человека и один тренер. Дешевле, чем два отдельных занятия. Часто берут родитель с ребёнком или двое друзей.',
      perDepH: 'Депозит с кэшбэком',

      /* катание */
      rideKick: 'Для тех, кто уже катается',
      rideTitle: 'Свободное катание',
      rideLead: 'Вход в парк без тренера. Правила те же, что и на занятии: защита обязательна, движение по очереди.',
      perCatLink: 'Что значит категория',
      rideOnline: 'Выбрать время онлайн',
      rideUnit: 'На Дубровке вход — это два часа, есть и вариант на весь день. В Сокольниках и Химках время входа не ограничено прайсом: сколько можно кататься сегодня, скажет администратор при звонке.',
      rideVert: 'Вёрт-рампа в Сокольниках в свободное катание не входит: заезд только по допуску тренера, в полной защите. Хотите на вертикаль — начните с персонального занятия.',
      rideRentH: 'Аренда',
      rideRentNote: 'Один элемент защиты / полный комплект / скейтборд.',

      /* парки */
      parksKick: 'Три адреса',
      parksTitle: 'Парки',
      parksLead: 'Сокольники — самый большой и единственный с вёрт-рампой. Химки и Дубровка компактные: секция и персональные занятия.',

      /* цены */
      prKick: 'Прозрачно',
      prTitle: 'Цены и условия',
      prLead: 'Всё в одном месте. Цифры, которые зависят от парка и вашего графика, администратор считает при вас — они собраны внизу отдельным списком.',
      prSec: 'Секция', prPer: 'Персональные', prRide: 'Катание и аренда', prDep: 'Депозит',
      prOpenH: 'Что администратор посчитает по телефону',

      /* безопасность */
      safKick: 'Как это устроено',
      safTitle: 'Безопасность',
      safLead: 'Не словом «безопасно», а перечнем того, что реально сделано. Каждый пункт — из правил парков и подписанного договора-оферты.',
      safFallH: 'На первом занятии ребёнок упадёт',
      safFall: 'И на втором тоже. Падение — часть обучения, а не сбой. Задача клуба — сделать так, чтобы падение заканчивалось синяком, а не травмой: защита, порядок освоения фигур, движение по очереди и допуск на сложные фигуры.',
      safGame: 'Те же правила — в мини-игре',

      /* запись */
      bkKick: 'Запись',
      bkTitle: 'Как записаться',
      bkLead: 'Секция — по звонку: группы набираются потоками, и администратор подберёт время под ваш график. Персональную тренировку и свободное катание можно забронировать онлайн — услугу, тренера и время вы выбираете в системе записи.',
      bkChoice: 'Ваш выбор — меняется в один тап', bkDir: 'Направление', bkFmt: 'Формат',
      bkPickH: 'Выберите направление и формат',
      bkDirL: 'Скейтборд или ролики',
      bkFmtL: 'Формат занятия',
      bkParkL: 'Парк',
      bkYc: 'Онлайн-расписание', bkTel: 'Запись по телефону',
      bkNote: 'В Сокольниках записывают по телефону — администратор подберёт время в разговоре.',
      /* Онлайн продаются только персональные и катание. Секция набирается
         потоками, в расписании её нет — и кнопка «Открыть запись» уводила
         человека туда, где он ничего не найдёт. */
      bkNoteSek: 'Секцию онлайн не записывают: группы набираются потоками, и дату ближайшего набора называет администратор. Онлайн-расписание — для персональных занятий и свободного катания.',
      bkGo: 'Открыть онлайн-расписание',

      /* сертификат */
      gfKick: 'Подарочный сертификат',
      gfTitle: 'Час в парке вместо ещё одной игрушки',
      gfLead: 'Персональная тренировка на скейтборде или на роликах. Дарят чаще ролики: «встать и поехать» обычно получается уже на первом занятии. Оформляется в парке, действует 12 месяцев.',
      gfHowH: 'Как это работает',
      gfHow: [
        'Позвоните в парк и скажите, на какую сумму и на какое направление нужен сертификат.',
        'Оформление и оплата — в парке. Онлайн-продажи сертификатов на сайте нет.',
        'Получатель звонит и записывается на удобное время, называя номер сертификата.'
      ],
      gfLimitH: 'Сумму выбираете вы — до 20 000 ₽',
      gfAnchor: 'Час с тренером — от 4 100 ₽ в Химках, от 4 500 ₽ на Дубровке, от 4 900 ₽ в Сокольниках. Отсюда и считайте номинал: от одного занятия до четырёх.',
      gfLegalH: 'Что важно знать по закону',

      /* вопросы */
      faqKick: 'Коротко',
      faqTitle: 'Вопросы, которые задают чаще всего',
      faqLead: 'Если вашего вопроса здесь нет — позвоните в парк. Это быстрее, чем искать по сайту.',

      /* контакты */
      ctKick: 'Контакты',
      ctTitle: 'Три парка',
      ctLead: 'Позвоните перед выездом, особенно если едете кататься без записи.',

      /* документы */
      lgKick: 'Документы',
      lgTitle: 'Договор-оферта и правила',
      lgLead: 'Договор публичной оферты Red Deck действует и подписан. Инструктаж по технике безопасности — его отдельный подробный раздел, а не три фразы у стойки.',
      lgList: [
        ['Договор-оферта', 'Действует, открывается по ссылке ниже. Присоединение к нему — условие занятий и посещения парков.'],
        ['Правила посещения парков', 'Приложение к договору: защита, зоны, порядок движения, допуск на вёрт-рампу.'],
        ['Информированное согласие', 'Подписывается до первого выхода на площадку и подтверждает, что с правилами ознакомились.'],
        /* Политика опубликована и действует — reddeck.ru/politika-konfidencialnosti.
           «Готовится к публикации» было неправдой в свою же сторону:
           страница документов сообщала, что документа нет, при живом документе. */
        ['Политика обработки персональных данных', 'Опубликована и действует — открывается по ссылке ниже.']
      ],
      lgPolicy: 'Открыть политику обработки персональных данных',
      lgNote: 'Остальные документы будут выложены на этой странице после финальной вычитки. До этого их выдают в парке.',

      /* тренеры */
      coKick: 'Кто ведёт занятия',
      coTitle: 'Восемь тренеров, и у каждого есть имя',
      coLead: 'Категория тренера меняет цену часа, поэтому здесь написано, что за ней стоит: сколько человек за доской, кого он вывел на соревнования и что выиграл сам.',
      coCatH: 'Что значит категория',
      coCat: ['Первая категория', 'Вторая категория', 'Третья категория', 'Вне категорий'],
      coResultsH: 'Результаты',
      coRatingH: 'Что о нас пишут',
      coRatingLead: 'Оценки на Яндекс.Картах — единственное, что здесь можно проверить, не поверив нам на слово. Карточки заведены на Дубровку и Химки; у Сокольников отдельного рейтинга пока нет.',
      coReviewsH: 'Отзывы',
      coOpen: 'Смотреть оценки',

      /* игра */
      gmBack: 'Вернуться к безопасности'
    },
    en: {
      book: 'Book', call: 'Call', prices: 'All prices and terms',
      askAdmin: 'Ask the administrator', questions: 'Open questions',
      whyThis: 'Why this format', forWhom: 'Who it suits',
      park: 'Park', trial: 'Trial', cat: 'Category',
      min: 'min', included: 'What is included', rental: 'Rental',
      zones: 'Zones and features', howFind: 'Finding the entrance', route: 'Route on Yandex Maps',

      secKick: 'The main format',
      secTitle: 'The section is the most affordable way to start',
      secLead: 'A group, one coach, a fixed weekly slot. A class costs 2,200 ₽ against 4,100 ₽ for a one-to-one hour, and the child stays with the same people.',
      secPriceH: 'What it costs',
      secMonthH: 'Paid monthly',
      secMonth: 'There are no season passes and there will not be. The section is paid monthly: the price depends on how many times a week the child attends.',
      secNoTrialH: 'The section starts with the next intake',
      secNoTrial: 'Groups are formed in waves, roughly once a month — you cannot drop into a running group for one session. A one-to-one lesson, though, runs every day: the coach works only with your child, nobody watches, nobody rushes. Trial from 1,300 ₽.',
      secBuyH: 'You can start without buying anything',
      secBuy: 'Boards and pads are for rent on site: one pad 350–400 ₽, full set 650–900 ₽, board 650–900 ₽. You do not need your own kit to start. What is already included in a class depends on the service and the park — ask when booking.',
      secNoPass: 'You pay monthly — for the number of classes a week you actually attend.',
      secTeenH: 'If you are 13–17',
      secTeen: 'This is not a “programme”, it is one specific trick you will land this month. Your own group, the same coach every week. A price you can show your parents: 2,200 ₽ a class, board and pads on site.',
      secParentH: 'Four things worth knowing as a parent',
      secParent: [
        ['You do not need to buy a board first.', 'Boards and pads are for rent on site. What exactly is included in a class is being confirmed per service.'],
        ['Your child will fall in the first lesson.', 'That is a normal part of learning. Which is why pads are mandatory, not “recommended”, and the order of learning features is enforced.'],
        ['Parents do not enter the riding zone.', 'Watching is fine, standing on the floor is not: this rule protects both sides, it is not about the club’s convenience.'],
        ['The class price does not depend on the coach’s category.', 'In the section it is the same for everyone. Only one-to-one lessons differ.']
      ],
      secInlineH: 'Inline — the same club',
      secInline: 'One-to-one inline lessons were listed in the price list. Whether a given park runs an inline group is answered by the administrator. We do not promise a format that may not exist.',

      perKick: 'Fastest progress',
      perTitle: 'One-to-one lesson',
      perLead: 'One rider, one coach. The only way to try straight away without waiting for the next section intake.',
      perWhyH: 'When people start one-to-one',
      perAdultH: 'Adults starting from zero',
      perAdult: 'The real fear is not falling — it is being the only adult among children. That is why adults usually start one-to-one: nobody is watching, the pace is yours. And honestly: adults fall harder than children, so pads and a proper learning order matter more for you, not less.',
      perToSec: 'After that — the section: same place, same coach, regular and noticeably cheaper per class.',
      perTblH: 'Prices by park and length',
      perTblNote: 'Coach categories differ in price. Who is free at your time and what it costs is answered by the administrator.',
      perPairH: 'A lesson for two',
      perPair: 'Two riders and one coach. Cheaper than two separate lessons. Usually a parent with a child, or two friends.',
      perDepH: 'Deposit with cashback',

      rideKick: 'For riders who already skate',
      rideTitle: 'Free-ride',
      rideLead: 'Park entry without a coach. The rules are the same as in a lesson: pads are mandatory, one rider at a time.',
      perCatLink: 'What the category means',
      rideOnline: 'Pick a time online',
      rideUnit: 'In Dubrovka an entry means two hours, with an all-day option. In Sokolniki and Khimki the price list sets no time limit: the administrator will say how long you can ride today.',
      rideVert: 'The vert ramp in Sokolniki is not part of free-ride: access only with a coach’s clearance and in full protective gear. If you want the vert, start with a one-to-one lesson.',
      rideRentH: 'Rental',
      rideRentNote: 'One pad / full set / skateboard.',

      parksKick: 'Three addresses',
      parksTitle: 'Parks',
      parksLead: 'Sokolniki is the largest and the only one with a vert ramp. Khimki and Dubrovka are compact: section and one-to-one lessons.',

      prKick: 'In the open',
      prTitle: 'Prices and terms',
      prLead: 'Everything in one place. The figures that depend on the park and your schedule are calculated with you — they are listed separately at the bottom.',
      prSec: 'Section', prPer: 'One-to-one', prRide: 'Free-ride and rental', prDep: 'Deposit',
      prOpenH: 'What the administrator works out on the phone',

      safKick: 'How it works',
      safTitle: 'Safety',
      safLead: 'Not the word “safe”, but a list of what is actually done. Every point comes from the park rules and the signed public offer agreement.',
      safFallH: 'Your child will fall in the first lesson',
      safFall: 'And in the second one too. Falling is part of learning, not a failure. The club’s job is to make a fall end in a bruise, not an injury: pads, a set order of features, one rider at a time, and clearance for the hard stuff.',
      safGame: 'The same rules — in the mini game',

      bkKick: 'Booking',
      bkTitle: 'How to book',
      bkLead: 'The section is booked by phone: groups are formed in waves and the administrator will fit one to your schedule. One-to-one lessons and free-ride can be booked online — you pick the service, coach and time in the booking system.',
      bkChoice: 'Your choice — tap to change', bkDir: 'Discipline', bkFmt: 'Format',
      bkPickH: 'Choose discipline and format',
      bkDirL: 'Skateboard or inline skates',
      bkFmtL: 'Class format',
      bkParkL: 'Park',
      bkYc: 'Online schedule', bkTel: 'Booking by phone',
      bkNote: 'Sokolniki takes bookings by phone — the administrator will find you a slot on the call.',
      bkNoteSek: 'The section is not booked online: groups are formed in intakes, and the administrator gives the date of the next one. The online schedule covers one-to-one lessons and free-ride.',
      bkGo: 'Open the online schedule',

      gfKick: 'Gift certificate',
      gfTitle: 'An hour in the park instead of another toy',
      gfLead: 'A one-to-one lesson on a skateboard or on inline skates. Inline is the most-gifted option: getting up and rolling usually happens within the first lesson. Issued at the park, valid for 12 months.',
      gfHowH: 'How it works',
      gfHow: [
        'Call the park and say the amount and the discipline you want the certificate for.',
        'Issuing and payment happen at the park. There is no online certificate sale on this site.',
        'The recipient calls and books a time, quoting the certificate number.'
      ],
      gfLimitH: 'You choose the amount — up to 20,000 ₽',
      gfAnchor: 'An hour with a coach is from 4,100 ₽ in Khimki, 4,500 ₽ in Dubrovka and 4,900 ₽ in Sokolniki. Count the value from there: from one lesson to four.',
      gfLegalH: 'What the law says',

      faqKick: 'Briefly',
      faqTitle: 'The questions people actually ask',
      faqLead: 'If your question is not here — call the park. That is faster than searching the site.',

      ctKick: 'Contacts',
      ctTitle: 'Three parks',
      ctLead: 'Call before you set off, especially if you are coming to ride without a booking.',

      lgKick: 'Documents',
      lgTitle: 'The offer agreement and the rules',
      lgLead: 'The Red Deck public offer agreement is in force and signed. The safety briefing is a separate detailed section of it, not three sentences at the counter.',
      lgList: [
        ['Public offer agreement', 'In force. Accepting it is a condition of lessons and park entry.'],
        ['Park visiting rules', 'An annex to the agreement: pads, zones, right of way, vert ramp clearance.'],
        ['Informed consent', 'Signed before the first session and confirms the rules have been read.'],
        ['Personal data policy', 'Published and in force — opens via the link below.']
      ],
      lgPolicy: 'Open the personal data policy',
      lgNote: 'The remaining documents will be published on this page after final proofreading. Until then they are handed out at the park.',

      /* coaches */
      coKick: 'Who runs the sessions',
      coTitle: 'Eight coaches, and every one has a name',
      coLead: 'A coach’s category changes the hourly price, so here is what sits behind it: years on a board, who they took to competitions and what they won themselves.',
      coCatH: 'What the category means',
      coCat: ['First category', 'Second category', 'Third category', 'Outside the grades'],
      coResultsH: 'Results',
      coRatingH: 'What people write about us',
      coRatingLead: 'Ratings on Yandex Maps — the one thing here you can check without taking our word for it. The listings cover Dubrovka and Khimki; Sokolniki has no separate rating yet.',
      coReviewsH: 'Reviews',
      coOpen: 'See the ratings',

      gmBack: 'Back to safety'
    }
  };

  function t(h) { return TX[h.L()]; }

  /* шапка страницы */
  function intro(h, kick, title, lead, aside) {
    return '<section class="pt"><div class="shell pt__in">' +
      '<div><p class="kick kick--plain">' + h.esc(kick) + '</p>' +
      '<h1 class="t-h1 rv is-in" style="max-width:20ch;margin-bottom:18px">' + h.esc(title) + '</h1>' +
      '<p class="t-lede">' + h.esc(lead) + '</p></div>' +
      '<div>' + (aside || '') + '</div>' +
      '</div></section>';
  }

  /* Строка принятия оферты. Владелец 19.08.2026: оферта должна быть
     предъявлена при каждом действии записи. Ставится под каждой кнопкой
     «Записаться» и на странице записи — присоединение к оферте является
     условием занятий (ст. 428, 435–438 ГК РФ), и человек должен видеть
     это до звонка или перехода в расписание, а не после. */
  function offerNote(h) {
    const ru = h.L() === 'ru';
    return '<p class="legal-note">' +
      (ru ? 'Записываясь — по телефону или онлайн, — вы принимаете '
          : 'By booking — by phone or online — you accept ') +
      '<a href="' + h.asset('assets/docs/oferta.pdf') + '" target="_blank" rel="noopener">' +
      (ru ? 'договор-оферту' : 'the public offer agreement') + '</a>' +
      (ru ? ' и ' : ' and ') +
      '<a href="' + h.href('privacy') + '">' +
      (ru ? 'политику обработки персональных данных' : 'the personal data policy') + '</a>.</p>';
  }

  /* fmt — формат, с которым человек уходит на страницу записи. Без него
     панель «Ваш выбор» показывала «Секция» всем подряд: пришёл с
     персональных, а на записи выбран другой формат. */
  function ctaPair(h, primaryHref, primaryText, fmt) {
    const p = h.park();
    return '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
      '<a class="btn btn--primary" href="' + primaryHref + '"' +
      (fmt ? ' data-fmt="' + fmt + '"' : '') + '>' + h.esc(primaryText) + '</a>' +
      '<a class="btn btn--ghost" href="tel:' + h.tel(p.phone) + '">' + h.esc(p.phone) + '</a>' +
      '</div>' + offerNote(h);
  }

  const P_ = {};

  /* ================= ТРЕНЕРЫ =================
     Пункт «Тренеры» стоял в меню с самого начала, а страницы под ним
     не было — ссылка вела на «Такой страницы нет». Теперь под неё есть
     то, чего сайту не хватало больше всего: имена, стаж и результаты.
     Цена часа зависит от категории, поэтому категория и стоит рядом
     с именем: иначе разброс в 41 % выглядит произволом. */
  P_.coaches = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, f = h.f;
    const a = RD.academy;
    const catName = function (c) { return c ? x.coCat[c - 1] : x.coCat[3]; };

    const results = a.results.map(function (r, i) {
      return '<div class="li rv' + (i === a.results.length - 1 ? ' li--last' : '') + '" style="--i:' + i + '">' +
        '<b>' + f(esc(P(r.title)), r.status) + '</b><br>' + esc(P(r.body)) + '</div>';
    }).join('');

    const cards = a.coaches.map(function (c, i) {
      /* Портрет — тем же приёмом, что все фото сайта: ч/б, цвет по
         наведению. Квадрат 480×480 с CDN старого сайта клуба. */
      const photo = c.photo
        ? '<div class="ph coach__ph curve-bl curve-br">' +
          '<picture>' +
          '<source srcset="' + h.asset('assets/coaches/' + c.photo + '.webp') + '" type="image/webp">' +
          '<img src="' + h.asset('assets/coaches/' + c.photo + '.jpg') + '" alt="' + esc(P(c.name)) + '"' +
          ' width="480" height="480" loading="lazy" decoding="async"></picture></div>'
        : '';
      return '<article class="coach rv" style="--i:' + (i % 3) + '">' +
        photo +
        '<div class="coach__h">' +
        '<h2 class="t-h4">' + f(esc(P(c.name)), c.status) + '</h2>' +
        '<span class="mono">' + esc(catName(c.cat)) + '</span></div>' +
        '<p class="t-small t-muted coach__r">' + esc(P(c.role)) + '</p>' +
        '<p class="t-small">' + esc(P(c.body)) + '</p>' +
        '</article>';
    }).join('');

    const places = a.rating.places.map(function (pl) {
      const park = RD.park(pl.park);
      return '<a class="btn btn--ghost btn--sm" href="' + esc(pl.url) + '" target="_blank" rel="noopener">' +
        esc(P(park.short)) + ' · ' + pl.count + '</a>';
    }).join('');

    const reviews = a.reviews.map(function (r, i) {
      return '<figure class="rev rv" style="--i:' + (i % 2) + '">' +
        '<blockquote class="t-small">' + esc(P(r.body)) + '</blockquote>' +
        '<figcaption class="mono">' + esc(P(r.name)) + '</figcaption></figure>';
    }).join('');

    return intro(h, x.coKick, x.coTitle, x.coLead,
        ctaPair(h, h.href('booking'), x.book, 'personal')) +

      '<section class="sec sec--line"><div class="shell grid g-lead">' +
      '<div><h2 class="t-h2 rv" style="margin-bottom:26px">' + esc(x.coResultsH) + '</h2>' +
      results + '</div>' +
      '<div class="box rv" style="--i:1">' +
      '<p class="kick kick--plain">' + esc(x.coCatH) + '</p>' +
      '<p class="t-small t-muted" style="max-width:44ch">' +
      f(esc(P(RD.pricing.personal.categoryMeaning.body)), RD.pricing.personal.categoryMeaning.status) +
      '</p></div>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell">' +
      '<div class="coaches">' + cards + '</div></div></section>' +

      '<section class="sec sec--line"><div class="shell">' +
      '<div class="eyebrow-row"><h2 class="t-h2 rv">' + esc(x.coRatingH) + '</h2>' +
      '<span class="rate">' + f(esc(a.rating.value), a.rating.status) +
      '<span class="rate__m"> / ' + esc(a.rating.max) + '</span></span></div>' +
      '<p class="t-lede rv" style="margin-bottom:22px">' + esc(x.coRatingLead) + '</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:var(--gap)">' + places + '</div>' +
      '<div class="revs">' + reviews + '</div>' +
      '</div></section>';
  };

  /* ================= СЕКЦИЯ ================= */
  P_.sekciya = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money, f = h.f;
    const fm = RD.formats[0];

    const price = h.parks().map(function (p) {
      return '<div class="rw"><span class="rw__k">' + esc(P(p.name)) + '</span><b>' + money(p.groupPrice) + '</b></div>';
    }).join('');

    const monthlyNote = h.L() === 'ru'
      ? 'Месяц считается по числу тренировок в неделю: один, два или три раза. Назовите парк и сколько раз планируете ходить — администратор посчитает при вас.'
      : 'A month is counted by classes per week: one, two or three. Name the park and how often you plan to come — the administrator will calculate it with you.';

    return intro(h, x.secKick, x.secTitle, x.secLead,
      ctaPair(h, h.href('booking'), x.book, 'sekciya')) +

      '<section class="sec"><div class="shell grid g-split">' +
      '<div>' +
      '<h2 class="t-h2s rv" style="margin-bottom:20px">' + esc(x.secPriceH) + '</h2>' +
      price +
      '<div class="rw rw--last"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Зависит от категории тренера' : 'Depends on coach category') +
      '</span><b>' + esc(h.L() === 'ru' ? 'нет' : 'no') + '</b></div>' +
      '<p class="mono" style="margin-top:14px">' + esc(RD.ui[h.L()].groupNote) + '</p>' +

      '<h3 class="t-h4 rv" style="margin:36px 0 16px">' + esc(x.secMonthH) + '</h3>' +
      '<div class="box box--accent" style="margin-bottom:16px"><b>' + esc(x.secNoPass) + '</b></div>' +
      '<p class="t-body t-muted" style="max-width:48ch">' + esc(monthlyNote) + '</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:18px">' +
      h.parks().map(function (p) {
        return '<a class="btn btn--ghost btn--sm" href="tel:' + h.tel(p.phone) + '">' +
          esc(P(p.short) + ' ' + p.phone) + '</a>';
      }).join('') + '</div>' +
      '</div>' +

      '<div class="dark box rv" style="padding:clamp(24px,4vw,40px)">' +
      '<p class="kick kick--plain">' + esc(fm.badge ? P(fm.badge) : '') + '</p>' +
      '<h2 class="t-h3" style="margin-bottom:18px;max-width:22ch">' + esc(x.whyThis) + '</h2>' +
      fm.why.map(function (w, i) {
        return '<div class="li' + (i === fm.why.length - 1 ? ' li--last' : '') + '">' + f(esc(P(w)), w.status) + '</div>';
      }).join('') +
      '<div class="box box--accent" style="margin-top:26px;border-color:var(--accent)">' +
      '<b>' + esc(x.secNoTrialH) + '</b>' +
      '<p class="t-small" style="margin-top:8px;color:var(--on-dark-2)">' + esc(x.secNoTrial) + '</p>' +
      '<a class="btn btn--ghost btn--sm" style="margin-top:16px" href="' + h.href('personal') + '">' +
      esc(h.L() === 'ru' ? 'Пробное персональное от 1 300 ₽' : 'Trial one-to-one from 1,300 ₽') + '</a>' +
      '</div></div>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell">' +
      '<h2 class="t-h2 rv" style="max-width:20ch;margin-bottom:30px">' + esc(x.secParentH) + '</h2>' +
      '<div class="grid g2">' + x.secParent.map(function (p, i) {
        return '<div class="li rv" style="--i:' + i + '"><b>' + esc(p[0]) + '</b> ' + esc(p[1]) + '</div>';
      }).join('') + '</div>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-split">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:16px">' + esc(x.secBuyH) + '</h2>' +
      '<p class="t-body t-muted" style="max-width:48ch">' + esc(x.secBuy) + '</p></div>' +
      '<div class="dark box rv" style="--i:1;padding:clamp(24px,4vw,36px)">' +
      '<h2 class="t-h4" style="margin-bottom:14px">' + esc(x.secTeenH) + '</h2>' +
      '<p class="t-body" style="color:var(--on-dark-2);max-width:42ch">' + esc(x.secTeen) + '</p></div>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-lead">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:16px">' + esc(x.secInlineH) + '</h2>' +
      '<p class="t-body t-muted" style="max-width:48ch">' + esc(x.secInline) + '</p>' +
      '<a class="lnk" href="' + h.href('booking') + '" data-dir="inline" style="margin-top:12px">' +
      esc(h.L() === 'ru' ? 'Записаться на ролики' : 'Book an inline lesson') + ' <span>→</span></a></div>' +
      '<figure class="rv rv-ph" style="margin:0"><div class="ph" style="aspect-ratio:16/10">' +
      h.img('sokolniki-arch-4x5', h.L() === 'ru' ? 'Парк Red Deck в Сокольниках' : 'Red Deck Sokolniki') +
      '</div></figure>' +
      '</div></section>';
  };

  /* ================= ПЕРСОНАЛЬНЫЕ ================= */
  P_.personal = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money, f = h.f;
    const fm = RD.formats[1];
    const cols = [30, 60, 90, 120];

    const rows = h.parks().map(function (p) {
      const list = RD.pricing.personal.byPark[p.slug] || [];
      /* без подписи столбик из двух-трёх чисел не читается вообще */
      const cat = function (r) {
        return '<span class="mono" style="display:block">' +
          esc((h.L() === 'ru' ? 'категория ' : 'category ') + r.cat) + '</span>';
      };
      return '<tr><td><b>' + esc(P(p.name)) + '</b>' +
        list.map(function (r) { return cat(r); }).join('') + '</td>' +
        '<td>' + list.map(function (r) { return '<span style="display:block">' + money(r.trial) + '</span>'; }).join('') + '</td>' +
        cols.map(function (c) {
          return '<td>' + list.map(function (r) {
            return '<span style="display:block">' + (r[c] != null ? money(r[c]) : '—') + '</span>';
          }).join('') + '</td>';
        }).join('') + '</tr>';
    }).join('');

    const pair = h.parks().map(function (p) {
      const min = h.minOf(RD.pricing.pair.byPark[p.slug], 1);
      return '<div class="rw"><span class="rw__k">' + esc(P(p.name)) + '</span><b>' +
        esc(h.D().from) + ' ' + money(min) + '</b></div>';
    }).join('');

    return intro(h, x.perKick, x.perTitle, x.perLead, ctaPair(h, h.href('booking'), x.book, 'personal')) +

      '<section class="sec"><div class="shell">' +
      '<h2 class="t-h2 rv" style="margin-bottom:28px;max-width:18ch">' + esc(x.perWhyH) + '</h2>' +
      '<div class="grid g2">' + fm.why.map(function (w, i) {
        return '<div class="li rv" style="--i:' + i + '">' + f(esc(P(w)), w.status) + '</div>';
      }).join('') + '</div>' +
      '<div class="grid g-split" style="margin-top:var(--sec-y)">' +
      '<div class="box box--accent rv"><b>' + esc(x.perAdultH) + '</b>' +
      '<p class="t-small t-muted" style="margin-top:8px">' + esc(x.perAdult) + '</p></div>' +
      '<div class="rv" style="--i:1;display:flex;flex-direction:column;justify-content:flex-end">' +
      '<p class="t-body t-muted" style="max-width:42ch">' + esc(x.perToSec) + '</p>' +
      '<a class="lnk" href="' + h.href('sekciya') + '">' + esc(h.L() === 'ru' ? 'Секция от 2 200 ₽' : 'Section from 2,200 ₽') + ' <span>→</span></a></div>' +
      '</div></div></section>' +

      '<section class="sec sec--line"><div class="shell">' +
      '<div class="eyebrow-row"><h2 class="t-h2 rv">' + esc(x.perTblH) + '</h2>' +
      '<span class="t-small t-muted" style="max-width:54ch">' + esc(x.perTblNote) + ' ' +
      '<a class="lnk" href="' + h.href('coaches') + '">' + esc(x.perCatLink) + ' <span>→</span></a></span></div>' +
      '<p class="tbl-hint">' + esc(h.L() === 'ru' ? '→ таблица листается вбок' : '→ the table scrolls sideways') + '</p>' +
      '<div class="tbl-scroll tbl-fade"><table class="tbl">' +
      '<thead><tr><th>' + esc(x.park) + '</th><th>' + esc(x.trial) + '</th>' +
      cols.map(function (c) { return '<th>' + c + ' ' + esc(x.min) + '</th>'; }).join('') + '</tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>' +
      '<p class="mono" style="margin-top:14px">' + esc(RD.ui[h.L()].priceDisclaimer) + '</p>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-split">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:16px">' + esc(x.perPairH) + '</h2>' +
      '<p class="t-body t-muted" style="max-width:46ch;margin-bottom:20px">' + esc(x.perPair) + '</p>' +
      pair +
      '<p class="mono" style="margin-top:14px">' + esc(h.L() === 'ru' ? 'Цена за занятие на двоих, 60 минут.' : 'Price per 60-minute lesson for two.') + '</p></div>' +
      '<div class="dark box rv" style="padding:clamp(24px,4vw,40px)">' +
      '<h2 class="t-h3" style="margin-bottom:16px">' + esc(x.perDepH) + '</h2>' +
      '<p class="t-body" style="color:var(--on-dark-2);max-width:44ch">' + esc(P(RD.pricing.deposit.note)) + '</p>' +
      '<div class="li li--last" style="margin-top:22px">' + f(esc(h.L() === 'ru' ? 'Суммы депозита и размер кэшбэка' : 'Deposit tiers and cashback rates'), 'o') + '</div>' +
      '<a class="btn btn--ghost btn--sm" style="margin-top:20px" href="tel:' + h.tel(h.park().phone) + '">' +
      esc(x.call) + ' ' + esc(h.park().phone) + '</a>' +
      '</div></div></section>';
  };

  /* ================= СВОБОДНОЕ КАТАНИЕ ================= */
  P_.freeride = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money, f = h.f;

    const cols = h.parks().map(function (p, i) {
      const fr = p.freeride;
      return '<div class="rv" style="--i:' + i + ';border-top:' + (p.flagship ? '3px solid var(--accent)' : '1px solid var(--line)') + ';padding-top:20px">' +
        /* h2, а не h3: выше по странице только h1 из intro(), и разрыв
           уровня был единственным на сайте. Класс держит размер. */
        '<h2 class="t-h4" style="margin-bottom:10px">' + esc(P(p.name)) + '</h2>' +
        '<p class="t-small t-muted" style="margin-bottom:18px;max-width:34ch">' + esc(P(fr.promise)) + '</p>' +
        '<div class="rw"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Будни' : 'Weekdays') + '</span><b>' + money(fr.weekday) + '</b></div>' +
        '<div class="rw"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Выходные' : 'Weekends') + '</span><b>' + money(fr.weekend) + '</b></div>' +
        /* Строка «За что» была единственным местом, где плашка
           «уточняется» стояла вплотную к цене: человек читал «берут
           1 500 ₽, а за что — сами не знают». Показываем единицу только
           там, где она известна; неизвестное ушло в подпись под всеми
           тремя карточками — одной фразой, а не тремя плашками. */
        (fr.durationStatus === 'o' ? '' :
          '<div class="rw"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Время входа' : 'Entry covers') + '</span><b>' +
          esc(P(fr.unit)) + '</b></div>') +
        '<div class="rw rw--last"><span class="rw__k">' + esc(h.D().hoursL) + '</span><b>' +
        f(esc(P(p.hours)), p.hoursStatus) + '</b></div>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">' +
        /* Свободное катание и персональные — единственное, что продаётся
           онлайн. До этого ссылка на расписание жила только на /booking
           за двумя переключателями: человек в 21:40 получал «позвоните»
           вместо «выберите время». */
        (p.yclients && p.yclients.company
          ? '<a class="btn btn--primary btn--sm" href="' + esc(h.ycUrl(p.slug)) + '" target="_blank" rel="noopener">' + esc(x.rideOnline) + '</a>'
          : '') +
        '<a class="btn btn--ghost btn--sm" href="tel:' + h.tel(p.phone) + '">' + esc(p.phone) + '</a>' +
        '</div>' +
        '</div>';
    }).join('');

    const rent = h.parks().map(function (p) {
      return '<tr><td><b>' + esc(P(p.name)) + '</b></td><td>' + money(p.rental.piece) + '</td>' +
        '<td>' + money(p.rental.full) + '</td><td>' + money(p.rental.board) + '</td></tr>';
    }).join('');

    return intro(h, x.rideKick, x.rideTitle, x.rideLead, ctaPair(h, h.href('booking'), x.book, 'free-ride')) +

      '<section class="sec"><div class="shell"><div class="grid g3">' + cols + '</div>' +
      '<p class="t-small t-muted" style="margin-top:22px;max-width:62ch">' + esc(x.rideUnit) + '</p>' +
      /* Вёрт на этой странице не упоминался ни разу, а именно за ним
         подросток и покупает выходной вход. Про допуск он узнавал
         на площадке — то есть после оплаты. */
      '<p class="t-small t-muted" style="margin-top:10px;max-width:62ch">' + esc(x.rideVert) + '</p>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-lead">' +
      '<div><div class="eyebrow-row"><h2 class="t-h2s rv">' + esc(x.rideRentH) + '</h2>' +
      '<span class="mono">' + esc(x.rideRentNote) + '</span></div>' +
      '<p class="tbl-hint">' + esc(h.L() === 'ru' ? '→ таблица листается вбок' : '→ the table scrolls sideways') + '</p>' +
      '<div class="tbl-scroll tbl-fade"><table class="tbl"><thead><tr>' +
      '<th>' + esc(x.park) + '</th>' +
      '<th>' + esc(h.L() === 'ru' ? 'Элемент' : 'One pad') + '</th>' +
      '<th>' + esc(h.L() === 'ru' ? 'Комплект' : 'Full set') + '</th>' +
      '<th>' + esc(h.L() === 'ru' ? 'Доска' : 'Board') + '</th>' +
      '</tr></thead><tbody>' + rent + '</tbody></table></div>' +
      '<p class="mono" style="margin-top:14px">' + f(esc(P(RD.pricing.included.claim)), 'o') + '</p></div>' +
      '<figure class="rv rv-ph" style="margin:0"><div class="ph" style="aspect-ratio:4/5">' +
      h.img('sokolniki-space-16x9', h.L() === 'ru' ? 'Пространство парка Red Deck' : 'The Red Deck park floor') + '</div></figure>' +
      '</div></section>';
  };

  /* ================= ПАРКИ ================= */
  P_.parks = function (h) {
    const x = t(h), esc = h.esc, P = h.P, money = h.money, f = h.f, RD = h.RD;

    const list = h.parks().map(function (p, i) {
      const lvl = h.parkCard(p.slug);
      return '<article class="rv" style="--i:' + i + ';border-top:1px solid var(--line);padding-top:24px">' +
        '<div class="grid g-lead">' +
        '<div>' +
        '<p class="mono" style="margin-bottom:10px">' + f(esc(P(lvl.tag)), lvl.tagStatus) + '</p>' +
        '<h2 class="t-h3" style="margin-bottom:12px">' + esc(P(p.name)) + '</h2>' +
        '<p class="t-body t-muted" style="max-width:44ch;margin-bottom:20px">' + esc(P(lvl.body)) + '</p>' +
        '<div class="rw rw--addr"><span class="rw__k">' + esc(h.D().address) + '</span>' +
        '<span class="rw__v">' + f(esc(P(p.address)), p.addressStatus) + '</span></div>' +
        '<div class="rw"><span class="rw__k">' + esc(h.D().sectionRow) + '</span><b>' + money(p.groupPrice) + '</b></div>' +
        '<div class="rw rw--last"><span class="rw__k">' + esc(h.D().rideStatus) + '</span><b>' +
        esc(p.freeride.mode === 'always' ? h.D().always : h.D().byLoad) + '</b></div>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">' +
        '<a class="btn btn--primary" href="' + h.href('park', p.slug) + '">' + esc(h.L() === 'ru' ? 'Открыть парк' : 'Open the park') + '</a>' +
        '<a class="btn btn--ghost" href="tel:' + h.tel(p.phone) + '">' + esc(p.phone) + '</a>' +
        '</div></div>' +
        '<div>' + h.parkPhoto(p, '16/10', 'wide') +
        /* Сокольникам — ещё два кадра, оба выбраны владельцем 19.08.2026:
           чаша под деревянным сводом на колонне-«дереве» и чаша целиком.
           Один кадр с рампой не показывал архитектуру парка. */
        (p.slug === 'sokolniki' && p.photo && p.photo.bowl && p.photo.pool
          ? '<div class="grid g2" style="margin-top:var(--gap);gap:var(--gap)">' +
            h.parkPhoto(p, '16/10', 'bowl') + h.parkPhoto(p, '16/10', 'pool') + '</div>'
          : '') + '</div>' +
        '</div></article>';
    }).join('');

    return intro(h, x.parksKick, x.parksTitle, x.parksLead, '') +
      '<section class="sec"><div class="shell grid" style="gap:clamp(32px,5vw,56px)">' + list + '</div></section>';
  };

  /* ================= ОДИН ПАРК =================
     Страница каждого парка — класс-наследник ParkPage в своём файле
     src/parks/<slug>.js: базовый класс и реестр лежат в parks/park-page.js.
     Здесь остаётся каркас общих блоков, диспетчер и запасной генерик для
     парка, у которого своего класса пока нет.

     P_.parkBase — тот самый «каркас», который ParkPage получает извне под
     именем frame. Он живёт здесь, потому что рисует общими средствами
     этого файла (словарь TX, шапка intro) и обязан выглядеть так же, как
     остальные страницы сайта. Классу парка он известен только по четырём
     методам — hero, meta, zones, next — и ни по чему больше: это и есть
     та абстракция, на которую опирается база вместо конкретной вёрстки. */

  P_.parkBase = {
    /* герой парка: полноэкранный кадр или обычная шапка, если фото нет */
    hero: function (h, p, kicker, title, lead) {
      const P = h.P, esc = h.esc;
      if (!p.photo) return intro(h, kicker, title || P(p.name), lead || P(p.tagline), '');
      /* Ключ hero сильнее wide: карточкам парка на «Парках» может быть
         нужен один кадр, герою страницы — другой. У Сокольников на
         карточке общий план зала, в герое — вёрт-рампа. tall — портретный
         кадр под телефон, где широкий обрезался бы до нечитаемой ленты.
         Веил мягче, чем на главной: парковые герои ниже, и полная
         вуаль главной топила кадр в черноте. */
      const shot = p.photo.hero || p.photo.wide;
      const alt = p.photo.heroAlt || p.photo.wideAlt;
      return '<section class="hero" style="min-height:clamp(360px,56svh,560px)">' +
        '<div class="hero__ph">' + h.img(shot, P(alt), 'kb',
          { eager: true, mobile: p.photo.tall || null }) + '</div>' +
        '<div class="hero__veil hero__veil--soft"></div>' +
        '<div class="shell hero__in">' +
        '<p class="kick rise is-in" style="color:#fff"><i class="blink"></i>' + esc(kicker) + '</p>' +
        '<h1 class="t-h1 hero__h">' + esc(title || P(p.name)) + '</h1>' +
        '<p class="hero__lead">' + esc(lead || P(p.tagline)) + '</p>' +
        '</div></section>';
    },

    /* адрес, часы, цены, как найти вход — одинаково у всех трёх.
       asideTitle === false — тёмный блок «как найти вход» не выводится
       вовсе, и левая колонка перестаёт быть половиной сетки. Нужно там,
       где объяснение про вход не заслужено: пустой чёрный прямоугольник
       хуже отсутствующего. Остальные парки вызывают meta как раньше. */
    meta: function (h, p, asideTitle, asideBody) {
      const x = t(h), esc = h.esc, P = h.P, money = h.money, f = h.f, D = h.D();
      const aside = asideTitle !== false;
      return '<section class="sec"><div class="shell' + (aside ? ' grid g-lead' : '') + '">' +
        '<div>' +
        '<div class="rw rw--addr"><span class="rw__k">' + esc(D.address) + '</span>' +
        '<span class="rw__v">' + f(esc(P(p.address)), p.addressStatus) + '</span></div>' +
        /* Когда тёмного блока «как найти вход» нет, объяснение всё равно
           должно дойти: у Сокольников вход не с главной аллеи и в карточке
           на картах нет номера строения — человек доезжает и не находит
           дверь. Строкой под адресом, без блока: решение владельца снять
           блок соблюдено, факт не потерян. */
        (!aside && p.howToFind
          ? '<p class="t-small t-muted" style="margin:-6px 0 0;max-width:52ch">' +
            f(esc(P(p.howToFind)), p.howToFindStatus) + '</p>'
          : '') +
        '<div class="rw"><span class="rw__k">' + esc(D.hoursL) + '</span><b>' + f(esc(P(p.hours)), p.hoursStatus) + '</b></div>' +
        '<div class="rw"><span class="rw__k">' + esc(D.phone) + '</span>' +
        '<a href="tel:' + h.tel(p.phone) + '" style="text-decoration:none"><b>' + esc(p.phone) + '</b></a></div>' +
        '<div class="rw"><span class="rw__k">' + esc(D.sectionRow) + '</span><b>' + money(p.groupPrice) + '</b></div>' +
        '<div class="rw"><span class="rw__k">' + esc(D.personalRow) + '</span><b>' + esc(D.from) + ' ' + money(h.personalFrom(p.slug)) + '</b></div>' +
        '<div class="rw rw--last"><span class="rw__k">' + esc(D.rideRow) + '</span><b>' + h.rideLine(p) + '</b></div>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px">' +
        '<a class="btn btn--primary" href="' + h.href('booking') + '" data-park="' + p.slug + '">' + esc(x.book) + '</a>' +
        (p.mapUrl || p.mapSearch
          ? '<a class="btn btn--ghost" href="' + (p.mapUrl || ('https://yandex.ru/maps/?text=' + encodeURIComponent(p.mapSearch))) +
            '" target="_blank" rel="noopener">' + esc(x.route) + '</a>' : '') +
        '</div>' + offerNote(h) + '</div>' +
        (aside
          ? '<div class="dark box rv" style="padding:clamp(24px,4vw,36px)">' +
            '<h2 class="t-h4" style="margin-bottom:14px">' + esc(asideTitle || x.howFind) + '</h2>' +
            '<p class="t-body" style="color:var(--on-dark-2);max-width:40ch">' +
            (asideBody != null ? esc(asideBody) : f(esc(P(p.howToFind)), p.howToFindStatus)) + '</p>' +
            '<a class="btn btn--ghost btn--sm" style="margin-top:20px" href="tel:' + h.tel(p.phone) + '">' + esc(x.call) + '</a>' +
            '</div>'
          : '') +
        '</div></section>';
    },

    /* зоны и фигуры из контент-слоя плюс кадры парка */
    zones: function (h, p, heading, lead) {
      const x = t(h), esc = h.esc, P = h.P, f = h.f;
      const list = p.zones.map(function (z, i) {
        return '<div class="li rv" style="--i:' + i + '">' +
          '<span class="mono" style="display:block;margin-bottom:6px">' + esc(P(z.level)) + '</span>' +
          '<b>' + f(esc(P(z.title)), z.status) + '</b><br>' + esc(P(z.body)) + '</div>';
      }).join('');
      const media = p.photo
        ? '<div class="grid" style="gap:var(--gap)">' +
          '<figure class="rv rv-ph" style="margin:0"><div class="ph curve-bl curve-br" style="aspect-ratio:16/10">' +
          h.img(p.photo.radius, P(p.photo.radiusAlt)) + '</div></figure>' +
          '<figure class="rv rv-ph" style="--i:1;margin:0"><div class="ph curve-bl curve-br" style="aspect-ratio:16/10">' +
          h.img(p.photo.second, P(p.photo.secondAlt)) + '</div></figure></div>'
        : '<div>' + h.parkPhoto(p, '16/10') + '</div>';
      return '<section class="sec sec--line"><div class="shell">' +
        '<h2 class="t-h2 rv" style="margin-bottom:' + (lead ? '14px' : '28px') + '">' + esc(heading || x.zones) + '</h2>' +
        /* вводная фраза секции — если парк задал её в content.js */
        (lead ? '<p class="t-lede rv" style="--i:1;margin-bottom:30px">' + esc(P(lead)) + '</p>' : '') +
        '<div class="grid g-lead"><div>' + list + '</div>' + media + '</div></div></section>';
    },

    /* строка перехода в соседний парк — маршрут внутри сети */
    next: function (h, slug, text, cta) {
      const p = h.RD.park(slug);
      if (!p) return '';
      return '<section class="sec sec--line"><div class="shell grid g-lead">' +
        '<div><p class="t-lede rv" style="max-width:44ch">' + h.esc(text) + '</p>' +
        '<a class="btn btn--ghost" style="margin-top:20px" href="' + h.href('park', slug) + '">' +
        h.esc(cta) + '</a></div>' +
        '<div>' + h.parkPhoto(p, '16/10', 'wide') + '</div>' +
        '</div></section>';
    }
  };

  /* Диспетчер. В нём нет ни одного if по слагу и ни одного названия
     парка: он берёт страницу из реестра классов и зовёт общий render().
     Open/Closed — новый парк появляется отдельным файлом с наследником,
     эта функция не меняется. Подстановка Лисков — диспетчеру безразлично,
     какой именно наследник вернулся: он знает только договор ParkPage. */
  P_.park = function (h, slug) {
    const p = h.RD.park(slug);
    if (!p) return P_.notFound(h);
    const page = root.RDParks && root.RDParks.find(slug);
    if (page) return page.render(h, p, P_.parkBase);

    /* генерик на случай парка без собственного класса */
    const lvl = h.parkCard(slug);
    return P_.parkBase.hero(h, p, h.P(lvl.tag)) +
      P_.parkBase.meta(h, p) +
      P_.parkBase.zones(h, p);
  };

  /* ================= ЦЕНЫ ================= */
  P_.prices = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money, f = h.f;
    const cols = [30, 60, 90, 120];

    const open = [
      h.L() === 'ru' ? 'Стоимость месяца при 1, 2 или 3 тренировках в неделю' : 'Monthly price for 1, 2 or 3 classes a week',
      h.L() === 'ru' ? 'Расписание групп и дата ближайшего набора' : 'Group timetable and next intake date',
      h.L() === 'ru' ? 'Размер группы и длительность занятия' : 'Group size and class length',
      h.L() === 'ru' ? 'Порядок отработки пропущенных занятий' : 'Make-up policy for missed classes',
      h.L() === 'ru' ? 'Суммы депозита и размер кэшбэка' : 'Deposit tiers and cashback rates',
      h.L() === 'ru' ? 'Чем отличаются категории тренеров' : 'What separates the coach categories',
      h.L() === 'ru' ? 'Что именно входит в стоимость занятия' : 'What exactly a class price includes'
    ];

    const perRows = h.parks().map(function (p) {
      const list = RD.pricing.personal.byPark[p.slug] || [];
      /* без подписи столбик из двух-трёх чисел не читается вообще */
      const cat = function (r) {
        return '<span class="mono" style="display:block">' +
          esc((h.L() === 'ru' ? 'категория ' : 'category ') + r.cat) + '</span>';
      };
      return '<tr><td><b>' + esc(P(p.name)) + '</b>' +
        list.map(function (r) { return cat(r); }).join('') + '</td>' +
        '<td>' + list.map(function (r) { return '<span style="display:block">' + money(r.trial) + '</span>'; }).join('') + '</td>' +
        cols.map(function (c) {
          return '<td>' + list.map(function (r) {
            return '<span style="display:block">' + (r[c] != null ? money(r[c]) : '—') + '</span>';
          }).join('') + '</td>';
        }).join('') + '</tr>';
    }).join('');

    return intro(h, x.prKick, x.prTitle, x.prLead,
      ctaPair(h, h.href('booking'), x.book)) +

      '<section class="sec"><div class="shell" style="max-width:760px;margin-inline:0">' +
      '<h2 class="t-h2 rv" style="margin-bottom:24px">' + esc(x.prSec) + '</h2>' +
      h.parks().map(function (p) {
        return '<div class="rw"><span class="rw__k">' + esc(P(p.name)) + '</span><b>' + money(p.groupPrice) + '</b></div>';
      }).join('') +

      '</div></section>' +

      '<section class="sec sec--line"><div class="shell">' +
      '<div class="eyebrow-row"><h2 class="t-h2 rv">' + esc(x.prPer) + '</h2>' +
      '<span class="t-small t-muted" style="max-width:54ch">' + esc(x.perTblNote) + ' ' +
      '<a class="lnk" href="' + h.href('coaches') + '">' + esc(x.perCatLink) + ' <span>→</span></a></span></div>' +
      '<p class="tbl-hint">' + esc(h.L() === 'ru' ? '→ таблица листается вбок' : '→ the table scrolls sideways') + '</p>' +
      '<div class="tbl-scroll tbl-fade"><table class="tbl"><thead><tr><th>' + esc(x.park) + '</th><th>' + esc(x.trial) + '</th>' +
      cols.map(function (c) { return '<th>' + c + ' ' + esc(x.min) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + perRows + '</tbody></table></div>' +
      '</div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-split">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:22px">' + esc(x.prRide) + '</h2>' +
      h.parks().map(function (p, i) {
        return '<div class="rw' + (i === h.parks().length - 1 ? ' rw--last' : '') + '"><span class="rw__k">' + esc(P(p.name)) + '</span><b>' +
          h.rideLine(p) + '</b></div>';
      }).join('') +
      '<p class="mono" style="margin-top:14px">' + esc(h.L() === 'ru'
        ? 'Аренда: элемент защиты 350–400 ₽, комплект 650–900 ₽, доска 650–900 ₽.'
        : 'Rental: one pad 350–400 ₽, full set 650–900 ₽, board 650–900 ₽.') + '</p></div>' +
      '<div class="dark box rv" style="padding:clamp(24px,4vw,36px)">' +
      '<h2 class="t-h3" style="margin-bottom:14px">' + esc(x.prDep) + '</h2>' +
      '<p class="t-body" style="color:var(--on-dark-2);max-width:42ch">' + esc(P(RD.pricing.deposit.note)) + '</p>' +
      '</div></div></section>' +

      '<section class="sec sec--line"><div class="shell grid g-lead">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:18px">' + esc(x.prOpenH) + '</h2>' +
      '<p class="t-body t-muted" style="max-width:46ch">' + esc(h.L() === 'ru'
        ? 'Месяц, расписание и размер группы зависят от парка и от того, сколько раз в неделю вы ходите. Назовите парк и удобные дни — посчитают при вас, за минуту.'
        : 'The month, the timetable and the group size depend on the park and how often you come. Name the park and your days — it is worked out with you, in a minute.') + '</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:22px">' +
      h.parks().map(function (p) {
        return '<a class="btn btn--ghost btn--sm" href="tel:' + h.tel(p.phone) + '">' + esc(P(p.short) + ' ' + p.phone) + '</a>';
      }).join('') + '</div></div>' +
      '<div>' + open.map(function (o, i) {
        return '<div class="li' + (i === open.length - 1 ? ' li--last' : '') + ' rv" style="--i:' + i + '">' + esc(o) + '</div>';
      }).join('') + '</div>' +
      '</div></section>';
  };

  /* ================= БЕЗОПАСНОСТЬ ================= */
  P_.safety = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, f = h.f;
    const items = RD.safety.map(function (s, i) {
      return '<div class="li rv" style="--i:' + (i % 4) + '">' +
        '<b>' + f(esc(P(s.title)), s.status) + '</b><br>' +
        '<span class="t-muted">' + esc(P(s.body)) + '</span></div>';
    });
    const half = Math.ceil(items.length / 2);

    return intro(h, x.safKick, x.safTitle, x.safLead,
      '<div class="box box--accent"><b>' + esc(x.safFallH) + '</b>' +
      '<p class="t-small t-muted" style="margin-top:8px">' + esc(x.safFall) + '</p></div>') +

      '<section class="sec"><div class="shell grid g-split">' +
      '<div>' + items.slice(0, half).join('') + '</div>' +
      '<div>' + items.slice(half).join('') + '</div>' +
      '</div></section>' +

      '<section class="sec sec--line dark"><div class="shell grid g-lead">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:16px">' + esc(x.safGame) + '</h2>' +
      '<p class="t-body rv" style="--i:1;color:var(--on-dark-2);max-width:44ch">' + esc(h.L() === 'ru'
        ? 'Чек-лист защиты, олли и кикфлип, пять типов падений — каждое объясняет одно правило. Играть можно в автобусе, пока ждёте тренировку.'
        : 'A gear checklist, ollies and kickflips, five kinds of fall — each explains one rule. Playable on the bus while you wait.') + '</p>' +
      '<a class="btn btn--primary" style="margin-top:22px" href="' + h.href('game') + '">' +
      esc(h.L() === 'ru' ? 'Открыть мини-игру' : 'Open the mini game') + '</a></div>' +
      '<figure class="rv rv-ph" style="margin:0"><div class="ph" style="aspect-ratio:16/10">' +
      h.img('sokolniki-radius-16x9', h.L() === 'ru' ? 'Радиус в парке Red Deck' : 'A transition at Red Deck') + '</div></figure>' +
      '</div></section>';
  };

  /* Карточки парков на странице записи. Вынесены из P_.booking, потому что
     перерисовываются при смене формата: секция онлайн не продаётся, и
     кнопка «Открыть запись» для неё была бы обманом — она ведёт
     в расписание, где секции нет. */
  function parkCards(h) {
    const x = t(h), esc = h.esc, P = h.P, f = h.f;
    const sek = h.S.fmt === 'sekciya';
    return h.parks().map(function (p) {
      const yc = !sek && p.yclients && p.yclients.company;
      return '<div class="box rv">' +
        '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:8px">' +
        '<h3 class="t-h4">' + esc(P(p.name)) + '</h3>' +
        '<span class="mono">' + esc(yc ? x.bkYc : x.bkTel) + '</span></div>' +
        '<p class="t-small t-muted" style="margin-bottom:18px">' + f(esc(P(p.address)), p.addressStatus) + '</p>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
        (yc
          ? '<a class="btn btn--primary btn--sm" href="' + esc(h.ycUrl(p.slug)) + '" target="_blank" rel="noopener" data-park="' + p.slug + '">' + esc(x.bkGo) + '</a>'
          : '<a class="btn btn--primary btn--sm" href="tel:' + h.tel(p.phone) + '" data-park="' + p.slug + '">' + esc(x.call) + '</a>') +
        '<a class="btn btn--ghost btn--sm" href="tel:' + h.tel(p.phone) + '">' + esc(p.phone) + '</a>' +
        '</div></div>';
    }).join('');
  }

  /* Сводка выбора на странице записи. Была статичным списком —
     владелец 20.08.2026 попросил менять парк, направление и формат
     прямо в ней, не разыскивая нужный блок ниже. Каждая строка —
     ряд кнопок-чипов; обработчики делегированы на документ (app.js),
     поэтому перерисовка сводки слушателей не теряет. */
  function choiceBox(h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, S = h.S;
    const chip = function (attr, val, label, on) {
      return '<button class="bk-chip" type="button" ' + attr + '="' + val +
        '" aria-pressed="' + on + '">' + esc(label) + '</button>';
    };
    const parks = h.parks().map(function (p) {
      return chip('data-park', p.slug, P(p.short), S.park === p.slug);
    }).join('');
    const dirs = RD.disciplines.map(function (d) {
      return chip('data-dir', d.slug, P(d.name), S.dir === d.slug);
    }).join('');
    const fmts = RD.formats.map(function (z) {
      return chip('data-fmt', z.slug, P(z.name), S.fmt === z.slug);
    }).join('');
    return '<p class="mono" style="margin-bottom:14px">' + esc(x.bkChoice) + '</p>' +
      '<div class="bk-ch"><span class="bk-ch__k">' + esc(x.park) + '</span><div class="bk-ch__r">' + parks + '</div></div>' +
      '<div class="bk-ch"><span class="bk-ch__k">' + esc(x.bkDir) + '</span><div class="bk-ch__r">' + dirs + '</div></div>' +
      '<div class="bk-ch bk-ch--last"><span class="bk-ch__k">' + esc(x.bkFmt) + '</span><div class="bk-ch__r">' + fmts + '</div></div>';
  }

  /* ---------- ФОРМА ЗАЯВКИ ----------
     Первая форма захвата на сайте: до неё лид существовал, только если
     дозвонился (владелец 20.08.2026 — «не дозвонились — лида нет»).
     Бэкенда у статической сборки нет, поэтому заявка не постится на
     сервер, а собирается в готовое сообщение и открывает WhatsApp
     администратора выбранного парка (у Сокольников WhatsApp не
     подтверждён — там уходит SMS на телефон парка). Человеку остаётся
     нажать «Отправить» в самом мессенджере — честно и без потери. */
  function leadForm(h) {
    const ru = h.L() === 'ru', esc = h.esc, P = h.P;
    const opts = h.parks().map(function (p) {
      return '<option value="' + p.slug + '"' + (h.S.park === p.slug ? ' selected' : '') + '>' +
        esc(P(p.short)) + '</option>';
    }).join('');
    return '<section class="sec sec--line" id="lead"><div class="shell grid g-split">' +
      '<div><p class="kick kick--plain">' + (ru ? 'Заявка' : 'Request') + '</p>' +
      '<h2 class="t-h2s rv" style="margin-bottom:14px;max-width:20ch">' +
      (ru ? 'Неудобно звонить — оставьте заявку' : 'Prefer not to call — leave a request') + '</h2>' +
      '<p class="t-body t-muted rv" style="--i:1;max-width:46ch">' +
      (ru ? 'Заявка уходит администратору выбранного парка вместе с направлением и форматом, которые вы отметили выше. Отвечают в часы работы, 10:00–22:00.'
          : 'The request goes to the administrator of the chosen park together with the discipline and format you picked above. They reply during opening hours, 10:00–22:00.') + '</p></div>' +
      '<form id="lead-form" class="lead box">' +
      '<label class="fld"><span>' + (ru ? 'Имя' : 'Name') + '</span>' +
      '<input name="name" type="text" autocomplete="name" maxlength="60" placeholder="' + (ru ? 'Как к вам обращаться' : 'What should we call you') + '"></label>' +
      '<label class="fld"><span>' + (ru ? 'Телефон' : 'Phone') + ' *</span>' +
      '<input name="phone" type="tel" autocomplete="tel" required minlength="6" maxlength="20" inputmode="tel" placeholder="+7"></label>' +
      '<label class="fld"><span>' + (ru ? 'Парк' : 'Park') + '</span>' +
      '<select name="park">' + opts + '</select></label>' +
      '<label class="fld"><span>' + (ru ? 'Комментарий' : 'Comment') + '</span>' +
      '<input name="note" type="text" maxlength="120" placeholder="' + (ru ? 'Возраст, опыт, удобные дни — что угодно' : 'Age, experience, preferred days — anything') + '"></label>' +
      '<button class="btn btn--primary btn--wide" type="submit">' + (ru ? 'Отправить заявку' : 'Send the request') + ' <span class="arr">→</span></button>' +
      '<p class="t-small t-muted" id="lead-done" hidden>' +
      (ru ? 'Открыли мессенджер с готовым текстом — осталось нажать «Отправить» там.'
          : 'We opened the messenger with the message ready — just press “Send” there.') + '</p>' +
      '<p class="legal-note" style="border-top:0;padding-top:0">' +
      (ru ? 'Отправляя заявку, вы соглашаетесь с ' : 'By sending you agree to ') +
      '<a href="' + h.href('privacy') + '">' + (ru ? 'политикой обработки персональных данных' : 'the personal data policy') + '</a>.</p>' +
      '</form></div></section>';
  }
  P_.leadForm = leadForm;

  /* ================= ЗАПИСЬ ================= */
  P_.booking = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money, f = h.f;
    const S = h.S;
    const park = h.park();

    const fmtPrice = function (slug) {
      if (slug === 'sekciya') return money(park.groupPrice);
      if (slug === 'personal') return h.D().from + ' ' + money(h.trialFrom(park.slug));
      return h.D().from + ' ' + money(park.freeride.weekday);
    };

    const dirs = RD.disciplines.map(function (d) {
      return '<button class="pick" type="button" data-dir="' + d.slug + '" aria-pressed="' + (S.dir === d.slug) + '">' +
        '<strong>' + esc(P(d.name)) + '</strong></button>';
    }).join('');

    const fmts = RD.formats.map(function (z) {
      return '<button class="pick" type="button" data-fmt="' + z.slug + '" aria-pressed="' + (S.fmt === z.slug) + '">' +
        '<strong>' + esc(P(z.name)) + '</strong><em>' + fmtPrice(z.slug) + '</em></button>';
    }).join('');

    /* честно предупреждаем, если формат для выбранного направления не подтверждён */
    const dObj = RD.disciplines.filter(function (z) { return z.slug === S.dir; })[0];
    const fkey = S.fmt === 'sekciya' ? 'group' : (S.fmt === 'personal' ? 'personal' : 'freeride');
    const warn = dObj && dObj.formats[fkey] === 'o'
      ? '<div class="box box--accent"><b>' +
        esc(h.L() === 'ru' ? 'На роликах этот формат есть не в каждом парке' : 'This inline format does not run in every park') + '</b>' +
        '<p class="t-small t-muted" style="margin-top:8px">' + esc(P(dObj.note)) + '</p></div>'
      : '';

    const parks = parkCards(h);

    const aside = '<div class="box" id="bk-choice">' + choiceBox(h) + '</div>';

    return intro(h, x.bkKick, x.bkTitle, x.bkLead, aside) +
      '<section class="sec"><div class="shell">' +
      '<h2 class="t-h2 rv" style="margin-bottom:30px">' + esc(x.bkPickH) + '</h2>' +
      '<div class="grid g-split">' +
      '<div>' +
      '<p class="mono" style="margin-bottom:12px">' + esc(x.bkDirL) + '</p>' +
      '<div class="grid g2" style="gap:12px;margin-bottom:30px">' + dirs + '</div>' +
      '<p class="mono" style="margin-bottom:12px">' + esc(x.bkFmtL) + '</p>' +
      '<div class="grid" style="gap:12px">' + fmts + '</div>' +
      '<div id="bk-warn" style="margin-top:20px">' + warn + '</div>' +
      '</div>' +
      '<div><p class="mono" style="margin-bottom:12px">' + esc(x.bkParkL) + '</p>' +
      '<div class="grid" id="bk-parks" style="gap:12px">' + parks + '</div>' +
      '<p class="mono" style="margin-top:16px" id="bk-note">' +
      esc(S.fmt === 'sekciya' ? x.bkNoteSek : x.bkNote) + '</p>' +
      offerNote(h) + '</div>' +
      '</div></div></section>' +
      leadForm(h);
  };

  /* ================= СЕРТИФИКАТ ================= */
  P_.gift = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, money = h.money;
    const g = RD.gift;

    return intro(h, x.gfKick, x.gfTitle, x.gfLead,
      ctaPair(h, 'tel:' + h.tel(RD.park('sokolniki').phone), x.call)) +

      '<section class="sec"><div class="shell grid g-split">' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:22px">' + esc(x.gfHowH) + '</h2>' +
      x.gfHow.map(function (s, i) {
        return '<div class="li' + (i === x.gfHow.length - 1 ? ' li--last' : '') + ' rv" style="--i:' + i + '">' +
          '<span class="mono" style="display:block;margin-bottom:6px">0' + (i + 1) + '</span>' + esc(s) + '</div>';
      }).join('') + '</div>' +
      '<div><h2 class="t-h2s rv" style="margin-bottom:14px">' + esc(x.gfLimitH) + '</h2>' +
      '<p class="t-body t-muted" style="max-width:42ch;margin-bottom:20px">' + esc(x.gfAnchor) + '</p>' +
      '<div class="rw"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Максимальный номинал' : 'Maximum value') + '</span><b>' + money(g.maxAmount) + '</b></div>' +
      '<div class="rw"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Срок действия' : 'Valid for') + '</span><b>' +
      esc(g.termMonths + (h.L() === 'ru' ? ' месяцев' : ' months')) + '</b></div>' +
      '<div class="rw rw--last"><span class="rw__k">' + esc(h.L() === 'ru' ? 'Где оформить' : 'Where to buy') + '</span><b>' +
      esc(h.L() === 'ru' ? 'в парке' : 'at the park') + '</b></div>' +
      '<div class="box box--accent" style="margin-top:26px">' +
      '<b>' + esc(x.gfLegalH) + '</b>' +
      '<p class="t-small t-muted" style="margin-top:8px">' + esc(P(g.legalNote)) + '</p></div>' +
      '</div></div></section>' +

      '<section class="sec sec--line on-red"><div class="shell grid g-split" style="align-items:end">' +
      '<h2 class="t-h2" style="max-width:20ch">' + esc(h.L() === 'ru'
        ? 'Скейтборд или ролики — на выбор получателя'
        : 'Skateboard or inline skates — the recipient chooses') + '</h2>' +
      '<div><p class="t-body" style="margin-bottom:20px">' + esc(h.L() === 'ru'
        ? 'Направление можно не указывать при покупке: получатель выберет сам, когда будет записываться.'
        : 'You do not have to pick the discipline when buying: the recipient chooses when booking.') + '</p>' +
      '<a class="btn btn--ink" href="tel:' + h.tel(RD.park('sokolniki').phone) + '">' + esc(x.call) + ' <span class="arr">→</span></a></div>' +
      '</div></section>';
  };

  /* ================= ВОПРОСЫ ================= */
  P_.faq = function (h) {
    const x = t(h), RD = h.RD, esc = h.esc, P = h.P, f = h.f;
    return intro(h, x.faqKick, x.faqTitle, x.faqLead, ctaPair(h, h.href('booking'), x.book)) +
      '<section class="sec"><div class="shell grid g2">' +
      RD.faq.map(function (q, i) {
        return '<div class="li rv" style="--i:' + (i % 4) + '">' +
          '<b>' + esc(P(q.q)) + '</b><br><span class="t-muted">' + f(esc(P(q.a)), q.status) + '</span></div>';
      }).join('') +
      '</div></section>';
  };

  /* ================= КОНТАКТЫ ================= */
  P_.contacts = function (h) {
    const x = t(h), esc = h.esc, P = h.P, f = h.f;
    return intro(h, x.ctKick, x.ctTitle, x.ctLead, '') +
      '<section class="sec"><div class="shell grid g3">' +
      h.parks().map(function (p, i) {
        return '<div class="rv" style="--i:' + i + ';border-top:1px solid var(--line);padding-top:20px">' +
          '<h2 class="t-h4" style="margin-bottom:12px">' + esc(P(p.name)) + '</h2>' +
          '<p class="t-small t-muted" style="margin-bottom:16px;max-width:30ch">' + f(esc(P(p.address)), p.addressStatus) + '</p>' +
          '<div class="rw"><span class="rw__k">' + esc(h.D().hoursL) + '</span><b>' + f(esc(P(p.hours)), p.hoursStatus) + '</b></div>' +
          '<div class="rw rw--last"><span class="rw__k">' + esc(h.D().phone) + '</span><b>' + esc(p.phone) + '</b></div>' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">' +
          '<a class="btn btn--primary btn--sm" href="tel:' + h.tel(p.phone) + '">' + esc(x.call) + '</a>' +
          (p.mapUrl || p.mapSearch
            ? '<a class="btn btn--ghost btn--sm" href="' + (p.mapUrl || ('https://yandex.ru/maps/?text=' + encodeURIComponent(p.mapSearch))) +
              '" target="_blank" rel="noopener">' + esc(x.route) + '</a>' : '') +
          '</div></div>';
      }).join('') +
      '</div></section>' +
      leadForm(h);
  };

  /* ================= ДОКУМЕНТЫ ================= */
  P_.legal = function (h) {
    const x = t(h), esc = h.esc;
    return intro(h, x.lgKick, x.lgTitle, x.lgLead, '') +
      '<section class="sec"><div class="shell grid g2">' +
      x.lgList.map(function (d, i) {
        return '<div class="li rv" style="--i:' + i + '"><b>' + esc(d[0]) + '</b><br>' +
          '<span class="t-muted">' + esc(d[1]) + '</span></div>';
      }).join('') +
      '</div><div class="shell">' +
      /* Действующая политика лежит на текущем сайте клуба. Страница
         документов, на которой нет ни одного документа, — худшее, что
         можно показать человеку, ищущему, кому он отдаёт данные ребёнка.
         Пока остальные файлы не выложены, даём хотя бы этот. */
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">' +
      '<a class="btn btn--ghost btn--sm" href="' + h.asset('assets/docs/oferta.pdf') + '" target="_blank" rel="noopener">' +
      esc(h.L() === 'ru' ? 'Открыть договор-оферту (PDF)' : 'Open the offer agreement (PDF)') + '</a>' +
      '<a class="btn btn--ghost btn--sm" href="' + h.href('privacy') + '">' +
      esc(x.lgPolicy) + '</a></div>' +
      '<p class="mono" style="margin-top:22px;max-width:62ch">' + esc(x.lgNote) + '</p></div></section>';
  };

  /* ================= ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ =================
     Текст перенесён дословно с действующей страницы
     reddeck.ru/politika-konfidencialnosti (снято 20.08.2026).
     Правка одна: в п. 12.3 конструктор оставил ссылку-заглушку
     «thismywebsite.com» — заменена на адрес этой страницы.
     Замечания юристу (текст НЕ менялся, только зафиксировано):
     оборванная фраза в п. 8.5 и «Скейт-клуб Red Deck» вместо
     полного наименования ООО «РЕД ДЕК 3.0» — в реестре вопросов. */
  const POLICY = [
    ['1. Общие положения', [
      'Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Скейт-клуб Red Deck (далее — Оператор).',
      '1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.',
      '1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://reddeck.ru.'
    ]],
    ['2. Основные понятия, используемые в Политике', [
      '2.1. Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.',
      '2.2. Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).',
      '2.3. Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://reddeck.ru.',
      '2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.',
      '2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.',
      '2.6. Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.',
      '2.7. Оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.',
      '2.8. Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://reddeck.ru.',
      '2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, — персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).',
      '2.10. Пользователь — любой посетитель веб-сайта https://reddeck.ru.',
      '2.11. Предоставление персональных данных — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.',
      '2.12. Распространение персональных данных — любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.',
      '2.13. Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.',
      '2.14. Уничтожение персональных данных — любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.'
    ]],
    ['3. Основные права и обязанности Оператора', [
      '3.1. Оператор имеет право: получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные; в случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также направления обращения с требованием о прекращении обработки персональных данных, Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных; самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.',
      '3.2. Оператор обязан: предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных; организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ; отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных; сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса; публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике; принимать правовые, организационные и технические меры для защиты персональных данных; прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных; исполнять иные обязанности, предусмотренные Законом о персональных данных.'
    ]],
    ['4. Основные права и обязанности субъектов персональных данных', [
      '4.1. Субъекты персональных данных имеют право: получать информацию, касающуюся обработки их персональных данных, за исключением случаев, предусмотренных федеральными законами; требовать от Оператора уточнения персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки; выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг; на отзыв согласия на обработку персональных данных, а также на направление требования о прекращении обработки персональных данных; обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора; на осуществление иных прав, предусмотренных законодательством РФ.',
      '4.2. Субъекты персональных данных обязаны: предоставлять Оператору достоверные данные о себе; сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.',
      '4.3. Лица, передавшие Оператору недостоверные сведения о себе либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.'
    ]],
    ['5. Принципы обработки персональных данных', [
      '5.1. Обработка персональных данных осуществляется на законной и справедливой основе.',
      '5.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.',
      '5.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.',
      '5.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.',
      '5.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.',
      '5.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных.',
      '5.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения не установлен федеральным законом или договором. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.'
    ]],
    ['6. Цели обработки персональных данных', [
      'Цель обработки — информирование Пользователя посредством отправки электронных писем.',
      'Персональные данные — фамилия, имя, отчество, электронный адрес, номера телефонов.',
      'Правовые основания — Федеральный закон «Об информации, информационных технологиях и о защите информации» от 27.07.2006 № 149-ФЗ.',
      'Виды обработки персональных данных — отправка информационных писем на адрес электронной почты.'
    ]],
    ['7. Условия обработки персональных данных', [
      '7.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.',
      '7.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.',
      '7.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.',
      '7.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных.',
      '7.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.',
      '7.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее — общедоступные персональные данные).',
      '7.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.'
    ]],
    ['8. Порядок сбора, хранения, передачи и других видов обработки персональных данных', [
      'Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.',
      '8.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.',
      '8.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства, либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.',
      '8.3. В случае выявления неточностей в персональных данных Пользователь может актуализировать их самостоятельно, направив Оператору уведомление на адрес электронной почты info@reddeck.ru с пометкой «Актуализация персональных данных».',
      '8.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление на адрес электронной почты info@reddeck.ru с пометкой «Отзыв согласия на обработку персональных данных».',
      '8.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.',
      '8.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.',
      '8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.',
      '8.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных.',
      '8.9. Условием прекращения обработки персональных данных может являться достижение целей обработки, истечение срока действия согласия субъекта персональных данных, отзыв согласия субъектом персональных данных или требование о прекращении обработки, а также выявление неправомерной обработки персональных данных.'
    ]],
    ['9. Перечень действий, производимых Оператором с полученными персональными данными', [
      '9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.',
      '9.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.'
    ]],
    ['10. Трансграничная передача персональных данных', [
      '10.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных (такое уведомление направляется отдельно от уведомления о намерении осуществлять обработку персональных данных).',
      '10.2. Оператор до подачи вышеуказанного уведомления обязан получить от органов власти иностранного государства, иностранных физических лиц, иностранных юридических лиц, которым планируется трансграничная передача персональных данных, соответствующие сведения.'
    ]],
    ['11. Конфиденциальность персональных данных', [
      'Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.'
    ]],
    ['12. Заключительные положения', [
      '12.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты info@reddeck.ru.',
      '12.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.',
      '12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет на этой странице.'
    ]]
  ];

  P_.privacy = function (h) {
    const esc = h.esc;
    const en = h.L() === 'en';
    const body = POLICY.map(function (s, i) {
      return '<h2 class="t-h4" style="margin:' + (i ? '34px' : '0') + ' 0 12px">' + esc(s[0]) + '</h2>' +
        s[1].map(function (p) {
          return '<p class="t-small" style="color:var(--muted);margin-bottom:10px">' + esc(p) + '</p>';
        }).join('');
    }).join('');
    return '<section class="pt"><div class="shell pt__in">' +
      '<div><p class="kick kick--plain">' + (en ? 'Documents' : 'Документы') + '</p>' +
      '<h1 class="t-h1 is-in" style="max-width:22ch;margin-bottom:18px">Политика обработки персональных данных</h1>' +
      '<p class="t-lede" style="max-width:52ch">' + (en
        ? 'The personal data policy is published in Russian — the legally binding version is below.'
        : 'Действующая политика Скейт-клуба Red Deck в соответствии с 152-ФЗ «О персональных данных». Вопросы — на почту info@reddeck.ru.') + '</p></div>' +
      '<div class="box"><span class="mono" style="display:block;margin-bottom:10px">' + (en ? 'OPERATOR' : 'ОПЕРАТОР') + '</span>' +
      '<p class="t-body" style="margin-bottom:6px">Скейт-клуб Red Deck</p>' +
      '<a class="lnk" href="mailto:info@reddeck.ru">info@reddeck.ru <span>→</span></a></div>' +
      '</div></section>' +
      '<section class="sec"><div class="shell"><div style="max-width:76ch">' + body + '</div></div></section>';
  };

  /* ================= ИГРА ================= */
  P_.game = function (h) {
    const x = t(h);
    const body = root.RDGame ? root.RDGame.page(h) : '';
    return body + '<section class="sec sec--line"><div class="shell">' +
      '<a class="lnk" href="' + h.href('safety') + '">' + h.esc(x.gmBack) + ' <span>→</span></a>' +
      '</div></section>';
  };

  /* ================= 404 ================= */
  P_.notFound = function (h) {
    const d = h.D();
    return '<section class="pt"><div class="shell pt__in">' +
      '<div><p class="kick kick--plain">404</p>' +
      '<h1 class="t-h1 is-in" style="max-width:16ch;margin-bottom:18px">' + h.esc(d.notFound) + '</h1>' +
      '<p class="t-lede">' + h.esc(d.notFoundLead) + '</p></div>' +
      '<div><a class="btn btn--primary" href="#/">' + h.esc(d.toHome) + '</a></div>' +
      '</div></section>';
  };

  P_['404'] = P_.notFound;

  /* ---- точечное обновление страницы записи ----
     Полный render() сбрасывал бы фокус и проигрывал анимацию входа
     заново на каждый тап по формату. Меняем только два узла. */
  P_.refreshBooking = function (h) {
    const box = document.getElementById('bk-choice');
    const warn = document.getElementById('bk-warn');
    if (!box && !warn) return;
    const RD = h.RD, P = h.P, esc = h.esc, S = h.S;
    const park = h.park();
    const d = RD.disciplines.filter(function (z) { return z.slug === S.dir; })[0];
    const fmtObj = RD.formats.filter(function (z) { return z.slug === S.fmt; })[0];
    const x = TX[h.L()];

    if (box) box.innerHTML = choiceBox(h);
    /* цены в кнопках форматов зависят от парка — при смене парка
       в сводке их нужно пересчитать, иначе кнопка врёт */
    document.querySelectorAll('.pick[data-fmt]').forEach(function (btn) {
      const em = btn.querySelector('em');
      if (!em) return;
      const slug = btn.getAttribute('data-fmt');
      em.innerHTML = slug === 'sekciya'
        ? h.money(park.groupPrice)
        : h.D().from + ' ' + h.money(slug === 'personal' ? h.trialFrom(park.slug) : park.freeride.weekday);
    });
    if (warn) {
      const key = S.fmt === 'sekciya' ? 'group' : (S.fmt === 'personal' ? 'personal' : 'freeride');
      warn.innerHTML = (d && d.formats[key] === 'o')
        ? '<div class="box box--accent"><b>' +
          esc(h.L() === 'ru' ? 'На роликах этот формат есть не в каждом парке' : 'This inline format does not run in every park') + '</b>' +
          '<p class="t-small t-muted" style="margin-top:8px">' + esc(P(d.note)) + '</p></div>'
        : '';
    }
    /* Карточки парков зависят от формата: для секции онлайн-записи нет.
       Перерисовываем их и подпись под списком. */
    const cards = document.getElementById('bk-parks');
    if (cards) cards.innerHTML = parkCards(h);
    const note = document.getElementById('bk-note');
    if (note) note.textContent = S.fmt === 'sekciya' ? x.bkNoteSek : x.bkNote;

    if (root.RDApp_say) {
      root.RDApp_say((d ? P(d.name) : '') + ', ' + (fmtObj ? P(fmtObj.name) : ''));
    }
  };

  root.RDPages = P_;
})(typeof window !== 'undefined' ? window : this);
