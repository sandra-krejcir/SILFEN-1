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
}

var lastScrollTop = 0;
// Detect the scroll.
window.addEventListener(
  "scroll",
  function() {
    let st = window.pageYOffset || document.documentElement.scrollTop; 
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // Downscroll code
      // console.log("\n\ngoing down V\n\n");
      document.getElementById("navigation").classList.add("blurred");
    } else {
      // Upscroll code
      // console.log("\n\ngoing up ^\n\n");
      document.getElementById("navigation").classList.remove("blurred");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);