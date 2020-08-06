import * as firebase from 'firebase'
import 'firebase/storage'
import React from 'react'

var firebaseConfig = {
  apiKey: "AIzaSyATKICMIPq_KWvDkhI49wjg4eW7jWpdU9g",
  authDomain: "ourmomentum-org.firebaseapp.com",
  databaseURL: "https://ourmomentum-org.firebaseio.com",
  projectId: "ourmomentum-org",
  storageBucket: "ourmomentum-org.appspot.com",
  messagingSenderId: "17190882986",
  appId: "1:17190882986:web:e82d423633fcfe1885cad3",
  measurementId: "G-35PL2GQLMX"
};
firebase.initializeApp(firebaseConfig)

export default firebase;
