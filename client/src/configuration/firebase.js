import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "react-crud-bf474.firebaseapp.com",
    databaseURL: "https://react-crud-bf474.firebaseio.com",
    projectId: "react-crud-bf474",
    storageBucket: "react-crud-bf474.appspot.com",
    messagingSenderId: "887858686521",
    appId: "1:887858686521:web:1ba4321d641578bd75bbe8"
})

export const auth = app.auth()
export default app