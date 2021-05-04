/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 150) {
    document.getElementById("navigation").className = "blurred";
  } else {
    document.getElementById("navigation").className = "";
  }
}