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
    app: {
        spaceId: 1,
        version: '1.0',
    },    
    api: {
        //url: 'http://pp.maxxam.ru/api/',
        url: 'api', 
        version: 1,
        token: '34829a123b98d99c',
    },
    timeout: {
        noInternet: 10000,
        loadStart: 2000,
    },
    news: {
        scrollTop: 0,
        list: [],
        countNewsOnPage: null,
        notLoadScroll: false,   // когда новости закончились, больше не запрашивать при скролле
        dateLastLoad: null,     // дата и время последней загрузки новостей
    },
    dk: {
        scrollTop: 0,
        list: null,
    },
    info: {
        scrollTop: 0,
    },
    timeOfDay: TimeOfDay.day, // время суток    
};

var DEBUG = {
    on: false,
    itraceIdex: 0   
};