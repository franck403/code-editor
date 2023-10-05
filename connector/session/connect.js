function sendMessage(message) {
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(message, "*");
}

function loged() {
    sendMessage("state")
    window.state = false
    window.addEventListener('message', function (event) {
        log("[login] Called")
        window.state = true
        this.removeEventListener('message',window)
    });
}

function startSessionTime() {
    window.stateMax = 10
    window.stateNow = 0
    loged()
    if (window.state) {
        window.session = true
        log("[Session Manager] Session started")
    } else {
        window.session = false
        if (window.stateMax < window.stateNow){
            setTimeout(startSessionTime, 1000)
            window.StateNow++
        } else {
            console.log(state)
            if (window.state == true) {
                window.session = true
                log("[Session Manager] Session started")        
            } else {
                log("[Session manager] Testing is finish")
                startSession2()
            }
        }
    }
    clearTimeout()
    return true
}

function startSessionTime1() {
    window.stateMax = 10
    window.stateNow = 0
    loged()
    if (window.state) {
        window.session = true
        log("[Session Manager] Session started")
    } else {
        window.session = false
        if (window.stateMax < window.stateNow){
            setTimeout(startSessionTime, 1000)
            window.StateNow++
        } else {
            window.session = false
            if (window.state == true) {
                window.session = true
                log("[Session Manager] Session started")        
            } else {
                console.log(state)
                log("[Session manager] Do you have the beta chat open ?")
            }
        }
    }
    clearTimeout()
    return true
}

function startSession1() {
    var elem = document.createElement("iframe");
    elem.onload = function () {
        loged()
        log("[Session Manager] Testing session")
        setTimeout(startSessionTime, 1000)
    }
    elem.src = "https://beta.chat.geoloup.com/d/session/"
    document.getElementsByTagName("body")[0].appendChild(elem)
}

function startSession2() {
    var elem = document.createElement("iframe");
    elem.onload = function () {
        loged()
        log("[Session Manager] Testing session")
        setTimeout(startSessionTime1, 1000)
    }
    elem.src = "https://chat.beta.geoloup.com/d/session/"
    document.getElementsByTagName("body")[0].appendChild(elem)
}

function startSession() {
    log("[Session Manager] Creating session")
    startSession1();
}