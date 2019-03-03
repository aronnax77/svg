/*window.onload = function() {
  var s = Snap("#svgDiv");
  console.log(s);
  Snap.load("svg/icon.svg", function(f) {
    whiteRect = f.select("#icon");
    s.append(f);
  });
};*/

// reference an outer svg to act as the container for our external file
var s = Snap("#svgout");
// set its attributes
s.attr({
  "viewBox": "0 0 100 100",
  width: "100%",
  height: "100%"
});
// load the external file
Snap.load("svg/demo.svg", onSVGLoaded ) ;

function onSVGLoaded( data ){

  // obtain element references
  var whiteRect = data.select("#whiteRect");
  var icon      = data.select("#icon");

  // animate the icon
  // when the icon is hovered over move the white rectangle up
  icon.mouseover(function() {
              whiteRect.animate({y: -325}, 300, mina.elastic);
            });

  icon.mouseout(function() {
              whiteRect.animate({y: -305.62088}, 300, mina.elestic);
            });


  s.append( data );
}
