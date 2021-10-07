// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from 'react-dom'
import { App } from "./App";
import { ConfigProvider } from 'antd';
import { MapProvider } from "./components/Map/MapProvider";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5nx4s-0QtrjIWJDOfHBUOzJFldLkR-6o",
    authDomain: "hakaton-21.firebaseapp.com",
    projectId: "hakaton-21",
    storageBucket: "hakaton-21.appspot.com",
    messagingSenderId: "740901348912",
    appId: "1:740901348912:web:2b31e4d1330322e1ea6ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(<ConfigProvider ><MapProvider>
    <App />
</MapProvider>,</ConfigProvider>, document.getElementById('root'));



