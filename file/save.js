function save() {
    var elm = document.getElementsByClassName("monaco-mouse-cursor-text")
    elm.forEach((note) => {
        if (note.type = "textarea") {
            var val = note.value
            var random = String(Math.random()).split(".")[1]
            var code = `window.${random} = ${val}`
            eval(code)
        }
    });
}