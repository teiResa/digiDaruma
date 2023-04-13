/* onclick of the update button, check whick colour is selected, then update the doll's body to be that colour.

The update button (html, line 25)
<button type="button" onclick="updateSelections()">update</button>

The skins.scss file contains all of the information about the looks that are user-changable




*/
const skin = document.querySelector(".skin-color");
// querySelector() is more modern and faster

function buttonColor() {
 skin.style.color = "blue";
}
