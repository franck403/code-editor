function save() {
    if (window.savelist == undefined) {
        window.savelist = []
    }
    var val = monaco.editor.getEditors()[0].getValue()
    var random = String(Math.random()).split(".")[1]
    window.savelist.push(random)
    var val = val.replaceAll('"',"gcode.custom1")
    var code = `window.saved${random} = "${val}"`
    console.log(code)
    eval(code)
    var code = `window.saved = "${val}"`
    eval(code)
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
            monaco.editor.getEditors()[0].setValue(runFromString(`return window.saved${id};`).replaceAll('gcode.custom1','"'))
        }
    });
}


function loadLast() {
    load(window.saved)
}