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
   currSkin.style.backgroundColor = "coral"; //blue
var currTorso = document.getElementById('torso');
   currTorso.classList.add('spritePos0', 'chestCorrect');
var currChest = document.getElementById('chest');
   currChest.classList.add('chestFu');
var currEarL = document.querySelector('#ear-left');
var currEarR = document.querySelector('#ear-right');
   currEarL.classList.add('earStyle0');
   currEarR.classList.add('earStyle0');
var currBrowL = document.querySelector('#brow-left');
var currBrowR = document.querySelector('#brow-right');
   currBrowL.classList.add('browBasicL');
   currBrowR.classList.add('browBasicR');
var currBindi = document.getElementById('bindi');
   currBindi.classList.add('bindiBasic');
var currNose = document.getElementById('nose');
   currNose.classList.add('noseBasic');
var currMouth = document.getElementById('mouth');
   currMouth.classList.add('mouthBasic');
var currCheekL = document.querySelector('#FH-left');
var currCheekR = document.querySelector('#FH-right'); 
   currCheekL.classList.add('cheekBasicL');
   currCheekR.classList.add('cheekBasicR');






var optnRose = document.getElementById('colorRose');
  optnRose.style.color ="#edb0b7";
var optnRed = document.getElementById('colorRed');
  optnRed.style.color ="#f4555f";
var optnPeach = document.getElementById('colorPeach');
  optnPeach.style.color ="#FFCBA4";
  var optnOrange = document.getElementById('colorOrange');
  optnOrange.style.color ="#fca54d";
  var optnGold = document.getElementById('colorGold');
  optnGold.style.color ="#DAA520";
  var optnGreen = document.getElementById('colorGreen');
  optnGreen.style.color ="#8cc063";
  var optnBlue = document.getElementById('colorBlue');
  optnBlue.style.color ="#0183cd";
var optnPurple = document.getElementById('colorPurple');
  optnPurple.style.color = "#9383c4";

  var optnWhite = document.getElementById('colorWhite');
  optnWhite.style.color ="#dbdbdb";
  var optnBlack = document.getElementById('colorBlack');
  optnBlack.style.color ="#45443d";
  












$(document).ready(function () { /* Skin */
        


 $( '#color1' ).on( 'click', function() { 
     $('#displayBodyColor').html( 'Body color1 is selected!' );
     $('#colorMeans').html( 'Red == Good fortune' );
     

     const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "red";
}); 

$( '#color2' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color2 is selected!' );
 $('#colorMeans').html( 'Green == Physical Wellness' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "green";
}); 

$( '#color3' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color3 (blue) is selected!' ); 
 $('#colorMeans').html( 'Blue == Academic success' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "#0183cd"; //blue
}); 

$( '#color4' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color4 is selected!' );
 $('#colorMeans').html( 'Green == Physical Wellness' ); 

 const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "#";
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
 $('#displayChestPattern').html( 'chest chestPatt1 (Fu) is selected!' );

 const currChest = document.getElementById('chest');
 currChest.classList.add('chestFu');
 currChest.classList.remove('chestRobotCat', 'chestHeart');
}); 

$( '#chestPatt2' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt2 (Bell) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('chestRobotCat');
   currChest.classList.remove('chestFu', 'chestHeart');
}); 

$( '#chestPatt3' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt3 (Heart) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('chestHeart');
   currChest.classList.remove('chestRobotCat', 'chestFu');
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
 $( '#earSet0' ).on( 'click', function() { 
     $('#displayEarShape').html( 'Ear earSet0 is selected!' );

     const currEarL = document.querySelector('#ear-left');
     const currEarR = document.querySelector('#ear-right');

     currEarL.classList.add('earStyle0');
     currEarL.classList.remove('earSprite1l', 'earSprite2l', 'earShibaL');
     currEarR.classList.add('earStyle0');
     currEarR.classList.remove('earSprite1r', 'earSprite2r', 'earShibaR');

}); 
        
 $( '#earSet1' ).on( 'click', function() { 
     $('#displayEarShape').html( 'Ear earSet1 is selected!' );

     const currEarL = document.querySelector('#ear-left');
     const currEarR = document.querySelector('#ear-right');

     currEarL.classList.add('earSprite1l');
     currEarL.classList.remove('earSprite2l', 'earShibaL');
     currEarR.classList.add('earSprite1r');
     currEarR.classList.remove('earSprite2r', 'earShibaR');
}); 

$( '#earSet2' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet2 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('earSprite2l');
 currEarL.classList.remove('earSprite1l', 'earShibaL');
 currEarR.classList.add('earSprite2r');
 currEarR.classList.remove('earSprite1r', 'earShibaR');
}); 

$( '#earSet3' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet3 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('earShibaL');
 currEarL.classList.remove('earSprite1l', 'earSprite2l');
 currEarR.classList.add('earShibaR');
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

$( '#browSet0' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet2 (none) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.remove('browRobotCatL', 'browBasicL', 'browSprite1l', 'browSprite3l');
 currBrowR.classList.remove('browRobotCatR', 'browBasicR', 'browSprite3r');
}); 
        
 $( '#browSet1' ).on( 'click', function() { 
     $('#displayBrows').html( 'brow browSet1 (basic) is selected!' );

     const currBrowL = document.querySelector('#brow-left');
     const currBrowR = document.querySelector('#brow-right');

     currBrowL.classList.add('browBasicL');
     currBrowL.classList.remove('browRobotCatL', 'browSprite2l', 'browSprite3l');
     currBrowR.classList.add('browBasicR');
     currBrowR.classList.remove('browRobotCatR', 'browSprite2r', 'browSprite3r');
}); 

$( '#browSet2' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet2 (unibrow) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('browRobotCatL');
 currBrowL.classList.remove('browSprite2l', 'browSprite1l', 'browSprite3l');
 currBrowR.classList.add('browRobotCatR');
 currBrowR.classList.remove('browSprite2r', 'browSprite1r', 'browSprite3r');
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

/* <div class="brow-centre spriteContainer1" id="bindi"></div>
 */

$(document).ready(function () { /* Bindi */

$( '#bindiPatt0' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt0 (none) is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiStyle0');
 currBindi.classList.remove('bindiStyle1', 'bindiRobotCat', 'bindiStyle3');
}); 
        
 $( '#bindiPatt1' ).on( 'click', function() { 
     $('#displayBindi').html( 'bindi bindiPatt1 is selected!' );

     const currBindi = document.getElementById('bindi');

     currBindi.classList.add('bindiStyle1');
     currBindi.classList.remove('bindiStyle0', 'bindiRobotCat', 'bindiStyle3');
}); 

$( '#bindiPatt2' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt2 (RocotCat) is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiRobotCat');
 currBindi.classList.remove('bindiStyle1', 'bindiStyle3');
}); 

$( '#bindiPatt3' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt3 is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiStyle3');
 currBindi.classList.remove('bindiStyle1', 'bindiRobotCat');
}); 

});


/* Snout and Facial Hair

<div class="snout">
      <div class="facial-hair-left spriteContainer1" id="FH-left"></div>
      <div class="breathers">
       <div class="nose spriteContainer1" id="nose"></div>
       <div class="mouth spriteContainer1" id="mouth"></div>
      </div>
      <div class="facial-hair-right spriteContainer1" id="FH-right"></div>
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
        
 $( '#nose0' ).on( 'click', function() { 
  $('#displayNose').html( 'nose nose0 (none) is selected!' );

  const currNose = document.getElementById('nose');

  currNose.classList.remove('noseBasic', 'noseRobotCat', 'noseShiba');
 });
 
 $( '#nose1' ).on( 'click', function() { 
     $('#displayNose').html( 'nose nose1 (basic) is selected!' );

     const currNose = document.getElementById('nose');

     currNose.classList.add('noseBasic');
     currNose.classList.remove('noseRobotCat', 'noseShiba');
}); 

$( '#nose2' ).on( 'click', function() { 
 $('#displayNose').html( 'nose nose2 (RobotCat) is selected!' );

 const currNose = document.getElementById('nose');

 currNose.classList.add('noseRobotCat');
 currNose.classList.remove('noseBasic', 'noseShiba');
}); 

$( '#nose3' ).on( 'click', function() { 
 $('#displayNose').html( 'nose nose3 (Shiba) is selected!' );

 const currNose = document.getElementById('nose');

 currNose.classList.add('noseShiba');
 currNose.classList.remove('noseBasic', 'noseRobotCat');
}); 

});

$(document).ready(function () { /* Mouth */
      
 $( '#mouth0' ).on( 'click', function() { 
  $('#displayMouth').html( 'mouth mouth0 (none) is selected!' );

  const currMouth = document.getElementById('mouth');

  currMouth.classList.remove('mouthBasic', 'mouthRobotCat', 'mouthShiba');
 }); 

 $( '#mouth1' ).on( 'click', function() { 
     $('#displayMouth').html( 'mouth mouth1 is selected!' );

     const currMouth = document.getElementById('mouth');

     currMouth.classList.add('mouthBasic');
     currMouth.classList.remove('mouthRobotCat', 'mouthShiba');
}); 

$( '#mouth2' ).on( 'click', function() { 
 $('#displayMouth').html( 'mouth mouth2 is selected!' );

 const currMouth = document.getElementById('mouth');

 currMouth.classList.add('mouthRobotCat');
 currMouth.classList.remove('mouthBasic', 'mouthShiba');
}); 

$( '#mouth3' ).on( 'click', function() { 
 $('#displayMouth').html( 'mouth mouth3 (shiba) is selected!' );

 const currMouth = document.getElementById('mouth');

 currMouth.classList.add('mouthShiba');
 currMouth.classList.remove('mouthBasic', 'mouthRobotCat');
}); 

});

$(document).ready(function () { /* Facial hair or cheeks */
   

 $( '#fhair0' ).on( 'click', function() { 
  $('#displayFacialHair').html( 'Cheeks fhair0 is selected!' );

  const currCheekL = document.querySelector('#FH-left');
  const currCheekR = document.querySelector('#FH-right');

  currCheekL.classList.remove('cheekBasicL', 'cheekRobotCatL', 'fhSprite3l');
  currCheekR.classList.remove('cheekBasicR','cheekRobotCatR', 'fhSprite3r');
 }); 

 $( '#fhair1' ).on( 'click', function() { 
     $('#displayFacialHair').html( 'Cheeks fhair1 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');
    
     currCheekL.classList.add('cheekBasicL');
     currCheekL.classList.remove('cheekBasicL','cheekRobotCatL', 'cheekShibaL');
     currCheekR.classList.add('fhSprite1r');
     currCheekR.classList.remove('cheekBasicR', 'cheekRobotCatR', 'cheekShibaR');
}); 

$( '#fhair2' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair2 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('cheekRobotCatL');
     currCheekL.classList.remove('cheekBasicL', 'cheekShibaL');
     currCheekR.classList.add('cheekRobotCatR');
     currCheekR.classList.remove('fhSprite1r', 'cheekShibaR');
}); 

$( '#fhair3' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair3 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('cheekShibaL');
     currCheekL.classList.remove('cheekBasicL', 'cheekRobotCatL');
     currCheekR.classList.add('cheekShibaR');
     currCheekR.classList.remove('fhSprite1r', 'cheekRobotCatR');
}); 

});