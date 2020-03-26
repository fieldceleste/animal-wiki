// Back end ------>
var snakes = 0;
var whales= 1;
var bats= 2;
var results= [];







// Front End------->
$(document).ready(function(){
  $("#wiki").submit(function(event) {
    event.preventDefault();
  var animals1 = $("input:radio[name=animals1]:checked").val();
  var animals2 = $("input:radio[name=animals2]:checked").val();
  var aniamls3= $("input:radio[name=animals3]:checked").val();
