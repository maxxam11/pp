/** Время суток */
var TimeOfDay = {
    night: 0,
    morning: 1,
    day: 2,
    evening: 3,
};

/** глобальный массив настроек и данных */
var global = {
    domain: '178.62.225.181',
    spaceName: 'Павшинская пойма',
    app: {
        spaceId: 1,
        version: '0.2.2',
    },    
    api: {
        //url: 'http://pp.maxxam.ru/api/',
        url: 'api', 
        version: 1,
        token: '34829a123b98d99c',
    },
    timeout: {
        noInternet: 10000,
        loadStart: 500,
    },
    news: {
        scrollTop: 0,
        list: [],
        countNewsOnPage: null,
        notLoadScroll: false,   // когда новости закончились, больше не запрашивать при скролле
        cashTime: 1000 * 60 * 60,     // через сколько обновлять новости автоматом
    },
    payments: {
        list: [],
        accountList: [],
        cashTime: 1000 * 60 * 60 * 24, // раз в сутки обновляем список
    },
    dk: {
        scrollTop: 0,
        list: null,
    },
    info: {
        scrollTop: 0,
    },
    weather: {},
    timeOfDay: TimeOfDay.day, // время суток    
};

var DEBUG = {
    on: false,
    itraceIdex: 0   
};

var LAST_LOAD = {
    
};

global.dk.list = [
    {
        id: 1,
        title: 'Подготовка и организация работ',                    
        items: [
            {
                title: 'Разработка задания проекта межевания микрорайона Павшинская пойма',
                responsible: 'ОАО «РФСК» Администрация городского поселения Красногорск (Отдел землепользования)',
                date: 'март 2015',
            }, 
            {
                title: 'Корректировка проекта межевания микрорайона Павшинская пойма',
                responsible: 'ОАО «РФСК» Администрация городского поселения Красногорск (Отдел землепользования)',
                date: 'в течении 2015 года',
            },
            {
                title: 'Передача и прием в муниципальную собственность земельных участков под введенными в эксплуатацию объектами дорожной сети, инженерных сетей и элементов благоустройства от застройщика, собственника.',
                responsible: 'ОАО «РФСК» Администрация городского поселения Красногорск',
                date: 'в течение 2015 года',
            },
            {
                title: 'Подготовка к проведению конкурса проектных предложений по благоустройству микрорайона Павшинская пойма.',
                responsible: 'Главное управление архитектуры и градостроительства Московской области',
                date: 'март 2015',
            }, 
            {
                title: 'Проведение конкурса проектных предложений по благоустройству микрорайона Павшинская пойма.',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'июль 2015',
            },
            {
                title: 'Приобретение в муниципальную собственность помещения на территории жилой застройки мкр. для подразделения администрации, ответственного за содержания мкр. «Павшинская пойма»',
                responsible: 'Администрация городского поселения Красногорск',
                date: '31.10.2015г.',
            },
        ],
    },
    {
        id: 2,
        title: 'Набережная и мост',                    
        items: [
           {
                title: 'Окончание работ по строительству и благоустройство набережной р. Москва по обязательствам ОАО «Москапстрой-ТН»',
                responsible: 'ООО «РеалПрофГрупп»',
                date: 'I участок - 2014г., II участок - 27.10.2015г.',
            },
            {
                title: 'Разработка проекта освещения набережной р. Москва',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'июль 2015',
            },
            {
                title: 'Обустройство освещения набережной р. Москва',
                responsible: 'Администрация городского поселения Красногорск',
                date: '2015г. - 2016г.',
            },
            {
                title: 'Завершение строительства, ввод в эксплуатацию  и передача в муниципальную собственность городского поселения Красногорск  мостового сооружения',
                responsible: 'ООО «Крокус Интернешэл»',
                date: '2015г.',
            },
            {
                title: 'Расчистка русла реки Баньки в районе мкр. «Павшинская пойма»',
                responsible: 'Администрация городского поселения Красногорск',
                date: '31.10.2015г.',
            },
        ],
    },
    {
        id: 3,
        title: 'Устранение дефектов в жилых домах',
        description: true,
        items: [
            {
                title: 'Ул. Зверева, д.2, 4, 6, 8',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Павшино»',
                date: '31.10.2015г.',
            },
            {
                title: 'Павшинский бульвар, д.4, 6, 11, 12, 16, 17, 18, 20, 24, 26, 28, 32, 40',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Павшино»',
                date: '31.10.2015г.',
            },
            {
                title: 'Подмосковный бульвар, д. 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Павшино»',
                date: '31.10.2015г.',
            },
            {
                title: 'Ильинский бульвар, д.2, 3, 4, 5, 7, 8, 9',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Павшино»',
                date: '31.10.2015г.',
            },
            {
                title: 'Красногорский бульвар, д. 5, 7, 9, 11, 13/1, 13/2, 17, 19, 21',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Павшино»',
                date: '31.10.2015г.',
            },
            {
                title: 'Подмосковный бульвар, д. 2',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Свой дом» ',
                date: '01.07.2015г.',
            },
            {
                title: 'Ул.Спасская, д.10',
                responsible: 'ЗАО ОСК «Объединенная Строительная Компания»',
                date: '01.07.2015 г.',
            },
            {
                title: 'Ул.Спасская, д.4, 6, 8, 10, 12',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Красногорье-ДЭЗ»',
                date: '31.10.2015 г.',
            },
            {
                title: 'Павшинский бульвар, д.1, 5, 3, 7',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Красногорье-ДЭЗ»',
                date: '31.10.2015 г.',
            },
            {
                title: 'Подмосковный бульвар, д.11',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Красногорье-ДЭЗ»',
                date: '31.10.2015 г.',
            },
            {
                title: 'Ул.Егорова, д.3, 5',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Красногорье-ДЭЗ»',
                date: '31.10.2015 г.',
            },
            {
                title: 'Ул.Игната Титова, д.3, 7',
                responsible: 'Филиал «СИ-17» ЗАО «СУ-155», Управляющая организация ООО «Красногорье-ДЭЗ»',
                date: '31.10.2015 г.',
            },
        ],
    },
    {
        id: 4,
        title: 'Ливневая канализация',
        items: [
            {
                title: 'Строительство и  ввод в эксплуатацию очистных сооружений №1',
                responsible: 'Департамент строительства г. Москвы',
            },
            {
                title: 'Строительство и  ввод в эксплуатацию очистных сооружений №2',
                responsible: 'Департамент строительства г. Москвы',
            },
            {
                title: 'Врезка внутриквартальных сетей дождевой канализации в магистральные сети',
                responsible: 'ЗАО «СУ-155»',
                date: '01.10.2015г.',
            },
            {
                title: 'Прочистка построенных сетей дождевой канализации',
                responsible: 'ЗАО «СУ-155»',
                date: '01.10.2015г.',
            },
            {
                title: 'Передача сетей дождевой канализации в муниципальную собственность',
                responsible: 'ЗАО «СУ-155», Администрация городского поселения Красногорск',
                date: '30.12.2015г.',
            },
            {
                title: 'Завершение работ по забутовке участка Рублевского коллектора у дома по адресу: мкр 4, корп 9',
                responsible: 'ЗАО «СУ-155»',
                date: '30.06.2015г.',
            },
        ],
    },
    {
        id: 5,
        title: 'Водопровод',
        items: [
            {
                title: 'Завершить строительство бытового городка для размещения аварийно-диспетчерской службы на территории КНС № 1 «Павшино».',
                responsible: 'ЗАО «СУ-155»',
                date: '01.01.2015г.',
            },
            {
                title: 'Завершение строительства и ввод в эксплуатацию КНС-2 «Павшинская пойма»',
                responsible: 'ЗАО «СУ-155»',
                date: 'сентябрь 2015 года',
            },
            {
                title: 'Подключение КНС-1 «Павшино»  к централизованным системам ХВС и отопления',
                responsible: 'ОАО «Москапстрой»',
                date: 'сентябрь 2015 года',
            },
        ],
    },
    {
        id: 6,
        title: 'Теплоснабжение',
        items: [
            {
                title: 'Устранение замечаний в работе ИТП в доме № 3 по ул. Игната Титова.',
                responsible: 'ЗАО «СУ-155»',
                date: 'октябрь 2015 года',
            },
            {
                title: 'Восстановление поврежденной изоляции теплотрассы между домами №№ 10 и 12 по Подмосковному бульвару',
                responsible: 'ЗАО «СУ-155»',
                date: 'июнь 2015 года',
            },
            {
                title: 'Завершение работ по установке и диспетчеризации узла учета ГВС и тепловой энергии в доме № 17 по Павшинскому бульвару (4к-36) и прибора учета ГВС на ЦТП-2',
                responsible: 'ЗАО «СУ-155»',
                date: 'июнь 2015 года',
            },
            {
                title: 'Проведение работ по устранению замечаний ООО «РегионЭнергоСервис» по теплотрассе проезда 6311 и теплотрассе Магистраль А',
                responsible: 'ОАО «Москапстрой-ТН», ЗАО «СУ-155»',
                date: 'июнь 2015 года',
            },
        ],
    },
    {
        id: 7,
        title: 'Уличное освещение',
        description: true,
        items: [
            {
                title: 'Завершение строительства наружного освещения от съезда с эстакады Волоколамского шоссе до Подмосковного бульвара',
                responsible: 'Департамент строительства г.Москвы',
            },
            {
                title: 'Проведение работ по освещению детских площадок',
                responsible: 'Администрация городского поселения Красногорск, ЗАО «СУ-155»',
                date: 'в течении 2015 года',
                more: 'Список площадок можно посмотреть ниже в приложении №3.'
            },
        ],
    },
    {
        id: 8,
        title: 'Благоустройство',
        description: true,
        items: [
            {
                title: 'Мероприятия по реконструкции детских площадок, в том числе обустройство резинового покрытия',
                responsible: 'Управляющая организация, Администрация городского поселения Красногорск (Отдел благоустройства), ЗАО «СУ-155»',
                date: '2015г. - 2018г.',
                more: 'Список мероприятий можно посмотреть ниже в приложении №4.'
            },
            {
                title: 'Обустройство двух спортивных площадок с установкой уличных тренажеров',
                responsible: 'Администрация городского поселения',
                date: 'сентябрь 2015 года',
            },
            {
                title: 'Организация цветников на Ильинском бульваре и Подмосковном бульваре в мкр. Павшинская пойма',
                responsible: 'Администрация городского поселения',
                date: 'май 2015 года',
            },
            {
                title: 'Посадка кустарников и деревьев на общественных территориях в мкр. Павшинская пойма',
                responsible: 'Администрация городского поселения',
                date: 'май, сентябрь 2015 года',
            },
            {
                title: 'Строительство (устройство и ремонт) пешеходных дорожек на территории микрорайона',
                responsible: 'Администрация городского поселения, ЗАО «СУ-155»',
                date: 'сентябрь 2015 года',
                more: 'Адреса дорожек можно посмотреть ниже в приложении №5.'
            },
            {
                title: 'Создание безбарьерной среды для передвижения маломобильных групп населения (занижение бордюрного камня пешеходной связи мкр. Павшинская пойма).',
                responsible: 'Администрация городского поселения',
                date: 'сентябрь 2015 года',
            },
            {
                title: 'Обустройство контейнерных площадок для сбора и вывоза ТБО в соответствии с Правилами благоустройства и требованиями СНиП 30-02-97',
                responsible: 'Управляющие организации',
                date: '31.10.2015',
            },
            {
                title: 'Установка на домах в мкр. Павшинская пойма адресных табличек а подсветкой',
                responsible: 'Администрация городского поселения Красногорск',
                date: '2015 г. - 2016 г.',
            },
        ],
    },
    {
        id: 9,
        title: 'Транспортное обслуживание населения',
        items: [
            {
                title: 'Устройство разворотного круга и отстойной площадки для общественного транспорта',
                responsible: 'Департамент строительства г.Москвы',
                date: 'сроки определяются Департаметом строительста г.Москвы',
            },
            {
                title: 'Строительство надземного перехода над Волоколамским шоссе в районе автобусной остановки «Таможня»',
                responsible: 'Департамент строительства г.Москвы',
                date: '2015г. - 2016г.',
            },
            {
                title: 'Организация транспортного маршрута «Павшинская пойма – Стадион Зоркий»',
                responsible: 'Министерство транспорта Московской области',
                date: 'декабрь 2014.',
            },
            {
                title: 'Открытие нового маршрута «Павшинская пойма – микрорайон Южный»',
                responsible: 'Министерство транспорта Московской области',
                date: 'III квартал 2015г.',
            },
            {
                title: 'Инициирование предложений по строительству дополнительной остановочной платформы для электропоездов пригородного на перегоне пл. «Трикотажная - Павшино», с обустройством пешеходного перехода через железнодорожные пути.',
                responsible: 'ОАО «РЖД», Министерство транспорта Московской области, Департамент строительства г.Москвы',
                date: 'февраль 2015г.',
            },
            {
                title: 'Организация кольцевого автобусного движения с обустройством остановочных пунктов по микрорайону Павшинская пойма.',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'октябрь 2015г.',
            },
        ],
    },
    {
        id: 10,
        title: 'Развитие дорожной сети',
        items: [
            {
                title: 'Приём в собственность городского поселения Красногорск автомобильных дорог по мере их строительства и ввода в эксплуатацию',
                responsible: 'ОАО «РФСК», Администрация городского поселения Красногорск',
                date: 'октябрь 2015г.',
            },
            {
                title: 'Устройство остановочных пунктов и заездных карманов для общественного транспорта по Красногорскому бульвару',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'III квартал 2015г.',
            },
            {
                title: 'Внесение изменений в проект организации дорожного движения автомобильных дорог с ограничением въезда большегрузного транспорта: Павшинский бульвар, Подмосковный бульвар, Крансогорский бульвар, ул. Спасская',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'Разработка ПОДД - февраль 2015г., реализация - июль 2015г.',
            },
            {
                title: 'Внесение изменений в проект организации дорожного движения автомобильных дорог с ограничением въезда большегрузного транспорта: Ильинский бульвар, ул. Игната Титова',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'Разработка ПОДД - февраль 2015г., реализация - июль 2015г.',
            },
            {
                title: 'Внесение изменений в проект организации дорожного движения автомобильных дорог с ограничением въезда большегрузного транспорта: Ул. Егорова, ул. Зверева',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'Разработка ПОДД - июнь 2016г., реализация - июль 2016г.',
            },
        ],
    },
    {
        id: 11,
        title: 'Устройство парковочных мест и заездных карманов',
        items: [
            {
                title: 'Вдоль автомобильной дороги - ул. Спасская (300 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2015г.',
            },
            {
                title: 'Вдоль автомобильной дороги - ул. Павшинский бульвар (от Подмосковного бульвара до Красногорского бульвара) (100 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2015г.',
            },
            {
                title: 'Вдоль автомобильной дороги - ул. Ильинский бульвар (120 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2016г.',
            },
            {
                title: 'Вдоль автомобильной дороги - ул. Игната Титова (на участке от Павшинского бульвара до Подмосковного бульвара) (90 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2016г.',
            },
            {
                title: 'Вдоль автомобильной дороги - ул. Зверева (100 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2016г.',
            },
            {
                title: 'Вдоль автомобильной дороги - ул. Егорова (100 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2016г.',
            },
            {
                title: 'Строительство парковки плоскостной на 136 машиномест у Снежкома',
                responsible: 'инвестор',
                date: 'в течение 2015 г. - 2016 г.',
            },
            {
                title: 'Устройство парковочных мест на внутридворовых территориях (260 машиномест)',
                responsible: 'Администрация городского поселения Красногорск',
                date: 'в течение 2015 г. - 2016 г.',
                more: 'Адреса парковочных мест можно посмотреть ниже в приложении №6.',
            },
            {
                title: 'Строительство многоуровневых гаражей ГР-1 в Павшинской пойме, мкр.4, III очередь (235 машиномест)',
                responsible: 'ООО «Москапстрой-ТН»',
                date: '2015 г. - 2017 г.',
            },
            {
                title: 'Строительство многоуровневых гаражей ГР-2 в Павшинской пойме, мкр.4, III очередь (565 машиномест)',
                responsible: 'ООО «Москапстрой-ТН»',
                date: '2015 г. - 2017 г.',
            },
            {
                title: 'Организация временной парковки в районе жилых домов Подмосковный бульвар, д.9 и Павшинскй бульвар, д.7',
                responsible: 'УК «Павшино»',
                date: 'февраль 2015 г.',
            },
            {
                title: 'Установка ограждения и ограничительных столбиков на общественных территориях, на придомовых территориях.',
                responsible: 'Администрация городского поселения Красногорск',
                date: '01.10.2015г.',
                more: 'Адреса ограждений можно посмотреть ниже в приложении №7.',
            },
        ],
    },
    {
        id: 12,
        title: 'Демонтаж незаконно установленных объектов',
        items: [
            {
                title: 'Демонтаж незаконно установленной рекламы в мкр. Павшинская пойма',
                responsible: 'Администрация городского поселения Красногорск',
                date: '20.12.2015г.',
            },
            {
                title: 'Демонтаж незаконно установленных торговых павильонов',
                responsible: 'Администрация городского поселения Красногорск',
                date: '20.12.2015г.',
                more: 'Список торговых объектов можно посмотреть ниже в приложении №8.',
            },
        ],
    },
    {
        id: 13,
        title: 'Завершение строительства объектов жилищного, социального и коммунального назначения',
        items: [
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 4, IV очередь строительства, общая площадь здания 23184кв.м., 168 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'март 2015',
                img: '13_1.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 5, IV очередь строительства, общая площадь здания 36101кв.м., 188 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'декабрь 2014',
                img: '13_2.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 9, IV очередь строительства, общая площадь здания 10360кв.м., 89 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'июль 2015',
                img: '13_3.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 37, III очередь строительства, 13-17-21-эт. общая площадь здания 51136кв.м., 413 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'декабрь 2014',
                img: '13_4.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 38, III очередь строительства, 21-25-эт. общая площадь здания 74160кв.м., 605 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'декабрь 2014',
                img: '13_5.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 39, III очередь строительства, 13-17-21-эт. общая площадь здания 51136кв.м., 413 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'февраль 2015',
                img: '13_6.png',
            },
            {
                title: 'Ввод в эксплуатацию многоквартирного дома по адресу: Павшинская пойма, мкр.4, корп. 40, III очередь строительства, 17-21-25-эт. общая площадь здания 81785кв.м., 669 квартир',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'март 2015',
                img: '13_7.png',
            },
            {
                title: 'Ввод в эксплуатацию здания поликлиники по адресу: Павшинская пойма, мкр.2, К-7 на 600 пос/смену, в т.ч. детское отделение на 120 пос/смену',
                responsible: 'ЗАО «СУ-155»',
                date: 'июнь 2015',
                img: '13_8.png',
            },
            {
                title: 'Ввод в эксплуатацию помещения под размещение музыкальной школы и библиотеки по адресу: Павшинская пойма, мкр.1, К-16, площадь здания 1300кв.м',
                responsible: 'ООО «РФСК», ЗАО «СУ-155», ОАО «Москапстрой»',
                date: 'октябрь 2015',
                img: '13_9.png'
            },
            {
                title: 'Ввод в эксплуатацию общеобразовательной школы по адресу: Павшинская пойма, мкр.2, К-8 на 900 учащихся',
                responsible: 'ЗАО «СУ-155»',
                date: 'июль 2015',
                img: '13_10.png'
            },
            {
                title: 'Ввод в эксплуатацию общеобразовательной школы по адресу: Павшинская пойма, мкр.2, К-1 на 900 учащихся',
                responsible: 'ЗАО «СУ-155»',
                date: 'июль 2016',
                img: '13_11.png'
            },
            {
                title: 'Ввод в эксплуатацию общеобразовательной школы по адресу: Павшинская пойма, мкр.4, К-1 на 1125 учащихся',
                responsible: 'ЗАО «СУ-155»',
                date: 'июль 2016',
                img: '13_12.png'
            },
            {
                title: 'Ввод в эксплуатацию детского сада по адресу: Павшинская пойма, мкр.4, корп.К-5 на 120 мест',
                responsible: 'ЗАО «СУ-155»',
                date: 'декабрь 2016',
                img: '13_13.png'
            },
            {
                title: 'Ввод в эксплуатацию детского сада по адресу: Павшинская пойма, мкр.4, корп.К-2А на 120 мест',
                responsible: 'ЗАО «СУ-155»',
                date: 'июнь 2015',
                img: '13_5.png'
            },
            {
                title: 'Ввод в эксплуатацию детского сада по адресу: Павшинская пойма, мкр.4, корп.К-2Б на 120 мест',
                responsible: 'ЗАО «СУ-155»',
                date: 'сентябрь 2015',
                img: '13_14.png'
            },
            {
                title: 'Ввод в эксплуатацию Красногорского бульвара (1 этап: проезд 6311(ПК36-ПК55), 2 этап: проезд 6312(ПК0-ПК23), проезд 6315 (лево/право), проезд 6312, 3 этап: проезд6311(ПК23-пк36))',
                responsible: 'ООО «РФСК», ООО «РеалПрофГрупп»',
                date: '1-й и 2-ой этап: декабрь 2014, 3-й этап: май 2015',
                img: '13_15.png'
            },
            {
                title: 'Ввод в эксплуатацию берегоукрепления вертикального типа по береговой полосе мкр.4 Павшинской поймы (от мкр.№15 до корп.40 мкр.40)',
                responsible: 'ООО «РФСК», ООО «РеалПрофГрупп», ООО «Капстрой-Девелопмент»',
                date: 'октябрь 2015',
                img: '13_16.png'
            },
            {
                title: 'Ввод в эксплуатацию многофункционального гаража комплекс вдоль Волокаламского шоссе на 5864 машиномест (1 этап 3800 машиномест, 2 этап 2064 машиномест)',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: '1 этап: декабрь 2016, 2 этап: декабрь 2017',
                img: '13_17.png'
            },
            {
                title: 'Ввод в эксплуатацию пожарного депо на 4 выезда по адресу: Павшинская пойма, корп.К-17',
                responsible: 'ЗАО «СУ-155»',
                date: 'декабрь 2015',
                img: '13_18.png'
            },
            {
                title: 'Ввод в эксплуатацию подземной авто-стоянки на 90 легковых автомобилей по адресу: Павшинская пойма, мкр.4, 4-ая очередь строительства, Г5 с устройством спортивной площадки на кровле (1 этап: подземная автостоянка, 2 этап: спортивная площадка)',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: '1 этап: март 2015, 2 этап: август 2015',
                img: '13_19.png'
            },
            {
                title: 'Подача тепла в таунхаусы в мкр.4 4-ой очереди строительства Павшинской поймы',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'декабрь 2014',
                img: '13_20.png'
            },
            {
                title: 'Передача инженерных сетей и сооружений, построенных на территории мкр.№№1,2,3,4 в муниципальную собственность',
                responsible: 'ООО «РФСК», ЗАО «СУ-155»',
                date: 'в течение 2015 года',
            },
            {
                title: 'Закончить строительством и ввести в эксплуатацию инженерные сети и сооружения, построенные в мкр.№№1,2,3,4',
                responsible: 'ЗАО «СУ-155»',
                date: 'июнь 2015',
            },
        ],
    },
];