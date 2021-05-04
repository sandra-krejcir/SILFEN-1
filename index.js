var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgBanner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}

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