var global = {
    app: {
        spaceId: 1,
        version: '1.0',
    },    
    api: {
        //url: 'http://pp.maxxam.ru/api/',
        url: 'http://178.62.225.181/api/', 
        version: 1,
        token: '34829a123b98d99c',
    },
    timeout: {
        noInternet: 10000,
        loadStart: 3000,
    },
    news: {
        scrollTop: 0,
        list: [],
        countNewsOnPage: null,
        notLoadScroll: false, //когда новости закончились, больше не запрашивать при скролле
    },
    info: {
        scrollTop: 0,
    },
    debug: false,
    debugIndex: 0,
};


