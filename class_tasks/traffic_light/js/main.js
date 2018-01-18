$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);

function illuminateRed() {
  clearLights();
  $('#stopLight').css("backgroundColor", "red");
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css("backgroundColor", "purple");
}

function clearLights() {
  $('#stopLight').css("backgroundColor", "black");
  $('#slowLight').css("backgroundColor", "black");
  $('#goLight').css("backgroundColor", "black");
}
