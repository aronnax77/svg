/*            Author: Richard Myatt
              Date: 23 January 2019

              A basic example showing the use of svg in d3.js based on a tutorial series by d3Vienno
              at https://www.youtube.com/watch?v=n5NcCoa9dDU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
*/

var canvas = d3.select("body")
              .append("svg")
              .attr("width", 300)
              .attr("height", 300);

var bg     = canvas.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", 300)
              .attr("height", 300)
              .style("fill", "white");

var rect   = canvas.append("rect")
              .attr("x", 50)
              .attr("y", 50)
              .attr("width", 200)
              .attr("height", 200);

var circle = canvas.append("circle")
              .attr("cx", 150)
              .attr("cy", 150)
              .attr("r", 50)
              .style("fill", "red");
