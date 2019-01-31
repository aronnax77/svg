/*          Author: Richard Myatt
              Date: 29 January 2019

              Another example of a bar chart based on an example from 'Interactive Data Visualization for the web' by Scott Murray.
*/

// establish variables
var svgWidth    = 500;  // width of svg
var svgHeight   = 300;  // height of svg
var graphHeight = 200;  // maximum height of bar graph
var graphWidth  = 400;  // maximum width of bar graph
var barPadding  = 1;    // space between bars

// define our data set
var dataset   = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                  11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// provide a scale for the chart
var heightScale = d3.scaleLinear()
                    .domain([0, 30])
                    .range([0, 200]);

// provide a scale for the axis
var axisScale   = d3.scaleLinear()
                    .domain([0, 30])
                    .range([200, 0]);

//  provide an axis to the left of the chart
var axis        = d3.axisLeft(axisScale)
                    .ticks(5);

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
                  .style("fill", "white");

var barGroup  = svg.append("g")
                  .attr("transform", "translate(40,50)");

// render the bar chart
barGroup.selectAll("rect")
    .data(dataset)
    .enter()
      .append("rect")
      .attr("x", function(d, i) { return i * 21; })
      .attr("y", function(d) { return graphHeight - heightScale(d); })
      .attr("width", graphWidth / dataset.length - barPadding)
      .attr("height", function(d) { return heightScale(d); })
      .style("fill", "teal");

// render the data values into the bars of the chart
barGroup.selectAll("text")
    .data(dataset)
    .enter()
      .append("text")
      .text(function(d) { return d; })
      .attr("text-anchor", "middle")
      .attr("x", function(d,  i) { return i * (graphWidth / dataset.length)  +
        (graphWidth / dataset.length - barPadding)/2 + i; })
      .attr("y", function(d) {return graphHeight - heightScale(d) + 15; })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white");

// form a group for the axis
var axisGroup = svg.append("g")
                  .attr("transform", "translate(40, 50)")
                  .call(axis);

// decorate the base of the chart with a line
svg.append("line")
    .attr("x1", 40)
    .attr("y1", 250)
    .attr("x2", 465)
    .attr("y2", 250)
    .attr("stroke", "black")
    .attr("stroke-width", 2);

// add a title
svg.append("text")
    .attr("font-size", 20)
    .style("font-weight", "bold")
    .attr("x", 250)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .text("Bar Chart");
