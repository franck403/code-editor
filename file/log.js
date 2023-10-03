function log(message) {
    if (window.runLog == undefined){
        window.runLog = []
    }
    window.runLog.push(message)
}

function clear() {
    window.runLog = []
}

function loadLog() {
    document.getElementById("logs").innerHTML = window.runLog.join("<br>")
}