var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment();
var schedule = {};

// display the current date 
$('#currentDay').text(currentDate);

// event listener for each button
$(".saveBtn").on('click', function () {

    var text = $(this).siblings(".description").val();
 
    var time = $(this).parent().attr("id");

    schedule[time] = text;

    var scheduleS = JSON.stringify(schedule);

    localStorage.setItem('schedule', scheduleS);

    console.log('message');
});




// if local storage have data and Json parse will retrieve the data back to the textarea
// var currentHour = JSON.parse(localStorage.getItem("schedule"));


var storage = localStorage.getItem('schedule');

if (storage) {
    schedule = JSON.parse(storage);
}
else {
    for (var i = 0; i <= 17; i++) {
        schedule[i] = ""
        console.log('');
       
    }
}
//this for loop is for change the textarea color when the time is passing



