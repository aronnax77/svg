/*            Author: Richard Myatt
              Date: 8 March 2019

              This example is copied with minor alterations from an example on
              codepen at https://codepen.io/pigabo/pen/CyrHq and shows how two
              animations can be synchronised using snap.svg.
*/

// obtain a reference to our svg element and provide attributes
var s = Snap("#svgout");
s.attr({
  width: "500px",
  height: "300px",
  viewBox: "0 0 500 300"
});

// provide a white background so that we can see the extent of the image
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#fff"});

// render two circles for the animation
var circle1 = s.circle(150, 150,100).attr({ fill:"crimson", opacity:1 });
var circle2 = s.circle(350, 150,100).attr({ fill:"teal", opacity:1 });

// specify the animation on hover
circle1.hover( function() {
  Snap.animate([1, 1], [1.5, 0.5], function(val) {
    circle1.attr({
      transform: "s" + val[0]
    });
    circle2.attr({
      transform: "s" + val[1]
    });
}, 500, mina.easeinout);
},function(){
  Snap.animate([1.5, 0.5], [1, 1], function(val) {
    circle1.attr({
      transform: "s" + val[0]
    });
    circle2.attr({
      transform: "s" + val[1]
    });
  }, 500, mina.easeinout);
});

circle1.touchstart( function() {
  Snap.animate([1, 1], [1.5, 0.5], function(val) {
    circle1.attr({
      transform: "s" + val[0]
    });
    circle2.attr({
      transform: "s" + val[1]
    });
}, 500, mina.easeinout); });

circle1.touchend( function() {
  Snap.animate([1.5, 0.5], [1, 1], function(val) {
    circle1.attr({
      transform: "s" + val[0]
    });
    circle2.attr({
      transform: "s" + val[1]
    });
}, 500, mina.easeinout); });
