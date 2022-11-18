let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40,
}

const circleRadius = {
  person: 12,
  location: 9,
  event: 6,
}

const fillColorScale = d3
  .scaleOrdinal()
  .domain(['person', 'location', 'event'])
  .range(['#8fac4a', '#4f98ca', '#50d890'])

const strokeColorScale = d3
  .scaleOrdinal()
  .domain(['person', 'location', 'event'])
  .range(['#effffb', '#effffb', '#effffb'])

let selectedCategory = null

const opacityVal = 0.4

let graphData
let simulation

const zoom = d3
  .zoom()
  .scaleExtent([1 / 2, 3])
  .duration(100)
  .on('zoom', zoomed)

function zoomed() {
  d3.selectAll('svg > g.zoom-g').attr('transform', d3.event.transform)
}

const chart = document.getElementById('chart')
const width = chart.clientWidth
const height = chart.clientHeight

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('widht', width)
  .attr('height', height)
svg.attr('viewBox', [-width / 2, -height / 2, width, height]).call(zoom)

const link = svg
  .append('g')
  .attr('class', 'zoom-g')
  .attr('stroke', '#aaa')
  .attr('stroke-opacity', opacityVal)

const gnode = svg.append('g').attr('class', 'zoom-g')

const linkText = svg
  .append('g')
  .attr('class', 'link-text')
  .attr('class', 'zoom-g')

// 创建图例
const spacing = 30
const legendG = svg
  .append('g')
  .attr('class', 'legend')
  .attr(
    'transform',
    `translate(-${width / 2 - margin.left}, -${Math.abs(
      height / 2 - spacing * 3
    )})`
  )

const render = (data) => {
  /* const root = d3.hierarchy(data)
  const links = root.links()
  const nodes = root.descendants() */

  const { links, nodes, categories } = data

  simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(0)
        .strength(1)
    )
    .force('charge', d3.forceManyBody().strength(-450).distanceMin(150))
    // .force('charge', d3.forceCollide(20))
    // .force('charge', d3.forceCenter(0, 0))
    // .force('charge', d3.forceRadial(200))
    .force('x', d3.forceX())
    .force('y', d3.forceY())

  /* const linkJoin = link
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('marker-end', d => `url(#${d.target.categories[0]})`) */

  const linkJoin = link.selectAll('path').data(links)

  let linkEnter = linkJoin
    .enter()
    .append('path')
    .attr('marker-end', (d) => `url(#${d.target.categories[0]})`)
    .attr('id', function (d) {
      return `link${d.id}`
    })

  // link上的文字
  let linkTextG = linkText.selectAll('.text').data(links)

  // remove exit
  linkTextG.exit().remove()
  linkTextEnter = linkTextG
    .enter()
    .append('text')
    .attr('dx', (d) => {
      return 90
    })
    .attr('dy', -2)
    .attr('font-size', 10)
    .attr('fill', '#aaa')

  // update
  linkTextEnter
    .select('text')
    .select('textPath')
    .attr('xlink:href', (d) => `link${d.id}`)
    .style('pointer-events', 'none')

  // new
  linkTextEnter
    .append('textPath')
    .attr('xlink:href', (d) => `#link${d.id}`)
    .style('pointer-events', 'none')
    .text((d) => d.label)

  linkTextG = linkTextEnter.merge(linkTextG)

  const nodeGs = gnode.selectAll('g').data(nodes, (d) => d.id)
  const enterNode = nodeGs.enter().append('g').call(drag(simulation))

  nodeGs
    .merge(enterNode)
    .attr('opacity', (d) =>
      !selectedCategory || d.categories[0] === selectedCategory ? 1 : 0.2
    )

  const node = enterNode
    .append('circle')
    .attr('stroke-width', 0.5)
    .attr('class', 'node')
    .attr('fill', (d) => fillColorScale(d.categories[0]))
    .attr('stroke', (d) => strokeColorScale(d.categories[0]))
    .attr('r', (d) => circleRadius[d.categories[0]])

  node.append('title').text((d) => d.name)
  enterNode
    .append('text')
    .attr('x', (d) => circleRadius[d.categories[0]] + 2)
    .attr('dy', '.35em')
    .attr('fill', '#effffb')
    .attr('font-size', '10')
    .text(function (d) {
      return d.name
    })

  // 节点mouseover事件
  enterNode.on('mouseover', nodeMouseOver)

  simulation.on('tick', () => {
    /* linkJoin
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y) */
    linkEnter.attr('d', function (d) {
      return (
        'M ' +
        d.source.x +
        ' ' +
        d.source.y +
        ' L ' +
        d.target.x +
        ' ' +
        d.target.y
      )
    })

    enterNode.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
  })

  // 创建图例
  legendG.call(createLenged, {
    fillColorScale,
    textOffset: 20,
    spacing,
    circleRadius,
    categories,
    onClickLegend,
    selectedCategory,
  })
}

// 拖拽
const drag = (simulation) => {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.9).restart()
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

  return d3
    .drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
}

// 创建箭头
const createArrow = (svg, type, size) => {
  svg
    .append('svg:defs')
    .selectAll('marker')
    .data([type || 'end']) // Different link/path types can be defined here
    .enter()
    .append('svg:marker') // This section adds in the arrows
    .attr('id', String)
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 18)
    .attr('refY', 0)
    .attr('markerWidth', size)
    .attr('markerHeight', size)
    .attr('orient', 'auto')
    .attr('fill', '#aaa')
    .attr('fill-opacity', opacityVal)
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
}

// build the arrow.
createArrow(svg, 'person', circleRadius['person'])
createArrow(svg, 'event', circleRadius['event'])
createArrow(svg, 'location', circleRadius['location'])

const nodeMouseOver = (e) => {
  console.log(e)
}

d3.json('./hongloudata.json').then((data) => {
  graphData = formData(data.data, data.categories)

  render(graphData)
})

function formData(data, categories) {
  let { nodes, edges } = data

  nodes.map((item) => {
    item.name = item.label
    return item
  })

  edges.map((item, index) => {
    item.source = item.from
    item.target = item.to
    return item
  })

  return {
    nodes: nodes,
    links: edges,
    categories,
  }
}

// 创建图例
const createLenged = (selection, props) => {
  const {
    fillColorScale,
    textOffset,
    spacing,
    circleRadius,
    categories,
    onClickLegend,
    selectedCategory,
  } = props

  const groups = selection.selectAll('g').data(fillColorScale.domain())

  const groupsEnter = groups.enter().append('g')

  groupsEnter.merge(groups).attr('transform', (d, i) => {
    return `translate(0, ${i * spacing})`
  })

  groups.exit().remove()

  groupsEnter
    .append('circle')
    .merge(groups.select('circle'))
    .attr('r', (d) => circleRadius[d])
    .attr('fill', fillColorScale)
    .attr('opacity', (d) =>
      !selectedCategory || d === selectedCategory ? 1 : 0.2
    )
    .on('click', (d) => onClickLegend(d === selectedCategory ? null : d))

  groupsEnter
    .append('text')
    .merge(groups.select('text'))
    .text((d) => categories[d])
    .attr('dy', '0.32em')
    .attr('x', textOffset)
    .attr('fill', '#effffb')
    .attr('font-size', 12)
}

const onClickLegend = (d) => {
  selectedCategory = d
  render(graphData)
  simulation.stop()
  d3.event.stopPropagation()
}
