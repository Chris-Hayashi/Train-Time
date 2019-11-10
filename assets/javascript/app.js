//place firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyDld-6WztEpQKtPzx2XMOF6pIrMhmRF42w",
    authDomain: "bootcamp-733c9.firebaseapp.com",
    databaseURL: "https://bootcamp-733c9.firebaseio.com",
    projectId: "bootcamp-733c9",
    storageBucket: "bootcamp-733c9.appspot.com",
    messagingSenderId: "706824668500",
    appId: "1:706824668500:web:3ac08561c3ebdcb1b334c1",
    measurementId: "G-PM999CGJNS"
  };

//initialize firebase
firebaseConfig.initializeApp(firebaseConfig);

//Get a reference to the database service
var database = firebase.database();

//Create a "value" function for the database
database.ref().on("value", function(snapshot) {




});