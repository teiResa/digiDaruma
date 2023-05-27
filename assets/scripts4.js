/*
<input type="radio" name="body-color" id="color1" value="color1" class="colorOpt1"/>
       <label for="color1"> color1</label><br>
      <input type="radio" name="body-color" id="color2" value="color2" class="colorOpt2" />
       <label for="color2"> color2</label><br>
      <input type="radio" name="body-color" id="color3" value="color3" class="colorOpt3"/>
       <label for="color3"> color3</label><br>
*/


$(document).ready(function () {
        
 $( '#color1' ).on( 'click', function() { 
     $('#displayBodyColor').html( 'Body color1 is Clicked!' );

     const currSkin = document.getElementById('skin-color');
     currSkin.style.backgroundColor = "red";
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