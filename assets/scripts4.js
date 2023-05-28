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

 
        
 $( '#color1' ).on( 'click', function() { 
     $('#displayBodyColor').html( 'Body color1 is selected!' );

     const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "red";
}); 

$( '#color2' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color2 is selected!' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "green";
}); 

$( '#color3' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color3 is selected!' ); 

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
     $('#displayTorsoPattern').html( 'Torso torPatt1 is selected!' );

     const currTorso = document.getElementById('torso');

     /*
     currTorso.style.backgroundColor = "purple";
     */

     currTorso.classList.add('spritePos1', 'chestCorrect');
     currTorso.classList.remove('spritePos2', 'spritePos3');

     
}); 
$( '#torPatt2' ).on( 'click', function() { 
     $('#displayTorsoPattern').html( 'Torso torPatt2 is selected!' );

     const currTorso = document.getElementById('torso');
     /* currTorso.style.backgroundColor = "#4D0F28"; */
     
     currTorso.classList.add('spritePos2', 'chestCorrect');
     currTorso.classList.remove('spritePos1', 'spritePos3');
}); 
$( '#torPatt3' ).on( 'click', function() { 
     $('#displayTorsoPattern').html( 'Torso torPatt3 is selected!' );

     const currTorso = document.getElementById('torso');
     /*
     currTorso.style.backgroundColor = "#9867C5"; */
     currTorso.classList.add('spritePos3', 'chestCorrect');
     currTorso.classList.remove('spritePos1', 'spritePos2');
}); 

$( '#chestPatt1' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt1 is selected!' );

 const currChest = document.getElementById('chest');
 currChest.style.backgroundColor = "#E39FF6";
}); 

$( '#chestPatt2' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt2 is selected!' );

 const currChest = document.getElementById('chest');
 currChest.style.backgroundColor = "#A45EE5";
}); 


});

/* Ears

<input type="radio" name="ear-sets" id="earSet3" value="earSet3">
       <label for="earSet3"> Elongated</label><br>

<div class="ears">
    <div class="ear-left ear-color " id="ears"></div>
    <div class="ear-right ear-color " id="ears"></div>
   </div>

<div id="displayEarShape"> </div>

*/


$(document).ready(function () {
        
 $( '#earSet1' ).on( 'click', function() { 
     $('#displayEarShape').html( 'Ear earSet1 is selected!' );

     const currEarL = document.querySelector('#ear-left');
     const currEarR = document.querySelector('#ear-right');

     currEarL.classList.add('earSprite1l');
     currEarL.classList.remove('earSprite2l', 'earSprite3l');
     currEarR.classList.add('earSprite1r');
     currEarR.classList.remove('earSprite2r', 'earSprite3r');
}); 

$( '#earSet2' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet2 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('earSprite2l');
 currEarL.classList.remove('earSprite1l', 'earSprite3l');
 currEarR.classList.add('earSprite2r');
 currEarR.classList.remove('earSprite1r', 'earSprite3r');
}); 

$( '#earSet3' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet3 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('earSprite3l');
 currEarL.classList.remove('earSprite1l', 'earSprite2l');
 currEarR.classList.add('earSprite3r');
 currEarR.classList.remove('earSprite1r', 'earSprite2r');
}); 

});

/* Eyebrows (brows) and bindi 

  <input type="radio" name="brow-set" id="browSet3" value="brow-3">
      <label for="brow-3"> Elongated</label><br>

     <div class="brows">
      <div class="brow-left"></div>
      <div class="brow-centre"></div>
      <div class="brow-right"></div>
     </div>


       <div id="displayBrows"> </div>
       <div id="displayBindi"> </div> 
*/

$(document).ready(function () {
        
 $( '#browSet1' ).on( 'click', function() { 
     $('#displayBrows').html( 'brow browSet1 is selected!' );

     const currBrowL = document.getElementById('#brow-left');
     const currBrowR = document.getElementById('#brow-right');

     currBrowL.classList.add('browSprite1l');
     currBrowL.classList.remove('browSprite2l', 'browSprite3l');
     currBrowR.classList.add('browSprite1r');
     currBrowR.classList.remove('browSprite2r', 'browSprite3r');
}); 

$( '#browSet2' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet2 is selected!' );

 const currBrowL = document.getElementById('#brow-left');
 const currBrowR = document.getElementById('#brow-right');

 currBrowL.classList.add('browSprite2l');
 currBrowL.classList.remove('browSprite1l', 'browSprite3l');
 currBrowR.classList.add('browSprite2r');
 currBrowR.classList.remove('browSprite1r', 'browSprite3r');
}); 


});