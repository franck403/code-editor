function run() {
    if (!window.rgtnhjgfthuhbtfrnjgtrnjgtfrjufhun) {
        window.rgtnhjgfthuhbtfrnjgtrnjgtfrjufhun = true
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
        firebase.initializeApp(firebaseConfig);
        window.Datafire = firebase.database();
    }
    clearLog()
    save()
    runFromString(compile(loadLastReturn()))
    loadLog()
}
window.rgtnhjgfthuhbtfrnjgtrnjgtfrjufhun = false