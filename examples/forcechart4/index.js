let width = 900,
  height = 700;

let color = {
  text: '#8fac4a',
  chart: '#41433d'
}

var svg = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height);

var linkG = svg.append('g')
.attr('class', 'links')
var link, node

var nodeG = svg.append('g')
.attr('class', 'nodes')

var simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(function (d) {
    return d.id;
  }))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2));

// 缩放
const zoom = d3.zoom().duration(500).on('zoom', zoomed)
d3.select('#chart')
  .call(zoom)
  .on('dblclick.zoom', null)

const zoomEl = d3.zoom().duration(500).on('zoom', zoomed)

function zoomed () {
    // d3.selectAll('svg > g').attr('transform', d3.event.transform)
    link.attr('transform', d3.event.transform)
    node.attr('transform', d3.event.transform)
}

const el = document.getElementById('chart')
const w = el.clientWidth
const h = el.clientHeight

function getData () {
  console.log('getData')
d3.json('data.json')
  .then(function (graph) {

    // d3.selectAll('svg > g').attr('transform', 'translate(' + (w / 2) + ',' + (h / 2) + ') scale(1)')

    link = linkG
      .selectAll('line')
      .data(graph.links)
      .enter().append('line');

    node = nodeG
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('circle')
      .attr('r', 5.5)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (d) => {
        console.log(d)
        const el = document.getElementById('chart')
        const w = el.clientWidth
        const h = el.clientHeight
        d3.selectAll('svg > g').transition()
           .duration(500)
           .call(zoom.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(1).translate(-d.x,-d.y))
      })  

    node.append('title')
      .text(function (d) {
        return d.id;
      });

    simulation
      .nodes(graph.nodes)
      .on('tick', ticked);

    simulation.force('link')
      .links(graph.links);

    function ticked() {
      link
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

      node
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });
    }

    svg.transition().duration(500).call(
      zoom.transform,
      d3.zoomIdentity,
      d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
    );

  });
}

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// 参考：https://observablehq.com/@monahans/final-project-force-directed-graph-of-ingredients
function reset () {
  svg.transition().duration(500).call(
    zoomEl.transform,
    d3.zoomIdentity,
    d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
  );
}

getData()