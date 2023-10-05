function email() {
    getEmail()
    return localStorage.getItem("email")
}

function getEmail() {
    sendMessage("email")
    window.addEventListener('message', function(event) {
        this.localStorage.setItem("email",event.data)
        removeEventListener('message',window)
    });    
}

function Name() {
    name
}

function name() {
    getName()
    return localStorage.getItem("name")
}

function getName() {
    sendMessage("name")
    window.addEventListener('message', function(event) {
        this.localStorage.setItem("name",event.data)
        removeEventListener('message',window)
    });    
}


function room() {
    getName()
    return localStorage.getItem("room")
}

function getRoom() {
    sendMessage("room")
    window.addEventListener('message', function(event) {
        this.localStorage.setItem("room",event.data)
        removeEventListener('message',window)
    });    
}

function sendMessage(message) {
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(message, "*");
}

getEmail()
getName()
getRoom()