/* onclick of the update button, check whick colour is selected, then update the doll's body to be that colour.

The update button (html, line 25)
<button type="button" onclick="updateSelections()">update</button>

The skins.scss file contains all of the information about the looks that are user-changable




*/

/*
const skin = document.querySelector(".skin-color");
// querySelector() is more modern and faster

function updateColor() {
 skin.style.color = "blue";
}
*/

// Remember to link to the jQuery CDN 

jQuery(document).ready(function() {
       //https://www.scratchcode.io/jquery-form-submit-with-examples/


       /*
 jQuery('#customisationMenu').submit(function(){
  alert('successfully hahaha submitted form');

  // Your other code goes here
});
*/
 jQuery('#btnSubmit').click(function(e){
    e.preventDefault();
    jQuery('#customisationMenu').submit();
    alert('successfully updated doll ');

    // Your other code goes here
 });
});