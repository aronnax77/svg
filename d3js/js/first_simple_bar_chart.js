/*            Author: Richard Myatt
              Date: 24 January 2019

              A simple bar chart based on a tutorial series by d3Vienno
              at https://www.youtube.com/watch?v=n5NcCoa9dDU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
*/

// Data for our bar chart
var dataArray = [30, 20, 30, 50, 40, 30];

// create the svg
var canvas = d3.select("body")
              .append("svg")
              .attr("width", 300)
              .attr("height", 350);

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
var bars   = canvas.selectAll("rect")
              .data(dataArray, function(d) { return d; })
              .enter()
                .append("rect")
                .attr("width", function(data) { return data * 5; } )
                .attr("height", 30)
                .attr("y", function(data, index) {return index * 40 + 30;} );
