/*            Author: Richard Myatt
              Date: 6 March 2019

              An example of using the more general animation method Snap.animate
              based on a similar example in http://svg.dabbles.info/.
*/

// reference our svg element and provide some basic attributes
var s = Snap("#svgout");
s.attr({
  width: 450,
  height: 450,
  viewBox: "0 0 300 300"
});

// provide a white background so that we can see the extent of the image
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#000"});

function animate() {

// provide a circle
var circle1 = s.circle(150, 150, 80);
circle1.attr({
  fill: "none",
  stroke: "white",
  strokeWidth: 30,
  strokeDasharray: 503,
  strokeDashoffset: 503
});

var circle2 = s.circle(150, 150, 80);
circle2.attr({
  fill: "none",
  stroke: "red",
  strokeWidth: 30,
  strokeDasharray: "10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 503",
  strokeDashoffset: 503
});

Snap.animate(-503, 0, function( value ){
  circle1.attr({ 'strokeDashoffset': value });
},5000 );

Snap.animate(-503, 0, function( value ){
  circle2.attr({ 'strokeDashoffset': value });
},5000 );

}

setTimeout(animate, 500);
