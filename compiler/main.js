function compile(code) {
    return code.replaceAll("Thread","async").replaceAll("global ","window.").replaceAll("gcod.custom3","gcod.customs3").replaceAll("gcod.custom2","gcod.customs2")
}