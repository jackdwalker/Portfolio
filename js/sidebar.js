/* Set the width of the sidebar to 250px (show it) */
function openNav(panel,button) {
  if (innerWidth > "415px") {
    document.getElementById(panel).style.width = (window.innerWidth / 2) + "px";
    document.getElementById(button).style.display = "none";
  }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav(panel, button) {
  if (innerWidth > "415px") {
    document.getElementById(panel).style.width = "0";
    document.getElementById(button).style.display = "inline-block";
  }
}