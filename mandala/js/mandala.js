/*            Author: Richard Myatt
              Date: 10 June 2019

              A little exercise using Snap.svg
*/

var timer;  // reference out timing function
var period = 300;   // timing period
var scaleFactor = [1.4, 1.2, 1.0, 0.8, 0.6, 0.4, 0.2, 0.1];

// function to generate a random colour
function getColour() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return hue;
}

// obtain a reference to the svg
var s = Snap("#bloom");

// define the shape to be rendered and place it in defs
var path = s.path("M 300 100 A 400 300, 90 0 1 300 500 A 400 300, 90 0 1 300 100");
path.toDefs();

// basic rendering function
function renderAnim(scale, ofs) {
  for(var i = 0; i < 6; i++) {
    let k = i;
    timer = setTimeout(function() {
      var newPath = path.use();
      newPath.attr({fill: getColour()});
      if(!ofs) {
        newPath.transform("r" + 30 * k + "," + "s" + scale);
      } else {
        newPath.transform("r" + (30 * k + 15) + "," + "s" + scale);
      }
      s.append(newPath);
    }, period * k);
  }
}

// render the first sequence of shapes
renderAnim(scaleFactor[0], false);

// render the remaining shapes at differing scales
for(var scale = 1; scale < scaleFactor.length; scale++) {
  let k = scale;
    setTimeout(function() {
      clearTimeout(timer);
      if(k % 2 === 0) {
        renderAnim(scaleFactor[k], false);
      } else {
        renderAnim(scaleFactor[k], true);
      }
    }, (period * 6) * scale);
}
