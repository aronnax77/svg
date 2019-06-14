/*            Author: Richard Myatt
              Date: 26 October 2018

              Tracking mouse movements within an svg.
              See Mouse tracking within an svg at
              https://code.sololearn.com/WnDoJTIPJj2n/#html
              for a demo.
*/

//alert("Mouse over to see him watching!");

document.addEventListener('DOMContentLoaded', function() {


// image aspect ration
var imgAspRatio = 0.787;      // 604.13/806.86

var el = document.querySelector(".container");

window.addEventListener("resize", function() {
  if(window.innerWidth/window.innerHeight >= imgAspRatio) {
    el.style.width = "78.7vh";
    el.style.height = "100vh";
  } else {
    el.style.width = "100vw";
    el.style.height = "127.06vw";
  }
});

 window.dispatchEvent(new Event('resize'));

});
