 var picPaths = ['img/bck1.png','img/bck2.png','img/bck3.png'];
            var curPic = -1;
            //preload the images for smooth animation
            var imgO = new Array();
            for(i=0; i < picPaths.length; i++) {
                imgO[i] = new Image();
                imgO[i].src = picPaths[i];
            }

            function swapImage() {
                curPic = (++curPic > picPaths.length-1)? 0 : curPic;
                imgCont.src = imgO[curPic].src;
                setTimeout(swapImage,2000); 

            }

            window.onload=function() {
                imgCont = document.getElementById('imgBanner');
                swapImage();
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