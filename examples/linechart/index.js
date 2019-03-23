let data = [
  {date: '2007-04-23', value: 53.24},
  {date: '2007-04-24', value: 65.35},
  {date: '2007-04-25', value: 78.84},
  {date: '2007-04-26', value: 89.92},
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
  {date: '2007-07-17', value: 38.12},
];

let height = 500;
let width = 900;

let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40
};

// 线性的时间比例尺
let x = d3.scaleTime()
  // .domain(d3.extent(data, d => new Date(d.date).getTime()))
  .domain(d3.extent(data, d => new Date(d.date)))
  // .domain([new Date('2007-04-23'), new Date('2007-07-17')])
  .range([margin.left, width - margin.right]);

// 定量的线性比例尺
let y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
  .range([height - margin.bottom, margin.top]);

// x轴
// d3.axisBottom 创建一个新的刻度在下的坐标轴生成器
// ticks() 自定义刻度的显示方式以及格式化刻度
// tickSizeOuter() 设置外侧(坐标轴两端)刻度大小
let xAxis = g => g
  .attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0).tickFormat(d3.timeFormat('%Y-%m-%d')));

// y轴
// d3.axisLeft 创建一个新的刻度在左的坐标轴生成器
// clone() 插入选中元素的克隆
let yAxis = g => g
  .attr('transform', `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select('.domain').remove())
  .call(g => g.select('.tick:last-of-type text').clone()
    .attr('x', 3)
    .attr('text-anchor', 'start')
    .attr('font-weight', 'bold')
    .text(data.y)
  );

// 线条生成器
// defined() 设置 defined(缺省) 访问器
// x() 设置线条生成器的 x-访问器.
// y() 设置线条生成器的 y-访问器.
let line = d3.line()
  .defined(d => !isNaN(d.value))
  .x(d => x(new Date(d.date)))
  .y(d => y(d.value + ''))

let chart = function(data) {

  const svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('g')
    .call(xAxis)

  svg.append('g').call(yAxis);

  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#000')
    .attr('stroke-width', 1.5)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('d', line)
    .attr('class', 'line-color');
}

// 
chart(data);
