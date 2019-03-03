/*              Author: Richard Myatt
                Date: 25 February 2019

                A simple example using snap.svg based on a similar example in
                http://svg.dabbles.info/.
*/

// reference the svg element
var s = Snap("#svgout");

// provide a white background
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#fff"});

// lets draw a rectangle at 100, 100
var r = s.rect(100, 100, 100, 100, 20, 20)
          .attr({stroke: "yellow", "stroke-width": 10, fill: "blue"});

// add some text
var t = s.text(150,270,"Basic snap.svg example")
          .attr({"text-anchor": "middle", "font-wieght": "bold"});
