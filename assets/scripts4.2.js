/*
   File name: scripts4.js
   Purpose: to update DigiDaruma on-the-fly based on user interactions
   Author: Theresa Balsdon ( @teiResa )
   Creation: 2023-05-27
   Most recent update: 2023-05-28

*/

/* When the radio button (in html) is selected, the following function checks which is selected, prints a receipt, and updates the css to match. 

I have decided to up the changing CSS here because the project is so small. Just seems like the simple choice. */

/* Using let variables to set defaults */
var currSkin = document.getElementById('skin-color');
   currSkin.style.backgroundColor = "red";
var currTorso = document.getElementById('torso');
   currTorso.classList.add('spritePos0', 'chestCorrect');
var currChest = document.getElementById('chest');
   currChest.style.backgroundColor = "#E39FF6";
var currEarL = document.querySelector('#ear-left');
var currEarR = document.querySelector('#ear-right');
   currEarL.classList.add('earSprite1l');
   currEarR.classList.add('earSprite1r');
var currBrowL = document.querySelector('#brow-left');
var currBrowR = document.querySelector('#brow-right');
   currBrowL.classList.add('browSprite1l');
   currBrowR.classList.add('browSprite1r');
var currBindi = document.getElementById('bindi');
   currBindi.classList.add('bindiStyle1');
var currNose = document.getElementById('nose');
   currNose.classList.add('noseStyle1');
var currMouth = document.getElementById('mouth');
   currMouth.classList.add('mouthStyle1');
var currCheekL = document.querySelector('#FH-left');
var currCheekR = document.querySelector('#FH-right'); 
   currCheekL.classList.add('fhSprite1l');
   currCheekL.classList.remove('fhSprite2l', 'fhSprite3l');
   currCheekR.classList.add('fhSprite1r');




















$(document).ready(function () { /* Skin */
        
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
 $('#displayBodyColor').html( 'Body color3 (blue) is selected!' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "#0183cd"; //blue
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

$(document).ready(function () { /* Torso & Chest */

 //For now, the torso and chest patterns are just represented by shades of purple FINISHME
        
 $( '#torPatt0' ).on( 'click', function() { 
  $('#displayTorsoPattern').html( 'Torso torPatt0 is selected!' );

  const currTorso = document.getElementById('torso');

  /*
  currTorso.style.backgroundColor = "purple";
  */

  currTorso.classList.add('spritePos0', 'chestCorrect');
  
  currTorso.classList.remove('spritePos1','spritePos2', 'spritePos3');
}); 

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


$(document).ready(function () { /* Ears */
        
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


$(document).ready(function () { /* Brows */
        
 $( '#browSet1' ).on( 'click', function() { 
     $('#displayBrows').html( 'brow browSet1 is selected!' );

     const currBrowL = document.querySelector('#brow-left');
     const currBrowR = document.querySelector('#brow-right');

     currBrowL.classList.add('browSprite1l');
     currBrowL.classList.remove('browSprite2l', 'browSprite3l');
     currBrowR.classList.add('browSprite1r');
     currBrowR.classList.remove('browSprite2r', 'browSprite3r');
}); 

$( '#browSet2' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet2 is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('browSprite2l');
 currBrowL.classList.remove('browSprite1l', 'browSprite3l');
 currBrowR.classList.add('browSprite2r');
 currBrowR.classList.remove('browSprite1r', 'browSprite3r');
}); 

$( '#browSet3' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet3 is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('browSprite3l');
 currBrowL.classList.remove('browSprite1l', 'browSprite2l');
 currBrowR.classList.add('browSprite3r');
 currBrowR.classList.remove('browSprite1r', 'browSprite2r');
}); 


});

/* <div class="brow-centre spriteContainerTemp" id="bindi"></div>
 */

$(document).ready(function () { /* Bindi */
        
 $( '#bindiPatt1' ).on( 'click', function() { 
     $('#displayBindi').html( 'bindi bindiPatt1 is selected!' );

     const currBindi = document.getElementById('bindi');

     currBindi.classList.add('bindiStyle1');
     currBindi.classList.remove('bindiStyle2', 'bindiStyle3');
}); 

$( '#bindiPatt2' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt2 is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiStyle2');
 currBindi.classList.remove('bindiStyle1', 'bindiStyle3');
}); 

$( '#bindiPatt3' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt3 is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiStyle3');
 currBindi.classList.remove('bindiStyle1', 'bindiStyle2');
}); 

});


/* Snout and Facial Hair

<div class="snout">
      <div class="facial-hair-left spriteContainerTemp" id="FH-left"></div>
      <div class="breathers">
       <div class="nose spriteContainerTemp" id="nose"></div>
       <div class="mouth spriteContainerTemp" id="mouth"></div>
      </div>
      <div class="facial-hair-right spriteContainerTemp" id="FH-right"></div>
     </div>

  <div id="displayFacialHair"> </div>
  <div id="displayNose"> </div>
  <div id="displayMouth"> </div> 

  <input type="radio" name="nose-style" id="nose1" value="nose1">
      <label for="nose1"> Style 1</label><br>
     <input type="radio" name="nose-style" id="nose2" value="nose2">

  <input type="radio" name="mouth-style" id="mouth1" value="mouth1">
      <label for="mouth1"> Style 1</label><br>

      <input type="radio" name="fhair-style" id="fhair3" value="fhair3">
      <label for="fhair3"> Style 3</label><br>

      .noseStyle1
      mouthStyle3
      fhSprite3r
*/

$(document).ready(function () { /* Nose */
        
 $( '#nose1' ).on( 'click', function() { 
     $('#displayNose').html( 'nose nose1 is selected!' );

     const currNose = document.getElementById('nose');

     currNose.classList.add('noseStyle1');
     currNose.classList.remove('noseStyle2', 'noseStyle3');
}); 

$( '#nose2' ).on( 'click', function() { 
 $('#displayNose').html( 'nose nose2 is selected!' );

 const currNose = document.getElementById('nose');

 currNose.classList.add('noseStyle2');
 currNose.classList.remove('noseStyle1', 'noseStyle3');
}); 

$( '#nose3' ).on( 'click', function() { 
 $('#displayNose').html( 'nose nose3 is selected!' );

 const currNose = document.getElementById('nose');

 currNose.classList.add('noseStyle3');
 currNose.classList.remove('noseStyle1', 'noseStyle2');
}); 

});

$(document).ready(function () { /* Mouth */
        
 $( '#mouth1' ).on( 'click', function() { 
     $('#displayMouth').html( 'mouth mouth1 is selected!' );

     const currMouth = document.getElementById('mouth');

     currMouth.classList.add('mouthStyle1');
     currMouth.classList.remove('mouthStyle2', 'mouthStyle3');
}); 

$( '#mouth2' ).on( 'click', function() { 
 $('#displayMouth').html( 'mouth mouth2 is selected!' );

 const currMouth = document.getElementById('mouth');

 currMouth.classList.add('mouthStyle2');
 currMouth.classList.remove('mouthStyle1', 'mouthStyle3');
}); 

$( '#mouth3' ).on( 'click', function() { 
 $('#displayMouth').html( 'mouth mouth3 is selected!' );

 const currMouth = document.getElementById('mouth');

 currMouth.classList.add('mouthStyle3');
 currMouth.classList.remove('mouthStyle1', 'mouthStyle2');
}); 

});

$(document).ready(function () { /* Facial hair or cheeks */
        
 $( '#fhair1' ).on( 'click', function() { 
     $('#displayFacialHair').html( 'Cheeks fhair1 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');
    
     currCheekL.classList.add('fhSprite1l');
     currCheekL.classList.remove('fhSprite2l', 'fhSprite3l');
     currCheekR.classList.add('fhSprite1r');
     currCheekR.classList.remove('fhSprite2r', 'fhSprite3r');
}); 

$( '#fhair2' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair2 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('fhSprite2l');
     currCheekL.classList.remove('fhSprite1l', 'fhSprite3l');
     currCheekR.classList.add('fhSprite2r');
     currCheekR.classList.remove('fhSprite1r', 'fhSprite3r');
}); 

$( '#fhair3' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair3 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('fhSprite3l');
     currCheekL.classList.remove('fhSprite1l', 'fhSprite2l');
     currCheekR.classList.add('fhSprite3r');
     currCheekR.classList.remove('fhSprite1r', 'fhSprite2r');
}); 

});