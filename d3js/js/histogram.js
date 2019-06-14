/*            Author: Richard Myatt
              Date: 11 February 2019

              An example of a histogram using d3js.

Copy of data
[ 36.42,  24.23,  50.36,  50.72,  27.20,  53.36,  30.63,
40.27, 103.62,  84.72,  35.20,  46.63,  47.83,  28.60,
22.27,  19.67, 105.36,  60.37, 109.46,  63.72,  64.83,
52.36,  50.72,  42.78,  73.70,  37.63,  42.74,  50.63,
64.90,  65.60,  28.30,  70.23,  67.20,  63.83,  57.60,
58.73,  97.23,  63.40,  65.23,  58.60,  51.46,  55.60,
58.63,  51.30,  55.50,  48.33,  70.58,  80.93,  38.60,
29.36,  27.32,  37.40,  33.20,  33.40,  74.60,  87.20,
83.23,  63.76,  77.60,  89.40,  43.60,  47.60,  52.30,
43.57,  74.60,  72.20,  93.60,  95.43,  91.30,  54.87,
48.98,  57.76,  45.67,  52.89,  59.89 ];
*/

// declare variables
var dataset;
var binMax = 0;

d3.json("https://raw.githubusercontent.com/aronnax77/svg/master/d3js/data/pigData.json", function(e, d) {

}).then(function(d)
{
  dataset = d.data;


// calculate the minimum and maximum values of the dataset
var dataMin = d3.min(dataset);
var dataMax = d3.max(dataset);

// construct a new histogram function
var histogram = d3.histogram()
            .domain([dataMin, dataMax])
            .thresholds([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]);

// calculate the data in the bins
var bins = histogram(dataset);

// calculate maximum value of bins
for(var i = 0; i < bins.length; i++) {
  if(bins[i].length > binMax) {
    binMax = bins[i].length;
  }
}

// construct the histogram display
// establish variables
var svgWidth    = 500;  // width of svg
var svgHeight   = 300;  // height of svg
var graphHeight = 200;  // maximum height of bar graph
var graphWidth  = 400;  // maximum width of bar graph
var yPadding    = 4;    // allow some padding at maximum range of data
var binWidth    = 10;   // width of bin

// provide and x scale
var xScale = d3.scaleLinear()
                .domain([0, 120])
                .range([0, 400]);

// provide and y scale
var yScale = d3.scaleLinear()
                .domain([0, binMax + yPadding])
                .range([200, 0]);

//  provide an y axis to the left of the chart
var yAxis        = d3.axisLeft(yScale);

var xAxis        = d3.axisBottom(xScale);

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
var histogramGroup  = svg.append("g")
                      .attr("transform", "translate(50,50)");

histogramGroup.selectAll("rect")
    .data(bins)
    .enter()
      .append("rect")
      .attr("x", function(d, i) { if(i === 0) {
                                    return xScale(d%10);
                                } else {
                                  return xScale(d.x0);
                                } })
      .attr("y", function(d, i) { return yScale(d.length); })
      .attr("width", function(d) { return xScale(10); } )
      .attr("height", function(d) { return yScale(binMax - d.length + yPadding); } )
      .attr("stroke", "#bbb")
      .style("fill", "#0e8cf8");


// form a group for the y axis
var yAxisGroup = svg.append("g")
                  .attr("class", "axis")
                  .attr("transform", "translate(50, 50)")
                  .call(yAxis);

// form a group for the x axis
var xAxisGroup = svg.append("g")
                  .attr("class", "axis")
                  .attr("transform", "translate(50, 250)")
                  .call(xAxis);

// add a title
svg.append("text")
    .attr("font-size", 20)
    .style("font-weight", "bold")
    .attr("x", 250)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .attr("fill", "#000")
    .text("Histogram");

// add text for y axis
svg.append("text")
    .attr("font-size", 12)
    .attr("transform", "rotate(-90 20 170)")
    .attr("x", 20)
    .attr("y", 170)
    .attr("text-anchor", "start")
    .attr("fill", "#000")
    .text("Number");

// add text for x axis
svg.append("text")
    .attr("font-size", 12)
    .attr("x", 300)
    .attr("y", 285)
    .attr("text-anchor", "middle")
    .attr("fill", "#000")
    .text("Weight (kg)");


});
