var func = (message,id) => {
    console.log(`${message} was sended with id of ${id}`)
    log(`${message} was sended with id of ${id}`)
    window.last = [message,id]
    window.prevent = true
    window.onsendmessage.forEach(funcs => {
        if (window.prevent) {
            try {
                funcs(window.last)
            } catch {}
        }
    });
}
var func1 = (func) => {
    if (window.onsendmessage == undefined) {
        window.onsendmessage = []        
    }
    window.onsendmessage.push(func)
    return true
}
var func2 = () => {
    window.last = undefined
    window.prevent = false
}
try {
    gl["SendMessage"] = func
    gl["OnSendMessage"] = func1
    gl["StopSendMessage"] = func1
} catch {
    window.gl = {}
    gl["SendMessage"] = func
}