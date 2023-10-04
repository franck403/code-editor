function run() {
    clearLog()
    save()
    runFromString(compile(loadLastReturn()))
    loadLog()
}