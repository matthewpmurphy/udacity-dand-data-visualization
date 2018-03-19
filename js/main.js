(function($) {
    'use strict'
    //draw our chart
    function draw(data) {
        'use strict';
        var minOnTimeValue = (function(data, field) {
        var minimum = 1;
        data.forEach(function(record) {
            if (record[field] < minimum) {
                minimum = record[field];
            }
        });
        return minimum;
        })(data, 'on_time');
        var minY = Math.round(minOnTimeValue*10)/10,
            maxY = 1;
        var width = 960,
            height = 640;
        var svg = dimple.newSvg('#content', 960, 640);
        var myChart = new dimple.chart(svg, data);
        // set x axis
        var x = myChart.addTimeAxis('x', 'year');
        x.tickFormat = '%Y';
        x.title = 'Year';
        // set y axis
        var y = myChart.addMeasureAxis('y', 'on_time');
        y.tickFormat = '%';
        y.overrideMin = minY;
        y.overrideMax = maxY;
        y.title = 'Percentage of Arrivals on Time (within 15 minutes)';
        myChart.addSeries('carrier_name', dimple.plot.line);
        myChart.addSeries('carrier_name', dimple.plot.scatter);
        myChart.addLegend(width*0.65, 75, width*0.25, 75, 'right');
        myChart.draw();
    }

    //Use D3 to load CSV file and use `draw` callback
    d3.csv("/data/data.csv", function(d) {
        return {
            year: d.year,
            carrier_name: d.carrier_name,
            on_time: +d.on_time,
            arrivals: +d.arrivals
        };
    }, function(error, data) {
        // console.log(error);
        draw(data);
    });
}).apply(this, [jQuery]);