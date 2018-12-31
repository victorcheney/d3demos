
let height = 500;
let width = 900;

let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40
};

// 线性的时间比例尺
/*l et x = d3.scaleTime()
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
 */
// 线条生成器
// defined() 设置 defined(缺省) 访问器
// x() 设置线条生成器的 x-访问器.
// y() 设置线条生成器的 y-访问器.
/* let line = d3.line()
  .defined(d => !isNaN(d.value))
  .x(d => x(new Date(d.date)))
  .y(d => y(d.value + '')) */

let chart = function(data) {

  // 线性的时间比例尺
  let x = d3.scaleTime()
  // .domain(d3.extent(data, d => new Date(d.date).getTime()))
  .domain(d3.extent(data, d => new Date(d.createdDate)))
  // .domain([new Date('2007-04-23'), new Date('2007-07-17')])
  .range([margin.left, width - margin.right]);

  // 定量的线性比例尺
  let y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.high)]).nice()
  .range([height - margin.bottom, margin.top]);

  // x轴
  // d3.axisBottom 创建一个新的刻度在下的坐标轴生成器
  // ticks() 自定义刻度的显示方式以及格式化刻度
  // tickSizeOuter() 设置外侧(坐标轴两端)刻度大小
  let xAxis = g => g
  .attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 110).tickSizeOuter(0).tickFormat(d3.timeFormat('%Y/%m/%d')));

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

  let line = d3.line()
    .defined(d => !isNaN(d.high))
    .x(d => x(new Date(d.createdDate)))
    .y(d => y(d.high))

  const svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('g')
    .call(xAxis)

  svg.append('g').call(yAxis);

  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', 1.5)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('d', line);
}

// 
// chart(data);

// 比特币行情数据
d3.json('data.json')
  .then((response) => {
    chart(response.data);
  }).catch((err) => {
    
  });