// doc ready

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBL6MdC8YSMWLRjAPp0XzbaU4sL1NF2T2g",
    authDomain: "train-time-748e6.firebaseapp.com",
    databaseURL: "https://train-time-748e6.firebaseio.com",
    projectId: "train-time-748e6",
    storageBucket: "train-time-748e6.appspot.com",
    messagingSenderId: "1032777039572",
    appId: "1:1032777039572:web:d23b7a5a1db733ac648541",
    measurementId: "G-ZTS4P9KVDN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// global variables
var database = firebase.database()


// display current time from W3
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
} 

$(document).ready(function () {
    startTime();


    // Button for adding train
    $("#submit-train-btn").on("click", function (event) {
        event.preventDefault();

        // Grabs user input
        var trainName = $("#inputTrainName").val().trim();
        var trainDest = $("#inputDestination").val().trim();
        var trainFirstTime = moment($("#inputFirstTrainTime").val().trim(), "HH:mm").format("X");
        var trainFreq = $("#inputFrequency").val().trim();

        // Creates local "temporary" object for holding train data
        var newTrain = {
            name: trainName,
            destination: trainDest,
            firstTrain: trainFirstTime,
            frequency: trainFreq
        };

        // Uploads train data to the database
        database.ref().push(newTrain);

        // console log newTrain info
        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.firstTrain);
        console.log(newTrain.frequency);

        // lets user know train was added - would like to use a modal instead(maybe)
        alert("Train successfully added");

        // Clearing the text-boxes
        $("#inputTrainName").val("");
        $("#inputDestination").val("");
        $("#inputFirstTrainTime").val("");
        $("#inputFrequency").val("");
    });

    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().destination;
        var trainNextArrival = childSnapshot.val().rate;
        var trainFreq = childSnapshot.val().start;

        // Train Info
        console.log(trainName);
        console.log(trainDest);
        console.log(trainFreq);
        console.log(trainNextArrival);

        // First Time (pushed back 1 year to make sure it comes before current time)-from train example
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        // calc the minutes til next train
        var tMinTillTrain = tFrequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinTillTrain);

        // Next Train
        var nextTrain = moment().add(tMinTillTrain, "minutes");

        // Time apart (remainder)
        var tRemainder = diffTime % tFrequency;
        console.log(tRemainder);

        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDest),
            $("<td>").text(trainFreq),
            $("<td>").text(trainNextArrival),
            $("<td>").text(trainMinAway),
        );

        // Append the new row to the table
        $("#train-schedule > tbody").append(newRow);
    });
});