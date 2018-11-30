// Adjust the dates in the URL based on your time area of interest. Format is YYYY-MM-DD.
/* data = {
    var startDate = '2017-07-01', // Adjust these dates based on your area of interest.
    var endDate = '2018-03-07',
    var query = `start=${startDate}&end=${endDate}`,
    var {bpi} = await (await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?${query}`)).json(),
    return Object.entries(bpi).map(([key, value]) => ({date: new Date(key), value}))
  } */

var startDate = '2017-08-01'; // Adjust these dates based on your area of interest.
var endDate = '2018-03-29';
var query = 'start=' + startDate + '&end=' + endDate;
// var {bpi} = await (await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?${query}`)).json(),

var parseTime = d3.isoParse;
var formatTime = d3.isoFormat;
var height = 600;
var width = 800;
var margin = {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40
};


var get_date_data = function (datestring, data) {
    /* 
    Returns the first item in a data whose date property matches the provided datestring
    Args:
       data: an array of data points to filter on
       datestring: a string representing a datetime
    */
    var filtered = data.filter(x => days_are_equal(x.date, parseTime(datestring)))
    return {
        date: datestring,
        close: filtered[0].value
    }
}


var days_are_equal = function (day_a, day_b) {
    /* True if two datetimes occur on the same day */
    return (day_a.getDate() === day_b.getDate() &
        day_a.getMonth() === day_b.getMonth() &
        day_a.getFullYear() == day_b.getFullYear())
}

// I used 4 of the 8 annotation types, be sure to see the other 4 options when building your own!
// http://d3-annotation.susielu.com/#types

var render_linechart = function (data, xAxis, yAxis, lineFunction, debug) {
    /* Return a DOM node with containing a line chart.
  
    Arguments:
      data: a list of data objects (dictionaries or iterables)
      xAxis: a d3.axis
      yAxis: a d3.axis
      lineFunction: a function used to extract values from each datapoint and render line segments.
      debug: variable that forces the chart to redraw every time this step reruns
    */
    // var svg = d3.select(DOM.svg(width, height));
    var svg = d3.select('#riseofbitcoin').append('svg')
        .attr('width', width)
        .attr('height', height);

    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#3172bc") // Enigma Blue
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", lineFunction)

    return svg.node();
}


var DEBUG = true;

/* 获取数据 */
$.get('https://api.coindesk.com/v1/bpi/historical/close.json?' + query, function (data) {
    if (!data) return;
    var key = null;
    var bpi = JSON.parse(data).bpi;
    var chartData = [];
    for (key in bpi) {
        if (bpi.hasOwnProperty(key)) {
            chartData.push({
                date: new Date(key),
                value: bpi[key]
            });
        }
    }

    var x = d3.scaleTime()
        .domain(d3.extent(chartData, function (d) {
            return d.date
        }))
        .range([margin.left, (width - margin.right)]);
    var y = d3.scaleLinear()
        .domain([0, d3.max(chartData, function (d) {
            return d.value
        })]).nice()
        .range([(height - margin.bottom), margin.top])

    var line = d3.line()
        .defined(function (d) {
            return !isNaN(d.value)
        })
        .x(function (d) {
            return x(d.date)
        })
        .y(function (d) {
            return y(d.value)
        })

    var xAxis = function (g) {
        return g
            .attr("transform", 'translate(0,' + (height - margin.bottom) + ')')
            .attr("class", "x-axis")
            .call(d3.axisBottom(x)
                .ticks(width / 80)
                .tickSizeOuter(0))
    }

    var yAxis = function (g) {
        return g
            .attr("transform", 'translate(' + margin.left + ',0)')
            .attr("class", "y-axis")
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y));
    }

    // 标注数据
    var labelAnnotations = [{
            id: "bitcoin-cash-fork",
            // If you don't provide a custom "type" attribute in your options dictionary, , 
            // the default type in the getAnnotations function will be used.
            note: {
                label: "Bitcoin splits into Bitcoins and Bitcoin Cash",
                title: "08-01-2017"
            },
            data: get_date_data("2017-08-01T00:00", chartData),
            dx: -15,
            dy: -57,
        }, {
            id: "china-shutdown-exchanges",
            note: {
                label: "China shuts down all crypto exchanges",
                title: "09-15-2017",
            },
            data: get_date_data("2017-09-15T00:00", chartData),
            dx: -18,
            dy: -50,
        }, {
            id: "segwit-2x-delayed",
            type: d3.annotationCallout, // this type of annotation draws a line under your label.
            note: {
                label: "Segwit2X delayed",
                title: "11-08-2017"
            },
            data: get_date_data("2017-11-08T00:00", chartData),
            dx: -2,
            dy: 104,
        }, {
            id: "cross-ten-thousand",
            type: d3.annotationCalloutCurve, // this type of annotation lets you used a curved connector.
            note: {
                label: "First time over $10k",
                title: "11-28-2017"
            },
            connector: { // pass the connector an array of points to define your curve.
                points: [
                    [-9, -24],
                    [-30, -44.6]
                ]
            },
            data: get_date_data("2017-11-28T00:00", chartData),
            dx: -53,
            dy: -47,
        }, {
            id: "all-time-high",
            note: {
                label: "First time over $20k",
                title: "12-16-2017"
            },
            data: get_date_data("2017-12-16T00:00", chartData),
            dx: -102,
            dy: 2,
        }, {
            id: "segwit-2x-hard-fork",
            note: {
                label: "Segwit2X hard fork",
                title: "12-29-2017"
            },
            data: get_date_data("2017-12-29T00:00", chartData),
            dx: -4,
            dy: 89,
        },
        {
            id: "valley-of-uncertainty",
            note: {
                label: "What caused this rapid drop + rebound?",
                title: "Jan - Feb '18"
            },
            color: "#ef4837", // Brighter color to make this annotation stand out
            x: 803,
            y: 336,
            dx: -5,
            dy: 115,
            subject: {
                radius: 52,
                radiusPadding: 5
            },
            type: d3.annotationCalloutCircle // This annotation refers to an area rather than a point
        },
    ];

    var getAnnotations = function (annotationList, x, y, parseTime, formatTime, debug) {
        /* 
        Return a list of d3.annotation objects
      
      Arguments
        annotationList - a list of dictionaries used to configure each annotation
        x: a d3.scale
        y: a d3.scale
        parseTime: function for turning strings into js dates
        formatTime: function for turning js date into a string
        debug: a boolean flag 
      */
        // var chart // reactive hack to force annotations to render whenever the chart is redrawn
        var makeLabelAnnotations = d3.annotation()
            .editMode(debug) // GLOBAL VARIABLE
            .type(d3.annotationLabel) // Adjust this arg to adjust the default annotation styling.
            .accessors({
                x: d => x(parseTime(d.date)),
                y: d => y(d.close) // If you use a new dataset, you may need to update this accessor.
            })
            .accessorsInverse({
                date: d => formatTime(x.invert(d.x)),
                close: d => y.invert(d.y)
            })
            .annotations(annotationList)

        return makeLabelAnnotations
    }

    var applyAnnotations = function (annotations, target) {
        /*Draws d3.annotation objects onto a designated DOM node  */

        d3.select(target)
            .append("g")
            .attr("class", "annotation-group")
            .call(annotations)

        return annotations
    }

    var chart = render_linechart(chartData, xAxis, yAxis, line, DEBUG);

    var labels = getAnnotations(labelAnnotations, x, y, parseTime, formatTime, DEBUG);

    applyAnnotations(labels, chart);



    console.log([margin.left, (width - margin.right)])
})