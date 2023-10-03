var func = (functionData) => {
    functionData()
}
try {
    gl["OnMessage"] = func
} catch {
    window.gl = {}
    gl["OnMessage"] = func
}