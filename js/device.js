// Wait for device API libraries to load
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    navigator.splashscreen.hide();
}


