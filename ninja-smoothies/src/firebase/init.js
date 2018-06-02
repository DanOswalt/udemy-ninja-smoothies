import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC5qbTQ4vpEl7ed3WjbPbn1dqsgyCM-B3U',
  authDomain: 'ninja-smoothies-45006.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-45006.firebaseio.com',
  projectId: 'ninja-smoothies-45006',
  storageBucket: 'ninja-smoothies-45006.appspot.com',
  messagingSenderId: '309439518859'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
