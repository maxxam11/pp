/* 
 * Глобальная переменная для хранения всех общих данных
 */

/** Все глобальные переменные */
var GLOBAL = {
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
    timeOfDay: 1,
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
    info: {
        scrollTop: 0,
    },
    weather: {}   
};

/** для отладки */
var DEBUG = {
    on: false,
    traceIdex: 0   
};

/** для псевдо-кеширования */
var LAST_LOAD = {
    
};

