#SVG NOTES

##Paths

###Arcs

M x1, y1 A rx, ry x-axis-rotation large-arc-flag sweep-flag x2, y2

where x1, y1 and x2, y2 are the start and end coordinates of the arc.

rx and ry determine the center point of the ellipse and specify the x radius and the y radius in relative terms so that 1 1 and 10 10 produce the same shape.

The x-axis-rotation is horizontal if it is zero and is measured in degrees.

The two flags have values of 1 or 0.  The values for the large arc flag are 1 for large arc and 0 for small arc.  The value for the sweep-flag is 0 for anticlockwise and 1 for clockwise

###Cubic Bezier Curve

C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)

where x1, y1, x2, y2 are the control points and x and y are the end point of the curve.