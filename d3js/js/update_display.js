/*            Author: Richard Myatt
              Date: 27 January 2019

              Revision: 27 January 2019 -Notes added.

              A simple bar chart using d3js based on a tutorial series by d3Vienno.
              at https://www.youtube.com/watch?v=n5NcCoa9dDU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
              Updating the display.  In this case two sets of data are used at 1s intervals.
*/

// Data for our bar chart
var dataArray1 = [30, 20, 30, 50, 40, 30];
var dataArray2 = [10, 20, 40, 50, 20, 10];

// other variables
var newData;
var startFlag  = true;
var width     = 300;
var height    = 300;

// using a scale to control the length of the input bars
// the domain specifies the anticipated data range
// the range specifies the full length of the bar for the maximum value in
// the domain specification
var widthScale = d3.scaleLinear()
                    .domain([0, 50])
                    .range([0, 250]);

// specify the axis with 5 tick marks
var axis       = d3.axisBottom(widthScale)
                  .ticks(5);

// create the svg
var canvas = d3.select("#data-container")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

// provide a background to the svg
var bg     = canvas.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", 300)
              .attr("height", 300)
              .style("fill", "white");

canvas.append("text")
      .text("Bar Chart")
      .style("font-size", 10)
      .style("font-weight", "bold")
      .attr("x", 20)
      .attr("y", 20);

// form a group here to hold the data display
// note that the position in which the group is
// formed in the code dictates its position in the svg
// attributes and transforms can be applied to the group
// in the same way in which you would do so in an svg
var barGroup = canvas.append("g")
                .attr("transform", "translate(20, 0)");

// form the bar chart within the group
// note the key reference shown in previous codes in the .data attribute can
// now be removed since the bars are the only rectangles in the group
var bars   = barGroup.selectAll("rect")
              .data(dataArray1)
              .enter()
                .append("rect")
                .style("fill", function(d) { return d <= 30 ? "red" : "green"; })
                .attr("width", function(d) { return widthScale(d); } )
                .attr("height", 30)
                .attr("y", function(data, index) {return index * 40 + 30;} );

// append another group to hold the axis
var axisGroup = canvas.append("g");

// add the new axis and position at the bottom of the display
var newAxis   = axisGroup
                  .attr("transform", "translate(20, 275)")
                  .call(axis);

// use setInterval to update the display
setInterval(function() {
  if(startFlag) {
    newData = dataArray2;
    startFlag = false;
  } else {
    newData = dataArray1;
    startFlag = true;
  }

  barGroup.selectAll("rect")
    .data(newData)
    .style("fill", function(d) { return d <= 30 ? "red" : "green"; })
    .attr("width", function(d) { return widthScale(d); } );
}, 1000);
