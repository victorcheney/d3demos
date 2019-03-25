let variables = {
  B01001_003E: "<5", // Male
  B01001_004E: "5-9",
  B01001_005E: "10-14",
  B01001_006E: "15-19", // 15-17,
  B01001_007E: "15-19", // 18-19,
  B01001_008E: "20-24", // 20
  B01001_009E: "20-24", // 21
  B01001_010E: "20-24", // 22-24
  B01001_011E: "25-29",
  B01001_012E: "30-34",
  B01001_013E: "35-39",
  B01001_014E: "40-44",
  B01001_015E: "45-49",
  B01001_016E: "50-54",
  B01001_017E: "55-59",
  B01001_018E: "60-64", // 60-61
  B01001_019E: "60-64", // 62-64
  B01001_020E: "65-69", // 65-66
  B01001_021E: "65-69", // 67-69
  B01001_022E: "70-74",
  B01001_023E: "75-79",
  B01001_024E: "80-84",
  B01001_025E: "≥85",
  B01001_027E: "<5", // Female
  B01001_028E: "5-9",
  B01001_029E: "10-14",
  B01001_030E: "15-19", // 15-17
  B01001_031E: "15-19", // 18-19
  B01001_032E: "20-24", // 20
  B01001_033E: "20-24", // 21
  B01001_034E: "20-24", // 22-24
  B01001_035E: "25-29",
  B01001_036E: "30-34",
  B01001_037E: "35-39",
  B01001_038E: "40-44",
  B01001_039E: "45-49",
  B01001_040E: "50-54",
  B01001_041E: "55-59",
  B01001_042E: "60-64", // 60-61
  B01001_043E: "60-64", // 62-64
  B01001_044E: "65-69", // 65-66
  B01001_045E: "65-69", // 67-69
  B01001_046E: "70-74",
  B01001_047E: "75-79",
  B01001_048E: "80-84",
  B01001_049E: "≥85"
}

let data = [
  {name: "<5", value: 19912018},
  {name: "5-9", value: 20501982},
  {name: "10-14", value: 20679786},
  {name: "15-19", value: 21354481},
  {name: "20-24", value: 22604232},
  {name: "25-29", value: 21698010},
  {name: "30-34", value: 21183639},
  {name: "35-39", value: 19855782},
  {name: "40-44", value: 20796128},
  {name: "45-49", value: 21370368},
  {name: "50-54", value: 22525490},
  {name: "55-59", value: 21001947},
  {name: "60-64", value: 18415681},
  {name: "65-69", value: 14547446},
  {name: "70-74", value: 10587721},
  {name: "75-79", value: 7730129},
  {name: "80-84", value: 5811429},
  {name: "≥85", value: 5938752}
];

// 赛诺-2018年1月~11月手机显示市场销售排名数据
data = [
  {
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

let arcLabel = () => {
  const radius = Math.min(width, height) / 2 * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
}
// d3.arc 创建一个弧线生成器
let arc = d3.arc()
  .innerRadius(0)
  .outerRadius(Math.min(width, height) / 2 - 1);

// d3.pie 创建一个饼生成器
let pie = d3.pie()
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
      .attr('transform', d => `translate(${arcLabel().centroid(d)})`)
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