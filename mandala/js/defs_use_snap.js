/*                Author: Richard Myatt
                  Date: 6 June 2019

                  A Snap.svg example of the use of a shape defined within defs
                  and then rendered with use elements.
*/

// obtain a reference to our svg element
var s = Snap("#snap-demo");

// define our square and place it between defs
var rect = s.rect(0, 0, 100, 100);
rect.toDefs();

// invoke the square with use elements and render

// first figure
var firstFigBg = rect.use();
    firstFigBg.attr({fill: "blue"});
    firstFigBg.transform("t50 50");
var firstFigFg = rect.use();
    firstFigFg.attr({fill: "red"});
    firstFigFg.transform("t50, 50, s0.5, r45");

s.append(firstFigBg);
s.append(firstFigFg);

// second figure
var secondFigBg = rect.use();
    secondFigBg.attr({fill: "blue"});
    secondFigBg.transform("t200 50");
var secondFigFg = rect.use();
    secondFigFg.attr({fill: "red"});
    secondFigFg.transform("t200, 50, s0.5, r45");

s.append(secondFigBg);
s.append(secondFigFg);

// third figure
var thirdFigBg = rect.use();
    thirdFigBg.attr({fill: "blue"});
    thirdFigBg.transform("t350 50");
var thirdFigFg = rect.use();
    thirdFigFg.attr({fill: "red"});
    thirdFigFg.transform("t350, 50, s0.5, r45");

s.append(thirdFigBg);
s.append(thirdFigFg);
