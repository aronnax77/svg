/*            Author: Richard Myatt
              Date: 23 January 2019

              A first look at d3.js based on a tutorial series by d3Vienno
              at https://www.youtube.com/watch?v=n5NcCoa9dDU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p
*/

// a basic example showing how d3 is layed out
d3.select("body")                   // select the body element
  .append("h2")                     // append an h2 element
  .style("color", "red")            // provide some basic styling
  .text("Hello World from d3.js");  // add content
