const margin = {
  top: 10,
  right: 120,
  bottom: 10,
  left: 150
};

let width = 900;
let height = 900;

let color = d3.scaleSequential([8, 0], d3.interpolateMagma)
let format = d3.format(",d")

let pack = data => d3.pack()
  .size([width - 2, height - 2])
  .padding(3)
  (d3.hierarchy(data)
  .sum(d => d.value)
  .sort((a, b) => b.value - a.value))


function initChart (data) {
  const root = pack(data);

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font", "10px sans-serif")
      .attr("text-anchor", "middle");

  // const shadow = DOM.uid("shadow");

  svg.append("filter")
      // .attr("id", shadow.id)
    .append("feDropShadow")
      .attr("flood-opacity", 0.3)
      .attr("dx", 0)
      .attr("dy", 1);

  const node = svg.selectAll("g")
    .data(d3.nest().key(d => d.height).entries(root.descendants()))
    .join("g")
      // .attr("filter", shadow)
    .selectAll("g")
    .data(d => d.values)
    .join("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

  node.append("circle")
      .attr("r", d => d.r)
      .attr("fill", d => color(d.height));

  const leaf = node.filter(d => !d.children);
  
  leaf.select("circle")
      // .attr("id", d => (d.leafUid = DOM.uid("leaf")).id);

  leaf.append("clipPath")
      // .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    .append("use")
      // .attr("xlink:href", d => d.leafUid.href);

  leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
      .text(d => d);

  node.append("title")
      .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);
    
  return svg.node();
}


d3.json('flare-2.json')
  .then((response) => {
    initChart(response);
  })