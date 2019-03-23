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
  height = 500,
  radius = Math.min(width, height) / 2;

// d3.arc 创建一个弧线生成器
let arc = d3.arc()
  .innerRadius(radius * 0.4)
  .outerRadius(radius * 0.6);

let outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

// d3.pie 创建一个饼生成器
let pie = d3.pie()
  .padAngle(0.005)
  .sort(null)
  .value(d => d.value);


function initchart() {
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

// chart();

const arcs = pie(data);

const svg = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('text-anthor', 'middle')
  .style('font', '12px sans-serif')
  .append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

svg.append('g')
  .attr('class', 'slices');
svg.append('g')
  .attr('class', 'labels');
svg.append('g')
  .attr('class', 'lines');

const key = d => d.data.name;

function change(data) {

  const arcs = pie(data);

  // d3.scaleOrdinal 创建一个序数比例尺
  // d3.quantize插值器生成一组均匀采样
  let color = d3.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());


  /* 扇形区 */
  let slice = svg.select('.slices').selectAll('path.slice')
    .data(arcs);

  slice.enter()
    .insert('path')
    .style('fill', d => color(d.data.name))
    .attr('d', arc)
    .attr('class', 'slice');

    function arcTween(a) {
      var i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arc(i(t));
      };
    }

  // 动画
  let transition = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);

  slice.transition().duration(1000)
    .attrTween('d', arcTween);

  slice.exit()
    .remove();

  /* 文本标签 */
  let text = svg.select('.labels').selectAll('text')
    .attr('class', 'text-color')
    .data(arcs);

  text.enter()
    .append('text')
    .attr('dy', '0.35em')
    .attr('transform', d => {
      var pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', d => {
        return midAngle(d) < Math.PI ? 'start' : 'end';
    })
    .text(d => d.data.name)
    .each(d => {
      this._current = d;
    })

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  text.transition().duration(1000)
    .attrTween('transform', function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var d2 = interpolate(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      };
    })
    .styleTween('text-anchor', function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var d2 = interpolate(t);
        return midAngle(d2) < Math.PI ? 'start' : 'end';
      };
    });

  text.exit().remove();

  /* 折线 */
  let polyline = svg.select('.lines').selectAll('polyline')
    .data(arcs);

  polyline.enter()
    .append('polyline')
    .attr('points', d => {
      let pos = outerArc.centroid(d);
      pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
      return [arc.centroid(d), outerArc.centroid(d), pos];
    })
    .each(d => {
      this._current = d;
    })

  polyline.transition().duration(1000)
    .attrTween('points', function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var d2 = interpolate(t);
        var pos = outerArc.centroid(d2);
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [arc.centroid(d2), outerArc.centroid(d2), pos];
      };
    });
  polyline.exit().remove();

}

change(d3.shuffle(data));

d3.select('#btn').on('click', e => {
  change(d3.shuffle(data))
})