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
firebase.initializeApp(firebaseConfig);

//Get a reference to the database service
var database = firebase.database();

//Create a child_added function for the database
database.ref().on("child_added", function(childSnapshot) {

    //create a new table row
    var tableRow = $("<tr>");

    //append a new table head
    tableRow.append($("<th>").append(childSnapshot.val().name));
    tableRow.append($("<th>").append(childSnapshot.val().destination));
    tableRow.append($("<th>").append(childSnapshot.val().time));
    tableRow.append($("<th>").append(childSnapshot.val().frequency));

    //append the table tow to the html
    $("#trains").append(tableRow);
});

//Create an onClick function for the submit button
$("#submit").on("click", function(event) {

    //Prevent the submit button from reloading the page
    event.preventDefault();

    //create a variable named newTrain that stores an object of data input from the user
    var newTrain = {
        name: $("#train-name").val().trim(),
        destination: $("#train-destination").val().trim(),
        time: $("#train-time").val().trim(),
        frequency: $("#train-frequency").val().trim()
    }

    //push newTrain up to the database
    database.ref().push(newTrain);
});


