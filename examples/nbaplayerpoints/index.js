const data = [{
    name: "E",
    value: 0.12702
  },
  {
    name: "T",
    value: 0.09056
  },
  {
    name: "A",
    value: 0.08167
  },
  {
    name: "O",
    value: 0.07507
  },
  {
    name: "I",
    value: 0.06966
  },
  {
    name: "N",
    value: 0.06749
  },
  {
    name: "S",
    value: 0.06327
  },
  {
    name: "H",
    value: 0.06094
  },
  {
    name: "R",
    value: 0.05987
  },
  {
    name: "D",
    value: 0.04253
  },
  {
    name: "L",
    value: 0.04025
  },
  {
    name: "C",
    value: 0.02782
  },
  {
    name: "U",
    value: 0.02758
  },
  {
    name: "M",
    value: 0.02406
  },
  {
    name: "W",
    value: 0.0236
  },
  {
    name: "F",
    value: 0.02288
  },
  {
    name: "G",
    value: 0.02015
  },
  {
    name: "Y",
    value: 0.01974
  },
  {
    name: "P",
    value: 0.01929
  },
  {
    name: "B",
    value: 0.01492
  },
  {
    name: "V",
    value: 0.00978
  },
  {
    name: "K",
    value: 0.00772
  },
  {
    name: "J",
    value: 0.00153
  },
  {
    name: "X",
    value: 0.0015
  },
  {
    name: "Q",
    value: 0.00095
  },
  {
    name: "Z",
    value: 0.00074
  }
];

let margin = ({
  top: 20,
  right: 0,
  bottom: 80,
  left: 40
});

let height = 500;
let width = 1000;

let color = {
  text: '#8fac4a',
  chart: '#41433d'
}


// 初始化图表
let initChart = function (data, key) {

  let x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[key])]).nice()
    .range([height - margin.bottom, margin.top]);

  let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
      .tickSizeOuter(0))
    .selectAll("text")
    .attr("transform", "rotate(90) translate(8, -12)")
    .attr('text-anchor', 'start')

  let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .selectAll('text')


  const svg = d3.select("#chart").append("svg")
    .attr('width', width)
    .attr('height', height);

  const bar = svg.append("g")
    .attr("class", 'barrect')
    .selectAll("rect")
    .data(data)
    .enter().append("rect")
    // .style("mix-blend-mode", "multiply")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d[key]))
    .attr("height", d => y(0) - y(d[key]))
    .attr("width", x.bandwidth());

  const pointText = svg.append('g')
    .selectAll('text')
    .data(data)
    .enter().append('text')
    .attr("y", d => -x(d.name) - 3)
    .attr("x", d => y(d[key]) + 3)
    .text(d => d[key])
    .attr('transform-origin', 'bottom bottom')
    .attr('transform', 'rotate(90)')
    .attr('font-size', '12')
    .attr('fill', color.text)



  const gx = svg.append("g")
    .call(xAxis)



  const gy = svg.append("g")
    .call(yAxis)

  // 更新数据
  svg.node().update = (key) => {

    x.domain(data.map(d => d.name));

    y.domain([0, d3.max(data, d => d[key])]).nice()
      .range([height - margin.bottom, margin.top]);

    const t = svg.transition()
      .duration(750);

    bar.data(data, d => d.name)
      .order()
      .transition(t)
      .delay((d, i) => i * 20)
      .attr("x", d => x(d.name))
      .attr("y", d => y(d[key]))
      .attr("height", d => y(0) - y(d[key]));

    pointText.data(data, d => d.name)
      .order()
      .transition(t)
      .delay((d, i) => i * 20)
      .attr("y", d => -x(d.name) - 3)
      .attr("x", d => y(d[key]) + 3)
      .text(d => d[key])

    gx.transition(t)
      .call(xAxis)
      .selectAll(".tick")
      .delay((d, i) => i * 20);

    gy.transition(t)
      .call(yAxis);

  };

  return svg.node();
}

let chart // = initChart(data, 'value');

function changeSort() {
  let select = document.getElementById('sortablechart');
  let index = select.selectedIndex;
  let key = select[index].value;

  if (key === 'name') {
    datas.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
  } else {
    datas.sort((a, b) => b[key] - a[key]);
  }



  chart.update(key);
}

/** 获取数据 **/

let datas = [];
const url = '20190323134808.json';
d3.json(url).then(resp => {
    datas = formatData(resp.payload.players);

    chart = initChart(datas, 'pointsPg');

  })
  .catch(err => {

  })

function formatData(data) {

  return data.map(item => {

    let temp = {};

    temp['name'] = item.playerProfile.displayName;
    temp['nameEn'] = item.playerProfile.displayNameEn;
    Object.assign(temp, item.statAverage);

    return temp;
  })

}