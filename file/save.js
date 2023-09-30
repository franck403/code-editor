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
            var val = val.replaceAll('"',"gcode.custom1")
            var code = `window.saved${random} = "${val}"`
            console.log(code)
            eval(code)
        }
    });
    return window.savelist[-1]
}

function runFromString(func) {
    var func2 = Function(func); 
    var result = func2()
    console.log(result);
    return result 
}

function load(id) {
    console.log(id)
    var elm = document.querySelectorAll('.monaco-mouse-cursor-text')
    elm.forEach((note) => {
        if (note.type == "textarea") {
            note.value = runFromString(`return window.saved${id};`).replaceAll('gcode.custom1','"')
        }
    });
}


function loadLast() {
    load(window.savelist.reverse()[0])
}