/*            Author: Richard Myatt
              Date: 3 March 2019

              An example which is based on a modified version of a Snap.svg
              Animation Tutorial for Beginners at
              http://goinkscape.com/how-to-animate-icons-with-inkscape-and-snap-svg/.
*/

// reference an outer svg to act as the container for our external file
var s = Snap("#svgout");
// set its attributes
s.attr({
  "viewBox": "0 0 100 100",
  width: "100%",
  height: "100%"
});
// load the external file
Snap.load("https://cdn.jsdelivr.net/gh/aronnax77/svg/snap.svg/inkscape_demo/svg/demo.svg", onSVGLoaded ) ;

function onSVGLoaded( data ){

  // obtain element references
  var whiteRect = data.select("#whiteRect");
  var icon      = data.select("#icon");

  // animate the icon
  // when the icon is hovered over move the white rectangle up
  icon.mouseover(function() {
              whiteRect.animate({y: -325}, 300, mina.elastic);
            });

  icon.touchstart(function() {
              whiteRect.animate({y: -325}, 300, mina.elastic);
            });

  icon.mouseout(function() {
              whiteRect.animate({y: -305.62088}, 300, mina.elestic);
            });

  icon.touchend(function() {
              whiteRect.animate({y: -305.62088}, 300, mina.elestic);
            });


  s.append( data );
}
