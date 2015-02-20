
function debuger() {
    var txt;
    if (arguments[0] && arguments[0] == 'trace' && arguments[1]) {
        var trace = arguments[1];
        txt = '%cDEBUG ' + global.debugIndex + ': ' 
            + trace.time + ' ' 
            + '%c' + trace.source + ' ' 
            + '%c' + trace.msg + ' '
            + '%c' + trace.method;        
        console.log(txt, 'color:grey;', trace.source == 'DB' ? 'color: red' : 'color: green', 'color: blue', 'color: orange');
        return;
    }
    if (arguments[0] && arguments[0] == 'error' && arguments[1]) {
        var error = arguments[1];
        txt = '%cERROR: ' 
            + error.code + ' ' 
            + error.msg + ' ';        
        console.log(txt, 'color:red;', error);
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
    return localStorage.token ? localStorage.token : '';
}
function setToken(token) {
    localStorage.setItem('token', token);
}