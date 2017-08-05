import firebase from 'firebase'


const config = {

    apiKey: "AIzaSyCwSKOhq1JGVweOzG9Cg8xJkSlQrU5_O38",
    authDomain: "webonics-1349.firebaseapp.com",
    databaseURL: "https://webonics-1349.firebaseio.com",
    storageBucket: "webonics-1349.appspot.com",

}

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login')
export const firebaseAuth = firebase.auth