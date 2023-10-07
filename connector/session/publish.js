function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function  PublishExtention() {
    run()
    getEmail()
    getName()
    var myExtName = document.getElementsByName("name")[0].value.replace(/[^A-Za-z0-9]/g, '')
    var desc = document.getElementsByName("desc")[0].value.replace(/[^A-Za-z0-9]/g, '')
    if (myExtName != '' && desc != ''){
        var ext = firebase.database().ref('extention/lib/' + cusid + '/').push()
        localStorage.ext = ext
        ext.set({
            email: email(),
            user_name: Name(),
            name: myExtName,
            description:desc,
            content: compileContent
        });
    }
}