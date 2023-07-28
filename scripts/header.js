const menuButtonSvg = document.getElementById("menuButtonSvg");
const menuCloseSvg = document.getElementById("menuCloseSvg");
const mobileMenu = document.getElementById("mobileMenu");

function setMenuState() {
  if (menuButtonSvg.style.display == "none") {
    // Show menu button
    menuButtonSvg.style.display = "block";
    menuCloseSvg.style.display = "none";

    // Hide mobile menu
    mobileMenu.style.display = "none"
  } else {
    // Show menu close
    menuButtonSvg.style.display = "none";
    menuCloseSvg.style.display = "block";

    // Show mobile menu
    mobileMenu.style.display = "flex"
  }
}
