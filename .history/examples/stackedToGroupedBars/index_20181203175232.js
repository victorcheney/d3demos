/* 堆状条形图分组条形图切换 */

let m = Array(...Array(58)).map((item, index) => {
  return index;
});

let n = Array(...Array(5)).map((item, index) => {
  item = Array(...Array(58)).map((t, index) => {
    return Math.floor(Math.random() * (10959779 - 1272782) + 1272782) / 10000000
  });
  return item;
});

function bumps(m) {
  const values = [];

  // Initialize with uniform random values in [0.1, 0.2).
  for (let i = 0; i < m; ++i) {
    values[i] = 0.1 + 0.1 * Math.random();
  }

  // Add five random bumps.
  for (let j = 0; j < 5; ++j) {
    const x = 1 / (0.1 + Math.random());
    const y = 2 * Math.random() - 0.5;
    const z = 10 / (0.1 + Math.random());
    for (let i = 0; i < m; i++) {
      const w = (i / m - y) * z;
      values[i] += x * Math.exp(-w * w);
    }
  }

  // Ensure all values are positive.
  for (let i = 0; i < m; ++i) {
    values[i] = Math.max(0, values[i]);
  }

  return values;
}

let xz = d3.range(m);
let yz = d3.range(n).map(() => bumps(m));

let y01z = d3.stack()
  .keys(d3.range(n))
  (d3.transpose(yz)) // stacked yz
  .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]))


let yMax = d3.max(yz, y => d3.max(y));
let y1Max = d3.max(y01z, y => d3.max(y, d => d[1]));

let x = d3.scaleBand()
  .domain(xz)
  .rangeRound([margin.left, width - margin.right])
  .padding(0.08);

let y = d3.scaleLinear()
  .domain([0, y1Max])
  .range([height - margin.bottom, margin.top]);

let z = d3.scaleSequential(d3.interpolateBlues)
  .domain([-0.5 * n, 1.5 * n]);


/**
 * 初始化图表
 */
let initChart = function () {
  const svg = d3.select(DOM.svg(width, height));

  const rect = svg.selectAll("g")
    .data(y01z)
    .enter().append("g")
    .attr("fill", (d, i) => z(i))
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", height - margin.bottom)
    .attr("width", x.bandwidth())
    .attr("height", 0);

  svg.append("g")
    .call(xAxis);

  function transitionGrouped() {
    y.domain([0, yMax]);

    rect.transition()
      .duration(500)
      .delay((d, i) => i * 20)
      .attr("x", (d, i) => x(i) + x.bandwidth() / n * d[2])
      .attr("width", x.bandwidth() / n)
      .transition()
      .attr("y", d => y(d[1] - d[0]))
      .attr("height", d => y(0) - y(d[1] - d[0]));
  }

  function transitionStacked() {
    y.domain([0, y1Max]);

    rect.transition()
      .duration(500)
      .delay((d, i) => i * 20)
      .attr("y", d => y(d[1]))
      .attr("height", d => y(d[0]) - y(d[1]))
      .transition()
      .attr("x", (d, i) => x(i))
      .attr("width", x.bandwidth());
  }

  function update(layout) {
    if (layout === "stacked") transitionStacked();
    else transitionGrouped();
  }

  return Object.assign(svg.node(), {
    update
  });
}