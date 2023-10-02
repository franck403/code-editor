var func = (functionData) => {
    functionData()
}
try {
    gl.push(func)
} catch {
    window.gl = {}
}