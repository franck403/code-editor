
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
        return `<a class="link" onclick="url('${url}')">${url}</a>`;
    })
}

function link_render(message) {
    return urlify(message)
}

function Name() {
    getName()
    return localStorage.getItem("name")
}

function message_render(message, type = "none") {
    var messages = (function (t) {
        var r = /[^\u0300-\u036F\u0489]+/g;
        var unzalgo = function () {
            return (t.match(r) || [""]).join("");
        };
        return unzalgo()
    })(message);
    if (messages != undefined && messages != "") {
        var message_good = messages
    } else {
        var message_good = message
    }
    var message_start = message_good.substring(0, 100);
    if (type == "none") {
        return link_render(message_start).replaceAll("\n", "<br>")
    } else {
        return message_start
    }
}
var func = (message, id) => {
    var id = room()
    window.last = [message, id]
    var myEmail = email()
    var myName = Name()
    var fg = message
    var gh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (message != "" && fg.replace(/\s/g, '').length != 0 && myEmail != undefined) {
        var str = message;
        var str1 = str.replaceAll("<", "&lt;")
        var str2 = str1.replaceAll(">", "&gt;")
        var message = str2;
        var message = message_render(message, "nop");
        var name = myName;
        const id = window.push(window.child(window.ref(database), 'messages')).key;
        var friend = "none"
        var cusid = id
        log(`${message} was sended with id of ${id}`)
        window.set(window.ref(database, 'messages/' + cusid + '/' + id), {
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
            } catch { }
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