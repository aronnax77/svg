/*            Author: Richard Myatt
              Date: 11 March 2019

              The snap.svg plugin allows you to write functions which access
              the bounding box of an element.  This simple example of a
              snap.svg plugin returns the center of an element and is based on
              a similar example in http://svg.dabbles.info/.
*/

// obtain references to the three paragraph elements
// to show the results obtained from our new plugin
var para1 = document.querySelector("#p1");
var para2 = document.querySelector("#p2");
var para3 = document.querySelector("#p3");

// obtain a reference to our svg using snap
var s = Snap("#svgout");

// get references to our three shapes
var greenRect  = s.select("#rect1");
var yellowRect = s.select("#rect2");
var redCircle  = s.select("#circle1");

// write our plugin
// this will determine the centre of an element
Snap.plugin( function(Snap, Element, Paper, global, Fragment) {
  Element.prototype.getCenter = function() {
    var bbox = this.getBBox();
    return [bbox.cx, bbox.cy];
  };
});

// now we can test our new plugin and output the results
var r1Center = greenRect.getCenter();
var r2Center = yellowRect.getCenter();
var c1Center = redCircle.getCenter();

para1.innerHTML = "The center of the green rectangle is given as  - " + r1Center;
para2.innerHTML = "The center of the yellow rectangle is given as - " + r2Center;
para3.innerHTML = "The center of the red circle is given as       - " + c1Center;
