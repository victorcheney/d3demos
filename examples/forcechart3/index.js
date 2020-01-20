let width = 1100,
  height = 800

let color = {
  text: '#8fac4a',
  chart: '#41433d'
}

const zoom = d3
  .zoom()
  .duration(100)
  .on('zoom', zoomed)

var svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .call(zoom)

const gContainer = svg
  .append('g')
  .attr('width', width)
  .attr('height', height)

function zoomed() {
  gContainer.attr('transform', d3.event.transform)
}

// build the arrow.
svg
  .append('svg:defs')
  .selectAll('marker')
  .data(['end']) // Different link/path types can be defined here
  .enter()
  .append('svg:marker') // This section adds in the arrows
  .attr('id', String)
  .attr('viewBox', '0 -5 10 10')
  .attr('refX', 18)
  .attr('refY', 0)
  .attr('markerWidth', 10)
  .attr('markerHeight', 10)
  .attr('orient', 'auto')
  .append('svg:path')
  .attr('d', 'M0,-5L10,0L0,5')

var simulation = d3
  .forceSimulation()
  .force(
    'link',
    d3
      .forceLink()
      .id(function(d) {
        return d.id
      })
      .distance(d => d.value + 100)
  )
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2))

// 点击缩放
function clicked({ x, y }) {
  d3.event.stopPropagation()
  svg
    .transition()
    .duration(1000)
    .call(
      zoom.transform,
      d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(2)
        .translate(-x, -y),
      d3.mouse(svg.node())
    )
}

d3.json('data.json').then(function(graph) {
  var link = gContainer
    .append('g')
    .attr('class', 'links')
    .selectAll('path')
    .data(graph.links)
    .enter()
    .append('path')
    .attr('marker-end', 'url(#end)')

  var g = gContainer.append('g').attr('class', 'nodes')
  let node = g
    .selectAll('g')
    .data(graph.nodes)
    .enter()
    .append('g')
  node
    .append('circle')
    .attr('r', 9)
    .call(
      d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    )
    .on('click', clicked)

  node.append('title').text(function(d) {
    return d.id
  })

  node
    .append('text')
    .attr('x', 12)
    .attr('dy', '.35em')
    .text(function(d) {
      return d.id
    })

  simulation.nodes(graph.nodes).on('tick', ticked)

  simulation.force('link').links(graph.links)

  function ticked() {
    link.attr('d', function(d) {
      var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = 0 //Math.sqrt(dx * dx + dy * dy)

      // if (dx > 0) {
      let curvy = `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`
      return curvy
      /* } else {
        return `M${d.target.x},${d.target.y}A${dr},${dr} 0 0,1 ${d.source.x},${d.source.y}`
      } */
    })

    node.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
  }
})

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

function dragged(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0)
  d.fx = null
  d.fy = null
}
