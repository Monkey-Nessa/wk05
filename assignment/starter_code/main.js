console.log ('connected');

$('#submit-btn').click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  if (userInput === "la") {
    $('body').css('background', 'url(images/la.jpg)')
  }
    else if (userInput === "la") {
      $('body').css('background', 'url(images/la.jpg)')
    }
    else if (userInput === "austin") {
      $('body').css('background', 'url(images/austin.jpg)')
  }
    else if (userInput === "sf") {
      $('body').css('background', 'url(images/sf.jpg)')
  }
  else if (userInput === "sydney") {
    $('body').css('background', 'url(images/sydney.jpg)')
  }
})
