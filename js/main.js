(function($) {
  'use strict'

  var draw = (data) => {
      var width = "100%",
          height = 800;
      var svg = dimple.newSvg('#chart', width, height);
      var myChart = new dimple.chart(svg, data);

      // set y axis
      var minY = 0.70,
          maxY = .90;
      var y = myChart.addMeasureAxis('y', 'On Time');
      y.tickFormat = '%';
      y.overrideMin = minY;
      y.overrideMax = maxY;
      y.title = 'Percentage of Arrivals on Time (within 15 minutes)';

      // set x axis
      var x = myChart.addTimeAxis('x', 'Year');
      x.tickFormat = '%Y';
      x.title = 'Year';

      // set series and legend
      var s = myChart.addSeries('Carrier Name', dimple.plot.scatter);
      var p = myChart.addSeries('Carrier Name', dimple.plot.line);
      var legend = myChart.addLegend("10%", "5%", "80%", "20%", "right");

      // draw
      myChart.draw();

      // handle mouse events on gridlines
      y.gridlineShapes.selectAll('line')
      .style('opacity', 0.25)
      .on('mouseover', function(e) {
        d3.select(this)
          .style('opacity', 1);
      }).on('mouseleave', function(e) {
        d3.select(this)
          .style('opacity', 0.25);
      });

    // handle mouse events on paths
    d3.selectAll('path')
      .style('opacity', 0.25)
      .on('mouseover', function(e) {
        d3.select(this)
          .style('stroke-width', '8px')
          .style('opacity', 1)
          .attr('z-index', '1');
    }).on('mouseleave', function(e) {
        d3.select(this)
          .style('stroke-width', '2px')
          .style('opacity', 0.25)
          .attr('z-index', '0');
    });
  }

  var createViz = () => {
    d3.csv("/data/data.csv", function(d) {
      return {
        'Year': d.year,
        'Carrier Name': d.carrier_name,
        'On Time': +d.on_time,
        'Arrivals': +d.arrivals
      };
    }, function(data) {
      // set svg
      draw(data);
      events();
    });
  }

  createViz();

}).apply(this, [jQuery]);
