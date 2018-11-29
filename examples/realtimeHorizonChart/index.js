/**
 * 横向实时图表
 */

let data = (function () {
  const n = 20,
    m = 964;
  const data = new Array(n);
  for (let i = 0; i < n; ++i) {
    const d = data[i] = new Float64Array(m);
    for (let j = 0, v = 0; j < m; ++j) {
      d[j] = v = walk(v);
    }
  }
  return data;
})();

let margin = ({
  top: 30,
  right: 10,
  bottom: 0,
  left: 10
});
let step = 25;// 29;
let color = i => d3[scheme][Math.max(3, overlap)][i + Math.max(0, 3 - overlap)];
let width = 1000;
let height = data.length * (step + 1) + margin.top + margin.bottom;
let overlap = document.getElementById('overlap').value;
let scheme = 'schemeGreens'

function schemeChange() {
  let select = document.getElementById('scheme');
  let index = select.selectedIndex;
  let value = select[index].value;

  scheme = value;

  // chart.update(data);
}


let x = d3.scaleTime()
  .range([0, width]);

let y = d3.scaleLinear()
  .rangeRound([0, -overlap * step]);

let xAxis = g => g
  .attr("transform", `translate(0,${margin.top})`)
  .call(d3.axisTop(x).ticks(width / 80).tickSizeOuter(0))
  .call(g => g.selectAll(".tick").filter(d => x(d) < margin.left || x(d) >= width - margin.right).remove())
  .call(g => g.select(".domain").remove());

function walk(v) {
  return Math.max(0, Math.min(1, v + (Math.random() - 0.5) * 0.05));
}

// 生产canvas对象
let context2d = function (width, step, n) {
  null == n && (n = devicePixelRatio);
  var canvas = document.createElement("canvas");
  canvas.width = width * n, canvas.height = step * n, canvas.style.width = width + "px";
  var obj = canvas.getContext("2d");
  return obj.scale(n, n), obj
};

let initChart = function () {
  const div = document.getElementById('chart');

  const canvas = d3.select(div)
    .selectAll("canvas")
    .data(data)
    // .enter().append(() => DOM.context2d(width, step, 1).canvas)
    .enter().append(() => context2d(width, step, 1).canvas)
    .style("position", "absolute")
    .style("image-rendering", "pixelated")
    .style("top", (d, i) => `${i * (step + 1) + margin.top}px`)
    .property("context", function () {
      return this.getContext("2d");
    })
    .each(horizon);

  // const svg = d3.select(div.appendChild(DOM.svg(width, height)))
  const svg = d3.select(div).append('svg')
    .attr('width', width)
    .attr('height', height)
    .style("position", "relative")
    .style("font", "10px sans-serif");

  const gX = svg.append("g");

  svg.append("g")
    .selectAll("text")
    .data(data)
    .enter().append("text")
    .attr("x", 4)
    .attr("y", (d, i) => (i + 0.5) * (step + 1) + margin.top)
    .attr("dy", "0.35em")
    .text((d, i) => i);

  const rule = svg.append("line")
    .attr("stroke", "#000")
    .attr("y1", margin.top - 6)
    .attr("y2", height - margin.bottom - 1)
    .attr("x1", 0.5)
    .attr("x2", 0.5);

  svg.on("mousemove touchmove", () => {
    const x = d3.mouse(svg.node())[0] + 0.5;
    rule.attr("x1", x).attr("x2", x);
  });

  function horizon(d) {
    const {
      context
    } = this;
    const {
      length: k
    } = d;
    if (k < width) context.drawImage(this, k, 0, width - k, step, 0, 0, width - k, step);
    context.fillStyle = "#fff";
    context.fillRect(width - k, 0, k, step);
    for (let i = 0; i < overlap; ++i) {
      context.save();
      context.translate(width - k, (i + 1) * step);
      context.fillStyle = color(i);
      for (let j = 0; j < k; ++j) {
        context.fillRect(j, y(d[j]), 1, -y(d[j]));
      }
      context.restore();
    }
  }

  div.update = data => {
    canvas.data(data).each(horizon);
    gX.call(xAxis);
  };

  return div;
}

// 初始化图表
let chart = initChart();

/* var ce = new Map;

function X(e) {
  return function () {
    return e
  }
}

let Promises = {
  when: function (e, t) {
    var n;
    return (n = ce.get(e = +e)) ?
      n.then(X(t)) :
      (n = Date.now()) >= e ?
      Promise.resolve(t) :
      function (e, t) {
        var n = new Promise(function (n) {
          ce.delete(t);
          var r = t - e;
          if (!(r > 0)) throw new Error("invalid time");
          if (r > 2147483647) throw new Error("too long to wait");
          setTimeout(n, r)
        });
        return ce.set(t, n), n
      }(n, e).then(X(t))
  }
} */

/* function* satrt() {
  const period = 250;
  let m = data[0].length;
  const tail = data.map(d => d.subarray(m - 1, m));

  while (true) {
    const then = new Date(Math.ceil((Date.now() + 1) / period) * period);

    // yield Promises.when(then, then);
    // Promises.when(then, then);
    for (const d of data) d.copyWithin(0, 1, m), d[m - 1] = walk(d[m - 1]);
    x.domain([then - period * width, then]);
    chart.update(tail);
  }

} 

let iterator = satrt();*/

const period = 250;

setInterval(() => {
  let m = data[0].length;
  const tail = data.map(d => d.subarray(m - 1, m));
  const then = new Date(Math.ceil((Date.now() + 1) / period) * period);
  for (const d of data) d.copyWithin(0, 1, m), d[m - 1] = walk(d[m - 1]);
  x.domain([then - period * width, then]);
  chart.update(tail);
}, 250);
