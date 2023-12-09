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
var currEyeL = document.getElementById('eye-left');
   currEyeL.classList.add('spriteContainer2', 'pos07eyeL')
var currREye = document.getElementById('eye-right');
   currREye.classList.add('eyeRightHidden', 'spriteContainer2', 'pos07eyeR');

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
        
const colorMeaning = document.getElementById('colorMeans');
const currSkin = document.getElementById('skin-color');
const faceSkin = document.getElementById('face-color');


 $( '#color1' ).on( 'click', function() { 
     $('#displayBodyColor').html( 'Body color1 is selected!' );
     $('#colorMeans').html( 'Good fortune' );
     
     currSkin.style.backgroundColor = "red"; // red
     currSkin.style.borderColor = "#f20000";
     faceSkin.style.borderColor = "#f20000";
     colorMeaning.style.color = "#dbdbdb";
     colorMeaning.style.backgroundColor = "red";
}); 

$( '#color2' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color2 is selected!' );
 $('#colorMeans').html( 'Physical Wellness' ); 

 
     currSkin.style.backgroundColor = "#8cc063"; // green
     currSkin.style.borderColor = "#81b35b";
     faceSkin.style.borderColor = "#81b35b";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#8cc063";
}); 

$( '#color3' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color3 (blue) is selected!' ); 
 $('#colorMeans').html( 'Academic success' ); 

 
     currSkin.style.backgroundColor = "#0183cd"; //blue
     currSkin.style.borderColor = "#007ac0";
     faceSkin.style.borderColor = "#007ac0";
     colorMeaning.style.color = "#dbdbdb";
     colorMeaning.style.backgroundColor = "#0183cd";
}); 

$( '#color4' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color4 is selected!' );
 $('#colorMeans').html( 'health and longevity' ); 


     currSkin.style.backgroundColor = "#9383c4"; // purple
     currSkin.style.borderColor = "#8879b7";
     faceSkin.style.borderColor = "#8879b7";
     colorMeaning.style.color = "#dbdbdb";
     colorMeaning.style.backgroundColor = "#9383c4";
}); 

$( '#color6' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color6 is selected!' );
 $('#colorMeans').html( 'love and romance' ); 

 
     currSkin.style.backgroundColor = "#edb0b7"; // pink
     currSkin.style.borderColor = "#e0a6ac";
     faceSkin.style.borderColor = "#e0a6ac";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#edb0b7";
}); 
$( '#color7' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color7 is selected!' );
 $('#colorMeans').html( 'love and romance' ); 

 
     currSkin.style.backgroundColor = "#FFCBA4"; // peach
     currSkin.style.borderColor = "#f2c09b";
     faceSkin.style.borderColor = "#f2c09b";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#FFCBA4";
}); 
$( '#color8' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color8 is selected!' );
 $('#colorMeans').html( 'fertility and safety of children' ); 

 
     currSkin.style.backgroundColor = "#fca54d"; // orange
     currSkin.style.borderColor = "#ef9b48";
     faceSkin.style.borderColor = "#ef9b48";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#fca54d";
}); 
$( '#color9' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color9 is selected!' );
 $('#colorMeans').html( 'wealth and prosperity' ); 

 
     currSkin.style.backgroundColor = "#DAA520"; // gold
     currSkin.style.borderColor = "#CC9B1D";
     faceSkin.style.borderColor = "#CC9B1D";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#DAA520";
}); 
$( '#color10' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color10 is selected!' );
 $('#colorMeans').html( 'support and perseverance' ); 

 
     currSkin.style.backgroundColor = "#dbdbdb"; // hwhite
     currSkin.style.borderColor = "#cdcdcd";
     faceSkin.style.borderColor = "#cdcdcd";
     colorMeaning.style.color = "#555555";
     colorMeaning.style.backgroundColor = "#dbdbdb";
}); 
$( '#color11' ).on( 'click', function() { 
 $('#displayBodyColor').html( 'Body color11 is selected!' );
 $('#colorMeans').html( 'business success'); 

 
    currSkin.style.backgroundColor = "#45443d"; // black
    currSkin.style.borderColor = "#373730";
    faceSkin.style.borderColor = "#373730";
    colorMeaning.style.color = "#dbdbdb";
    colorMeaning.style.backgroundColor = "#45443d";
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

$( '#chestPatt0' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt0 (NULL) is selected!' );

 const currChest = document.getElementById('chest');
 /*currChest.classList.add('chestFu'); */
 currChest.classList.remove('chestFu', 'chestRobotCat', 'chestHeart', /*'spriteContainer1',*/ 'spriteContainer2', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt1' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt1 (Fu) is selected!' );

 const currChest = document.getElementById('chest');
 currChest.classList.add('spriteContainer1', 'chestFu');
 currChest.classList.remove('spriteContainer2', 'chestRobotCat', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt2' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt2 (Bell) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer1','chestRobotCat');
   currChest.classList.remove('spriteContainer2', 'sprite', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt3' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt3 (Heart) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer1', 'chestHeart');
   currChest.classList.remove('spriteContainer2', 'chestRobotCat', 'chestFu', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt4' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt4 (Inked robotcat) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos00chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt5' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt5 (Inked dragon1 ) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos01chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest',  'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt6' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt6 (cat deer) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos02chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt7' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt7 (Lucky1) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos03chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt8' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt8 (mouse) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos04chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos05chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt9' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt9 (dragon2) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos05chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos06chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt10' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt10 (dog, down ear) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos06chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos07chest', 'pos08chest');
}); 

$( '#chestPatt11' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt11 (dog, doge, up ear) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos07chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos08chest');
}); 

$( '#chestPatt12' ).on( 'click', function() { 
 $('#displayChestPattern').html( 'chest chestPatt12 (Unassigned) is selected!' );

 const currChest = document.getElementById('chest');
   currChest.classList.add('spriteContainer2', 'pos08chest');
   currChest.classList.remove('spriteContainer1', 'chestRobotCat', 'chestFu', 'chestHeart', 'pos00chest', 'pos01chest', 'pos02chest', 'pos03chest', 'pos04chest', 'pos05chest', 'pos06chest', 'pos07chest');
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

     currEarL.classList.add('spriteContainer1', 'earStyle0');
     currEarL.classList.remove('spriteContainer2', 'earSprite1l', 'earSprite2l', 'earShibaL', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
     currEarR.classList.add('spriteContainer1', 'earStyle0');
     currEarR.classList.remove('spriteContainer2', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');

}); 
        
 $( '#earSet1' ).on( 'click', function() { 
     $('#displayEarShape').html( 'Ear earSet1 is selected!' );

     const currEarL = document.querySelector('#ear-left');
     const currEarR = document.querySelector('#ear-right');

     currEarL.classList.add('spriteContainer1', 'earSprite1l');
     currEarL.classList.remove('spriteContainer2', 'earStyle0', 'earSprite2l', 'earShibaL', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
     currEarR.classList.add('spriteContainer1', 'earSprite1r');
     currEarR.classList.remove('spriteContainer2','earStyle0', 'earSprite0', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet2' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet2 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer1','earSprite2l');
 currEarL.classList.remove('spriteContainer2', 'earStyle0', 'earSprite1l', 'earShibaL', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer1', 'earSprite2r');
 currEarR.classList.remove('spriteContainer2','earStyle0', 'earSprite0', 'earSprite1r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet3' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear earSet3 is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer1', 'earShibaL');
 currEarL.classList.remove('spriteContainer2', 'earStyle0', 'earSprite1l', 'earSprite2l', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer1', 'earShibaR');
 currEarR.classList.remove('spriteContainer2','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet4' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos00ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos00earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos00earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet5' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos01ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos01earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos01earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet6' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos02ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos02earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos02earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 

$( '#earSet7' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos03ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos03earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos03earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 
$( '#earSet8' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos04ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos04earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos05earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos04earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR','pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos05earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 
$( '#earSet9' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos05ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos05earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos06earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos05earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos06earR', 'pos07earR', 'pos08earR');
}); 
$( '#earSet10' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos06ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos06earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos07earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos06earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos07earR', 'pos08earR');
}); 
$( '#earSet11' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos07ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos07earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos08earL');
 currEarR.classList.add('spriteContainer2', 'pos07earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos08earR');
}); 
$( '#earSet12' ).on( 'click', function() { 
 $('#displayEarShape').html( 'Ear pos08ear is selected!' );

 const currEarL = document.querySelector('#ear-left');
 const currEarR = document.querySelector('#ear-right');

 currEarL.classList.add('spriteContainer2', 'pos08earL');
 currEarL.classList.remove('spriteContainer1', 'earSprite1l', 'earSprite0', 'earSprite2l', 'earShibaL', 'earStyle0', 'pos00earL', 'pos01earL', 'pos02earL', 'pos03earL', 'pos04earL', 'pos05earL', 'pos06earL', 'pos07earL');
 currEarR.classList.add('spriteContainer2', 'pos08earR');
 currEarR.classList.remove('spriteContainer1','earStyle0', 'earSprite0', 'earSprite1r', 'earSprite2r', 'earShibaR', 'pos00earR', 'pos01earR', 'pos02earR', 'pos03earR', 'pos04earR', 'pos05earR', 'pos06earR', 'pos07earR');
}); 

});

/* Eyes (first three) missing */
/*
function eyeHide() {
 $('#displayEyeHide').html( 'Hidden right eye' );

 var hideEye = document.getElementById('eye-right');
  hideEye.style.opacity = 0;

}; 

function eyeUnhide() {
 $('#displayEyeHide').html( 'unHidden right eye' );

 var unhideEye = document.getElementById('eye-right');
  unhideEye.style.opacity = 1;

}; 
*/
/*
function eyeHideUnhide(){
 */
 /*
 var eyeState = document.getElementById('eye-right');
 const input = document.querySelector('#toggleInput');
const toggler = document.querySelector('toggleSwitch');

}*/
/*
function eyeRHide(){

   $('#toggleInput').on('click', function(){

    $('#displayEyeHide').html('RIGHT EYE unHIDDEN');

    const currREye = document.getElementById('eye-right');
      currREye.classList.add('eyeRightUnhidden');
      currREye.classList.remove('eyeRightHidden');
   });
  }
*/
  /* I was thinking this,  but i don't think it would work
  
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event    
  */

  const buttonhi = document.getElementById("heidibutton");

buttonhi.addEventListener("click", () => {
 $('#displayEyeHide').html('CCCCCCCCCCLLLLLLLLLLIIIIIIIIIIICCCCCCCCCCCCCCKKKKKKKKKKK');

    const currREye = document.getElementById('eye-right');

  
    /*
    currREye.classList.add('eyeRightUnhidden');




const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});




https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState


    currREye.addEventListener("toggle", (event) => {
     if (event.classList.contains('eyeRightUnhidden')) {
       $('#displayEyeHide').html('RIGHT EYE is so hiIDDEN');
       currREye.classList.add('eyeRightUnhidden');
      currREye.classList.remove('eyeRightHidden');
     } else {
       $('#displayEyeHide').html('RIGHT EYE is absolutely not unHIDDEN');
       currREye.classList.add('eyeRightHidden');
       currREye.classList.remove('eyeRightUnhidden');
     }
   });
*/

buttonhi.addEventListener("click", (event) => {
 if (currREye.classList.contains('eyeRightHidden')) {
  $('#displayEyeHide').html('IIIIICCCCCCCCCCCCCCKKKKKKKKKKK it hidden but now unhidden');
  currREye.classList.replace('eyeRightHidden', 'eyeRightUnhidden');
 } else if (currREye.classList.contains('eyeRightUnhidden')) {
  $('#displayEyeHide').html('CCCCCCCCCCLLLLLLLLLLIIIII unhidden but now hidden');
  currREye.classList.replace('eyeRightUnhidden', 'eyeRightHidden');
 } else {
  $('#displayEyeHide').html('hidden or unhidden? I know not. I am an error.');
 }

 
});

/*
if (currREye.classList.contains('eyeRightUnhidden')) 
{ alert("unhidden")}
*/


});

  /* Was this, before experiementing:
  
  function eyeRHide(){

   $('#toggleInput').on('click', function(){

    $('#displayEyeHide').html('RIGHT EYE unHIDDEN');

    const currREye = document.getElementById('eye-right');
      currREye.classList.add('eyeRightUnhidden');
      currREye.classList.remove('eyeRightHidden');
   });
  }*/



  /* The set of buttons underneith for temp use */
/*
  function eyeRHide2(){

   $('#eye-set').on('click', function(){

    $('#displayEyeHide').html('RIGHT EYE unHIDDEN');

    const currREye = document.getElementById('eye-right');
      currREye.classList.add('eyeRightUnhidden');
      currREye.classList.remove('eyeRightHidden');
   });
  }

  function eyeOverride(){

   $('#eye-override').on('click', function(){

    $('#displayEyeHide').html('RIGHT EYE HIDDEN');

    const currREye = document.getElementById('eye-right');
      currREye.classList.add('eyeRightHidden');
      currREye.classList.remove('eyeRightUnhidden');

   });

  }                       */
 
 //}

//.toggleSwitch input:checked
/*
toggler.addEventListener("click")
*/
 /*
if (toggler.input="checked") {
 eyeState.style.opacity = "1";
}
*/

 /*
if (eyeState.style.opacity === "0") {
  eyeState.style.opacity = 1;
 } else {
  eyeState.style.opacity = 0;
 };
*/
 /*
 if (eyeState.hasAttribute(style.opacity)){

  eyeState.style.opacity = 1;

 }

*/


/*
 
*/




/*
 makeUnhidden = function(elem){
  elem.classList.toggle("is-active");
 }

 for(var i = 0; i <= eyeState.style.opacity; i++) {


 }*/

 /*
     if (eyeState).style.opacity = 0 {
      eyeHideUnhide();
     } else {eyeHide();};
     

     const style = getComputedStyle(eyeState);

     const opacity = style.opacity
     console.log(opacity);

     if (i = 1) {
      eyeState = style.opacity('0');
     } else if (i = 0) { eyeUnhide();}
     else {alert('hi')}
*/

/*
function eyeHide() {
  $('#displayEyeHide').html( 'Hidden right eye' );

  var hideEye = document.getElementById('eye-right');
   hideEye.style.opacity = 0;

 }; 

 function eyeUnhide() {
  $('#displayEyeHide').html( 'unHidden right eye' );

  var unhideEye = document.getElementById('eye-right');
   unhideEye.style.opacity = 1;

 }; 

*/

$(document).ready(function () { 
 $( '#eyeSet0' ).on( 'click', function() { 
  $('#displayEyeShape').html( 'Eye eyeStyle0 (no eyes) is selected!' );
 
  const currEyeL = document.querySelector('#eye-left');
  const currEyeR = document.querySelector('#eye-right');
 
  currEyeL.classList.add('spriteContainer1', 'eyeStyle0');
  currEyeL.classList.remove('spriteContainer2', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0','pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
  currEyeR.classList.add('spriteContainer1', 'eyeStyle0');
  currEyeR.classList.remove('spriteContainer2', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3','eyeStyle0', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
 }); 
  $( '#eyeSet1' ).on( 'click', function() { 
   $('#displayEyeShape').html( 'Eye eyeStyle1 (round) is selected!' );
  
   const currEyeL = document.querySelector('#eye-left');
   const currEyeR = document.querySelector('#eye-right');
  
   currEyeL.classList.add('spriteContainer1', 'eyeStyle1');
   currEyeL.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle2', 'eyeStyle3', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0','pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
   currEyeR.classList.add('spriteContainer1', 'eyeStyle1');
   currEyeR.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle2', 'eyeStyle3', 'eyeStyle0', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
  }); 
 
   $( '#eyeSet2' ).on( 'click', function() { 
    $('#displayEyeShape').html( 'Eye eyeStyle2 (square) is selected!' );
   
    const currEyeL = document.querySelector('#eye-left');
    const currEyeR = document.querySelector('#eye-right');
   
    currEyeL.classList.add('spriteContainer1', 'eyeStyle2');
    currEyeL.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle1', 'eyeStyle3', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0','pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
    currEyeR.classList.add('spriteContainer1', 'eyeStyle2');
    currEyeR.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle1', 'eyeStyle3', 'eyeStyle0', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
   }); 

   $( '#eyeSet3' ).on( 'click', function() { 
    $('#displayEyeShape').html( 'Eye eyeStyle3 (square) is selected!' );
   
    const currEyeL = document.querySelector('#eye-left');
    const currEyeR = document.querySelector('#eye-right');
   
    currEyeL.classList.add('spriteContainer1', 'eyeStyle3');
    currEyeL.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0','pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
    currEyeR.classList.add('spriteContainer1', 'eyeStyle3');
    currEyeR.classList.remove('spriteContainer2','eyeStyle0', 'eyeStyle1', 'eyeStyle2','eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
   }); 

  


$( '#eyeSet4' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos00eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos00eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos00eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 

$( '#eyeSet5' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos01eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos01eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos00eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos00eyeR');
 currEyeR.classList.remove('spriteContainer1', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos00eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet6' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos02eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos02eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos00eyeL', 'pos01eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos02eyeR');
 currEyeR.classList.remove('spriteContainer1', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos00eyeR', 'pos01eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet7' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos03eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos03eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos03eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet8' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos04eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos04eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3','pos00eyeL', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos04eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR','pos00eyeR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet9' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos05eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos05eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos00eyeL', 'pos06eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos05eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos00eyeR', 'pos06eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet10' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos06eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos06eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos00eyeL', 'pos07eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos06eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos00eyeR', 'pos07eyeR', 'pos08eyeR');
}); 
$( '#eyeSet11' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos07eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos07eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos00eyeL', 'pos08eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos07eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos00eyeR', 'pos08eyeR');
}); 
$( '#eyeSet12' ).on( 'click', function() { 
 $('#displayEyeShape').html( 'Eye pos08eye is selected!' );

 const currEyeL = document.querySelector('#eye-left');
 const currEyeR = document.querySelector('#eye-right');

 currEyeL.classList.add('spriteContainer2', 'pos08eyeL');
 currEyeL.classList.remove('spriteContainer1', 'eyeSprite1l', 'eyeSprite0', 'eyeSprite2l', 'eyeShibaL', 'eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'pos01eyeL', 'pos02eyeL', 'pos03eyeL', 'pos04eyeL', 'pos05eyeL', 'pos06eyeL', 'pos07eyeL', 'pos00eyeL');
 currEyeR.classList.add('spriteContainer2', 'pos08eyeR');
 currEyeR.classList.remove('spriteContainer1','eyeStyle0', 'eyeStyle1', 'eyeStyle2', 'eyeStyle3', 'eyeSprite0', 'eyeSprite1r', 'eyeSprite2r', 'eyeShibaR', 'pos01eyeR', 'pos02eyeR', 'pos03eyeR', 'pos04eyeR', 'pos05eyeR', 'pos06eyeR', 'pos07eyeR', 'pos00eyeR');
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
 $('#displayBrows').html( 'brow browSet0 (none) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.remove('browRobotCatL', 'browBasicL', 'browSprite1l', 'browSprite2l', 'browSprite3l', 'pos00browL', 'pos01browL', 'pos02browL' ,'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL', 'spriteContainer2', 'spriteContainer1');
 currBrowR.classList.remove('browRobotCatR', 'browBasicR', 'browSprite3r', 'browSprite2r', 'browSprite1r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR', 'spriteContainer2', 'spriteContainer1');
}); 
        
 $( '#browSet1' ).on( 'click', function() { 
     $('#displayBrows').html( 'brow browSet1 (basic) is selected!' );

     const currBrowL = document.querySelector('#brow-left');
     const currBrowR = document.querySelector('#brow-right');

     currBrowL.classList.add('spriteContainer1','browBasicL');
     currBrowL.classList.remove('spriteContainer2','browRobotCatL','browSprite1l', 'browSprite2l', 'browSprite3l', 'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
     currBrowR.classList.add('spriteContainer1', 'browBasicR');
     currBrowR.classList.remove("spriteContainer2",'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR','pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
}); 

$( '#browSet2' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet2 (unibrow) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 //have it automatically add the bindi too? All other eyebrows would have to manually remove this set's specific bindi too, which might be annoying if they want to mix other bindis and eyebrows. Make sure this isn't buggy.

 currBrowL.classList.add('spriteContainer1', 'browRobotCatL');
 currBrowL.classList.remove('spriteContainer2','browBasicL', 'browSprite2l', 'browSprite1l', 'browSprite3l', 'pos00browR', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer1', 'browRobotCatR');
 currBrowR.classList.remove('spriteContainer2', 'browBasicR', 'browSprite2r', 'browSprite1r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos03browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
}); 

$( '#browSet3' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet3 is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer1', 'browSprite3l');
 currBrowL.classList.remove('spriteContainer2', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer1','browSprite3r');
 currBrowR.classList.remove('spriteContainer2', 'browBasicR', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
}); 

$( '#browSet4' ).on( 'click', function() { 
 
 $('#displayBrows').html( 'brow browSet4 (lashes for daaaaays) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos00browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos00browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR','browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet5' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet5 (mousey) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos01browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL',  'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos01browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet6' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet6 (twinkles) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos02browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL' ,'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos02browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR' , 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet7' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet7 (squiggles) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos03browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos03browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR',  'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet8' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet8 (cat) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos04browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos04browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet9' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet9 (dog) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos05browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos05browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR',  'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos06browR', 'pos07browR', 'pos08browR');
});

$( '#browSet10' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet10 (biu biu) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos06browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos06browR');
 currBrowR.classList.remove('SpriteContainer1', 'browBasicL', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos07browR', 'pos08browR');
});

$( '#browSet11' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet11 (biu biu but xsmall) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos07browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos07browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos08browR');
});

$( '#browSet12' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet12 (dog) is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos08browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL',  'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL');
 currBrowR.classList.add('spriteContainer2', 'pos08browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR',);
});

/*
$( '#browSet13' ).on( 'click', function() { 
 $('#displayBrows').html( 'brow browSet13 is selected!' );

 const currBrowL = document.querySelector('#brow-left');
 const currBrowR = document.querySelector('#brow-right');

 currBrowL.classList.add('spriteContainer2', 'pos00browL');
 currBrowL.classList.remove('spriteContainer1', 'browBasicL', 'browRobotCatL', 'browSprite1l', 'browSprite2l', 'browSprite3l',  'pos00browL', 'pos01browL', 'pos02browL', 'pos03browL', 'pos04browL', 'pos05browL', 'pos06browL', 'pos07browL', 'pos08browL');
 currBrowR.classList.add('spriteContainer2', 'pos00browR');
 currBrowR.classList.remove('spriteContainer1', 'browBasicR', 'browRobotCatR', 'browSprite1r', 'browSprite2r', 'browSprite3r', 'pos00browR', 'pos01browR', 'pos02browR', 'pos03browR', 'pos04browR', 'pos05browR', 'pos06browR', 'pos07browR', 'pos08browR');
});
*/



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
 currBindi.classList.remove('bindiStyle0', 'bindiStyle1',  'bindiStyle3');
}); 

$( '#bindiPatt3' ).on( 'click', function() { 
 $('#displayBindi').html( 'bindi bindiPatt3 is selected!' );

 const currBindi = document.getElementById('bindi');

 currBindi.classList.add('bindiStyle3');
 currBindi.classList.remove('bindiStyle1', 'bindiRobotCat', 'bindiStyle0');
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
     currCheekL.classList.remove('cheekRobotCatL', 'cheekShibaL');
     currCheekR.classList.add('cheekBasicR');
     currCheekR.classList.remove( 'cheekRobotCatR', 'cheekShibaR');
}); 

$( '#fhair2' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair2 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('cheekRobotCatL');
     currCheekL.classList.remove('cheekBasicL', 'cheekShibaL');
     currCheekR.classList.add('cheekRobotCatR');
     currCheekR.classList.remove('cheekBasicR', 'cheekShibaR');
}); 

$( '#fhair3' ).on( 'click', function() { 
 $('#displayFacialHair').html( 'Cheeks fhair3 is selected!' );

     const currCheekL = document.querySelector('#FH-left');
     const currCheekR = document.querySelector('#FH-right');

     currCheekL.classList.add('cheekShibaL');
     currCheekL.classList.remove('cheekBasicL', 'cheekRobotCatL');
     currCheekR.classList.add('cheekShibaR');
     currCheekR.classList.remove('cheekBasicR', 'cheekRobotCatR');
}); 

});










/* The template toggler shows the outline (borders) of each user-customizable feature. Dash square means hidden, filled square means visible. When visible, the outlines are displayed in neon orange. On hover, there is a short description to explain to the user.  */
const templTogg =
document.getElementById("template-togglr");
const templIcon = document.getElementById("template-icon");
// templateToggle()

function templateToggle() { 
 templIcon.classList.toggle("fa-trash");
}






/*
templTogg.on('click', () => {
 if (templTogg.style.display === "none") {
  templTogg.style.display = "block";
  alert("block");
 } else {
  templTogg.style.display = "none";
  alert("none");
 }
});


if (templTogg.style.display === "none") {
 templTogg.style.display = "block";
} else {
 templTogg.style.display = "none";
}


*/