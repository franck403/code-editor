function save() {
    if (window.savelist == undefined) {
        window.savelist = []
    }
    var elm = document.querySelectorAll('.monaco-mouse-cursor-text')
    elm.forEach((note) => {
        if (note.type == "textarea") {
            var val = note.value
            var random = String(Math.random()).split(".")[1]
            var code = `window.saved${random} = "${val}"`
            window.savelist.push(random)
            console.log(code)
            eval(code)
        }
    });
    return window.savelist
}