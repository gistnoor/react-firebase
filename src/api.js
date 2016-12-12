var firebase = require('firebase/database');

const post = (url, body) => fetch(url, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body || {}),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(res => res.json());

export const signin = (username, password) => post('/api/signin', { username, password });
export const signup = (username, password) => post('/api/signup', { username, password });
export const signout = () => post('/api/signup');


let firebaseConfig = {
    apiKey: "AIzaSyAyM5NGZ1-Rtz4sbYcNq2Ok7DxpuxHszzU ",
    authDomain: "react-wiki-98708.firebaseapp.com",
    databaseURL: "https://react-wiki-98708.firebaseio.com/",
    storageBucket: "gs://react-wiki-98708.appspot.com"
};
firebase.initializeApp(firebaseConfig);  


export const pages = firebase.database();


