function save() {
    if (window.savelist == undefined) {
        window.savelist = []
    }
    var elm = document.querySelectorAll('.monaco-mouse-cursor-text')
    elm.forEach((note) => {
        if (note.type == "textarea") {
            var val = note.value
            var random = String(Math.random()).split(".")[1]
            window.savelist.push(random)
            var myblob = new Blob([val], {
                type: 'text/plain'
            });
            var code = `window.saved${random} = "${myblob}"`
            console.log(code)
            eval(code)
        }
    });
    return window.savelist
}


function load(id) {
    var file = `return window.saved${id}"`
    var file = eval(file)
    const reader = new FileReader();

    reader.addEventListener(
    "load",
    () => {
        console.log(reader.result)
    },
    false
    );

    if (file) {
    reader.readAsText(file);
    }
}