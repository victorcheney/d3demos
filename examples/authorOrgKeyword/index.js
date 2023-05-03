let simulation = null
let svg = null
let gnode = null
let glink = null
let glegend = null

let selectedCategory = null

const alpha = 1
const alphaDecay = 0.04

let linkEnter = null
let nodeEnter = null

/// 比例尺
let circleRadius = null
let linkStrokeWidth = null
let color = null

let nodesCopy = []
let linksCopy = []

// 1. Access Data - 获取数据

let dataset = []

d3.json('data.json').then((res) => {
  dataset = res.data

  const datasetCopy = JSON.parse(JSON.stringify(dataset))

  /* setInterval(() => {
    console.log(datasetCopy.nodes.length, datasetCopy)
    const nodes = datasetCopy.nodes.slice(
      0,
      Math.round(Math.random() * datasetCopy.nodes.length + 5)
    )

    const nodeIds = nodes.map((item) => item.id)

    const links = datasetCopy.links.filter(
      (link) => nodeIds.includes(link.target) && nodeIds.includes(link.source)
    )

    nodesCopy = dataset.nodes
    linksCopy = dataset.links

    render(JSON.parse(JSON.stringify(nodes)), JSON.parse(JSON.stringify(links)))
  }, 3000) */

  nodesCopy = dataset.nodes
  linksCopy = dataset.links

  render(dataset.nodes, dataset.links)
})

// 2. Create chart dimensions - 创建图表尺寸

const width = 1200
const height = 700
let dimensions = {
  width,
  height,
  margin: {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40,
  },
}
dimensions.boundedWidth =
  dimensions.width - dimensions.margin.left - dimensions.margin.right
dimensions.boundedHeight =
  dimensions.height - dimensions.margin.top - dimensions.margin.bottom

// 3. Draw canvas - 绘制画布

const wrapper = d3
  .select('#chart')
  .append('svg')
  .attr('width', dimensions.width)
  .attr('height', dimensions.height)
// .attr('viewBox', [0, 0, dimensions.width * 2, dimensions.height * 2])

const bounds = wrapper
  .append('g')
  .style(
    'transform',
    `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
  )

glegend = wrapper.append('g').attr('class', 'legend')

// 4. Create scales - 创建比例尺

function initScales(nodes, links) {
  const nodeValues = nodes.map((item) => item.value)
  const linkValues = links.map((item) => item.value)

  circleRadius = d3
    .scaleLinear()
    .domain([Math.min(...nodeValues), Math.max(...nodeValues)])
    .range([5, 25])

  linkStrokeWidth = d3
    .scaleLinear()
    .domain([Math.min(...linkValues), Math.max(...linkValues)])
    .range([0.5, 2])

  const categories = nodes.map((item) => item.name)

  color = d3.scaleOrdinal(
    categories,
    d3.quantize(d3.interpolateRainbow, categories.length)
  )
}

// 5. Draw data - 绘制数据

// 绘制连线
function drawLink(links) {
  var link = glink.selectAll('.path').data(links)

  const linkEnter = link.join('path').attr('opacity', (d) => {
    return !selectedCategory || d.source.name === selectedCategory ? 0.2 : 0.02
  })

  linkEnter
    .attr('class', 'path')
    .attr('stroke', (d) => color(d.target.name))
    .attr('stroke-width', (d) => linkStrokeWidth && linkStrokeWidth(d.value))

  return linkEnter
}

// 绘制节点
function drawNode(nodes) {
  const node = gnode.selectAll('g').data(nodes)
  // node.exit().remove()

  const nodeEnter = node
    .join('g')
    .attr('opacity', (d) => {
      return !selectedCategory || d.name === selectedCategory ? 1 : 0.3
    })
    .call(drag())

  nodeEnter
    .selectAll('circle')
    .data((d) => [d])
    .join('circle')
    .transition(d3.transition().duration(350))
    .attr('r', (d) => {
      return (circleRadius && circleRadius(d.value)) || 20
    })
    .attr('fill', (d) => color(d.name))

  nodeEnter
    .selectAll('text')
    .data((d) => [d])
    .join('text')
    .attr('text-anchor', 'middle')
    .attr('dy', (d) => /* circleRadius(d.value) + 14 ||   '.35em'*/ 30)
    .attr('fill', '#fff')
    .transition(d3.transition().duration(350))
    .attr('font-size', '12')
    .text(function (d) {
      return d.name.slice(0, 6)
    })

  return nodeEnter
}

// 渲染
function render(nodes, links) {
  if (nodes.length) initScales(nodes, links)

  // if (nodes.length) initLegend()

  simulation.nodes(nodes)
  simulation.force(
    'link',
    d3.forceLink(links).id(function (d) {
      return d.id
    })
    // .distance(100)
  )

  nodeEnter = drawNode(nodes)
  linkEnter = drawLink(links)

  simulation.alpha(alpha).alphaDecay(alphaDecay).restart()
}

function drag() {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.05).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged(event, d) {
    d.fx = event.x
    d.fy = event.y
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }

  return d3
    .drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
}

// 初始化
function init(nodes = [], links = []) {
  glink = bounds.append('g').attr('class', 'links')
  gnode = bounds.append('g').attr('class', 'nodes')

  simulation = d3
    .forceSimulation()
    .force(
      'link',
      d3.forceLink().id(function (d) {
        return d.id
      })
      // .distance(100)
    )
    .force('charge', d3.forceManyBody().strength(-150) /* .distanceMin(150) */)
    .force('center', d3.forceCenter(width / 2, height / 2).strength(1))
    .force('collide', d3.forceCollide().radius(30))
    .force('x', d3.forceX().strength(0.01))
    .force('y', d3.forceY().strength(0.01))
    // .force('boundary', forceBoundary(20, 20, width - 20, height - 20))
    .force('limit', d3.forceLimit().radius(0).x0(0).x1(width).y0(0).y1(height))

  // 渲染
  render(nodes, links)

  simulation.nodes(nodes).on('tick', ticked)
  simulation.force('link').links(links)

  function ticked() {
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

    nodeEnter.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })
  }
}

init()

// 6. Draw peripherals - 绘制周围部分，例如legend（图例）等

function initLegend() {
  const spacing = 15

  glegend.attr(
    'transform',
    `translate(${dimensions.margin.left}, ${200 - spacing * 3})`
  )
  glegend.call(createLenged, {
    textOffset: 10,
    spacing,
    circleRadius,
    onClickLegend,
    selectedCategory,
  })
}

function createLenged(selection, props) {
  const {
    textOffset,
    spacing,
    // circleRadius,
    onClickLegend,
    selectedCategory,
  } = props

  const groups = selection.selectAll('g').data(color.domain())

  const groupsEnter = groups
    .join('g')
    .on('click', onClickLegend)
    .attr('transform', (d, i) => {
      return `translate(${i % 2 !== 0 ? 120 : 0}, ${
        (i % 2 !== 0 ? i - 1 : i) * spacing
      })`
    })
    .attr('opacity', (d) =>
      !selectedCategory || d === selectedCategory ? 1 : 0.2
    )
    .attr('cursor', 'pointer')

  groupsEnter
    .selectAll('circle')
    .data((d) => [d])
    .join('circle')
    // .attr('r', d => circleRadius[d])
    .attr('r', 5)
    .attr('fill', (d) => color(d))

  groupsEnter
    .selectAll('text')
    .data((d) => [d])
    .join('text')
    .text((d) => {
      return d
    })
    .attr('dy', '0.32em')
    .attr('x', textOffset)
    .attr('fill', '#fff')
    .attr('font-size', 12)
}

// 7. Set up interactions - 设置交互

function onClickLegend(event, d) {
  selectedCategory = d === selectedCategory ? null : d
  render(nodesCopy, linksCopy)
  /*  render(
    JSON.parse(JSON.stringify(nodesCopy)),
    JSON.parse(JSON.stringify(linksCopy))
  ) */
}
