/*            Author: Richard Myatt
              Date: 9 March 2019

              This example shows the use of a set in snap.svg and the way in
              which the elements of the set can be animated and is based on an
              example in an article 'Advanced Snap.svg' by Sitepoint at
              https://www.sitepoint.com/advanced-snap-svg/.  This article also
              points out that a set can be formed in the following manner:

              var set2 = Snap([bigCircle, smallRect]);
*/

// obtain a reference to the svg element
var s = Snap("#svgout");

// obtain a reference to the group around the circles
// var g = s.select("#circleGroup");
var g = Snap("#circleGroup");

// establish a set
var set = g.selectAll("circle");

// select the rectangles
rects = s.selectAll("rect");

// add the rectangles to the set but omit the background
for(var i= 1; i < rects.length; i++) {
  set.push(rects[i]);
}

function animateSet() {
  set.animate([{r: 50}, 500], [{r: 100}, 500], [{x: 200}, 1500, mina.easein], [{x: 20}, 1500, mina.easein]);
}

setTimeout(animateSet, 1000);
