/*              Author: Richard Myatt
                Date: 1 March 2019

                An example which illustrates how transformations can be used
                based on a similar example in http://svg.dabbles.info/.
*/

// reference our svg element and add a viewBox
var s = Snap("#svgout");
s.attr({ viewBox: "0 0 500 500" });

// provide a grey background
var bg = s.rect(0, 0, "100%", "100%")
          .attr({stroke: "none", fill: "#eee"});

// specigy a rectangle
var r = s.rect(100,100,100,100)
          .attr({ stroke: '#000',
                  'strokeWidth': 5,
                  fill: 'red' });

// clone the rectangle
var rclone = r.clone();
var rclone2 = r.clone();
var rclone3 = r.clone();
var rclone4 = r.clone();
var rclone5 = r.clone();

//t=relative transform, T=absolute transform, s=relative scale, S=absolute Scale
//r=relative rotate, R=absolue rotate
//relative means it takes into account previous transforms to accumulate
//here it doesn't make much difference, until we combine later

// render cloned rectangles
rclone.transform( 't200,200');
rclone2.transform( 'r20, 200, 100' );
rclone3.transform( 'r40, 200, 100' );

// show point of rotation with a black circle
var c = s.circle( 200,100,10 );

//
rclone4.transform( 't200,200 r20,200,200' );
rclone5.transform( 't200,200 r40,200,200' );

// show point of rotation with a black circle
var c = s.circle( 400,400,10 );

// add explanatory text
s.text(250,150,"rotate around 200,100");
s.text(20,250,"combined translate of 100,100 and rotate around 400,400");
