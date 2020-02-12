// doc ready
$(document).ready(function () {
    startTime()
    
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBL6MdC8YSMWLRjAPp0XzbaU4sL1NF2T2g",
        authDomain: "train-time-748e6.firebaseapp.com",
        databaseURL: "https://train-time-748e6.firebaseio.com",
        projectId: "train-time-748e6",
        storageBucket: "train-time-748e6.appspot.com",
        messagingSenderId: "1032777039572",
        appId: "1:1032777039572:web:7da1f0b5d4bd3341648541",
        measurementId: "G-H0CYPSFKKT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    // global variables
    var database = firebase.database()
    
    // HTML5 autofocus attribute
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    
    // Form validation 
    function validator() {
        
        if(document.myForm.trainName.length === 0) {
            alert("Please provide train name");
            document.myForm.trainName.focus();
            return false;
        }
        if(document.myForm.trainDest.length === 0) {
            alert( "Please provide train destination");
            document.myForm.trainDest.focus();
            return false;
        }
        if(document.myForm.trainFirst.length === 0) {
            alert( "Please provide train first depature time" );
            document.myForm.trainFirst.focus() ;
            return false;
        }
        if(document.myForm.trainFreq.length === 0) {
            alert("Please provide train frequency");
            document.myForm.trainFreq.focus() ;
            return false;
        }
        return( true );
    }
    
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
    
    
    
    // Button for adding train
    $("#submit-train-btn").on("click", function (event) {
        event.preventDefault();
        $('#myForm').validator()
        
        
        // Grabs user input
        var trainName = $("#inputTrainName").val().trim();
        var trainDest = $("#inputDestination").val().trim();
        var trainFirst = $("#inputFirstTrainTime").val().trim();
        var trainFreq = $("#inputFrequency").val().trim();
        
        
        // Creates local "temporary" object for holding train data
        var newTrain = {
            name: trainName,
            destination: trainDest,
            firstTrain: trainFirst,
            frequency: trainFreq
        };
        
        // Uploads train data to the database
        database.ref().push(newTrain);
        
        // Clearing the text-boxes
        $("#inputTrainName").val("");
        $("#inputDestination").val("");
        $("#inputFirstTrainTime").val("");
        $("#inputFrequency").val("");
    });
    
    database.ref().on("child_added", function (childSnapshot) {
        
        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().destination;
        var trainFirst = childSnapshot.val().firstTrain;
        var trainFreq = childSnapshot.val().frequency;
        
        
        // First Time (pushed back 1 year to make sure it comes before current time)-from train example
        var firstTimeConverted = moment(trainFirst, "HH:mm").subtract(1, "years");
        
        // Current Time
        var currentTime = moment();
        
        var timeDifference = moment().diff(moment(firstTimeConverted), "minutes");
        
        // Time apart (remainder)
        var timeRemain = timeDifference % trainFreq;
        
        // calc the minutes til next train
        var trainMinAway = trainFreq - timeRemain;
        
        // Next Train
        var trainNext = moment().add(trainMinAway, "minutes").format("HH:mm");
        
        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDest),
            $("<td>").text(trainFreq),
            $("<td>").text(trainNext),
            $("<td>").text(trainMinAway),
            );
            
            // Append the new row to the table
            $("#train-schedule").append(newRow);
            
            // hide modal after entry
            $('#myModal').modal('hide');
            
        });
        
        
    });