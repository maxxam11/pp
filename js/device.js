// Wait for device API libraries to load
function onLoad() {
    //debug
    if (localStorage.domain) global.domain = localStorage.domain;
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    navigator.splashscreen.hide();
    window.open = cordova.InAppBrowser.open;
}


