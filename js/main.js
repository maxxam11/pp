var global = {
    app: {
        spaceId: 1,
        version: '1.0',
    },    
    api: {
        //url: 'http://pp.maxxam.ru',
        url: 'http://pp2/index.php',       
    },
    timeout: {
        noInternet: 10000,
        loadStart: 0,
    },
    news: {
        scrollTop: 0,
        list: [],
    },
    debug: true,
};

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