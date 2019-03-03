/*              Author: Richard Myatt
                Date: 27 February 2019

                Adding an image to an SVG element using snap.svg.  This example
                also shows how the image can be cloned and transformed and is
                based on a similar example in http://svg.dabbles.info/.
*/

// reference our svg element and add a viewBox
var s = Snap("#svgout");
s.attr({ viewBox: "0 0 500 500" });

// provide a grey background
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#eee"});

// display the image
var image = s.image("https://www.sololearn.com/avatars/80109f91-7d02-4111-83af-b0fefd31ab34.jpg", 50, 50, 150, 200);

// copy/clone the image and re-render using a transform
var clone = image.clone();

var out = clone.transform('t200,200r45');
