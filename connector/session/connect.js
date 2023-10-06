function email() {
    getEmail()
    return localStorage.getItem("email")
}

function getEmail() {
    sendMessage("email")
    window.addEventListener('message', function(event) {
        if (event.data[0] == "e") {
            this.localStorage.setItem("email",event.data.replace("e",""))
        }
        removeEventListener('message',window)
    });    
}

function name() {
    getName()
    return localStorage.getItem("name")
}

function getName() {
    sendMessage("name")
    window.addEventListener('message', function(event) {
        if (event.data[0] == "n") {
            this.localStorage.setItem("name",event.data.replace("n",""))
        }
        removeEventListener('message',window)
    });    
}


function room() {
    getRoom()
    return localStorage.room
}

function getRoom() {
    sendMessage("room")
    window.addEventListener('message', function(event) {
        if (event.data[0] == "r") {
            this.localStorage.setItem("room",event.data.replace("r",""))
        }
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