/* =====================================================================
   RED DECK — canonical content layer for the three prototypes
   Version: content.v1 (prototype)  ·  Date: 2026-08-17
   ---------------------------------------------------------------------
   ЕДИНСТВЕННЫЙ источник фактов для вариантов A / B / C.
   Правка факта здесь меняет его сразу во всех трёх прототипах.

   Статусы фактов (из хандофа §4):
     'c' = CONFIRMED          — можно публиковать
     'w' = WORKING DIRECTION  — рабочая гипотеза, показываем с пометкой
     'o' = OPEN               — нельзя публиковать, нужен fallback
   ===================================================================== */
(function (root) {
  'use strict';

  /* ---------- 1. ПАРКИ ---------- */
  const PARKS = [
    {
      slug: 'sokolniki',
      order: 1,
      flagship: true,
      name: { ru: 'Сокольники', en: 'Sokolniki' },
      nameAcc: { ru: 'Сокольники', en: 'Sokolniki' },
      // предложный падеж для заголовков вида «Скейт-парк в Сокольниках»
      nameIn: { ru: 'в Сокольниках', en: 'in Sokolniki' },
      short: { ru: 'Сокольники', en: 'Sokolniki' },
      tagline: {
        ru: 'Самая большая вёрт-рампа в Восточной Европе.',
        en: 'The largest vert ramp in Eastern Europe.'
      },
      // Площадь и высота названы владельцем 19.08.2026 в переписке.
      // Письменного подтверждения (замер, техпаспорт) пока нет — статус 'w'.
      // ВАЖНО: 3 000 м² меньше, чем 5 100 м², которые публично заявляет
      // Rampstroy Land. Значит формулировка «самый большой крытый парк»
      // закрыта. Открыта только «самая большая вёрт-рампа» — это про
      // фигуру, а не про площадь.
      area: 3000,
      areaStatus: 'w',
      // Владелец: «больше четырёх метров». Открытые источники давали 3,4–3,5 м
      // и теперь расходятся с этой цифрой — на сайте пишем «больше 4 м»,
      // а не точное число, пока нет замера.
      vertHeight: 4,
      vertHeightStatus: 'w',
      vertHeightMin: true,      // «больше», а не «ровно»
      address: { ru: 'Москва, Сокольнический Вал, д. 1, стр. 1', en: 'Moscow, Sokolnichesky Val 1, bld. 1' },
      addressStatus: 'c',   // подтверждён информированным согласием ООО «РЕД ДЕК 3.0»
      howToFind: {
        ru: 'Мы в парке «Сокольники», Сокольнический Вал, 1, стр. 1. Вход не с главной аллеи, и в карточке на картах нет номера строения. Позвоните за пять минут до приезда — вас встретят.',
        en: 'We are in Sokolniki Park, Sokolnichesky Val 1, bld. 1. The entrance is not off the main alley and the map listing has no building number. Call five minutes before you arrive and someone will meet you.'
      },
      // Текст ниже — предупреждение, а не пробел в данных: адрес известен
      // и подтверждён, неизвестен только удобный вход. Плашка «уточняется»
      // рядом с ним читалась как «мы не знаем своего адреса».
      howToFindStatus: 'w',
      phone: '+7 (929) 509-17-27',
      phoneStatus: 'w',
      hours: { ru: 'ежедневно 10:00–22:00', en: 'daily 10:00–22:00' },
      hoursStatus: 'w',
      geo: { lat: 55.805766, lng: 37.672904, status: 'w' },
      mapUrl: 'https://yandex.ru/maps/org/red_deck/83499359477/',
      yclients: { company: null, status: 'o' },
      indoor: true,
      indoorStatus: 'o',
      photo: {
        /* Общий кадр карточек — выбор владельца 19.08.2026: вид из рампы
           на балкон, спиральную лестницу и колонны-«деревья». Прежний кадр
           с вёрт-рампой остаётся героем главной — он к заголовку про вёрт. */
        /* hero — кадр героя страницы парка; wide остаётся карточкам.
           Чаша под деревянным сводом — выбор владельца 19.08.2026. */
        hero: 'sokolniki-tree-16x9',
        heroAlt: {
          ru: 'Чаша Red Deck в Сокольниках под деревянным сводом на колонне-«дереве»',
          en: 'The Red Deck Sokolniki bowl beneath the timber canopy on its tree column'
        },
        wide: 'sokolniki-hall-16x9',
        wideAlt: {
          ru: 'Зал Red Deck в Сокольниках: рампа, балкон со спиральной лестницей и колонны-«деревья»',
          en: 'The Red Deck Sokolniki hall: the ramp, the balcony with its spiral stair and the tree columns'
        },
        tall: 'sokolniki-mobile-4x5',
        tallAlt: {
          ru: 'Пространство скейт-парка Red Deck в Сокольниках',
          en: 'The Red Deck skatepark space in Sokolniki'
        },
        /* Ключи radius и second рисуются в блоке зон на странице парка.
           С 19.08.2026 в них стоят кадры, выбранные владельцем: чаша под
           деревянным сводом на колонне-«дереве» и чаша целиком. Прежние
           кадры (wood, старый radius) остались в файлах — используются
           в блоке масштаба на главной. */
        second: 'sokolniki-pool-16x9',
        secondAlt: {
          ru: 'Деревянная чаша скейт-парка Red Deck в Сокольниках',
          en: 'The timber bowl of the Red Deck skatepark in Sokolniki'
        },
        radius: 'sokolniki-tree-16x9',
        radiusAlt: {
          ru: 'Чаша Red Deck в Сокольниках под деревянным сводом на колонне-«дереве»',
          en: 'The Red Deck Sokolniki bowl beneath the timber canopy on its tree column'
        },
        /* Кадр выбран владельцем 19.08.2026: чаша и деревянный свод
           на колонне-«дереве» — главный архитектурный трюк парка. */
        bowl: 'sokolniki-tree-16x9',
        bowlAlt: {
          ru: 'Чаша скейт-парка Red Deck в Сокольниках под деревянным сводом на колонне-«дереве»',
          en: 'The Red Deck Sokolniki bowl beneath the timber canopy on its tree-shaped column'
        },
        /* Тоже выбор владельца 19.08.2026: чаша целиком, с логотипом. */
        pool: 'sokolniki-pool-16x9',
        poolAlt: {
          ru: 'Деревянная чаша скейт-парка Red Deck в Сокольниках',
          en: 'The timber bowl of the Red Deck skatepark in Sokolniki'
        },
        overview: 'sokolniki-overview-16x9',
        overviewAlt: {
          ru: 'Общий план и многоуровневость парка Red Deck в Сокольниках',
          en: 'General view and multiple levels of Red Deck Sokolniki'
        },
        entrance: 'sokolniki-entrance-4x5',
        entranceAlt: {
          ru: 'Вход в Red Deck в парке «Сокольники»',
          en: 'Entrance to Red Deck in Sokolniki Park'
        },
        arch: 'sokolniki-arch-4x5',
        archAlt: {
          ru: 'Архитектура скейт-парка Red Deck в Сокольниках',
          en: 'Architecture of the Red Deck skatepark in Sokolniki'
        }
      },
      /* Состав фигур — текст владельца 19.08.2026, записан с его слов.
         Превосходная степень у вёрт-рампы — прямое решение владельца,
         риск по ст. 5 ФЗ-38 задокументирован в правилах проекта.
         «Полтора метра вертикали» — цифра владельца, статус 'w': в акт
         замера (см. ЧТО-ЗАПРОСИТЬ) стоит включить и её. */
      zonesLead: {
        ru: 'Это по-настоящему масштабный скейт-парк, друзья.',
        en: 'This is a properly big skatepark, friends.'
      },
      zones: [
        {
          title: { ru: 'Вёрт-рампа', en: 'Vert ramp' },
          status: 'w',
          level: { ru: 'Продвинутый уровень', en: 'Advanced level' },
          body: {
            ru: 'Больше четырёх метров в высоту, из них полтора метра — вертикаль. Вёрт международного уровня, самый большой в Восточной Европе. Заезд по допуску тренера, в полной защите и со страховкой на первых попытках.',
            en: 'Over four metres tall, one and a half of them vertical. An international-level vert, the largest in Eastern Europe. Access with a coach’s clearance, in full protective gear, spotted on first attempts.'
          }
        },
        {
          title: { ru: 'Парящий боул', en: 'The floating bowl' },
          status: 'w',
          level: { ru: 'Форма — «клевер»', en: 'Clover-shaped' },
          body: {
            ru: 'Кроме функциональности и формы «клевер» это невероятно красивая парящая конструкция: чаша приподнята над полом на колонне-«дереве». Приходите.',
            en: 'Beyond the function and the clover shape, it is a strikingly beautiful floating structure: the bowl is raised above the floor on a tree-shaped column. Come and see it.'
          }
        },
        {
          title: { ru: 'Мини-рампа', en: 'Mini ramp' },
          status: 'w',
          level: { ru: 'Для обучения', en: 'Built for learning' },
          body: {
            ru: 'Очень комфортная для обучения: небольшая, широкая, с плавными радиусами.',
            en: 'Very comfortable to learn on: compact, wide, with mellow transitions.'
          }
        },
        {
          title: { ru: 'Много пространства', en: 'Room to ride' },
          status: 'w',
          level: { ru: 'Любой уровень', en: 'Any level' },
          body: {
            ru: 'Место для свободного катания, обучения скольжениям и флипам — и просто уверенного катания. Занятие и свободное катание идут одновременно и не мешают друг другу.',
            en: 'Space for free-ride, for learning grinds and flips — and for simply riding with confidence. A class and free-ride run at the same time without getting in each other’s way.'
          }
        }
      ],
      freeride: {
        mode: 'always',
        weekday: 1200,
        weekend: 1500,
        unit: { ru: 'вход', en: 'entry' },
        durationStatus: 'o',
        promise: {
          ru: 'Свободное катание почти всегда открыто: места хватает и занятиям, и всем остальным.',
          en: 'Free-ride is open almost any time: there is enough room for classes and everyone else at once.'
        }
      },
      rental: { piece: 400, full: 900, board: 900 },
      groupPrice: 2200
    },
    {
      slug: 'khimki',
      order: 3,
      flagship: false,
      name: { ru: 'Химки', en: 'Khimki' },
      nameAcc: { ru: 'Химки', en: 'Khimki' },
      nameIn: { ru: 'в Химках', en: 'in Khimki' },
      short: { ru: 'Химки', en: 'Khimki' },
      tagline: {
        ru: 'Компактная площадка для секции и персональных занятий.',
        en: 'A compact venue for the section and one-to-one lessons.'
      },
      address: {
        ru: 'Правобережная ул., 1Б, ТЦ «Капитолий», 2‑й этаж',
        en: 'Pravoberezhnaya st. 1B, Capitol mall, 2nd floor'
      },
      // Картографические справочники относят Правобережную, 1Б к московскому
      // району Левобережный, документы Red Deck — к Химкам. Владелец знает
      // площадку лучше карт и 19.08.2026 подтвердил название «Химки»,
      // поэтому плашку «уточняется» с адреса снимаем.
      addressStatus: 'w',
      // Ориентир снят с интерьерной съёмки площадки (папка «Правобережная, 1Б»):
      // зал выходит витриной в общий проход, над входом чёрная вывеска RED DECK.
      // Чего съёмка не даёт — от какого входа в ТЦ идти ближе; это к администратору.
      howToFind: {
        ru: 'Второй этаж торгового центра. Зал видно из общего прохода: витрина во всю стену и чёрная вывеска RED DECK над входом. От какого входа в ТЦ ближе — подскажет администратор.',
        en: 'Second floor of the mall. You can see the venue from the main walkway: a full-wall window and a black RED DECK sign above the entrance. Which mall entrance is closest — the administrator will tell you.'
      },
      howToFindStatus: 'w',
      phone: '+7 (916) 537-98-16',
      phoneStatus: 'o',
      hours: { ru: 'ежедневно 10:00–22:00', en: 'daily 10:00–22:00' },
      // 'w', а не 'o': зал внутри торгового центра и работать дольше него
      // не может. Опубликованный режим ТЦ — 10:00–22:00 ежедневно, ровно
      // те же часы. Плашка «уточняется» рядом с часами читалась как
      // «мы не знаем, когда работаем», хотя верхняя граница проверяема.
      // Письменного подтверждения от клуба всё ещё нет — отсюда 'w'.
      hoursStatus: 'w',
      geo: { lat: null, lng: null, status: 'o' },
      mapUrl: null,
      // Строка уходит в поиск карт, а не в вёрстку. Картографы держат дом
      // за Москвой: со словом «Химки» впереди Яндекс и 2ГИС промахиваются
      // мимо здания. Показываем «Химки», ищем «Москва» — это разные задачи.
      mapSearch: 'Red Deck, Правобережная улица, 1Б, Москва',
      // Проверено 19.08.2026 открытием кабинета: company/970651 — «Red deck
      // Химки». Бриф чата «Химки» называл 970654, но это Мозаика/Дубровка.
      yclients: { company: '970651', status: 'c' },
      indoor: true,
      indoorStatus: 'c', // подтверждено интерьерной съёмкой: зал внутри ТЦ
      // Интерьерная съёмка площадки, папка «Скейт-клуб „Red Deck“ Правобережная, 1Б».
      // Людей в кадре нет — согласий на съёмку не требуется.
      // Исходники 1199×800, поэтому кадры идут в блоки, а не в полноэкранный герой.
      photo: {
        /* Герой — групповой кадр с праздника 06.09.2025 (выбор владельца
           19.08.2026): люди на фоне красной стены зала. Съёмка людей
           покрыта пунктом «Медиасъёмка» информированного согласия. */
        hero: 'khimki-party-16x9',
        heroAlt: {
          ru: 'Гости праздника Red Deck в Химках: дети и взрослые с грамотами на площадке',
          en: 'Guests of a Red Deck party in Khimki: children and adults with diplomas on the floor'
        },
        /* tall — вертикальный вырез того же праздничного кадра: на
           телефоне широкий кадр резал людей по головам, у вертикального
           запас по высоте полный. Семейный портрет живёт в блоке
           первого визита. */
        tall: 'khimki-party-4x5',
        tallAlt: {
          ru: 'Гости праздника Red Deck в Химках на площадке у красной стены',
          en: 'Guests of a Red Deck party in Khimki by the red wall of the floor'
        },
        wide: 'khimki-wide-16x9',
        wideAlt: {
          ru: 'Площадка Red Deck в Химках: ровный пол, низкие фигуры, стеллаж со шлемами и роликами',
          en: 'The Red Deck floor in Khimki: flat surface, low features, a rack of helmets and skates'
        },
        radius: 'khimki-floor-16x9',
        radiusAlt: {
          ru: 'Пологие скаты вдоль стен и фигуры посередине зала в Химках',
          en: 'Gentle banks along the walls and features in the middle of the Khimki floor'
        },
        second: 'khimki-lounge-16x9',
        secondAlt: {
          ru: 'Зона ожидания в Химках: ступени с подушками, столик, газон',
          en: 'The waiting area in Khimki: cushioned steps, a low table, artificial grass'
        },
        hall: 'khimki-hall-16x9',
        hallAlt: {
          ru: 'Вход в зал Red Deck в Химках: витрина и вывеска в торговом центре',
          en: 'The entrance to the Red Deck venue in Khimki: shopfront and sign inside the mall'
        },
        // Два кадра с праздника в Химках, 06.09.2025. Съёмка людей покрыта
        // пунктом «Медиасъемка (ст. 152.1 ГК РФ)» информированного согласия:
        // посетители разрешают использование снимков в рекламных материалах
        // клуба. Отобраны намеренно без трюков: страница обещает, что вокруг
        // такие же начинающие, и кадр с эйром эту мысль опровергал бы.
        first: 'khimki-first-4x5',
        firstAlt: {
          ru: 'Родители и ребёнок в шлеме и защите на площадке Red Deck в Химках',
          en: 'Parents and a child in a helmet and pads at Red Deck Khimki'
        },
        people: 'khimki-people-16x9',
        peopleAlt: {
          ru: 'Общая фотография с праздника в Химках: дети и взрослые на площадке',
          en: 'A group photo from the party in Khimki: children and adults on the floor'
        }
      },
      // Состав фигур описан по интерьерной съёмке. Терминов нет намеренно:
      // это единственный парк, где текст читает человек, впервые узнающий,
      // что такое скейт-парк.
      zones: [
        {
          title: { ru: 'Ровная середина', en: 'The flat middle' },
          status: 'w',
          level: { ru: 'Первые шаги', en: 'First steps' },
          body: {
            ru: 'Большая ровная площадка посередине зала. Здесь учатся стоять на доске, толкаться и тормозить — заезжать никуда не нужно.',
            en: 'A large flat area in the middle of the room. This is where you learn to stand on the board, push and stop — nothing to ride up.'
          }
        },
        {
          title: { ru: 'Пологие скаты вдоль стен', en: 'Gentle banks along the walls' },
          status: 'w',
          level: { ru: 'Когда поехали', en: 'Once you are rolling' },
          body: {
            ru: 'Низкие изогнутые скаты по периметру: на них заезжают и с них съезжают обратно. Ничего вертикального и высокого в зале нет.',
            en: 'Low curved banks around the perimeter: you ride up them and roll back down. There is nothing vertical or high in the room.'
          }
        },
        {
          title: { ru: 'Фигуры посередине', en: 'Features in the middle' },
          status: 'w',
          level: { ru: 'Дальше', en: 'Next' },
          body: {
            ru: 'Пологая горка с двух сторон, низкий короб и труба у стены — с них начинают первые трюки. Состав фигур иногда меняют: что стоит сегодня, скажет администратор.',
            en: 'A gentle double-sided hump, a low box and a rail by the wall — where first tricks start. The set changes from time to time: the administrator will say what is out today.'
          }
        }
      ],
      freeride: {
        mode: 'limited',
        weekday: 1000,
        weekend: 1000,
        unit: { ru: 'вход', en: 'entry' },
        durationStatus: 'o',
        promise: {
          ru: 'Площадка компактная. Перед выездом позвоните: свободное катание зависит от занятий и загрузки.',
          en: 'The venue is compact. Call before you come: free-ride depends on scheduled classes and how busy it is.'
        }
      },
      rental: { piece: 350, full: 650, board: 650 },
      groupPrice: 2200
    },
    {
      slug: 'mosaic',
      order: 2,
      flagship: false,
      /* Переименован из «Мозаики» 19.08.2026 по решению владельца.
         «Мозаика» — вывеска торгового центра: она ничего не говорит
         человеку из другого округа ни о направлении, ни о расстоянии,
         и ставит чужой бренд в заголовок своего парка. «Дубровка» —
         станция МЦК с выходом прямо в этот ТРЦ, и набор становится
         однородным: Сокольники · Дубровка · Химки.
         ТРЦ «Мозаика» никуда не делся — он остаётся в адресе и
         в ориентире, там от него есть польза. */
      name: { ru: 'Дубровка', en: 'Dubrovka' },
      nameAcc: { ru: 'Дубровку', en: 'Dubrovka' },
      nameIn: { ru: 'на Дубровке', en: 'in Dubrovka' },
      short: { ru: 'Дубровка', en: 'Dubrovka' },
      tagline: {
        ru: 'Площадка в ТРЦ «Мозаика», выход из МЦК «Дубровка».',
        en: 'A venue in the Mozaika mall, right at Dubrovka MCC station.'
      },
      address: {
        ru: 'Москва, 7-я Кожуховская ул., 9, ТРЦ «Мозаика»',
        en: 'Moscow, 7th Kozhukhovskaya st. 9, Mozaika mall'
      },
      addressStatus: 'c',   // подтверждён информированным согласием
      /* Станций «Дубровка» две, и это разные места: МЦК — та, что нужна,
         метро на Люблинско-Дмитровской линии в 12–14 минутах пешком,
         официального перехода между ними нет. Поэтому «МЦК» пишем везде,
         где встречается название. */
      howToFind: {
        ru: 'Станция МЦК «Дубровка» — выход ведёт прямо в ТРЦ «Мозаика», идти минуту. Не перепутайте с метро «Дубровка» на Люблинско-Дмитровской линии: это другая станция, оттуда пешком около 12 минут. Внутри ищите стеклянную витрину с вывеской «Red Deck. Клуб скейтбординга» — между кибер-лаунджем и магазином товаров для праздника.',
        en: 'Dubrovka station on the MCC ring — the exit leads straight into the Mozaika mall, a minute on foot. Do not confuse it with Dubrovka on the Lyublinsko-Dmitrovskaya metro line: that is a different station, about 12 minutes away. Inside, look for the glass shopfront with the “Red Deck. Skateboarding club” sign — between the cyber lounge and the party-supplies shop.'
      },
      howToFindStatus: 'w',
      phone: '+7 (925) 908-43-21',
      phoneStatus: 'o',
      hours: { ru: 'ежедневно 10:00–22:00', en: 'daily 10:00–22:00' },
      // 'w', а не 'o': зал внутри торгового центра и работать дольше него
      // не может. Опубликованный режим ТЦ — 10:00–22:00 ежедневно, ровно
      // те же часы. Плашка «уточняется» рядом с часами читалась как
      // «мы не знаем, когда работаем», хотя верхняя граница проверяема.
      // Письменного подтверждения от клуба всё ещё нет — отсюда 'w'.
      hoursStatus: 'w',
      geo: { lat: null, lng: null, status: 'o' },
      mapUrl: null,
      mapSearch: 'Red Deck, 7-я Кожуховская улица, 9, Москва',
      // Проверено 19.08.2026 открытием кабинета: company/970654 — «Red deck
      // Мозаика», 7-я Кожуховская, 9. Бриф чата «Мозаика» называл 970651,
      // но это Химки. Ошибался бриф, не content.js.
      yclients: { company: '970654', status: 'c' },
      indoor: true,
      indoorStatus: 'c', // подтверждено интерьерной съёмкой: зал внутри ТРЦ
      // Интерьерная съёмка площадки. Людей в кадре нет — согласий не требуется.
      // Исходники 1199×674, уже пережатые: вертикальный герой 9×16 из них
      // не собрать, поэтому кадры идут в блоки, а на карточку — общий план.
      photo: {
        wide: 'mosaic-spine-16x9',
        wideAlt: {
          ru: 'Спайн с трубчатым копингом посередине зала Red Deck на Дубровке, радиусы с красным копингом вдоль стен',
          en: 'A spine with tube coping in the middle of the Red Deck Dubrovka floor, radii with red coping along the walls'
        },
        tall: 'mosaic-spine-4x5',
        tallAlt: {
          ru: 'Спайн и радиусы зала Red Deck на Дубровке',
          en: 'The spine and radii of the Red Deck Dubrovka floor'
        },
        radius: 'mosaic-radius-16x9',
        radiusAlt: {
          ru: 'Бэнк с накатанной поверхностью и квотер у стойки в зале на Дубровке',
          en: 'A well-worn bank and a quarter by the front desk on the Dubrovka floor'
        },
        second: 'mosaic-floor-16x9',
        secondAlt: {
          ru: 'Волна во всю ширину зала на Дубровке, ростовая разметка на колонне',
          en: 'A full-width wave on the Dubrovka floor, a height scale painted on the column'
        },
        hall: 'mosaic-entrance-16x9',
        hallAlt: {
          ru: 'Витрина Red Deck в ТРЦ «Мозаика»: вывеска «Клуб скейтбординга»',
          en: 'The Red Deck shopfront in the Mozaika mall, sign reading “Skateboarding club”'
        }
      },
      /* Состав фигур описан по съёмке. Регистр парка — профессиональный:
         термины идут без расшифровки, объяснять их здесь не нужно.
         Оговорка про сменную конфигурацию — одна на весь блок, в последней
         записи, а не в каждой: три одинаковых «уточняется» подряд читались
         как недоделанный сайт. */
      zones: [
        {
          title: { ru: 'Спайн и радиусы', en: 'Spine and radii' },
          status: 'w',
          level: { ru: 'Продвинутый уровень', en: 'Advanced level' },
          body: {
            ru: 'Спайн с трубчатым копингом стоит по центру, радиусы с красным копингом — вдоль обеих стен. Линия читается насквозь: заезд с одной стены, спайн, выезд на другую.',
            en: 'A spine with tube coping sits in the centre, radii with red coping run along both walls. The line reads end to end: drop in off one wall, over the spine, out onto the other.'
          }
        },
        {
          title: { ru: 'Волна и бэнк', en: 'Wave and bank' },
          status: 'w',
          level: { ru: 'Средний уровень', en: 'Intermediate' },
          body: {
            ru: 'Волна во всю ширину зала и бэнк с накатанной поверхностью. Разгон короткий: скорость набирают с радиуса, а не с флэта.',
            en: 'A wave across the full width of the floor and a well-worn bank. Run-ups are short: speed comes off the radius, not off the flat.'
          }
        },
        {
          title: { ru: 'Компактный зал', en: 'A compact floor' },
          status: 'w',
          level: { ru: 'Любой уровень', en: 'Any level' },
          body: {
            ru: 'Площадка небольшая, фигуры стоят плотно. Точные размеры и то, что стоит сегодня, перечислит администратор: конфигурацию периодически меняют.',
            en: 'The venue is small and the features sit close together. Exact sizes and today’s set-up come from the administrator: the layout is changed from time to time.'
          }
        }
      ],
      freeride: {
        mode: 'limited',
        weekday: 1000,
        weekdayAllDay: 1900,
        weekend: 1500,
        weekendAllDay: 2900,
        unit: { ru: '2 часа', en: '2 hours' },
        durationStatus: 'w',
        promise: {
          ru: 'Площадка компактная. Перед выездом позвоните: свободное катание зависит от занятий и загрузки.',
          en: 'The venue is compact. Call before you come: free-ride depends on scheduled classes and how busy it is.'
        }
      },
      rental: { piece: 400, full: 900, board: 900 },
      groupPrice: 2300
    }
  ];

  /* ---------- 2. ЦЕНЫ ----------
     Источник: «цены для сайта.xlsx», лист «Лист1», получен 17.08.2026.
     Все числа переписаны из файла без изменений.
     Статус всего блока: 'w' — до письменного утверждения Red Deck
     и сверки с Yclients.                                              */
  const PRICING = {
    validFrom: null,
    validFromStatus: 'o',
    source: 'цены для сайта.xlsx · 17.08.2026',

    // Разовое групповое занятие («раз группа СЕКЦИЯ» в файле).
    // Цена НЕ зависит от категории тренера — это подтверждается файлом.
    group: {
      status: 'w',
      single: { sokolniki: 2200, khimki: 2200, mosaic: 2300 },

      // АБОНЕМЕНТОВ НЕТ И НЕ БУДЕТ — решение Red Deck от 17.08.2026.
      // Вместо них: оплата за месяц, размер зависит от числа тренировок в неделю.
      monthly: {
        status: 'o',
        perWeek: [1, 2, 3],
        priceByWeek: null,     // ждём цифры Red Deck
        note: {
          ru: 'Секция оплачивается за месяц. Стоимость зависит от того, сколько раз в неделю ребёнок ходит.',
          en: 'The section is paid monthly. The price depends on how many times a week the student attends.'
        }
      },

      // Пробного группового занятия как постоянной услуги нет.
      trialAvailable: false,
      intake: {
        status: 'w',
        note: {
          ru: 'Пробных групповых занятий на постоянной основе нет. Набор в новые потоки секции открывается периодически — примерно раз в месяц, отдельным набором пробных групп.',
          en: 'There is no permanent trial group class. Intake into new section streams opens periodically — roughly once a month, as a separate set of trial groups.'
        }
      },

      sizeMin: null,
      sizeMax: null,
      sizeStatus: 'o',
      durationMin: null,
      durationStatus: 'o'
    },

    // Депозит с кэшбэком — для свободного катания и персональных занятий.
    // Решение Red Deck от 17.08.2026 вместо абонементов.
    deposit: {
      status: 'o',
      appliesTo: ['personal', 'free-ride'],
      tiers: null,             // суммы и проценты кэшбэка ждём от Red Deck
      note: {
        ru: 'Вы вносите депозит и списываете с него оплату за персональные занятия и свободное катание. Чем больше сумма депозита, тем больше кэшбэк.',
        en: 'You top up a deposit and pay for one-to-one lessons and free-ride from it. The larger the top-up, the larger the cashback.'
      },
      // не выводится на сайт: это заметка для юриста, а не для клиента
      legalRisk: {
        ru: 'Юридический риск депозита выше, чем у абонемента: неизрасходованный остаток — это деньги клиента, и он вправе потребовать их обратно в любой момент. Кэшбэк безопаснее оформлять как бонусные баллы со сроком жизни, а не как внесённые деньги. Порядок возврата остатка обязателен в оферте.',
        en: 'A deposit carries higher legal risk than a season pass: the unspent balance is the client’s money and can be reclaimed at any time. Cashback is safer as expiring bonus points than as topped-up cash. The refund procedure for the balance must be stated in the offer.'
      }
    },

    // Персональные занятия. Колонки файла: пробн / 30 / 60 / 90 / 120.
    // Прочтение «минуты» — вывод из соседних парных колонок в часах.
    // Требует письменного подтверждения Red Deck.
    personal: {
      status: 'w',
      unitReading: 'minutes',
      unitReadingStatus: 'o',
      columns: ['trial', 30, 60, 90, 120],
      byPark: {
        sokolniki: [
          { cat: 1, trial: 2000, 30: 3000, 60: 5800, 90: 8000, 120: 9900 },
          { cat: 2, trial: 1400, 30: 2900, 60: 4900, 90: 6400, 120: 7900 }
        ],
        khimki: [
          { cat: 1, trial: 2000, 30: 3000, 60: 5800, 90: 8000, 120: 9900 },
          { cat: 2, trial: 1400, 30: 2900, 60: 4900, 90: 6400, 120: 7900 },
          { cat: 3, trial: 1300, 30: 2900, 60: 4100, 90: 5300, 120: 6500 }
        ],
        mosaic: [
          { cat: 1, trial: 2000, 30: 3000, 60: 5800, 90: 8000, 120: 9900 },
          { cat: 2, trial: 1400, 30: 2900, 60: 4900, 90: 6400, 120: 7900 },
          { cat: 3, trial: 1300, 30: 2900, 60: 4500, 90: 5800, 120: 7200 }
        ]
      },
      /* Что такое категория. Раньше стояло 'o' — «неизвестно», и человек
         видел разброс цены в 41 % без единого слова объяснения.
         Сопоставление прайса со страницей тренеров на reddeck.ru даёт
         однозначную картину: 1-я категория — Денис Журавлёв, чемпион
         Москвы и призёр чемпионата России; 2-я — Тимофей Невгус,
         Сергей Дробаков, Евгений Ершов; 3-я — Игорь Лалетин,
         Константин Грушин. Чем выше категория, тем дороже час.
         Чего сопоставление НЕ даёт — по какому правилу категорию
         присваивают: у Лалетина двадцать лет за доской и третья
         категория. Поэтому объясняем то, что видно, и не сочиняем
         правило, которого не знаем. */
      categoryMeaning: {
        status: 'w',
        body: {
          ru: 'Категория — внутренний разряд тренера в клубе, от неё зависит цена часа: первая дороже, третья дешевле. Двое стоят вне этой шкалы: сооснователь клуба и методист — их время считают отдельно, спросите администратора. Соревновательные результаты и стаж у каждого перечислены на странице тренеров: выбирайте по ним, а не по цифре.',
          en: 'The category is the coach’s internal grade at the club, and it sets the hourly price: first is the most expensive, third the least. Two coaches sit outside the scale — the club’s co-founder and its head of methodology; their time is priced separately, ask the administrator. Each coach’s competition record and years of experience are listed on the coaches page: choose by those, not by the number.'
        }
      }
    },

    // Занятие вдвоём («парн» в файле), в часах.
    pair: {
      status: 'w',
      byPark: {
        sokolniki: [
          { cat: 1, trial: 3000, 1: 7500, 1.5: 10500, 2: 12800 },
          { cat: 2, trial: 2100, 1: 6400, 1.5: 8400, 2: 10400 }
        ],
        khimki: [
          { cat: 1, trial: 3000, 1: 7500, 1.5: 10500 },
          { cat: 2, trial: 2100, 1: 6400, 1.5: 8400 },
          { cat: 3, trial: 1900, 1: 5300, 1.5: 7700 }
        ],
        mosaic: [
          { cat: 1, trial: 3000, 1: 7500, 1.5: 10500, 2: 12800 },
          { cat: 2, trial: 2100, 1: 6400, 1.5: 8400, 2: 10400 },
          { cat: 3, trial: 1900, 1: 5800, 1.5: 8100, 2: 9500 }
        ]
      }
    },

    // «монстр (3; 4 чел)» и «монстр пара 2» — только Сокольники, кат. 1.
    // Продуктовый смысл неизвестен → на сайт не выводим.
    monster: { status: 'o', sokolniki: { a: 4600, b: 5700 } },

    included: {
      status: 'o',
      claim: {
        ru: 'Что именно входит в стоимость занятия — вход, доска, шлем, защита — зависит от услуги и парка. Спросите при записи: администратор скажет точно.',
        en: 'What exactly a class includes — entry, board, helmet, pads — depends on the service and the park. Ask when booking: the administrator will tell you precisely.'
      }
    }
  };

  /* ---------- 3. НАПРАВЛЕНИЯ ---------- */
  const DISCIPLINES = [
    {
      slug: 'skate',
      name: { ru: 'Скейтбординг', en: 'Skateboarding' },
      status: 'c',
      formats: { group: 'c', personal: 'c', pair: 'w', freeride: 'c' }
    },
    {
      slug: 'inline',
      name: { ru: 'Ролики', en: 'Inline skating' },
      status: 'c',
      // Персональные подтверждались старым прайсом; группы/пары — нет.
      formats: { group: 'o', personal: 'w', pair: 'o', freeride: 'o' },
      note: {
        ru: 'Персональные занятия на роликах есть во всех трёх парках. Группы, занятия вдвоём и свободное катание на роликах набирают не везде — позвоните, скажем, где сейчас идёт набор.',
        en: 'One-to-one inline lessons run in all three parks. Groups, pair lessons and inline free-ride do not run everywhere — call and we will say where the next intake is.'
      }
    }
  ];

  /* ---------- 4. ФОРМАТЫ (продуктовая иерархия) ----------
     Порядок жёстко задан бизнесом: секция → персональные → свободное катание. */
  const FORMATS = [
    {
      slug: 'sekciya',
      rank: 1,
      badge: { ru: 'Самый доступный формат', en: 'Most affordable format' },
      name: { ru: 'Секция', en: 'The section (group classes)' },
      nameAcc: { ru: 'секцию', en: 'the section' },
      sub: { ru: 'Групповые занятия по расписанию', en: 'Scheduled group classes' },
      priceFrom: 2200,
      priceNote: { ru: 'за занятие · или оплата за месяц', en: 'per class · or paid monthly' },
      forWhom: {
        ru: 'Детям, которым нужен регулярный ритм, компания и понятный прогресс.',
        en: 'For kids who need a regular rhythm, a peer group and visible progress.'
      },
      why: [
        // Отношение считаем по занятию, а не по часу: длительность занятия
        // в секции клуб не назвал. 4 100 / 2 300 = 1,8; 5 800 / 2 200 = 2,6.
        { ru: '2 200 ₽ за занятие против 4 100 ₽ за персональный час', en: '2,200 ₽ a class against 4,100 ₽ for a one-to-one hour', status: 'w' },
        { ru: 'Оплата за месяц: платите за то количество тренировок в неделю, которое реально ходите', en: 'Paid monthly: you pay for the number of classes a week you actually attend', status: 'w' },
        { ru: 'Один тренер и одна группа — ребёнок не заново знакомится каждый раз', en: 'The same coach and the same group every week', status: 'w' },
        { ru: 'Цена не зависит от категории тренера', en: 'The price does not depend on the coach’s category', status: 'w' }
      ]
    },
    {
      slug: 'personal',
      rank: 2,
      badge: { ru: 'Быстрее всего результат', en: 'Fastest progress' },
      name: { ru: 'Персональная тренировка', en: 'One-to-one lesson' },
      nameAcc: { ru: 'персональную тренировку', en: 'a one-to-one lesson' },
      sub: { ru: 'Один на один с тренером', en: 'One rider, one coach' },
      priceFrom: 1300,
      priceNote: { ru: 'от — пробное занятие', en: 'from — trial lesson' },
      forWhom: {
        ru: 'Тем, кто боится, торопится или разбирает конкретный трюк.',
        en: 'For anyone who is scared, in a hurry, or working on one specific trick.'
      },
      why: [
        { ru: 'Тренер занят только вами весь урок', en: 'The coach works only with you for the whole lesson', status: 'c' },
        { ru: 'Есть пробное занятие — можно попробовать до решения', en: 'There is a trial lesson — you can try before deciding', status: 'w' },
        { ru: 'Удобно, когда график не совпадает с расписанием секции', en: 'Works when your schedule does not match the section timetable', status: 'c' },
        { ru: 'Есть формат вдвоём — дешевле двух персональных', en: 'A two-rider format is available — cheaper than two separate lessons', status: 'w' },
        { ru: 'Можно платить с депозита и получать кэшбэк', en: 'Can be paid from a deposit with cashback', status: 'w' }
      ]
    },
    {
      slug: 'free-ride',
      rank: 3,
      badge: { ru: 'Для тех, кто уже катается', en: 'For riders who already skate' },
      name: { ru: 'Свободное катание', en: 'Free-ride' },
      nameAcc: { ru: 'свободное катание', en: 'free-ride' },
      sub: { ru: 'Вход в парк без тренера', en: 'Park entry without a coach' },
      priceFrom: 1000,
      priceNote: { ru: 'от — вход', en: 'from — entry' },
      forWhom: {
        ru: 'Тем, кто уже уверенно стоит на доске и хочет просто катать.',
        en: 'For riders who are already confident and just want to skate.'
      },
      why: [
        { ru: 'В Сокольниках открыто почти всегда — места хватает всем', en: 'In Sokolniki it is open almost any time — there is room for everyone', status: 'w' },
        { ru: 'В Химках и на Дубровке зависит от занятий и загрузки — позвоните', en: 'In Khimki and Dubrovka it depends on classes and traffic — call first', status: 'w' },
        { ru: 'Защиту и доску можно взять в аренду', en: 'Pads and a board can be rented', status: 'w' },
        { ru: 'Можно платить с депозита и получать кэшбэк', en: 'Can be paid from a deposit with cashback', status: 'o' }
      ]
    }
  ];

  /* ---------- 5. БЕЗОПАСНОСТЬ ----------
     Продаём не словом «безопасно», а перечнем того, что реально сделано.
     Каждый пункт имеет статус: непроверенное не публикуется как факт. */
  const SAFETY = [
    {
      slug: 'gear',
      title: { ru: 'Защита обязательна, а не «желательна»', en: 'Gear is mandatory, not “recommended”' },
      body: {
        ru: 'Правила клуба формулируют это жёстко. Детям до 16 лет — шлем во всех зонах катания. Всем без исключения, независимо от возраста и опыта, — полный комплект в вёрт-рампе: шлем, наколенники, налокотники. На любой тренировке, групповой или персональной, — полный комплект. Отказ надеть защиту означает недопуск: инструктор обязан удалить нарушителя из зоны катания.',
        en: 'The club rules put it bluntly. Under 16 — helmet in every riding zone. Everyone, regardless of age or experience — full set on the vert ramp: helmet, knee and elbow pads. Full set at any lesson, group or one-to-one. Refusing the gear means no access: the instructor must remove the person from the riding zone.'
      },
      status: 'c'
    },
    {
      slug: 'clothing',
      title: { ru: 'Одежда и обувь', en: 'Clothes and shoes' },
      body: {
        ru: 'Спортивная одежда без свисающих элементов и шнуров. Обувь строго закрытая, на плоской нескользящей подошве. Это не про внешний вид: шнур, попавший в колесо, и подошва, которая скользит по деке, — две частые причины падения.',
        en: 'Sportswear with no hanging straps or laces. Strictly closed shoes with a flat non-slip sole. This is not about looks: a lace in a wheel and a sole that slides off the deck are two common causes of a fall.'
      },
      status: 'c'
    },
    {
      slug: 'traffic',
      title: { ru: 'Движение по очереди', en: 'One rider at a time' },
      body: {
        ru: 'Заход на фигуру — строго поочерёдно. Перед разгоном нужно убедиться, что траектория свободна. Пересекать чужую траекторию и «подрезать» запрещено. Столкновение двух катающихся — травма сразу у обоих, поэтому это правило жёстче остальных.',
        en: 'Riders take features one at a time. Before pushing off you must check that your line is clear. Crossing someone else’s line or cutting them off is forbidden. A collision injures both riders at once, which is why this rule is the strictest.'
      },
      status: 'c'
    },
    {
      slug: 'level',
      title: { ru: 'Только та фигура, к которой готов', en: 'Only the feature you are ready for' },
      body: {
        ru: 'Выполнять трюки, не соответствующие реальному уровню подготовки, без команды и контроля инструктора запрещено правилами. Вёрт-рампа — самая требовательная фигура сети, и заход на неё возможен только в полной защите.',
        en: 'Attempting tricks above your actual level without the instructor’s call and supervision is against the rules. The vert ramp is the most demanding feature in the network and requires full protective gear.'
      },
      status: 'c'
    },
    {
      slug: 'zone',
      title: { ru: 'Родители — вне зоны катания', en: 'Parents stay out of the riding zone' },
      body: {
        ru: 'Смотреть занятие можно — находиться на площадке нельзя. Сопровождающим, зрителям и родителям быть в зоне катания нельзя без отдельного разрешения тренера. Исключение — контесты и парковые мероприятия. Ответственность за ребёнка до начала и после окончания занятия, в раздевалках и коридорах, лежит на родителе.',
        en: 'Watching is fine — standing on the floor is not. Companions, spectators and parents may not enter the riding zone without the coach’s explicit permission. Contests and park events are the exception. Responsibility for the child before and after the lesson, in changing rooms and corridors, stays with the parent.'
      },
      status: 'c'
    },
    {
      slug: 'firstaid',
      title: { ru: 'Если что-то случилось', en: 'If something happens' },
      body: {
        ru: 'При травме — немедленно и громко сообщить любому инструктору. Он останавливает тренировочный процесс, оказывает первую помощь и вызывает скорую. Аптечка находится у администратора и выдаётся по первому требованию.',
        en: 'In case of injury — tell any instructor immediately and loudly. They stop the session, give first aid and call an ambulance. The first-aid kit is with the administrator and is handed over on request.'
      },
      status: 'c'
    },
    {
      slug: 'briefing',
      title: { ru: 'Инструктаж — это часть договора', en: 'The briefing is part of the contract' },
      body: {
        ru: 'Правила техники безопасности — отдельное приложение к договору публичной оферты. Перед первым выходом на площадку проводится первичный вводный инструктаж, а подписание информированного согласия подтверждает, что вы с правилами ознакомились. Это не три фразы у стойки.',
        en: 'The safety rules are a formal annex to the public offer agreement. A primary induction briefing is given before the first session, and signing the informed consent confirms you have read the rules. This is not three sentences at the counter.'
      },
      status: 'c'
    },
    {
      slug: 'risk',
      title: { ru: 'Чего клуб не обещает', en: 'What the club does not promise' },
      body: {
        ru: 'Скейтбординг и роллер-спорт — экстремальные виды с повышенным риском травм, и клуб прямо это заявляет. Ушибы, ссадины, растяжения и переломы возможны. Правила и защита снижают тяжесть и частоту падений, но не отменяют их. Обязательное условие допуска — отсутствие медицинских противопоказаний.',
        en: 'Skateboarding and roller sports are extreme activities with a raised risk of injury, and the club states this openly. Bruises, sprains and fractures are possible. Rules and gear reduce how often and how hard people fall, but do not eliminate it. Access requires the absence of medical contraindications.'
      },
      status: 'c'
    },
    {
      slug: 'video',
      title: { ru: 'Видеонаблюдение', en: 'CCTV' },
      body: {
        ru: 'На территории парков ведётся видеонаблюдение — для безопасности и сохранности имущества. Об этом посетитель информируется в согласии.',
        en: 'The parks are under CCTV for safety and property protection. Visitors are informed of this in the consent form.'
      },
      status: 'c'
    },
    {
      slug: 'ask',
      title: { ru: 'Если что-то беспокоит — спросите до записи', en: 'If something worries you, ask before booking' },
      body: {
        ru: 'Позвоните в парк и спросите что угодно: сколько детей в группе, кто ведёт занятие, что делать, если ребёнок испугался, где стоит аптечка. Администратор отвечает на это каждый день — это нормальные вопросы, а не неудобные.',
        en: 'Call the park and ask anything: how many kids are in the group, who runs the session, what to do if your child gets scared, where the first-aid kit is. The administrator answers these every day — they are normal questions, not awkward ones.'
      },
      status: 'c'
    },
    {
      slug: 'insurance',
      title: { ru: 'Страхование от несчастного случая', en: 'Accident insurance' },
      body: {
        ru: 'Мы не продаём страховку и не заявляем, что ученик застрахован: это было бы обещанием, за которое мы не отвечаем. Если у вас есть полис от несчастного случая на ребёнка, возьмите его данные с собой — администратор внесёт их в карточку.',
        en: 'We do not sell insurance and do not claim that students are insured — that would be a promise we cannot keep. If you have an accident policy for your child, bring the details: the administrator will add them to the file.'
      },
      status: 'o'
    }
  ];

  /* ---------- 6. АУДИТОРИИ (для варианта C и для подбора) ---------- */
  const AUDIENCES = [
    {
      slug: 'kid',
      order: 1,
      who: { ru: 'Ребёнку 7–12 лет', en: 'A child aged 7–12' },
      whoStatus: 'o',
      pain: {
        ru: 'Одна группа, один тренер, одно и то же время каждую неделю.',
        en: 'One group, one coach, the same time every week.'
      },
      answer: {
        ru: 'Секция: одна группа, один тренер, фиксированное время в неделю. Снаряжение на месте — ничего покупать заранее не нужно.',
        en: 'The section: one group, one coach, a fixed weekly slot. Gear is on site — nothing to buy in advance.'
      },
      recommend: 'sekciya',
      objection: {
        q: { ru: 'А если ему не понравится?', en: 'What if they don’t like it?' },
        a: {
          ru: 'Начните с пробного персонального занятия — от 1 300 ₽. Это дешевле, чем купить доску с защитой и обнаружить, что не пошло. Пробных групповых на постоянной основе нет: набор в новые потоки секции открывается периодически.',
          en: 'Start with a trial one-to-one lesson from 1,300 ₽. Cheaper than buying a board and pads and finding out it wasn’t for them. There is no permanent trial group class: intake into new section streams opens periodically.'
        }
      }
    },
    {
      slug: 'teen',
      order: 2,
      who: { ru: 'Подростку 13–17 лет', en: 'A teenager aged 13–17' },
      whoStatus: 'o',
      pain: {
        ru: 'Вам 13–17, и скучно там, где вас держат за ребёнка.',
        en: 'You are 13–17, and anywhere that treats you like a small kid is boring.'
      },
      answer: {
        ru: 'Свои люди, реальные фигуры и понятная следующая задача: не «программа», а конкретный трюк, который выйдет в этом месяце.',
        en: 'Their own crowd, real features and a clear next goal: not a “programme” but one specific trick to land this month.'
      },
      recommend: 'sekciya',
      objection: {
        q: { ru: 'А если он уже умеет?', en: 'What if they already skate?' },
        a: {
          ru: 'Тогда персональная тренировка под конкретный трюк или свободное катание в Сокольниках, где есть вёрт-рампа.',
          en: 'Then a one-to-one lesson on a specific trick, or free-ride in Sokolniki where the vert ramp is.'
        }
      }
    },
    {
      slug: 'adult',
      order: 3,
      who: { ru: 'Взрослому с нуля', en: 'An adult starting from zero' },
      whoStatus: 'o',
      pain: {
        ru: 'Главный барьер — не возраст, а мысль «я буду единственным взрослым среди детей».',
        en: 'The real barrier isn’t age — it’s “I’ll be the only adult among children”.'
      },
      answer: {
        ru: 'Начать проще один на один: никто не смотрит, темп ваш. Есть ли взрослые группы в конкретном парке — уточняет администратор.',
        en: 'One-to-one is the easier start: nobody watching, your own pace. Adult group availability per park is confirmed by the administrator.'
      },
      recommend: 'personal',
      objection: {
        q: { ru: 'Не поздно ли в 35?', en: 'Is 35 too late?' },
        a: {
          ru: 'Нет. Но честно: взрослые падают тяжелее детей, поэтому защита и порядок освоения фигур для вас важнее, а не менее важны.',
          en: 'No. But honestly: adults fall harder than children, so pads and a proper learning order matter more for you, not less.'
        }
      }
    },
    {
      slug: 'rider',
      order: 4,
      who: { ru: 'Тем, кто уже катается', en: 'Riders who already skate' },
      whoStatus: 'c',
      pain: {
        ru: 'Вам нужно место, а не методика.',
        en: 'You need a place, not a curriculum.'
      },
      answer: {
        ru: 'Сокольники: свободное катание почти всегда открыто, есть вёрт-рампа. Химки и Дубровка — по загрузке, лучше позвонить.',
        en: 'Sokolniki: free-ride open almost any time, vert ramp on site. Khimki and Dubrovka depend on traffic — better to call.'
      },
      recommend: 'free-ride',
      objection: {
        q: { ru: 'Пустят ли на верт?', en: 'Will I be allowed on the vert?' },
        a: {
          ru: 'По допуску. Первый раз — с тренером, дальше самостоятельно.',
          en: 'With clearance. First time with a coach, after that on your own.'
        }
      }
    }
  ];

  /* ---------- 7. ПОДАРОЧНЫЙ СЕРТИФИКАТ ---------- */
  const GIFT = {
    status: 'w',
    channel: 'offline',
    products: [
      {
        slug: 'skate-personal',
        name: { ru: 'Персональная тренировка', en: 'One-to-one lesson' },
        kind: { ru: 'Скейтборд', en: 'Skateboard' },
        durationMin: 60,
        durationStatus: 'o',
        priceFrom: 4100,
        priceStatus: 'w'
      },
      {
        slug: 'inline-personal',
        name: { ru: 'Персональная тренировка', en: 'One-to-one lesson' },
        kind: { ru: 'Ролики', en: 'Inline skates' },
        durationMin: 60,
        durationStatus: 'o',
        priceFrom: 4100,
        priceStatus: 'o'
      }
    ],
    termMonths: 12,
    termStatus: 'w',
    maxAmount: 20000,          // жёсткий потолок номинала, решение Red Deck 17.08.2026
    maxAmountStatus: 'c',
    legalNote: {
      ru: 'Сертификат — это предоплата за услугу, а не товар. Если планы изменились, вы вправе отказаться и вернуть деньги: обратитесь в парк, где оформляли. Истёкший срок сам по себе этого права не отменяет.',
      en: 'A certificate is a prepayment for a service, not a product. If plans change, you may cancel and get your money back: contact the park where it was issued. An expired term does not cancel that right by itself.'
    }
  };

  /* ---------- 8. FAQ ---------- */
  const FAQ = [
    {
      q: { ru: 'Сколько стоит начать?', en: 'How much does it cost to start?' },
      a: {
        ru: 'Пробное персональное занятие — от 1 300 ₽. Разовое занятие в секции — 2 200 ₽ в Сокольниках и Химках, 2 300 ₽ на Дубровке. Дальше секция оплачивается за месяц.',
        en: 'A trial one-to-one lesson starts at 1,300 ₽. A single section class is 2,200 ₽ in Sokolniki and Khimki, 2,300 ₽ in Dubrovka. After that the section is paid monthly.'
      },
      status: 'w'
    },
    {
      q: { ru: 'Есть ли пробное занятие в секции?', en: 'Is there a trial group class?' },
      a: {
        ru: 'Постоянного пробного группового занятия нет. Набор в новые потоки секции открывается периодически — примерно раз в месяц отдельным набором пробных групп. Если хотите попробовать прямо сейчас, начните с пробного персонального занятия: от 1 300 ₽.',
        en: 'There is no permanent trial group class. Intake into new section streams opens periodically — roughly once a month, as a separate set of trial groups. If you want to try right now, start with a trial one-to-one lesson from 1,300 ₽.'
      },
      status: 'w'
    },
    {
      q: { ru: 'Нужно ли покупать скейтборд и защиту?', en: 'Do we need to buy a board and pads?' },
      a: {
        ru: 'Нет, на первое время не нужно. Аренда: один элемент защиты 350–400 ₽, полный комплект 650–900 ₽, скейтборд 650–900 ₽. Входит ли снаряжение в стоимость занятия — уточняется по каждой услуге.',
        en: 'Not at first. Rental: one pad 350–400 ₽, full set 650–900 ₽, board 650–900 ₽. Whether gear is included in a lesson is being confirmed per service.'
      },
      status: 'w'
    },
    {
      q: { ru: 'С какого возраста берёте?', en: 'What is the minimum age?' },
      /* Было «зависит от услуги» со статусом 'o' — то есть отказ назвать
         цифру на самом частом вопросе родителя. При этом весь сайт уже
         работает с границей 5 лет: гид на главной и блок «кому что
         подходит» строятся на «ребёнок 5–12». Отвечаем той же цифрой,
         которой сайт пользуется, а неизвестное сужаем до нижней границы
         по конкретной группе. */
      /* Цифры с формы записи на действующем сайте клуба: группы для детей
         7+, взрослые группы 14+, персонально берут и дошкольников.
         Нижнюю границу для персональных клуб указывает как «2+»; она
         настолько низкая, что публиковать её без подтверждения нельзя —
         поэтому здесь «дошкольники», а вопрос ушёл в список к клубу. */
      a: {
        ru: 'В детскую группу берут с 7 лет, во взрослую — с 14. Персонально занимаются и с дошкольниками: нижнюю границу тренер назовёт по ребёнку, а не по правилу.',
        en: 'Children join a group from 7, adults from 14. One-to-one lessons run with preschoolers too: the coach sets the lower limit by the child, not by a rule.'
      },
      status: 'w'
    },
    {
      q: { ru: 'Есть ли абонементы?', en: 'Do you sell season passes?' },
      a: {
        ru: 'Нет, и не планируется. Секция оплачивается за месяц: стоимость зависит от того, сколько раз в неделю вы ходите. Свободное катание и персональные занятия можно оплачивать с депозита — чем больше сумма депозита, тем больше кэшбэк. Конкретные суммы уточняются у администратора парка.',
        en: 'No, and we do not plan to. The section is paid monthly: the price depends on how many times a week you attend. Free-ride and one-to-one lessons can be paid from a deposit — the larger the top-up, the larger the cashback. Exact figures are confirmed by the park administrator.'
      },
      status: 'o'
    },
    {
      q: { ru: 'Что если ребёнок пропустит занятие в секции?', en: 'What if my child misses a class?' },
      a: {
        ru: 'Месяц оплачивается целиком по выбранному количеству тренировок в неделю. Как переносят и отрабатывают пропуски — зависит от парка и группы. Спросите при записи: администратор скажет сразу.',
        en: 'The month is paid in full for the chosen number of classes per week. How missed classes are made up depends on the park and the group. Ask when booking: the administrator will tell you right away.'
      },
      status: 'o'
    },
    {
      q: { ru: 'Можно прийти покататься без тренера?', en: 'Can I just come and skate?' },
      a: {
        ru: 'В Сокольниках — почти всегда: места хватает и занятиям, и свободному катанию. В Химках и на Дубровке площадки компактные, свободное катание зависит от расписания занятий — позвоните перед выездом.',
        en: 'In Sokolniki — almost any time: there is room for both classes and free-ride. Khimki and Dubrovka are compact, so free-ride depends on the class schedule — call before you come.'
      },
      status: 'w'
    },
    {
      q: { ru: 'Ролики — такие же форматы, как скейт?', en: 'Are inline formats the same as skateboarding?' },
      a: {
        ru: 'Не обязательно. Персональные занятия на роликах есть. Про группы, занятие вдвоём и свободное катание на роликах в конкретном парке скажет администратор.',
        en: 'Not necessarily. One-to-one inline lessons exist. About groups, pair lessons and inline free-ride in a given park the administrator will tell you.'
      },
      status: 'w'
    },
    {
      q: { ru: 'Ребёнок боится. Что делать?', en: 'My child is scared. What now?' },
      a: {
        ru: 'Начните с персонального занятия: тренер занят только им, никто не смотрит и не торопит. Дальше можно перейти в секцию.',
        en: 'Start one-to-one: the coach works only with them, nobody is watching or rushing. Move to the section afterwards.'
      },
      status: 'c'
    },
    {
      q: { ru: 'Что такое вёрт-рампа и пустят ли на неё?', en: 'What is a vert ramp and who is allowed on it?' },
      a: {
        ru: 'Вертикальная рампа — фигура с вертикальной верхней частью, для Москвы редкая. Она есть в Сокольниках. Заезд — только по допуску тренера, в полной защите. Новичков на неё не выпускают.',
        en: 'A vert ramp has a vertical top section and is rare in Moscow. Sokolniki has one. Access requires a coach’s clearance and full pads. Beginners are not allowed on it.'
      },
      status: 'w'
    }
  ];

  /* ---------- 9. ДОКАЗАТЕЛЬСТВО ---------- */
  const PROOF = {
    status: 'o',
    body: {
      ru: 'В 2024 году София Тишаева выиграла чемпионат России по скейтбордингу в дисциплине «вертикальная рампа». Результат подтверждён Федерацией скейтбординга России.',
      en: 'In 2024 Sofia Tishaeva won the Russian skateboarding championship in the vert ramp discipline. The result is confirmed by the Skateboarding Federation of Russia.'
    },
    caveat: {
      ru: 'Связь спортсменки с Red Deck и право клуба использовать её имя и изображение не подтверждены. До подтверждения этот блок нельзя публиковать.',
      en: 'Her connection to Red Deck and the club’s right to use her name and image are not confirmed. This block must not be published until they are.'
    },
    sourceUrl: 'https://t.me/s/fedskate?before=732'
  };

  /* ---------- 9б. АКАДЕМИЯ: ЦИФРЫ, ТРЕНЕРЫ, ОТЗЫВЫ ----------
     Источник всего блока — действующий сайт клуба reddeck.ru, снят
     19.08.2026. Это собственные публичные заявления Red Deck о себе
     и о своих сотрудниках, поэтому статус 'w', а не 'o': выдумывать
     тут нечего, но письменного подтверждения от клуба ещё нет.
     Что проверять при сдаче — перечислено в ЧТО-ЗАПРОСИТЬ-У-RED-DECK.md. */
  const ACADEMY = {
    figures: [
      {
        // «2700+ довольных учеников» и «студентов 2700+» — обе формулировки
        // с главной старого сайта.
        value: '2700+',
        label: { ru: 'учеников за всё время', en: 'students all-time' },
        status: 'w'
      },
      {
        /* Старый сайт в 2025 году писал «тренируем 12 лет» — это отсчёт
           с 2013. Публикуем год, а не срок: «12 лет» устареет через
           четыре месяца и превратится в ложь молча, год — нет.
           Совпадает со стажем главного тренера: преподаёт с 2013. */
        value: '2013',
        label: { ru: 'учим с этого года', en: 'teaching since' },
        status: 'w'
      },
      {
        value: '3',
        label: { ru: 'крытых парка', en: 'indoor parks' },
        status: 'c'
      }
    ],

    /* Рейтинг на Яндекс.Картах. Единственное на сайте социальное
       доказательство, которое читатель может проверить, не поверив
       нам на слово: ссылка ведёт в чужую систему, где отзывы не наши. */
    rating: {
      value: '4,9',
      max: '5',
      status: 'w',
      places: [
        { park: 'mosaic', count: 397, url: 'https://yandex.ru/maps/-/CDdXYT~9' },
        { park: 'khimki', count: 44, url: 'https://yandex.ru/maps/-/CDdX4K9d' }
      ]
    },

    /* Результаты. Вёрт-рампа — главный герой сайта, и здесь она
       наконец подтверждается результатом, а не размером. Имя ученика
       не называем: право на имя и изображение не подтверждено.
       Про тренера имя называем — это сотрудник, и клуб публикует
       его достижения сам. */
    results: [
      {
        status: 'w',
        title: { ru: 'Чемпионат России 2024, вёрт', en: 'Russian Championship 2024, vert' },
        body: {
          ru: 'Первое место занял ученик клуба. Это та самая дисциплина, ради которой в Сокольниках стоит вертикальная рампа.',
          en: 'First place went to a student of the club. That is the discipline the vert ramp in Sokolniki exists for.'
        }
      },
      {
        status: 'w',
        title: { ru: 'Чемпионат России 2025, вёрт', en: 'Russian Championship 2025, vert' },
        body: {
          ru: 'Бронза у Дениса Журавлёва — главного тренера клуба. В том же году он выиграл чемпионат Москвы в вёрте.',
          en: 'Bronze for Denis Zhuravlyov, the club’s head coach. The same year he won the Moscow championship in vert.'
        }
      }
    ],

    /* Тренеры. Портреты сняты с действующего сайта клуба (публичный
       CDN Тильды, 19.08.2026): это собственные публикации Red Deck
       о сотрудниках. Файлы в assets/coaches, 480×480. */
    coaches: [
      {
        photo: 'meshkov-anton',
        name: { ru: 'Антон Мешков', en: 'Anton Meshkov' },
        role: { ru: 'Сооснователь клуба, методист', en: 'Co-founder, head of methodology' },
        cat: null,
        body: {
          ru: 'Уже за первую тренировку называет, чего ученик реально добьётся и за какой срок.',
          en: 'After the first session he can tell what a student will actually achieve, and how soon.'
        },
        status: 'w'
      },
      {
        photo: 'zhuravlyov',
        name: { ru: 'Денис Журавлёв', en: 'Denis Zhuravlyov' },
        role: { ru: 'Главный тренер', en: 'Head coach' },
        cat: 1,
        body: {
          ru: 'Член сборной Москвы и сборной России. Чемпион Москвы 2025 в вёрте, бронза чемпионата России 2025. Катается с 2010 года, тренирует с 2018. Среди его учеников — призёры и победители соревнований регионального и федерального уровня.',
          en: 'Member of the Moscow and Russian national teams. Moscow champion 2025 in vert, bronze at the 2025 Russian Championship. Riding since 2010, coaching since 2018. His students include medallists at regional and national level.'
        },
        status: 'w'
      },
      {
        photo: 'meshkov-sergey',
        name: { ru: 'Сергей Мешков', en: 'Sergey Meshkov' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: null,
        body: {
          ru: 'Катается с 2006 года, тренирует с 2013. Тот, к кому стоит идти взрослому новичку.',
          en: 'Riding since 2006, coaching since 2013. The one to book if you are an adult starting from zero.'
        },
        status: 'w'
      },
      {
        photo: 'nevgus',
        name: { ru: 'Тимофей Невгус', en: 'Timofey Nevgus' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: 2,
        body: {
          ru: 'Призёр чемпионата Москвы 2024 и 2025, участник федеральных соревнований.',
          en: 'Medallist at the Moscow championship in 2024 and 2025, competes at national level.'
        },
        status: 'w'
      },
      {
        photo: 'drobakov',
        name: { ru: 'Сергей Дробаков', en: 'Sergey Drobakov' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: 2,
        body: {
          ru: 'Катается с 2014 года, обучает с 2017. Мягкая манера: с ним не страшно начинать.',
          en: 'Riding since 2014, teaching since 2017. A gentle manner: an easy person to start with.'
        },
        status: 'w'
      },
      {
        photo: 'ershov',
        name: { ru: 'Евгений Ершов', en: 'Evgeny Ershov' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: 2,
        body: {
          ru: 'Катается с 2006 года, обучает с 2019. Любимый трюк — fakie BS bigflip.',
          en: 'Riding since 2006, teaching since 2019. Favourite trick — fakie BS bigflip.'
        },
        status: 'w'
      },
      {
        photo: 'laletin',
        name: { ru: 'Игорь Лалетин', en: 'Igor Laletin' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: 3,
        body: {
          ru: 'За доской двадцать лет — с самого начала российского скейтбординга. Юрист по образованию, был диджеем группы Onyx.',
          en: 'Twenty years on a board — since the very beginning of Russian skateboarding. A lawyer by training, once a DJ for Onyx.'
        },
        status: 'w'
      },
      {
        photo: 'grushin',
        name: { ru: 'Константин Грушин', en: 'Konstantin Grushin' },
        role: { ru: 'Тренер', en: 'Coach' },
        cat: 3,
        body: {
          ru: 'Призёр по муай-тай и самбо. За четыре с половиной года дошёл до редких трюков вроде каспер-боди-вериала.',
          en: 'A medallist in muay thai and sambo. In four and a half years got to rare tricks like the casper body varial.'
        },
        status: 'w'
      }
    ],

    /* Отзывы с reddeck.ru. Взяты те, где сказано что-то проверяемое:
       про раздевалку с феном, про обзорную площадку, про возможность
       остаться кататься после тренировки. «Рекомендую!» без содержания
       не переносим — оно ничего не добавляет и звучит как накрутка. */
    reviews: [
      {
        status: 'w',
        name: { ru: 'Надежда Шевелева', en: 'Nadezhda Sheveleva' },
        body: {
          ru: 'Просторное помещение, несколько разных рамп, есть обзорная площадка с возможностью наблюдать за тренировками. Раздевалка, фен.',
          en: 'A roomy space, several different ramps, and a viewing area where you can watch the sessions. Changing room, hairdryer.'
        }
      },
      {
        status: 'w',
        name: { ru: 'Пользователь Яндекс.Карт', en: 'A Yandex Maps user' },
        body: {
          ru: 'Очень нравится, что после тренировки можно безлимитно остаться покататься.',
          en: 'I really like that after a session you can stay and skate as long as you want.'
        }
      },
      {
        status: 'w',
        name: { ru: 'Светлана Серёгина', en: 'Svetlana Seryogina' },
        body: {
          ru: 'Сын, 8 лет, занимается увлечённо. Сергей Дробаков уделяет много времени технике, и это сразу видно по катанию.',
          en: 'My son, 8, is hooked. Sergey Drobakov spends a lot of time on technique, and it shows in the riding straight away.'
        }
      },
      {
        status: 'w',
        name: { ru: 'Кирилл Игоревич', en: 'Kirill Igorevich' },
        body: {
          ru: 'Сам не катаю, но сыну очень понравилось. Видно, что тренеры этим живут.',
          en: 'I do not skate myself, but my son loved it. You can see the coaches live for this.'
        }
      }
    ]
  };

  /* Каналы связи с действующего сайта клуба. До этой правки
     единственным способом связаться был звонок до 22:00 — человеку,
     который созрел вечером, оставалось только закрыть вкладку. */
  const SOCIAL = {
    status: 'w',
    whatsapp: { khimki: '+79165379816', mosaic: '+79259084321' },
    links: [
      { id: 'tg', name: 'Telegram', url: 'https://t.me/reddeckskatepark' },
      { id: 'vk', name: 'ВКонтакте', url: 'https://vk.com/red_deck_sb' },
      { id: 'yt', name: 'YouTube', url: 'https://www.youtube.com/@RedDeckSkatepark' }
    ]
  };

  /* ---------- 10. НАВИГАЦИЯ И СТРАНИЦЫ ---------- */
  // primary: показывается в шапке на desktop. nav: показывается в мобильном меню.
  const PAGES = [
    { id: 'home',      path: '/',             nav: false, primary: false, en: true,  title: { ru: 'Главная', en: 'Home' } },
    { id: 'sekciya',   path: '/sekciya',      nav: true,  primary: true,  en: true,  title: { ru: 'Секция', en: 'Section' } },
    { id: 'personal',  path: '/personal',     nav: true,  primary: true,  en: true,  title: { ru: 'Персональные', en: 'One-to-one' } },
    { id: 'freeride',  path: '/free-ride',    nav: true,  primary: true,  en: true,  title: { ru: 'Катание', en: 'Free-ride' } },
    { id: 'parks',     path: '/parks',        nav: true,  primary: true,  en: true,  title: { ru: 'Парки', en: 'Parks' } },
    { id: 'park',      path: '/parks/:slug',  nav: false, primary: false, en: true,  title: { ru: 'Парк', en: 'Park' } },
    { id: 'prices',    path: '/prices',       nav: true,  primary: true,  en: true,  title: { ru: 'Цены', en: 'Prices' } },
    { id: 'safety',    path: '/safety',       nav: true,  primary: false, en: true,  title: { ru: 'Безопасность', en: 'Safety' } },
    { id: 'gift',      path: '/gift',         nav: true,  primary: false, en: true,  title: { ru: 'Сертификаты', en: 'Gift certificates' } },
    { id: 'coaches',   path: '/coaches',      nav: true,  primary: false, en: false, title: { ru: 'Тренеры', en: 'Coaches' } },
    { id: 'faq',       path: '/faq',          nav: true,  primary: false, en: false, title: { ru: 'Вопросы', en: 'FAQ' } },
    { id: 'booking',   path: '/booking',      nav: false, primary: false, en: true,  title: { ru: 'Запись', en: 'Booking' } },
    { id: 'contacts',  path: '/contacts',     nav: true,  primary: false, en: true,  title: { ru: 'Контакты', en: 'Contacts' } },
    { id: 'legal',     path: '/legal',        nav: false, primary: false, en: false, title: { ru: 'Документы', en: 'Legal' } },
    /* Политика опубликована на действующем сайте — текст перенесён
       дословно (снята только битая ссылка-заглушка конструктора).
       Своя страница вместо ссылки на старый домен: при переезде старый
       адрес умрёт, а обязанность публиковать политику останется. */
    { id: 'privacy',   path: '/privacy',      nav: false, primary: false, en: false, title: { ru: 'Политика конфиденциальности', en: 'Privacy policy' } }
  ];

  /* ---------- 11. СЛОВАРЬ UI ---------- */
  const UI = {
    ru: {
      brandTag: 'Скейт-парки и секция',
      langLabel: 'Язык',
      menu: 'Меню', close: 'Закрыть', back: 'Назад', next: 'Далее', reset: 'Начать заново',
      book: 'Перейти к записи', bookShort: 'Записаться', call: 'Позвонить', route: 'Построить маршрут',
      chooseFormat: 'Выбрать формат', comparePark: 'Сравнить парки', allPrices: 'Все цены и условия',
      from: 'от', rub: '₽', perClass: 'за занятие', perEntry: 'вход',
      park: 'Парк', direction: 'Направление', format: 'Формат', result: 'Ваш выбор',
      askAdmin: 'Уточняет администратор', tbd: 'Уточняется', notPublished: 'Не публикуется до подтверждения',
      included: 'Что входит', address: 'Адрес', phone: 'Телефон', hours: 'Часы', howToFind: 'Как найти вход',
      zones: 'Зоны и фигуры', freeride: 'Свободное катание', rental: 'Аренда', level: 'Уровень',
      factLayer: 'Статусы фактов', factOn: 'Показать', factOff: 'Скрыть',
      factC: 'Подтверждён', factW: 'Рабочая версия', factO: 'Не подтверждён',
      ruOnly: 'Эта страница пока только на русском.',
      openRu: 'Открыть русскую версию',
      priceDisclaimer: 'Цены действуют на момент публикации. Итоговую стоимость администратор подтверждает при записи.',
      legalDisclaimer: 'Проект документа. Требует проверки юристом и реквизитов исполнителя.',
      skip: 'К основному содержанию',
      nextStep: 'Следующий шаг',
      whyThis: 'Почему этот формат',
      forWhom: 'Кому подходит',
      trial: 'Пробное',
      minutes: 'мин', hours_: 'ч',
      category: 'Категория тренера',
      catNote: 'Какой тренер свободен на ваше время и сколько это стоит — скажет администратор парка.',
      groupNote: 'Цена занятия в секции одинакова для всех категорий тренеров.',
      monthlyNote: 'Абонементов нет. Секция оплачивается за месяц — стоимость зависит от количества тренировок в неделю.',
      depositNote: 'Свободное катание и персональные занятия можно оплачивать с депозита: чем больше сумма, тем больше кэшбэк.',
      intakeNote: 'Постоянного пробного группового занятия нет. Набор в новые потоки открывается периодически.',
      offerLive: 'Договор-оферта Red Deck действует и подписан. Инструктаж по технике безопасности — это его отдельный подробный раздел.',
      soonPhoto: 'Фотосъёмка этого парка запланирована',
      noPhoto: 'Фото парка готовится',
      questions: 'Открытые вопросы',
      certificate: 'Подарочный сертификат'
    },
    en: {
      brandTag: 'Indoor parks & group classes',
      langLabel: 'Language',
      menu: 'Menu', close: 'Close', back: 'Back', next: 'Next', reset: 'Start over',
      book: 'Go to booking', bookShort: 'Book', call: 'Call', route: 'Get directions',
      chooseFormat: 'Choose a format', comparePark: 'Compare parks', allPrices: 'All prices & terms',
      from: 'from', rub: '₽', perClass: 'per class', perEntry: 'entry',
      park: 'Park', direction: 'Discipline', format: 'Format', result: 'Your choice',
      askAdmin: 'Confirmed by the administrator', tbd: 'To be confirmed', notPublished: 'Not published until confirmed',
      included: 'What is included', address: 'Address', phone: 'Phone', hours: 'Hours', howToFind: 'Finding the entrance',
      zones: 'Zones and features', freeride: 'Free-ride', rental: 'Rental', level: 'Level',
      factLayer: 'Fact status', factOn: 'Show', factOff: 'Hide',
      factC: 'Confirmed', factW: 'Working version', factO: 'Not confirmed',
      ruOnly: 'This page is currently available in Russian only.',
      openRu: 'Open the Russian version',
      priceDisclaimer: 'Prices are current as published. The administrator confirms the final price when you book.',
      legalDisclaimer: 'Draft document. Requires review by a lawyer and the provider’s legal details.',
      skip: 'Skip to main content',
      nextStep: 'Next step',
      whyThis: 'Why this format',
      forWhom: 'Who it suits',
      trial: 'Trial',
      minutes: 'min', hours_: 'h',
      category: 'Coach category',
      catNote: 'Which coach is free at your time and what it costs is answered by the park administrator.',
      groupNote: 'The section price is the same for every coach category.',
      monthlyNote: 'There are no season passes. The section is paid monthly — the price depends on classes per week.',
      depositNote: 'Free-ride and one-to-one lessons can be paid from a deposit: the larger the top-up, the larger the cashback.',
      intakeNote: 'There is no permanent trial group class. Intake into new streams opens periodically.',
      offerLive: 'The Red Deck public offer agreement is in force and signed. The safety briefing is a separate detailed section of it.',
      soonPhoto: 'A photo shoot for this park is planned',
      noPhoto: 'Park photography in progress',
      questions: 'Open questions',
      certificate: 'Gift certificate'
    }
  };

  /* ---------- 12. УРОВЕНЬ КАТАНИЯ ПО ПАРКАМ ----------
     Нужен для блока «три парка под разный уровень» на главной.
     Формулировки опираются только на то, что подтверждено:
     Сокольники — единственный с вёрт-рампой и с запасом места;
     Химки и Дубровка — компактные. Ничего сверх этого не заявляем. */
  const PARK_LEVEL = {
    sokolniki: {
      tag: { ru: 'От первых шагов до верта', en: 'From first steps to vert' },
      tagStatus: 'w',
      body: {
        ru: 'Самый большой парк сети и единственный с вёрт-рампой. Места хватает, чтобы одновременно шло занятие и катались все остальные, поэтому свободное катание открыто почти всегда.',
        en: 'The largest park in the network and the only one with a vert ramp. There is enough room to run a class and let everyone else ride at the same time, so free-ride is open almost any time.'
      }
    },
    khimki: {
      tag: { ru: 'Компактный · секция и персональные', en: 'Compact · section and one-to-one' },
      tagStatus: 'w',
      body: {
        ru: 'Компактная площадка на втором этаже торгового центра. Подходит для регулярных занятий рядом с домом. Свободное катание зависит от расписания — позвоните перед выездом.',
        en: 'A compact venue on the second floor of a mall. Good for regular classes close to home. Free-ride depends on the timetable — call before you come.'
      }
    },
    mosaic: {
      tag: { ru: 'Компактный · секция и персональные', en: 'Compact · section and one-to-one' },
      tagStatus: 'w',
      body: {
        ru: 'Компактная площадка в ТРЦ на юго-востоке Москвы. Тот же формат занятий, что и в Химках. Свободное катание — по загрузке.',
        en: 'A compact venue in a mall in south-east Moscow. The same class formats as in Khimki. Free-ride depends on how busy it is.'
      }
    }
  };

  /* ---------- 13. РАЗВИЛКА НАПРАВЛЕНИЙ ----------
     Мягкая: рассказываем про оба, но ничего не обещаем сверх подтверждённого.
     Скейт подтверждён во всех форматах; по роликам подтверждены только
     персональные — так и пишем.                                        */
  const DIR_CARDS = [
    {
      slug: 'skate',
      photo: 'sokolniki-boards-4x5',
      name: { ru: 'Скейтборд', en: 'Skateboard' },
      lead: {
        ru: 'Секция, персональные занятия и свободное катание — во всех трёх парках.',
        en: 'Section, one-to-one lessons and free-ride — in all three parks.'
      },
      leadStatus: 'w',
      points: [
        { ru: 'Секция от 2 200 ₽ за занятие', en: 'Section from 2,200 ₽ a class', status: 'w' },
        { ru: 'Пробное персональное от 1 300 ₽', en: 'Trial one-to-one from 1,300 ₽', status: 'w' },
        { ru: 'Доска и защита в аренду на месте', en: 'Board and pads for rent on site', status: 'w' }
      ]
    },
    {
      slug: 'inline',
      /* Кадра с роликами в съёмке нет. Стеллаж со скейтбордами стоял
         здесь как иллюстрация к роликам — мелкий обман на сайте, весь
         аргумент которого «показываем только то, что есть». Пока кадра
         нет, карточка идёт без него. */
      photo: null,
      name: { ru: 'Ролики', en: 'Inline skates' },
      lead: {
        ru: 'Персональные занятия на роликах есть во всех трёх парках. Где сейчас набирают группу — скажет администратор.',
        en: 'One-to-one inline lessons run in all three parks. Where a group is being formed right now — the administrator will say.'
      },
      leadStatus: 'w',
      points: [
        /* Порядок — решение владельца 19.08.2026: подарок первым.
           Ролики — самый частый сертификатный сценарий. */
        { ru: 'Самый лёгкий подарок: сертификат на обучение — «встать и поехать» обычно получается с первого занятия', en: 'The easiest gift: a lesson certificate — most people are up and rolling within the first session', status: 'w' },
        { ru: 'Персональное занятие — по тому же прайсу, что и скейт', en: 'One-to-one lesson — on the same price list as skateboarding', status: 'w' },
        { ru: 'Группы на роликах есть не в каждом парке — спросите администратора', en: 'Inline groups do not run in every park — ask the administrator', status: 'w' }
      ]
    }
  ];

  /* ---------- 14. ВИДЕО-СЛОТЫ ----------
     Роликов ещё нет. Показываем честные плейсхолдеры, а не чужое видео. */
  const VIDEO = {
    status: 'o',
    title: {
      ru: 'Место под ваши видео: обращения тренеров и короткие ролики',
      en: 'Space for your video: coach intros and short clips'
    },
    lead: {
      ru: 'Соцсети в России достают до половины аудитории. Видео живёт на сайте и работает без них — без автозвука, с обложкой.',
      en: 'Social networks reach about half the audience in Russia. Video lives on the site and works without them — no autoplay sound, poster first.'
    },
    slots: [
      { ratio: '16/9', label: { ru: 'видео · заезд по вёрт-рампе, 30–60 сек', en: 'video · a vert ramp run, 30–60 sec' } },
      { ratio: '9/16', label: { ru: 'шортс · первое занятие', en: 'short · a first lesson' } },
      { ratio: '9/16', label: { ru: 'шортс · тренер о группе', en: 'short · a coach about the group' } }
    ]
  };

  /* ---------- 15. ГАЛЕРЕЯ МАСШТАБА (второй экран главной) ---------- */
  const SCALE = {
    kicker: { ru: 'Сокольники', en: 'Sokolniki' },
    title: {
      ru: 'Чаша, радиусы и высота, которую видно с порога',
      en: 'A bowl, transitions and a height you see from the door'
    },
    lead: {
      ru: 'Вертикальная рампа — редчайшая фигура: большинство парков ограничивается мини-рампами и боулом. Заезд на неё — по допуску тренера и только в полной защите.',
      en: 'A vert ramp is a rare feature: most parks stop at mini ramps and a bowl. Access requires a coach’s clearance and full pads.'
    },
    shots: [
      { photo: 'sokolniki-bowl-16x9', ratio: '16/10', cap: { ru: 'Чаша и радиусы', en: 'The bowl and transitions' } },
      { photo: 'sokolniki-radius-16x9', ratio: '3/2', cap: { ru: 'Радиус вблизи', en: 'A transition up close' } },
      { photo: 'sokolniki-overview-16x9', ratio: '3/2', cap: { ru: 'Общий план', en: 'General view' } }
    ]
  };

  /* ---------- 16. ЭКСПОРТ ---------- */
  root.RD = {
    version: 'content.v2-site',
    date: '2026-08-18',
    parkLevel: PARK_LEVEL,
    dirCards: DIR_CARDS,
    video: VIDEO,
    scale: SCALE,
    yclientsBase: 'https://b1063156.yclients.com/',
    parks: PARKS,
    pricing: PRICING,
    disciplines: DISCIPLINES,
    formats: FORMATS,
    safety: SAFETY,
    audiences: AUDIENCES,
    gift: GIFT,
    faq: FAQ,
    proof: PROOF,
    academy: ACADEMY,
    social: SOCIAL,
    pages: PAGES,
    ui: UI,
    park: function (slug) { return PARKS.filter(function (p) { return p.slug === slug; })[0]; }
  };
})(typeof window !== 'undefined' ? window : this);
