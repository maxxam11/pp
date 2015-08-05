/** глобальный массив настроек и данных. структуру не менять! */
var CONFIG = {
    domain: '178.62.225.181',
    GA: {
        id: 'UA-2026763-18',
    },
    space: {
        name: 'Город Московский',        
        shortName: 'ПП',
        cityName: 'Москва',
        isTown: true,
    },
    app: {
        spaceId: 1,
        version: '0.3.0',
    },
    routes: [
        { route: '/beautification/dk-item/:id', page: 'dk-item', param: 'dkId', pageTitle: 'Дорожная карта' },
        { route: '/beautification/dk', page: 'dk', pageTitle: 'Дорожная карта' },
        { route: '/beautification/concept', page: 'concept', pageTitle: 'Концепция благоустройства' },
        { route: '/beautification/embankment', page: 'embankment', pageTitle: 'Эскизный проект набережной' },
    ],
};