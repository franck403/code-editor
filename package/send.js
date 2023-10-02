var func = (message,id) => {
    console.log(`${message} was sended with id of ${id}`)
}
try {
    gl.push(func)
} catch {
    window.gl = {}
}