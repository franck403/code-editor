function compile(code) {
    return code.replaceAll("Thread","async").replaceAll("global ","window.")
}