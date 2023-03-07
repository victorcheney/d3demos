/*
 * @Description:
 * @Author: Chen Fengtao
 * @Date: 2023-03-07 16:22:41
 * @LastEditors: Chen Fengtao
 * @LastEditTime: 2023-03-07 17:05:45
 */
// 1. Access Data - 获取数据

let dataset = []

// 2. Create chart dimensions - 创建图表尺寸

const width = 900
const height = 500
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

dataset = _makeSomeLinearishData(width, height, 20)

// 3. Draw canvas - 绘制画布

const wrapper = d3
  .select('#chart')
  .append('svg')
  .attr('width', dimensions.width)
  .attr('height', dimensions.height)

const bounds = wrapper
  .append('g')
  .style(
    'transform',
    `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
  )

// 4. Create scales - 创建比例尺
const colorValueAccessor = (d) => d.x

console.log(dataset)

const colorScale = d3
  .scaleSequential(d3.interpolateViridis)
  .domain(d3.extent(dataset, colorValueAccessor))

console.log(d3.extent(dataset, colorValueAccessor))

// 5. Draw data - 绘制数据

const bubbleLightDirectionX = 36
const bubbleLightDirectionY = 36
const gradientStrength = 0

render3DBubbles({
  svgRootSelection: wrapper,
  bubbleTargetSelection: wrapper.append('g').classed('bubbles', true),
  data: dataset,
  colorAccessor: (d) => {
    return colorScale(colorValueAccessor(d))
  },
  otherBubbleStyles: {
    opacity: (d) => Math.random(),
  },
  radiusAccessor: (d) => d.r,
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y,
  // gradient style props
  lightDirectionX: bubbleLightDirectionX,
  lightDirectionY: bubbleLightDirectionY,
  gradientShineColor: 'white',
  gradientFocus: gradientStrength,
  transitionDuration: 300,
})

// 6. Draw peripherals - 绘制周围部分，例如legend（图例）等

// 7. Set up interactions - 设置交互

function _makeSomeLinearishData(width, height, r) {
  const spread = 100
  const xScale = d3
    .scaleLinear()
    .domain([0, width])
    .range([30, width - 30])
    .clamp(true)
  const yScale = d3
    .scaleLinear()
    .domain([0, height])
    .range([30, height - 30])
    .clamp(true)
  return d3.range(100).map((i) => {
    return {
      x: xScale(width * (i / 100) + -Math.random() * spread),
      y: yScale((height * (100 - i)) / 100 + -Math.random() * spread),
      r: 1 + Math.floor(Math.random() * 30),
    }
  })
}

function _cleanCssName(string) {
  return string ? string.replace(/^[^a-z]+|[^\w:.-]+/gi, '') : ''
}

function _appendColorDefs(
  svgSelection,
  c,
  lightDirectionX,
  lightDirectionY,
  gradientShineColor,
  gradientFocus
) {
  svgSelection
    .insert('defs', ':first-child')
    .append('radialGradient')
    .attr('id', `color_${_cleanCssName(c)}`)
    .attr('cx', '50%')
    .attr('cy', '50%')
    .attr('fx', `${lightDirectionX}%`)
    .attr('fy', `${lightDirectionY}%`)
    .selectAll('stop')
    .data([
      { color: gradientShineColor, offset: `${gradientFocus}%` },
      { color: c, offset: '100%' },
    ])
    .enter()
    .append('stop')
    .attr('offset', (d) => d.offset)
    .attr('stop-color', (d) => d.color)
}

function render3DBubbles({
  // d3 selections
  svgRootSelection, // must be the root selection of the svg
  bubbleTargetSelection, // can be the root svg selection or another group to append the circles to
  // styles
  otherBubbleStyles = {}, // e.g. { opacity: 0.8, stroke: 'black' }
  // data & accessor functions
  data, // the array of data from which to create bubbles
  colorAccessor, // takes a datum, returns a color, something like: (datum) => (colorScale(datum.value))
  radiusAccessor = (d) => d.r, // function to get the bubble radius
  xAccessor = (d) => d.x, // function to get the X value in pixel space
  yAccessor = (d) => d.y, // function to get the Y value in pixel space
  // gradient style props
  lightDirectionX = 35, // 0 - 100, 0 or 100 = no gradient
  lightDirectionY = 35, // 0 - 100, 0 or 100 = no gradient
  gradientShineColor = '#fff', // defaults to white
  gradientFocus = 0, // 0 - 100, 100 = wash gradient out
  // transition
  transitionDuration = 500,
}) {
  // Creates the <defs> and maps the color fills to the appropriate <defs>
  // returns a selection
  const points = define3DBubbles({
    svgRootSelection, // must be the root selection of the svg
    bubbleTargetSelection, // can be the root svg selection or another group to append the circles to
    otherBubbleStyles, // e.g. { opacity: 0.8, stroke: 'black' }
    data, // the array of data from which to create bubbles
    colorAccessor, // takes a datum, returns a color, something like: (datum) => (colorScale(datum.value))
    lightDirectionX, // where the shiny spot shows up in X
    lightDirectionY, // where the shiny spot shows up in Y
    gradientShineColor, // defaults to white
    gradientFocus, // how wide the shiny spot is
  })

  // This just positions and transitions the bubbles using x, y, radius accessors
  points
    .attr('cx', xAccessor)
    .attr('cy', yAccessor)
    .attr('r', 0)
    // then transition
    .merge(points)
    .transition()
    .duration(transitionDuration)
    .attr('r', radiusAccessor)

  return points
}

function define3DBubbles({
  // d3 selection
  svgRootSelection,
  bubbleTargetSelection,
  // styles
  otherBubbleStyles = {},
  // data & accessor functions
  data,
  colorAccessor,
  // gradient style props
  lightDirectionX = 35, // 0 - 100, 0 or 100 = no gradient
  lightDirectionY = 35, // 0 - 100, 0 or 100 = no gradient
  gradientShineColor = '#fff', // defaults to white
  gradientFocus = 0, // 0 - 100, 100 = wash gradient out
}) {
  // create the color defs for unique values of the color scale
  _.uniqBy(data, colorAccessor).forEach((d) =>
    _appendColorDefs(
      svgRootSelection,
      colorAccessor(d),
      lightDirectionX,
      lightDirectionY,
      gradientShineColor,
      gradientFocus
    )
  )

  // render to groups on the target selection
  return (
    bubbleTargetSelection
      .selectAll('g')
      .data(data)
      .enter()
      .append('circle')
      .call((selection) => {
        // apply any styles passed as arguments
        _.forEach(otherBubbleStyles, (styleValue, styleName) => {
          selection.style(styleName, styleValue)
        })
      })
      // magic happens here: link the color back to a <def> that defines the gradient for each color
      .style('fill', (d) => `url(#color_${_cleanCssName(colorAccessor(d))})`)
  )
}
