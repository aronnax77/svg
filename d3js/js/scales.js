/*          Author: Richard Myatt
              Date: 25 January 2019

              A simple bar chart using d3's scaleLinear based on a tutorial series by d3Vienno
              at https://www.youtube.com/watch?v=n5NcCoa9dDU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
*/

// Data for our bar chart
var dataArray = [30, 20, 30, 50, 40, 30];
var width     = 300;
var height    = 300;

// using a scale to control the length of the input bars
// the domain specifies the anticipated data range
// the range specifies the full length of the bar for the maximum value in
// the domain specification
var widthScale = d3.scaleLinear()
                    .domain([0, 50])
                    .range([0, 250]);

// create the svg
var canvas = d3.select("body")
              .append("svg")
              .attr("width", width)
              .attr("height", height);

// colours can also be made to vary accross the bars in a linear manner
//var colorScale = d3.scaleLinear()
//                  .domain([0, 50])
//                  .range(["red", "green"]);

// provide a background to the svg
var bg     = canvas.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", 300)
              .attr("height", 300)
              .style("fill", "white");

// form the bar chart
// note the key reference as the second parameter to .data
// required to ensure that all data elements are included
// in this case where the background is also a 'rect'
// bars coloured red for data values <= 30 and green when greater
var bars   = canvas.selectAll("rect")
              .data(dataArray, function(d) { return d; })
              .enter()
                .append("rect")
                .style("fill", function(d) { return d <= 30 ? "red" : "green"; })
                .attr("width", function(d) { return widthScale(d); } )
                .attr("height", 30)
                .attr("y", function(data, index) {return index * 40 + 30;} );
