function script(file) {
    var elem = document.createElement("script");
    elem.src = file
    document.getElementsByTagName("head")[0].appendChild(elem)
}