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