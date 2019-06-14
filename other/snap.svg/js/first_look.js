/*             Author: Richard Myatt
                Date: 12 November 2018

                A first look at Snap.svg based on a YouTube video at
                https://www.youtube.com/watch?v=MBA-1IHrPYY
*/

alert("Try dragging the circle.");

// initialize a snap instance
var s = Snap("#svg");

// create a background
var myRect = s.rect(0, 0, 300, 300);
myRect.attr({
  fill: "#fff",
  stroke: "none"
});

// create a circle
var myCircle = s.circle(150, 150, 60);
myCircle.attr({
  fill: "#f00",
  stroke: "#000",
  strokeWidth: 2
});

// function to animate circle
var aloop = function(r) {
  var newR = r === 30 ? 60 : 30;
  myCircle.animate({r:r}, 1500, function() {
    aloop(newR);
  });
};

// begin animation
aloop(30);
