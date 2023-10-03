var func = (message,id) => {
    console.log(`${message} was sended with id of ${id}`)
    window.last = [message,id]
    window.prevent = true
    window.onsendmessage.forEach(funcs => {
        if (window.prevent) {
            funcs(window.last)
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
    window.prevent = true
}
try {
    gl["SendMessage"] = func
    gl["OnSendMessage"] = func1
    gl["StopSendMessage"] = func1
} catch {
    window.gl = {}
    gl["SendMessage"] = func
}