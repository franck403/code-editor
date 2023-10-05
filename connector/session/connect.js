function sendMessage(message) {
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(message, "*");
}

function loged() {
    sendMessage("lastRoom")
    window.addEventListener('message', function (event) {
        this.removeEventListener('message',window)
    });
}