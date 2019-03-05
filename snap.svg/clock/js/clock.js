/*            Author: Richard Myatt
              Date: 5 March 2019

              An example of an analog clock written using snap.svg based on a
              similar example in chapter 14 of 'SVG Essentials'
              by J. David Eisenberg.
*/

// select the empty svg as the snap object
var clock = Snap("#clock");

// create the clock face
var face = clock.circle(125, 125, 100);
face.attr({
  fill: "white",
  stroke: "black",
  strokeWidth: 2
});

// create a group for the ticks
var ticks = clock.g();

var tickMark = clock.path("M117, 25 L133, 25 L125, 33 Z");
ticks.add(tickMark);

for(var i = 1; i < 12; i++) {
  ticks.add(tickMark.clone().transform("r" + 30 * i + " 125, 125"));
}

// create the hands
hourHand	=	clock.path("M125,125	L125,75");
minuteHand	=	clock.path("M125,125	L125,50");
secondHand	=	clock.path("M125,125	L125,40");

var	hands	=	clock.g(hourHand,	minuteHand,	secondHand);
hands.attr({stroke:	"black",
						"stroke-width":	5,
						"stroke-linecap":	"round"});
secondHand.attr({stroke:	"red",	strokeWidth:	"2px"});

// add center knob
clock.circle(125,	125,	8).attr({fill:	"#333"});

// function to set the time on the clock
function setTime() {
  newDate = new Date();
  seconds = newDate.getSeconds();
  minutes = newDate.getMinutes();

  hours   = newDate.getHours() <= 12 ? newDate.getHours() : newDate.getHours() - 12;
  sec_angle = (seconds / 60) * 360;
  min_angle = ((minutes + (seconds/60)) / 60 * 360);
  hour_angle = ((hours + (minutes/60)) / 12 * 360);

  //second_hand.setAttribute("transform", "rotate("+ sec_angle +", 200, 200)");
  //minute_hand.setAttribute("transform", "rotate("+ min_angle +", 200, 200)");
  //hour_hand.setAttribute("transform", "rotate("+ hour_angle +", 200, 200)");
  secondHand.transform("r" + sec_angle + " 125, 125");
  minuteHand.transform("r" + min_angle + " 125, 125");
  hourHand.transform("r" + hour_angle + " 125, 125");
}

// initialize and animate the hands
setTime();
setInterval(setTime, 1000);
