let height = 500;
let width = 900;

let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40
};

const circleRadius = 5
const opacityVal = 0.3

const render = (data) => {
  const root = d3.hierarchy(data)
  const links = root.links()
  const nodes = root.descendants()

  /* const links = data.links
  const nodes = data.nodes */


  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(0).strength(1))
    .force('charge', d3.forceManyBody().strength(-100).distanceMin(10))
    // .force('charge', d3.forceCollide(20))
    // .force('charge', d3.forceCenter(0, 0))
    // .force('charge', d3.forceRadial(200))
    .force('x', d3.forceX())
    .force('y', d3.forceY())
    // .stop()

  const zoom = d3
    .zoom()
    .duration(100)
    .on('zoom', zoomed)

  function zoomed() {
    d3.selectAll('svg > g').attr('transform', d3.event.transform)
  }

  const svg = d3.select('#chart').append('svg')
    .attr('widht', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .call(zoom)

  const link = svg.append('g')
      .attr('stroke', '#aaa')
      .attr('stroke-opacity', opacityVal)
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('marker-end', 'url(#end)')

  /* const node = svg.append('g')
      .attr('fill', '#8fac4a')
      .attr('stroke', '#b2d166')
      .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(nodes)
    .join('circle')
      .attr('fill', d => d.children ? null : '#000')
      .attr('stroke', d => d.children ? null : '#8fac4a')
      .attr('r', circleRadius)
      .call(drag(simulation)) */
  const gnode = svg.append('g')

  const enterNode = gnode.selectAll('g')
    .data(nodes)
    .enter()
    .append('g')
    .call(drag(simulation))

  const node = enterNode
    .append('circle')
      .attr('stroke-width', 1.5)
      .attr('fill', d => d.children ? '#8fac4a' : '#000')
      .attr('stroke', d => d.children ? '#b2d166' : '#8fac4a')
      .attr('r', circleRadius)

  node.append('title')
    .text(d => d.name)
  enterNode.append('text')
    .attr('x', circleRadius + 2)
    .attr('dy', '.35em')
    .attr('fill', '#aaa')
    .attr('font-size', '5')
    .text(function(d) {
      return d.name
    })

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
      .attr('markerWidth', circleRadius)
      .attr('markerHeight', circleRadius)
      .attr('orient', 'auto')
      .attr('fill', '#aaa')
      .attr('fill-opacity', opacityVal)
    .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')

    // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
    for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
      simulation.tick();
    }

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    /* enterNode
      .attr('cx', d => d.x)
      .attr('cy', d => d.y) */

    enterNode.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
  })
}

const drag = simulation => {
  function dragstarted (d) {
    if (!d3.event.active) simulation.alphaTarget(0.9).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged (d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
  }

  function dragended (d) {
    if (!d3.event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
}

d3.json('./data.json').then(data => {
  console.log(data)

  // render(formData(data))
  render(data)
})

function formData(data) {
  // let {nodes, edges} = data
  let {node, relationship} = data

  let nodes = node
  let edges = relationship

  nodes.map(item => {
    item.name = item.label
    return item
  })

  edges.map((item, index) => {
    /* item.source = item.from
    item.target = item.to */
    item.source = item.sourceid
    item.target = item.targetid
    return item
  })

  return {
    nodes: nodes,
    links: edges
  }
}