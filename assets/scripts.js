 // ~~~~~~~~~~~~ Hide/Show Customisation menu ~~~~~~~~~~~~~~~~~
 function menuToggler() {
  var x = document.getElementById("toggleMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ~~~~~~~~~~~~ within customisation menu ~~~~~~

// function updateButton() {
//  var a = document.getElementById("updateButton");
//  a.addEventListener("click", )
// }


// ~~~~~~~~~~~~ Automatically Close Details tags when another is opened. doll-section, doll-subsection, doll-sub-subsection ~~~~~~~~~

// // Fetch all the details element.
// const details = document.querySelectorAll("details");
 
// // Add the onclick listeners.
// details.forEach((targetDetail) => {
//   targetDetail.addEventListener("click", () => {
//     // Close all the details that are not targetDetail.
//     details.forEach((detail) => {
//       if (detail !== targetDetail) {
//         detail.removeAttribute("open");
//       }
//     });
//   });
// });


// // Selected radio button updates feature. Ie, Eye Shape > round ('ey-round') would update the eyes to the css parameters under .ey-round on the stylesheet.
// // https://thewebdev.info/2022/02/12/how-to-attach-event-listener-to-a-radio-button-with-javascript/

// let radios = document.querySelectorAll('input')
// for (let radio of radios) {
//  radio.click = (e) => {
//   console.log(e.target.value);
//  }
// }

// const buttonToggle = document.querySelector('.toggle');
// buttonToggle.addEventListener('click', toggleClass);

// // ~~~~~~~~~~~~ saving user's selections ~~~~~~

// // Since I don't want their customised doll information for myself, I'll just use localStorage. They can have their doll waiting for them next time they visit (to fill in the right eye or restart with a new doll).

// // https://css-tricks.com/forums/topic/unable-to-store-radio-button-value-in-localstorage/
// $(function() {

//  $.each($('.stored'), function() {
//      if(localStorage[$(this).attr('name')]) {
//          if ($(this).is(':radio')) {
//              if($(this).val() == localStorage[$(this).attr('name')]) {
//                  $(this).prop('checked', true);    
//              }
//          } else {
//              $(this).val(localStorage[$(this).attr('name')]);
//          }
//      }
//  });
 
//  $('.stored').on('change', function() {
//      localStorage[$(this).attr('name')] = $(this).val(), $(this).find('option:selected').val();
//  });
 
//  });



// ~~ switched ""s for ''s


// https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript

function updateSelections() {

 if(document.getElementById('bodycolor').checked) {
  document.getElementById('displayBodyColor').innerHTML = getElementById('bodycolor').value + "is body color."
 }  

 // Ohmygoddamnit, my brain is buffering very painfully slowly.

 // var getBodyColor = document.querySelector('input[name="body-color"]:checked');

 // if(getBodyColor != null) {
 //  document.getElementById("displayBodyColor").innerHTML = "body color is" + getSelectedValue.value;
 // }
 // else {
 //  document.getElementById("error").innerHTML = "body color is null";
 // }

}



 //for dev_only section

 var bodyColor = document.getElementsByName('body-color');

 for (let i of bodyColor) {
   console.log(i.id);
  
  }

  document.write('<p>'+ bodyColor +'</p>');