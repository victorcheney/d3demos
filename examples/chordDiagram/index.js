// 1. Access Data - 获取数据

let dataset = []
let names = []

const rename = (name) =>
  name.substring(name.indexOf('.') + 1, name.lastIndexOf('.'))

async function getData() {
  const data = await d3.json('data.json')
  dataset = Array.from(
    d3
      .rollup(
        data.flatMap(({ name: source, imports }) =>
          imports.map((target) => [rename(source), rename(target)])
        ),
        ({ 0: [source, target], length: value }) => ({ source, target, value }),
        (link) => link.join()
      )
      .values()
  )

  names = Array.from(
    new Set(dataset.flatMap((d) => [d.source, d.target]))
  ).sort(d3.ascending)

  const index = new Map(names.map((name, i) => [name, i]))
  const matrix = Array.from(index, () => new Array(names.length).fill(0))
  for (const { source, target, value } of dataset)
    matrix[index.get(source)][index.get(target)] += value

  console.log(dataset, names, matrix)

  draw(matrix, names)
}

getData()

// 2. Create chart dimensions - 创建图表尺寸

const width = 900
const height = 600
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

const innerRadius = Math.min(width, height) * 0.5 - 90
const outerRadius = innerRadius + 10

// 3. Draw canvas - 绘制画布

const wrapper = d3
  .select('#chart')
  .append('svg')
  .attr('width', dimensions.width)
  .attr('height', dimensions.height)
  .attr('viewBox', [-width / 2, -height / 2, width, height])

const bounds = wrapper
  .append('g')
  .style(
    'transform',
    `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
  )

// 4. Create scales - 创建比例尺

/* const color = d3.scaleOrdinal(
  names,
  d3.quantize(d3.interpolateRainbow, names.length)
) */

// 5. Draw data - 绘制数据

const ribbon = d3
  .ribbonArrow()
  .radius(innerRadius - 1)
  .padAngle(1 / innerRadius)

const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)

const chord = d3
  .chordDirected()
  .padAngle(10 / innerRadius)
  .sortSubgroups(d3.descending)
  .sortChords(d3.descending)

function draw(matrix, names) {
  const chords = chord(matrix)

  const group = bounds
    .attr('font-size', 10)
    .attr('font-family', 'sans-serif')
    .selectAll('g')
    .data(chords.groups)
    .join('g')

  const color = d3.scaleOrdinal(
    names,
    d3.quantize(d3.interpolateRainbow, names.length)
  )

  group
    .append('path')
    .attr('fill', (d) => {
      console.log(color)
      return color(names[d.index])
    })
    .attr('d', arc)

  group
    .append('text')
    .each((d) => (d.angle = (d.startAngle + d.endAngle) / 2))
    .attr('dy', '0.35em')
    .attr(
      'transform',
      (d) => `
        rotate(${(d.angle * 180) / Math.PI - 90})
        translate(${outerRadius + 5})
        ${d.angle > Math.PI ? 'rotate(180)' : ''}
      `
    )
    .attr('text-anchor', (d) => (d.angle > Math.PI ? 'end' : null))
    .attr('fill', '#fff')
    .text((d) => names[d.index])

  group.append('title').text(
    (d) => `${names[d.index]}
      ${d3.sum(
        chords,
        (c) => (c.source.index === d.index) * c.source.value
      )} outgoing →
      ${d3.sum(
        chords,
        (c) => (c.target.index === d.index) * c.source.value
      )} incoming ←`
  )

  bounds
    .append('g')
    .attr('fill-opacity', 0.75)
    .selectAll('path')
    .data(chords)
    .join('path')
    // .style('mix-blend-mode', 'multiply')
    .attr('fill', (d) => color(names[d.target.index]))
    .attr('d', ribbon)
    .append('title')
    .text(
      (d) =>
        `${names[d.source.index]} → ${names[d.target.index]} ${d.source.value}`
    )
}

// 6. Draw peripherals - 绘制周围部分，例如legend（图例）等

// 7. Set up interactions - 设置交互
