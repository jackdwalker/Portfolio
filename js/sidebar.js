/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = (window.innerWidth / 2) + "px";
    document.getElementById("myOpenbtn").style.display = "none";
}
  
/* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("myOpenbtn").style.display = "inline-block";
}