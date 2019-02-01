/*            Author: Richard Myatt
              Date: 30 January 2019

              Revision: 30 January 2019.  Rationalised rendering of plot and axis
              using a reversed y scale for both.

              Revision: 1 February 2019.  Padding added and calculation of maximum
              values modified to use d3 more effectively.  Background colour changed
              and external border added.  Colour of text and axis changed.

              A scatter plot based on an example from 'Interactive Data Visualization for the web' by Scott Murray
*/

// establish variables
var svgWidth    = 500;  // width of svg
var svgHeight   = 300;  // height of svg
var graphHeight = 200;  // maximum height of bar graph
var graphWidth  = 400;  // maximum width of bar graph
var padding     = 20;   // allow some padding at maximum range of data

var xmax, ymax;

// define the data setNum
var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

// get x and y max
xmax = d3.max(dataset, function(d) { return d[0]; }) + padding;
ymax = d3.max(dataset, function(d) { return d[1]; }) + padding;

// provide and x scale
var xScale = d3.scaleLinear()
                .domain([0, xmax])
                .range([0, 400]);

// provide and y scale
var yScale = d3.scaleLinear()
                .domain([0, ymax])
                .range([200, 0]);

//  provide an y axis to the left of the chart
var yAxis        = d3.axisLeft(yScale)
                      .ticks(5);

var xAxis        = d3.axisBottom(xScale)
                      .ticks(5);

// append svg to its container
// append svg to its container
var svg       = d3.select("#svg-container")
                  .append("svg")
                  .attr("width", svgWidth)
                  .attr("height", svgHeight)
                  .attr("viewBox", "0 0 500 300");

// provide a background to the svg
var bg        = svg.append("rect")
                  .attr("x", 0)
                  .attr("y", 0)
                  .attr("width", "100%")
                  .attr("height", "100%")
                  .style("fill", "lightyellow");

// provide a group element to hold the plot and position within svg
var scatterGroup  = svg.append("g")
                        .attr("transform", "translate(40,50)");

                        // render the bar chart
scatterGroup.selectAll("circle")
    .data(dataset)
    .enter()
      .append("circle")
      .attr("cx", function(d) { return xScale(d[0]); })
      .attr("cy", function(d) { return yScale(d[1]); })
      .attr("r", 3)
      .style("fill", "red");

// label the data entries
scatterGroup.selectAll("text")
    .data(dataset)
    .enter()
      .append("text")
      .text(function(d) { return "(" + d[0] + ", " + d[1] + ")"; })
      .attr("text-anchor", "start")
      .attr("x", function(d) { return xScale(d[0] + 3); })
      .attr("y", function(d) { return yScale(d[1] + 3); })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "darkblue");

// form a group for the y axis
var yAxisGroup = svg.append("g")
                  .attr("class", "axis")
                  .attr("transform", "translate(40, 50)")
                  .call(yAxis);

// form a group for the x axis
var yAxisGroup = svg.append("g")
                  .attr("class", "axis")
                  .attr("transform", "translate(40, 250)")
                  .call(xAxis);

// add a title
svg.append("text")
    .attr("font-size", 20)
    .style("font-weight", "bold")
    .attr("x", 250)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .attr("fill", "darkblue")
    .text("Scatter Plot");
