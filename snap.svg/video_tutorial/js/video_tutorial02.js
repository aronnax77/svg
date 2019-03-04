/*            Author: Richard Myatt
              Date: 4 March 2019

              An example which shows the importing of an external svg image and
              its modification using snap.svg.
*/

// reference our outer svg element
var original = Snap("#svgoriginal");
var modified = Snap("#svgmodified");

// load the external svg (our crocodile) and show original and modified version
Snap.load("svg/mascot.svg", onSVGLoaded);

function onSVGLoaded(data) {
  var fragment = data.select("g");
  var fclone   = fragment.clone();
  original.append(fragment);

  fclone.selectAll("polygon[fill='#09B39C']").attr({fill: "yellow"});
  modified.append(fclone);
}

// label the images
original.text(130,50, 'Original')
      .attr({'fill' : "blue",
              "text-anchor": "middle",
              "font-weight": "bold",
              "font-size": "20px"
             });

modified.text(130,50, 'Modified')
     .attr({'fill' : "blue",
             "text-anchor": "middle",
             "font-weight": "bold",
             "font-size": "20px"
            });
