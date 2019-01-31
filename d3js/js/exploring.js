// create a data set
var data1 = [1, 2, 3, 4, 5];
var data2 = [2, 2, 2, 2, 2];

/*d3.select("body").append("p").attr("id", "p_1");

d3.select("body").append("p").attr("id", "p_2");

d3.select("body").append("p").attr("id", "p_3");

d3.select("body").append("p").attr("id", "p_4");

d3.select("body").append("p").attr("id", "p_5");

var dataSelection = d3.select("body").selectAll("p").data([1]);*/

d3.select("body").selectAll("p")
    .data([1, 2, 3, 4])
  .enter().append("p")
    .attr("id", function(d) { return "p_"+d; })
    .text(function(d) {return d;});

var dataSelection = d3.select("body").selectAll("p").data([5, 6, 7, 8])
                      .text(function(d) {return d;});
