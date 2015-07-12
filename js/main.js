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
    return localStorage.token ? localStorage.token : global.api.token;
}

/**
 * Возвращает основной домен, с которым нужно работать
 * @returns {String} домен
 */
function getDomain() {
    return localStorage.domain ? localStorage.domain : global.domain; 
}

/**
 * Инициализация приложения, переопределяет все глобальные и ключевые даннные
 * @param {Object} data
 * @returns {undefined}
 */
function initApp(data) {
    localStorage.setItem('token', data.token);
    if (data.weather) global.weather = data.weather;
    //@todo надо инициализацю выносить в отдельный JS функцию и вызывать от туда    
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