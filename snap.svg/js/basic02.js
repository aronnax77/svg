/*              Author: Richard Myatt
                Date: 26 February 2019

                An interactive example using snap.svg based on a similar
                example in http://svg.dabbles.info/.
*/

// reference the svg element and add a viewBox
var s = Snap("#svgout");
s.attr({ viewBox: "0 0 300 300" });

// add a light blue background
var bg = s.rect(0, 0, "100%", "100%")
          .attr({ stroke: "none", fill: "lightblue" });

// create some shapes
var r = s.rect(50, 50, 100, 100);
var c = s.circle(150, 150, 50);

// add attributes to our shapes
// first the rectangle
r.attr("fill", "red");
r.attr({ "stroke": "#000", "stroke-width": 5 });

// and then the circle
c.attr({"fill": "blue", "stroke": "yellow", strokeWidth: 2});

// add some onclick events
r.click( function() { r.attr("fill", "yellow"); } );
c.click( function() { this.attr("fill", "green"); } );   // using 'this'

// provide text
s.text(150,250, 'Click An Object')
  .attr({'fill' : "purple", "text-anchor": "middle" });
