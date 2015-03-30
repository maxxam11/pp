
function debuger() {
    var txt;
    if (arguments[0] && arguments[0] == 'trace' && arguments[1]) {
        var trace = arguments[1];
        txt = '%cDEBUG ' + global.debugIndex + ': ' 
            + trace.time + ' ' 
            + '%c' + trace.type + ' ' 
            + '%c' + trace.msg + ' '
            + '%c' + trace.source;        
        console.log(txt, 'color:grey;', trace.type == 'DB' ? 'color: red' : 'color: green', 'color: blue', 'color: orange');
        return;
    }
    if (arguments[0] && arguments[0] == 'error' && arguments[1]) {
        var error = arguments[1];
        txt = '%cERROR ' + global.debugIndex + ': ' + '%c' +  
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
function setToken(token) {
    localStorage.setItem('token', token);
}

/**
 * Время конвертим в относительные промежутки
 * например: два дня назад
 * @returns {String}
 */
function convertDateToRel(date) {
    var now = new Date();
    var from = new Date(date) ;
    var timeDiff = Math.abs(now.getTime() - from.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (diffDays === 0) {
        return 'сегодня';
    }
    if (diffDays === 1) {
        return 'вчера';
    }
    if (diffDays < 8) {
        return diffDays +  ' ' + plural(diffDays, 'день', 'дня', 'дней') + ' назад';
    }
    if (diffDays < 8) {
        return diffDays + plural(diffDays, 'день', 'дня', 'дней') + ' назад';
    }
    if (diffDays > 7 && diffDays < 15) {
        return 'неделю назад';
    }
    if (diffDays > 14 && diffDays < 22) {
        return 'две недели назад';
    }
    if (diffDays > 21 && diffDays < 29) {
        return 'три недели назад';
    }
    if (diffDays > 28 && diffDays < 61) {
        return 'месяц назад';
    }
    if (diffDays > 60) {
        return 'давным давно';
    }
    /*
    if (date.getYear() != Date.now().getYear()) {
        var delta = Date.now().getYear() - date.getYear();
        return delta + ' ' + plural(delta, 'год', 'года', 'лет') + ' назад'; 
    } 
    
    if (date.getMonth() != Date.now().getMonth()) {
        var delta = Date.now().getMonth() - date.getMonth();
        return delta + ' ' + plural(delta, 'месяц', 'месяца', 'месяцев') + ' назад'; 
    } 
    
    if (date.getYear() != Date.now().getYear()) {
        var delta = Date.now().getYear() - date.getYear();
        return delta + ' ' + plural(delta, 'год', 'года', 'лет') + ' назад'; 
    } 
    */
}

/**
 * Склонение русских слов
 * @param {Number} number число
 * @param {String} one склонение одного
 * @param {String} two склонение двух
 * @param {String} five склонение пяти
 * @returns {String}
 */
function plural(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
} 