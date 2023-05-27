/*
   File name: scripts4.js
   Purpose: to update DigiDaruma on-the-fly based on user interactions
   Author: Theresa Balsdon ( @teiResa )
   Creation: 2023-05-27
   Most recent update: 2023-05-28

*/

/* When the radio button (in html) is selected, the following function checks which is selected, prints a receipt, and updates the css to match. 

I have decided to up the changing CSS here because the project is so small. Just seems like the simple choice. */

$(document).ready(function () {

 //For now, the ears will always match the skin colour FINISHME
        
 $( '#color1' ).on( 'click', function() { 
     $('#displayBodyColor').html( 'Body color1 is Clicked!' );

     const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "red";

     const currEarColor = document.getElementsByClass('ear-color');
     currEarColor.style.backgroundColor = "red";
}); 

$( '#color2' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color2 is Clicked!' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "green";
}); 

$( '#color3' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color3 is Clicked!' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "blue";
}); 
});


/* Chest and torso 
~~~~~~~~~~~~~~~~~~~~

<div class="torso" id="torso" ><div class="chest" id="chest"></div></div>

<input type="radio" name="torso-pattern" id="torPatt1" value="torPatt1" class="torPattOpt1"/>
<input type="radio" name="chest-pattern" id="chestPatt1" value="chestPatt1" class="chestPattOpt1"/>
       <label for="chestPatt1"> chestPatt1</label><br>

<div id="displayTorsoPattern"> </div>
  <div id="displayChestPattern"> </div>
*/

$(document).ready(function () {

 //For now, the torso and chest patterns are just represented by shades of purple FINISHME
        
 $( '#torPatt1' ).on( 'click', function() { 
     $('#displayTorsoPattern').html( 'Torso torPatt1 is Clicked!' );

     const currTorso = document.getElementById('torso');

     /*
     currTorso.style.backgroundColor = "purple";
     */

     currTorso.classList.add('spritePos1');
     currTorso.classList.remove('spritePos2', 'spritePos3');

     
}); 
$( '#torPatt2' ).on( 'click', function() { 
     $('#displayTorsoPattern').html( 'Torso torPatt2 is Clicked!' );

     const currTorso = document.getElementById('torso');
     /* currTorso.style.backgroundColor = "#4D0F28"; */
     
     currTorso.classList.add('spritePos2');
     currTorso.classList.remove('spritePos1', 'spritePos3');
}); 
$( '#torPatt3' ).on( 'click', function() { 
     $('#displayTorsoPattern').html( 'Torso torPatt3 is Clicked!' );

     const currTorso = document.getElementById('torso');
     /*
     currTorso.style.backgroundColor = "#9867C5"; */
     currTorso.classList.add('spritePos3', 'chestCorrect');
     currTorso.classList.remove('spritePos1', 'spritePos2');
}); 

$( '#chestPatt1' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt1 is Clicked!' );

 const currChest = document.getElementById('chest');
 currChest.style.backgroundColor = "#E39FF6";
}); 

$( '#chestPatt2' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt2 is Clicked!' );

 const currChest = document.getElementById('chest');
 currChest.style.backgroundColor = "#A45EE5";
}); 


});