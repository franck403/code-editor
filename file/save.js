function save() {
    if (window.savelist == undefined) {
        window.savelist = []
    }
    var random = String(Math.random()).split(".")[1]
    window.savelist.push(random)
    var val = monaco.editor.getEditors()[0].getValue().replaceAll('"',"gcode.custom1")
    eval(`window.saved${random} = "${val}";window.saved = "${random}";`)
    return window.savelist[-1]
}

function runFromString(func) {
    var func2 = Function(func); 
    var result = func2()
    console.log(result);
    return result 
}

function createBackup() {
    runFromString(`window.backup = "${monaco.editor.getEditors()[0].getValue().replaceAll('gcode.custom1','"')}"`)
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

function cacheSave(code) {
    localStorage.setItem("last",code.replaceAll('gcode.custom1','"'))    
}
function cacheGet() {
    var last = localStorage.getItem("last")
    if (last != undefined) {
        return last
    } else {
        return "// ic-hat extention editor"
    } 
}