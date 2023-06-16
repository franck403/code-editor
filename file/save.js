function save() {
    var elm = document.querySelectorAll('.monaco-mouse-cursor-text')
    elm.forEach((note) => {
        if (note.type = "textarea") {
            var val = note.value
            var random = String(Math.random()).split(".")[1]
            var code = `window.saved${random} = ${val}`
            console.log(code)
            eval(code)
        }
    });
}