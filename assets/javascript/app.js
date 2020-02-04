var firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


// Button for adding train
$("#submit-train-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#inputTrainName").val().trim();
    var trainDest = $("#inputDestination").val().trim();
    var trainFirst = moment($("#inputFirstTrainTime").val().trim(), "HH:mm").format("X");
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

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the text-boxes
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

    // ?
    var  = moment.unix(trainNextArrival).format("hh:mm");


    // Calculate the minutes away
    var trainMinAway = //
        console.log(trainMinAway);


    // Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq),
        $("<td>").text(trainNextArrival),
        $("<td>").text(trainMinAway),
    );

    // Append the new row to the table
    $("#schedule-table > tbody").append(newRow);
