
let data = [
  {date: '2007-04-23', value: 93.24},
  {date: '2007-04-24', value: 95.35},
  {date: '2007-04-25', value: 98.84},
  {date: '2007-04-26', value: 99.92},
  {date: '2007-04-29', value: 99.8},
  {date: '2007-05-01', value: 99.47},
  {date: '2007-05-02', value: 100.39},
  {date: '2007-05-03', value: 100.4},
  {date: '2007-05-04', value: 100.81},
  {date: '2007-05-07', value: 103.92},
  {date: '2007-05-08', value: 105.06},
  {date: '2007-05-09', value: 106.88},
  {date: '2007-05-09', value: 107.34},
  {date: '2007-05-10', value: 108.74},
  {date: '2007-05-13', value: 109.36},
  {date: '2007-05-14', value: 107.52},
  {date: '2007-05-15', value: 107.34},
  {date: '2007-05-16', value: 109.44},
  {date: '2007-05-17', value: 110.02},
  {date: '2007-05-20', value: 111.98},
  {date: '2007-05-21', value: 113.54},
  {date: '2007-05-22', value: 112.89},
  {date: '2007-05-23', value: 110.69},
  {date: '2007-05-24', value: 113.62},
  {date: '2007-05-28', value: 114.35},
  {date: '2007-05-29', value: 118.77},
  {date: '2007-05-30', value: 121.19},
  {date: '2007-06-01', value: 118.4},
  {date: '2007-06-04', value: 121.33},
  {date: '2007-06-05', value: 122.67},
  {date: '2007-06-06', value: 123.64},
  {date: '2007-06-07', value: 124.07},
  {date: '2007-06-08', value: 124.49},
  {date: '2007-06-10', value: 120.19},
  {date: '2007-06-11', value: 120.38},
  {date: '2007-06-12', value: 117.5},
  {date: '2007-06-13', value: 118.75},
  {date: '2007-06-14', value: 120.5},
  {date: '2007-06-17', value: 125.09},
  {date: '2007-06-18', value: 123.66},
  {date: '2007-06-19', value: 121.55},
  {date: '2007-06-20', value: 123.9},
  {date: '2007-06-21', value: 123},
  {date: '2007-06-24', value: 122.34},
  {date: '2007-06-25', value: 119.65},
  {date: '2007-06-26', value: 121.89},
  {date: '2007-06-27', value: 120.56},
  {date: '2007-06-28', value: 122.04},
  {date: '2007-07-02', value: 121.26},
  {date: '2007-07-03', value: 127.17},
  {date: '2007-07-05', value: 132.75},
  {date: '2007-07-06', value: 132.3},
  {date: '2007-07-09', value: 130.33},
  {date: '2007-07-09', value: 132.35},
  {date: '2007-07-10', value: 132.39},
  {date: '2007-07-11', value: 134.07},
  {date: '2007-07-12', value: 137.73},
  {date: '2007-07-15', value: 138.1},
  {date: '2007-07-16', value: 138.91},
  {date: '2007-07-17', value: 138.12},
  {date: '2007-07-18', value: 140},
  {date: '2007-07-19', value: 143.75},
  {date: '2007-07-22', value: 143.7},
  {date: '2007-07-23', value: 134.89},
  {date: '2007-07-24', value: 137.26},
  {date: '2007-07-25', value: 146},
  {date: '2007-07-26', value: 143.85},
  {date: '2007-07-29', value: 141.43},
  {date: '2007-07-30', value: 131.76},
  {date: '2007-08-01', value: 135},
  {date: '2007-08-02', value: 136.49},
  {date: '2007-08-03', value: 131.85},
  {date: '2007-08-06', value: 135.25},
  {date: '2007-08-07', value: 135.03},
  {date: '2007-08-08', value: 134.01},
  {date: '2007-08-09', value: 126.39},
  {date: '2007-08-09', value: 125},
  {date: '2007-08-12', value: 127.79},
  {date: '2007-08-13', value: 124.03},
  {date: '2007-08-14', value: 119.9},
  {date: '2007-08-15', value: 117.05},
  {date: '2007-08-16', value: 122.06},
  {date: '2007-08-19', value: 122.22},
  {date: '2007-08-20', value: 127.57},
  {date: '2007-08-21', value: 132.51},
  {date: '2007-08-22', value: 131.07},
  {date: '2007-08-23', value: 135.3},
  {date: '2007-08-26', value: 132.25},
  {date: '2007-08-27', value: 126.82},
  {date: '2007-08-28', value: 134.08},
  {date: '2007-08-29', value: 136.25},
  {date: '2007-08-30', value: 138.48},
  {date: '2007-09-04', value: 144.16},
  {date: '2007-09-05', value: 136.76},
  {date: '2007-09-06', value: 135.01},
  {date: '2007-09-07', value: 131.77},
  {date: '2007-09-09', value: 136.71},
  {date: '2007-09-10', value: 135.49},
  {date: '2007-09-11', value: 136.85},
  {date: '2007-09-12', value: 137.2}
]

// data = data.map(d => d.date.replace(/-/g, '/'));


let margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 30
};

let height = 500;
let width = 900;

let x = d3.scaleTime()
  // .domain(d3.extent(data, d => new Date(d.date)))
  .domain([new Date('2007-04-23'), new Date('2007-09-12'),])
  .range([margin.left, width - margin.right]);

  // console.log(d3.extent(data,d => new Date(d.date).getTime()))

let y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top])

let xAxis = g => g
  .attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

let yAxis = g => g
  .attr('transform', `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select('.domain').remove())
  .call(g => g.select('.tick:last-of-type text').clone()
    .attr('x', 3)
    .attr('text-anchor', 'start')
    .attr('font-weight', 'bold')
    .text(data.y))

let area = d3.area()
  .x(d => new Date(d.date))
  .y0(y(0))
  .y1(d => y(d.value))

let chart = () => {
  const svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height);
    console.log(data);

    svg.append('path')
    .datum(data)
    .attr('fill', '#000')
    .attr('d', area);

    svg.append('g')
      .call(xAxis);

    svg.append('g')
      .call(yAxis);

    return svg.node();
}

chart();

