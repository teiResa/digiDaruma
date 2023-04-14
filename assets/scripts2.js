/* onclick of the update button, check whick colour is selected, then update the doll's body to be that colour.

The update button (html, line 25)
<button type="button" onclick="updateSelections()">update</button>

The skins.scss file contains all of the information about the looks that are user-changable




*/


const skin = document.querySelector(".skin-color");
// querySelector() is more modern and faster
var uColor = $("input[name='body-color']:checked").val();
/*
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
    //alert('successfully updated doll ');

    // Your other code goes here
    //Select all <input> elements with type="radio"
    //$("#color1").prop("checked", true);

    /*
    if($("#color1").prop("checked", true))
    alert("skin is color1");
    else if($("#color2").prop("checked", true))
    alert("skin is color2");
    else if($("#color3").prop("checked", true))
    alert("skin is color3");
    else
    alert("select a skin colour.");
    */

    //$("input[name='body-color']:checked").val();
    // body name is the html input's assigned name group. Whichever in that name group is selected is that one mentioned in the pop-up alert.

    // https://www.tutsmake.com/jquery-api-method-make-radio-button-check-get-value/#:~:text=Answer%3A%20You%20can%20use%20like%20below%20to%20get,by%20name.%20%24%20%28%22input%20%5B%20name%20%3D%27name%27%5D%3Achecked%22%29.val%20%28%29%3B

    
    var uColor = $("input[name='body-color']:checked").val();

    if(uColor){
     // alert("Selected skin colour -" + uColor);   WORKS

     //$( skin ).css( "background-color", "blue" );   WORKS
/*
     if(uColor == "color1")   {
      $( skin ).css( "background-color", "blue" );
     } else if(uColor == "color2")   {
      $( skin ).css( "background-color", "red" );
     } else if(uColor == "color3")   {
      $( skin ).css( "background-color", "green" );
     } 

     

     if(uColor == "color1")   {
      $( skin ).addClass('colorOpt1');
    } else if(uColor == "color2")   {
     $( skin ).addClass('colorOpt2');
   }
*/
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
 });
});


/*
var uColor = $("input[name='body-color']:checked").val();

var apple = 

$(uColor).change(function() {
 //skin.style.backgroundColor = uColor; 
 alert( "Handler for .change() called." );

});

*/

$(document.querySelector("#displayBodyColor")).append('<p> body colour: ' + uColor + '</p>');





 /* THE COOKIE JAR */

 function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 //document.cookie = "skin='blue";


 /*
 https://forums.phpfreaks.com/topic/187249-saving-radio-button-values-to-cookie/

 https://www.w3schools.com/js/js_cookies.asp
 
 
 */