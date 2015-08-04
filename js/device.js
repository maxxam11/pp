// Wait for device API libraries to load
function onLoad() {
    //debug
    if (localStorage.domain) CONFIG.domain = localStorage.domain;
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    navigator.splashscreen.hide();
    window.open = cordova.InAppBrowser.open;
}


