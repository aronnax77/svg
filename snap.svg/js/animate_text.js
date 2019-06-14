/*            Author: Richard Myatt
              Date: 7 March 2019

              An example of text animation using snap.svg
              based on a similar example in http://svg.dabbles.info/.
*/

// establish some variable for use later
var txtElArray;
var offset = 100;

// reference our svg element and provide some basic attributes
var s = Snap("#svgout");
s.attr({
  viewBox: "0 0 500 250"
});

// provide a white background so that we can see the extent of the image
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "lightyellow"});

// choose a querky quote for display
var stringArray = ["Everybody is a genius. But if you judge a ",
                    "fish by its ability to climb a tree, it will",
                    "live its whole life believing that it is stupid." ];

// create a group for our text
var txtGroup = s.g().attr({ fill: "red", "font-size": "20px" });

// render the text in separate tspan elements
for( var a = 0; a < stringArray.length; a++) {
        var charArray = stringArray[a].split('');
        txtElArray = txtGroup.text(40, 0, charArray).attr({ opacity : 1, y: (a * 20 + offset) });
}

// obtain a reference to the tspan array and animate the text
var tSpans = txtGroup.selectAll("tspan");

function animFunc( element ) {
        Snap.animate(0,1, function( value ) {
                element.attr({ fill: "blue", rotate: (value * 360) });
        }, 1000 );

}

for( var i=0; i < tSpans.length; i++ ) {
        setTimeout( animFunc.bind(null, tSpans[i]) , i * 100);
}

// provide an attribution
var attribution = s.text(300, 200, "by Albert Einstein");
attribution.attr({
  fontStyle: "italic"
});
