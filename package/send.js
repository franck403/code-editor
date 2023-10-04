var func = (message,id) => {
    log(`${message} was sended with id of ${id}`)
    window.last = [message,id]
    var fg = document.getElementById('content').value
    var gh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (document.getElementById('content').value != "" && fg.replace(/\s/g, '').length != 0) {
        var str = document.getElementById('content').value;
        document.getElementById('content').value = "";
        var str1 = str.replaceAll("<", "&lt;")
        var str2 = str1.replaceAll(">", "&gt;")
        var message = str2;
        var message = message_render(message, "nop");
        var message = encrypt(message)
        var name = myName;
        const id = push(child(ref(database), 'messages')).key;
        var friend = "none"
        var cusid = document.getElementsByClassName('chat active-chat')[0].dataset.chat
        image_render(myEmail, myName)
        set(ref(database, 'messages/' + cusid + '/' + id), {
            email: myEmail,
            allow: friend,
            type: "new-encrypted",
            message: message,
            name: myName,
            date: Date.now(),
            dname: cusid
        });
    } else { }
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
var gl = window.gl
try {
    gl["SendMessage"] = func
    gl["OnSendMessage"] = func1
    gl["StopSendMessage"] = func1
} catch {
    window.gl = {}
    gl["SendMessage"] = func
}