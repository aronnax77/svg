/*            Author: Richard Myatt
              Date: 4 March 2019

              An example which shows the use of masks and patterns using snap.svg.
*/

// reference our svg element and provide a viewBox
var s = Snap("#svgout");
s.attr({ viewBox: "0 0 200 150" });

// provide a grey background so that we can see the extent of the image
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#eee"});

// create a large circle and give it attributes
var bigCircle = s.circle(100, 75, 50);
bigCircle.attr({
  fill: "#bada55",
  stroke: "#000",
  strokeWidth: 5
});

// create two smaller circles and group them
var smallCircle = s.circle(70, 75, 40);
var discs =s.group(smallCircle, s.circle(130, 75, 40));
// use the pattern in the html as a background
discs.attr({
  fill: Snap("#pattern")
});

// use the group as a mask to cut out a portion of our bigCircle
bigCircle.attr({
  mask: discs
});
