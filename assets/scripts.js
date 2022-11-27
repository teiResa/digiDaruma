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

