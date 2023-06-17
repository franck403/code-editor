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
            var code = `window.saved${random} = ${val}`
            console.log(code)
            eval(code)
        }
    });
    return window.savelist
}


function load(id) {
    var file = `
    var val = window.saved${id}";
    var file = new Blob([val], {
        type: 'text/plain';
    });
    return file
    `
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


function loadall() {
    var r = save()
    r.forEach((id) => {
        load(id)
    });
}