var func = () => {
    
}

var gl = window.gl
try {
    gl["fetch"] = func
} catch {
    window.gl = {}
    gl["fetch"] = func
}