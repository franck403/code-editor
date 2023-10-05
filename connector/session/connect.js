script("https://beta.chat.geoloup.com/d/session/main.js")

function sendMessage() {
    const message = document.querySelector("#message").value;
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(message, "*");
  }
window.addEventListener('message', function(event) {
    console.log("Message received from the child: " + event.data); // Message received from child
});