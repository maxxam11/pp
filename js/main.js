var global = {
    spaceId: 1,
    timeout: {
        noInternet: 10000,
        loadStart: 0,
    },
    news: {
        scrollTop: 0,
        list: [],
    }
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