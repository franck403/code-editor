script("file/save.js")
script("file/button.js")
script("file/log.js")
script("package/main.js")
script("config/main.js")
script("compiler/main.js")
script("connector/session/connect.js")
importScripts("connector/firebase.js")
script("https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js")
script("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
script("https://www.gstatic.com/firebasejs/8.10.0/firebase.js")


const firebaseConfig = {
    apiKey: "AIzaSyD9po7l-vwO0VrY1rMYDFTYNlEBv54T6do",
    authDomain: "ic-hat.firebaseapp.com",
    databaseURL: "https://ic-hat-default-rtdb.firebaseio.com",
    projectId: "ic-hat",
    storageBucket: "ic-hat.appspot.com",
    messagingSenderId: "720687529085",
    appId: "1:720687529085:web:2d964e880c5e2398058514",
    measurementId: "G-YC8K0D7GLR"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);