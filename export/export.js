function download(text, filename){
    var blob = new Blob([text], {type: "text/plain"});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }
  
  
function codeExport() {
    clearLog()
    save()
    download(compile(loadLastReturn()), "ic-hat.ext");    
    log("[export] file was exported and downloaded")
    loadLog()
}