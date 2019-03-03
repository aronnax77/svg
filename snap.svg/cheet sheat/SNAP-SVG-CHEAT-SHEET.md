<!-- TOC -->

- [Snap SVG cheat sheet](#snap-svg-cheat-sheet)
    - [Intitialize SNAP](#intitialize-snap)
    - [Read the DOM](#read-the-dom)
        - [Select](#select)
        - [Parent element](#parent-element)
        - [Select all](#select-all)
    - [Write in the DOM](#write-in-the-dom)
    - [Append, prepend](#append-prepend)
        - [Before and after](#before-and-after)
        - [Clone](#clone)
        - [Use](#use)
        - [Remove](#remove)
        - [To defs](#to-defs)
        - [Clear](#clear)
    - [Groups](#groups)
    - [Nested svgs](#nested-svgs)
    - [Create objects with Snap](#create-objects-with-snap)
        - [Line](#line)
        - [Polyline](#polyline)
        - [Rectangle](#rectangle)
        - [Circle](#circle)
        - [Elipse](#elipse)
        - [Polygon](#polygon)
        - [Path](#path)
        - [Text](#text)
        - [Image](#image)
        - [Masks](#masks)
    - [Work with attributes](#work-with-attributes)
        - [Change atributes](#change-atributes)
        - [Read attribute](#read-attribute)
    - [Gardients](#gardients)
        - [Linear](#linear)
        - [Radial](#radial)
    - [Patterns](#patterns)
    - [Transform](#transform)
    - [Classes](#classes)
        - [Add a class](#add-a-class)
        - [Has this class?](#has-this-class)
        - [Remove class](#remove-class)
    - [Events](#events)
        - [Click](#click)
        - [Hover](#hover)
    - [Load SVG file or fragment](#load-svg-file-or-fragment)
    - [Other stuff](#other-stuff)
    - [Animate with javascript](#animate-with-javascript)
        - [Simple](#simple)
        - [Define **easying** and **callback**](#define-easying-and-callback)
        - [Animate a **number**](#animate-a-number)
        - [Multiple step animations](#multiple-step-animations)
        - [Animate along a path](#animate-along-a-path)
        - [SVG and CSS animations](#svg-and-css-animations)
    - [Matrix](#matrix)

<!-- /TOC -->

# Snap SVG cheat sheet

Cheat sheet based on [Snap SVG docs](http://snapsvg.io/docs/).

## Intitialize SNAP

Intitialize an svg element by reference:

```javascript
var s = Snap("#svg");
```

Change the viewbox dynamically:

```javascript
s.attr({ viewBox: "0 0 1200 1200" })
```

Note: It can be a complex svg graph or an empty svg tag.

## Read the DOM

### Select

Select an element inside the SVG by ID:

```javascript
var n = s.select("#test");
```

Select another element by tag name:

```javascript
var u = s.select("rect");
```

Select works with a CSS selector, normally for an element.

Too see what was selected:

```javascript
console.log( u.outerSVG() );
```

You can use selectors like `circle:nth-child(2)` to select one specific element without id or classes.

### Parent element

```javascript
var t = n.parent();
```

### Select all

To select multiple objects use **selectAll** instead of **select**.

```javascript
var myClass = s.selectAll(".myClass");
myClass.attr({fill: "#66cc00"});
myClass.animate({ transform: "r45"}, 2000);
```

Most of the time the other methods will apply.

## Write in the DOM

## Append, prepend

Append and prepend actually move the element from defs to the begining or end of the svg element:

```javascript
var snip = s.select("#bar");
s.prepend(snip);
// s.append(snip);
// snip.prependTo(s);
```

With parse you need to use append first and then select before continuing:

```javascript
var snip = Snap.parse('<rect x="250" y="80" width="74" height="66" ry="0" fill="blue" id="bar"/>');
s.append(snip);
var w = s.select("#bar");
s.prepend(w);
w.attr({ x:200 });
```

### Before and after

Hidden5 is an object in defs. With this code we move it to before and after the rectangle.

```javascript
var hidden5 = s.select("#hidden5");
u.after(hidden5)
```

```javascript
var hidden5 = s.select("#hidden5");
u.before(hidden5)
```

### Clone

Add a copy of the element after the original**:

```javascript
var q = u.clone();
```

### Use

Make a **use** copy of the object. See more about **use** in SVG documentation.

```javascript
k = n.use();
```

### Remove

```javascript
n.remove();
```

### To defs

Send the object to the **defs** area (not visible)

```javascript
u.toDefs();
```

### Clear

Clear all inside the SVG:

```javascript
s.clear();
```

## Groups

Create a group:

```javascript
var s = Snap("#svg");
var n = s.select("#test");
var u = s.select("rect");

var z = s.g(n,u);
```

**Note**: Changing X and Y can't be applied to groups. If you want to animate or move a group, you should use a transform.

## Nested svgs

Nested svgs create a new coordinate system. They can be useful when groups can't handle it.

```javascript
var p = s.svg(10,10, 100, 100, 0, 0, 100,100); // Paper.svg(x, y, width, height, vbx, vby, vbw, vbh) 
p.ellipse(50,50,30,20);
```

## Create objects with Snap

How to create new objects with Snap and JavaScript:

### Line

```javascript
var w = s.line(400, 30, 20, 20).attr({ stroke:"blue", strokeWidth: 3 });
```

### Polyline

Each pair of numbers is a point

```javascript
var myLine = s.polyline([30,60,130,160,50,40]).attr({stroke: "blue", fill: "none"});
```

### Rectangle

```javascript
var c = s.rect(10, 10, 50, 50); // regular rectangle
var c = s.rect(40, 40, 50, 50, 10); // rectangle with rounded corners
```

### Circle

```javascript
var c = s.circle(50, 50, 40);
```

### Elipse

```javascript
var e = s.ellipse(50,50,30,20);
```

### Polygon

Each pair of numbers is a point

```javascript
var myPolygon = s.polygon([20,60,130,170,0,0]);
```

### Path

Note: It should work with a path imported from Inkscape or Illustrator.

```javascript
var myPath = s.path("M445.25,300V140c0-5.523-4.478-10-10-10h-183c-5.523,0-10,4.477-10,10v160H445.25z");
```

### Text

```javascript
var j = s.text(55, 120, "Hello world");
j.attr({fontFamily: "Sans-Serif"});
j.attr({fontSize: "22px"});
j.attr({fill: "red"});
var koo = Snap.parse("<tspan>Koo</tspan>");
j.append(koo);
```

### Image

Place a squared image with 80px at position 10,10:

```javascript
var c = s.image("example.jpg", 10, 10, 80, 80);
```

### Masks

```javascript
var c = s.circle(200,200,40).attr({ fill: 'white' });
var n = s.rect(120,120, 180, 80).attr({fill: "blue", mask: c});
```

The tone of the mask is very important. White for maximum effect, grey makes the form less intense and black makes the mask invisible.

## Work with attributes

Attributes are very important to create interactive elements or to animate.

### Change atributes

```javascript
n.attr({cx: 80, cursor: "pointer"});
q.attr({x: 120, y: 100, fill:"blue"});
```

### Read attribute

Read attribute cx from element n:

```javascript
n.attr().cx
```

## Gardients

### Linear

```javascript
var g = s.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
var n = s.rect(120,120, 180, 80).attr({fill: g});
```

### Radial

```javascript
var g = s.gradient("r(0.5, 0.5, 0.8)#000-#9c9-#fff");
var n = s.rect(120,120, 180, 80).attr({fill: g});
```

## Patterns

Create an object, define an area to be used as pattern and apply the pattern as fill.

```javascript
var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    })

var pat = p.pattern(0, 0, 10, 10); // Element.pattern(x, y, width, height)

var c = s.circle(200, 200, 100);
c.attr({
    fill: pat
});
```

## Transform

Rotate, translate and scale:

```javascript
c.transform( "r45");
c.transform( "r45 110 10");
```

Translate from the current position:

```javascript
c.transform( "t-45,45");
```

Scale from the center, scale width but not height and scale from the 0,0 coordinates:

```javascript
c.transform( "s1.5");
c.transform( "s1.5,1");
c.transform( "s2 0 0");
```

## Classes

Classes are very important to manage state and work with animations.

### Add a class

Add a class to an SVG element:

```javascript
n.addClass("foo");
```

### Has this class?

Check if an element has a specific class. In this example "foo"

```javascript
n.hasClass("foo") // true or false
```

### Remove class

Remove the class foo from the element n:

```javascript
n.removeClass("foo");
```

## Events

Events is how you make your pages listen to user input:

### Click

**Add** the event:

```javascript
n.click(function(){
    console.log("You have clicked in the elipse");
});
```

**Remove** all events from an element:

```javascript
n.unclick();
```

### Hover

Add the hover event to an element:

```javascript
n.hover(function(){
    console.log("You have hovered the elipse");
}, function(){
    console.log("You have left the elipse");
});
```

Remove the hover events from an element:

```javascript
n.unhover();
```

## Load SVG file or fragment

Load SVG as a separate file, once loaded insert it into the dom and perform operations.

```xml
<svg id="svg" width="800" height="800" version="1.1" viewbox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"></svg>
```

```javascript
var s = Snap("#svg");
var tux = Snap.load("tux.svg", function ( loadedFragment ) {
    s.append( loadedFragment );
} );
```

## Other stuff

See what **type** of object it is:

```javascript
n.type
n.node
```

Grab **SVG** code as a **string**

```javascript
s.innerSVG();
s.outerSVG();
s.toString();
```

Convert **string to fragment** and append it to the dom.

```javascript
var title = Snap.parse('<title>This is a title 2</title>'); 
var rect = s.rect(20,20,40,40);
rect.append( title );
```

Convert a **snap object to a data url**, that can be used in html as an image.

```javascript
var imagecontent = n.toDataURL();
```

## Animate with javascript

### Simple

```javascript
u.animate({x: 100},2000);
```

### Define **easying** and **callback**

```javascript
u.animate({x: 100},2000, mina.bounce);
u.animate({x: 100},2000, mina.elastic);
u.animate({x: 100},2000, mina.linear, function(){
    console.log("Done");
});
u.animate({transform: "r45"},2000, mina.easeinout, function(){
    console.log("Done");
});
```

**mina** includes easying functions that you can use in your animations.

### Animate a **number**

```javascript
var t = s.text(50,50,0);
Snap.animate(0, 100, function (value) {
    t.attr({text: Math.round(value)});
}, 1000);
```

```javascript
Snap.animate(0, 180, function (value) {
    u.attr({ transform: "r" + value});
}, 2000);
```

Snap animate does not loop trough all the numbers like a classic javascript loop. It also doesn't block the UI, so you can perform many simultaneous animations.

### Multiple step animations

Structure your code to have each step of the animation as an independent function and use the callbacks.

```javascript
var mysvg = Snap("#mysvg");
var rect = mysvg.select("#myrect");

var anims = [
    function(){
        rect.animate({x:0}, 2000, mina.bounce, anims[1] );
    },
    function(){
        rect.animate({x:170, y:190}, 2000, mina.bounce, anims[2] );
    },
    function(){
        rect.animate({x:340, y:400}, 2000, mina.bounce, anims[3] );
    },
    function(){
        rect.animate({ transform: "r45" }, 1000 );
    }
];
anims[0]();
```

### Animate along a path

This requires a modified version of the [animate-object-path](http://svg.dabbles.info/animate-object-path.js) plugin.

Apart from animating an object this plugin can be used to animate paths and create the live drawing effect.

```xml
<svg id="mysvg" width="600" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
   <rect x="0" y="220" width="140" height="56" fill="#f00" id="myRect"/>
   <path d="m42,247c200,-26 12,-170 77,-180c160,-22 230,210 360,170c48,-17 65,-140 65,-140" fill="none" stroke="#000" stroke-width="1px" id="myPath"/>
</svg>
```

```html
<script src='js/snap.svg-min.js'></script>    
<script src="animate-object-path-2.js"></script>
```

```javascript
var mysvg = Snap("#mysvg");
var myPath = mysvg.select("#myPath");
var myRect = mysvg.select("#myRect");
var mygroup = mysvg.group(myRect);

mygroup.drawAtPath( myPath, 3000, { rotate: true, easing: mina.linear, reverse: false, drawpath: true, callback: function(){ console.log("Done")} } );
```

### SVG and CSS animations

Don't forget to **test** your CSS animations, as not all proprieties will work in all browsers.

First the CSS animation:

```css
@keyframes disappear {
  0% {
      opacity: 1;
      transform: translateX(0px);
    }
  33% {
      opacity: 0.6;
      transform: translateX(10px);
    }
  66% {
      opacity: 0.3;
      transform: translateX(20px);
    }
  100% {
      opacity: 0;
      transform: translateX(30px);
    }
}

.vanish {
    animation-name: disappear;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0.5s;
    animation-iteration-count: 2;
    animation-fill-mode: forwards;
}
```

The svg:

```xml
<svg id="svg" width="800" height="800" version="1.1" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0,-97)" stroke="#872eca" stroke-width=".079">
        <ellipse id="test" cx="63" cy="1.7e2" rx="40" ry="41" fill="#0f0"/>
        <rect x="110" y="120" width="74" height="66" ry="0" fill="red"/>
    </g>
</svg>
```

And finally the javascript (snap):

```javascript
var u = s.select("rect");
u.addClass("vanish");
```

If you add classes as a consequence of user behavior, you are creating interactive svgs.

## Matrix

Matrix is a tool to calculate the transform parameters.

**getBBox** is a utility to get info about the object you want to apply the matrix.

```javascript
var myMatrix = new Snap.Matrix();
myMatrix.scale(2,2, u.getBBox().cx, u.getBBox().cy);
myMatrix.translate(100,0);
myMatrix.rotate(45, u.getBBox().cx, u.getBBox().cy);
myMatrix.skewX(20)
myMatrix.skewY(20)
u.transform(myMatrix);
myMatrix.toString()
```

It can also be applied to paths.