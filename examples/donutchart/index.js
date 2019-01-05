// 赛诺-2018年1月~11月手机显示市场销售排名数据
let data = [{
    name: 'HONOR',
    value: 2176
  },
  {
    name: 'MI',
    value: 2131
  },
  {
    name: 'Apple',
    value: 1327
  },
  {
    name: 'HUAWEI',
    value: 1017
  },
  {
    name: 'vivo',
    value: 408
  },
  {
    name: 'Meizu',
    value: 371
  },
  {
    name: 'OPPO',
    value: 302
  },
  {
    name: 'OnePlus',
    value: 147
  },
  {
    name: 'Samsung',
    value: 84
  }
];


let width = 900,
  height = 500;

// d3.arc 创建一个弧线生成器
let arc = d3.arc()
  .innerRadius(Math.min(width, height) / 2 * 0.67)
  .outerRadius(Math.min(width, height) / 2 - 1);

// d3.pie 创建一个饼生成器
let pie = d3.pie()
  .padAngle(0.005)
  .sort(null)
  .value(d => d.value);

// d3.scaleOrdinal 创建一个序数比例尺
// d3.quantize插值器生成一组均匀采样
let color = d3.scaleOrdinal()
  .domain(data.map(d => d.name))
  .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

function chart() {
  const arcs = pie(data);

  const svg = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('text-anthor', 'middle')
    .style('font', '12px sans-serif');

  const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  g.selectAll('path')
    .data(arcs)
    .enter().append('path')
    .attr('fill', d => color(d.data.name))
    .attr('stroke', 'white')
    .attr('d', arc)
    .append('title')
    .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`)

  const text = g.selectAll('text')
    .data(arcs)
    .enter().append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('dy', '0.35em')

  text.append('tspan')
    .attr('x', 0)
    .attr('y', '-0.7em')
    .style('font-weight', 'bold')
    .text(d => d.data.name);

  // filter 基于数据过滤元素
  text.filter(d => (d.endAngle - d.startAngle) > 0.25).append('tspan')
    .attr('x', 0)
    .attr('y', '0.7em')
    .attr('fill-opacity', 0.7)
    .text(d => d.data.value.toLocaleString());

  return svg.node();
}

chart();