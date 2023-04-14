

const skin = document.querySelector(".skin-color");
// querySelector() is more modern and faster
var uColor = $("input[name='body-color']:checked").val();








jQuery(document).ready(function() {
 
 var uColor = $("input[name='body-color']:checked").val();

 if(uColor){
  // alert("Selected skin colour -" + uColor);   WORKS

  //$( skin ).css( "background-color", "blue" );   WORKS

  if(uColor == "color1")   {
   $( skin ).addClass('colorOpt1');
 } else if(uColor == "color2")   {
  $( skin ).addClass('colorOpt2');
}

if(uColor == "color1")   {
$( skin ).addClass('colorOpt1');
} else if(uColor == "color2")   {
$( skin ).addClass('colorOpt2');
};
$(document.querySelector("#displayBodyColor")).append('<p> body colour: ' + uColor + '</p>');

 var uEar = $("input[name='ear-shape']:checked").val();
 if(uEar){
  alert("Selected ear shape -" + uEar);
 } 
 
}   //temp because this squiggly was missing

};