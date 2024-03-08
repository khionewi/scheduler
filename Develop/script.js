// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  // Add a click event listener to the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the time-block containing the button that was clicked
    var blockId = $(this).parent().attr("id");
    // Get the user input from the textarea element
    var userDescription = $(this).siblings(".description").val();
    // Save the user input in localStorage
    localStorage.setItem(blockId, userDescription);
  });
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  // Add or remove the past, present, or future class based on the current hour
  // HINT: How can the id attribute of each time-block be used to conditionally
  // add or remove the past, present, and future classes? How can Day.js be used
  // to get the current hour in 24-hour time?

  // Get the current hour in 24-hour time
  var currentHour = dayjs().hour();

  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the hour from the id of the time-block
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Add or remove the past, present, or future class based on the current
    // hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //
    
  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Get the current hour in 24-hour time
  var currentHour = dayjs().hour();

  // Loop through each time-block
  $(".time-block").each(function () {
    // Get the hour from the id of the time-block
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Add or remove the past, present, or future class based on the current
    // hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Get the user input from localStorage and set the value of the corresponding  
  // textarea element
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var userDescription = localStorage.getItem(blockId);
    $(this).children(".description").val(userDescription);
  });

  //
  // TODO: Add code to display the current date in the header of the page.

    //Pcode to display the current date in the header of the page
    var currentDay = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDay);
});
