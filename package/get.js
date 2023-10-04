var func = (functionData) => {
    functionData()
}
var gl = window.gl
try {
    gl["OnMessage"] = func
} catch {
    window.gl = {}
    gl["OnMessage"] = func
}