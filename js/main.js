/** Время суток */
var TimeOfDay = {
    night: 0,
    morning: 1,
    day: 2,
    evening: 3,
};

function debuger() {
    var txt;
    if (arguments[0] && arguments[0] == 'trace' && arguments[1]) {
        var trace = arguments[1];
        txt = '%cDEBUG ' + DEBUG.traceIndex + ': ' 
            + trace.time + ' ' 
            + '%c' + trace.type + ' ' 
            + '%c' + trace.msg + ' '
            + '%c' + trace.source;        
        console.log(txt, 'color:grey;', trace.type == 'DB' ? 'color: red' : 'color: green', 'color: blue', 'color: orange');
        return;
    }
    if (arguments[0] && arguments[0] == 'error' && arguments[1]) {
        var error = arguments[1];
        txt = '%cERROR ' + DEBUG.traceIndex + ': ' + '%c' +  
            + error.code + ' ' 
            + error.msg + ' ';        
        console.log(txt, 'color:grey;', 'color:red;', error);
        return;
    }
    for(var i = 0, l = arguments.length; i < l; i++) {        
        console.log(arguments[i]);
    }
    //console.log(arguments);    
}

function alertForUser(txt) {
    alert(txt);
}
function goToIndex() {
    document.location.href = '/';
}
function gotoError(text) {    
    document.location.href = '#!/error/' + text + '/';
}
function gotoErrorNoInternet() {
    document.location.href = '#!/nointernet';
}
function getToken() {
    return localStorage.token ? localStorage.token : GLOBAL.api.token;
}

/**
 * Возвращает основной домен, с которым нужно работать
 * @returns {String} домен
 */
function getDomain() {
    return localStorage.domain ? localStorage.domain : CONFIG.domain; 
}

/**
 * Возвращает строку, содержащую все что после основного домена
 * @returns {String} домен
 */
function getUri() {
    var href = document.location.href;
    var index = href.indexOf('#');
    return index == -1 ? '/' : href.substring(index); 
}

/**
 * Инициализация приложения, переопределяет все глобальные и ключевые даннные
 * @param {Object} data
 * @param {Function} initFunction
 * @returns {undefined}
 */
function initApp(data) {
    localStorage.setItem('token', data.token);
    if (data.weather) GLOBAL.weather = data.weather;
    if (data.user) GLOBAL.user = data.user;
    //@todo надо инициализацю выносить в отдельный JS функцию и вызывать от туда  
    //setTimeout(initFunction, 5000);
}

/**
 * Определяет, на мобиле мы или нет
 * @returns {Boolean}
 */
function deviceIsMobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
    } else {
       return false;
    }
}