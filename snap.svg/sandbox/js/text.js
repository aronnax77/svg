var paper = Snap("#paper");

var t1 = paper.text(50, 50, "Snap");

t1.attr({textpath: "M10, 10 L100, 100"});

var pth = paper.path("M10, 10 L100, 100");
pth.attr({stroke: "#000"});
