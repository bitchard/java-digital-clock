//function to display the time on the page

$(document).ready(function() {


//variable to store the current time
function displayTime() {
    var currentTime = new Date();
//created the method so getHours,minutes and secounds they will extract hours, 
//miutes and secounds from current time variable.
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var secounds = currentTime.getSecounds();
}
//This gets a handle to the clock div in out html
var clockDiv = documet.getElementById('clock');
{

//Then we set the text inside the clock div
//to the hours. minutes and secounds of the current time.
clockDiv.innerText = hours + " : " + minutes + " : " + secounds;
}

//This runs the dispaly time function for the first time
displayTime();

});
