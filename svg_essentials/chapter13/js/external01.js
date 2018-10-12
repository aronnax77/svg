/*                Author: Richard Myatt
                  Date: 11 October 2018

                  An example of the use of the "object" tag to import an external
                  svg file into the html document.  In this case the svg file is
                  very similar to that used in the 'SGV script example 02' at
                  https://code.sololearn.com/WIN6AGUnXAQ0/#html.  The svg internal
                  script itself has been modified slightly for this example in
                  order to allow two way communication between the external file
                  and the web page.  See https://code.sololearn.com/W9RudqQZbQVI/#html
                  for details of the svg file.

                  This example is based on a similar example in chapter 13 of
                  'SVG Essentials' by J. David Eisenberg.
*/

alert("PLEASE NOTE THAT THIS CODE WILL NOT RUN IN THE SL PLAYGROUND OR THE SL APP.  Please see https://aronnax77.github.io/external_svg/ for a live demo using GitHub Pages.  The code here illustrates the use of an external svg file loaded with the 'object' tag and then used for two way communication between the svg script and the script in the html page.  This can only be achieved if the origin of the svg file is the same as the html.  Because it appears that it is not possible to load a local file within SL in order to avoid problems with cross origin access to data in the svg in this example GitHub Pages have been used for demonstration purposes.  Please also note that the mouse events attached to the colour sliders do not appear to function in a mobile app.");

// set global variable to access svg document
var svgDoc;

// the next two functions control the colour of the shirt through the input fields
function	updateSVG(which,	amount)	{
		amount	=	parseInt(amount);
		if	(!isNaN(amount)	&&	window.setShirtColor)	{
				window.setShirtColor(which,	amount);
		}
}

function	updateHTMLField(which,	percent)	{
		document.getElementById("fld"	+	which).value	=	percent;
}

// once the document is loaded initialize the global variable to gain access to
// the svg
function init() {
	var obj = document.getElementById("svgObject");
	svgDoc  = obj.getSVGDocument();
}

// remove and create rings on the shirt
function	createRings(nRings)	{		var	shirt	=	svgDoc.getElementById("shirt");
	var	rings	=	shirt.getElementsByTagName("circle");
	var	i;
	var	radius;
	var	circle;

	for	(i	=	rings.length	-	1;	i	>=	0;	i--)	{
				shirt.removeChild(rings[i]);
		}

		/*	Pin	the	range	to	0-5	*/
		if	(nRings	<	0)	{
			nRings =	0;
		}
		else	if	(nRings	>	5)	{
			nRings =	5;
		}

		radius	=	nRings	*	4;
		for	(i	=	0;	i	<	nRings	*	2;	i++)	{
			circle	=	svgDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
			circle.setAttribute("cx",	"0");
			circle.setAttribute("cy",	"0");
			circle.setAttribute("r",	radius);

			if	(i	%	2	==	0)	{
								circle.style.cssText	=	"fill:black;	stroke:none";
				}
				else	{
								circle.style.cssText	=	"fill:white;	stroke:none;";
				}
				shirt.appendChild(circle);
				radius	-=	2;
		}
}
