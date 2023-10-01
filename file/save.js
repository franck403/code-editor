function save() {
    if (window.savelist == undefined) {
        window.savelist = []
    }
    var random = String(Math.random()).split(".")[1]
    window.savelist.push(random)
    eval(`window.saved${random} = "${monaco.editor.getEditors()[0].getValue().replaceAll('"',"gcode.custom1")}";window.saved = "${monaco.editor.getEditors()[0].getValue().replaceAll('"',"gcode.custom1")}";`)
    return window.savelist[-1]
}

function runFromString(func) {
    var func2 = Function(func); 
    var result = func2()
    console.log(result);
    return result 
}

function createBackup() {
    runFromString(`window.backup = ${monaco.editor.getEditors()[0].getValue().replaceAll('gcode.custom1','"')}`)
}

function load(id) {
    createBackup()
    monaco.editor.getEditors()[0].setValue(runFromString(`return window.saved${id};`).replaceAll('gcode.custom1','"'))
}


function loadLast() {
    load(window.saved)
}

function loadFromBackup() {
    monaco.editor.getEditors()[0].setValue(runFromString(`return window.backup`).replaceAll('gcode.custom1','"'))
}