/** глобальный массив настроек и данных. структуру не менять! */
var CONFIG = {
    domain: '178.62.225.181',
    GA: {
        id: 'UA-2026763-20',
    },
    playMarket: {
        alias: 'ru.maxxam.msk'
    },
    space: {
        name: 'Город Московский',        
        shortName: 'Московский',
        cityName: 'Москва',
        isTown: true,
    },
    app: {
        spaceId: 2,
        version: '0.3.0',
    },
    routes: [],
};

var SPACE = {
    phones: [
        {
            name: 'Единая диспетчерская служба',
            descr: 'Можно обращаться по любым экстренным вопросам',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'Служба спасения, пожарная охрана',
            phones: ['+7 777 777-77-77', '+7 777 777-77-77'],
        },{
            name: 'Полиция',
            phones: ['+7 777 777-77-77', '+7 777 777-77-77'],
        },{
            name: 'Участковый Павшинской поймы',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'Скорая медицинская помощь',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'ГИБДД',
            descr: 'Вызвать инспектора в случае ДТП или если вы стали свидетелем нарушения правил дорожного движения',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'Роспотребнадзор',
            descr: 'Обращаться в случае, если возникли претензии к продавцу или поставщику услуг',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'Телефон доверия',
            descr: 'Можно анонимно обратится, чтобы обсудить трудную жизненную ситуацию и получить ответ на любой вопрос',
            phones: ['+7 777 777-77-77'],
        },{
            name: 'Справочная служба',
            descr: 'Здесь можно узнать интересующие телефоны других городских служб',
            phones: ['+7 777 777-77-77'],
        }
    ],
};