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




// ~~~~~~~~~~~~ Automatically Close Details tags when another is opened. doll-section, doll-subsection, doll-sub-subsection ~~~~~~~~~

// Fetch all the details element.
const details = document.querySelectorAll("details");
 
// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});


// Selected radio button updates feature. Ie, Eye Shape > round ('ey-round') would update the eyes to the css parameters under .ey-round on the stylesheet.
// https://thewebdev.info/2022/02/12/how-to-attach-event-listener-to-a-radio-button-with-javascript/

let radios = document.querySelectorAll('input')
for (let radio of radios) {
 radio.click = (e) => {
  console.log(e.target.value);
 }
}

const buttonToggle = document.querySelector('.toggle');
buttonToggle.addEventListener('click', toggleClass);