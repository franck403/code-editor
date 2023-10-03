var func = (message,id) => {
    console.log(`${message} was sended with id of ${id}`)
    window.last = [message,id]
    window.onsendmessage.forEach(funcs => {
        funcs(window.last)
    });
}
var func1 = (func) => {
    if (window.onsendmessage == undefined) {
        window.onsendmessage = []        
    }
    window.onsendmessage.push(func)
    return true
}
try {
    gl["SendMessage"] = func
    gl["OnSendMessage"] = func1
} catch {
    window.gl = {}
    gl["SendMessage"] = func
}