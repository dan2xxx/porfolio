import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDiwaLm4w16xEDxM6y7a6WoAu-_N3CBE7A",
  authDomain: "portfolio-b8aa9.firebaseapp.com",
  databaseURL: "https://portfolio-b8aa9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-b8aa9",
  storageBucket: "portfolio-b8aa9.appspot.com",
  messagingSenderId: "967010287012",
  appId: "1:967010287012:web:821df9527de62b55431531",
  measurementId: "G-26PMYGJRXH"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
      storage
    }}>
      <App />
    </Context.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

