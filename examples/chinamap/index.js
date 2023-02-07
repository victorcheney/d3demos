async function initMap() {
  // 1. Access Data - 获取数据

  let dataset = await d3.json('./data/daibiao.json')
  let chinaGeojson = await d3.json('./data/100000.json')
  const features = chinaGeojson.features

  // 2. Create chart dimensions - 创建图表尺寸

  const width = 900
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

  const bounds = wrapper
    .append('g')
    .style(
      'transform',
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    )

  // 地图
  const projection = d3.geoMercator().fitExtent(
    [
      [0, 0], //左上角坐标
      [dimensions.width, dimensions.height], //右下角坐标
    ],
    chinaGeojson
  )
  var pathGenerator = d3.geoPath().projection(projection)

  bounds
    .append('g')
    .selectAll('path')
    .data(features)
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .style('fill', '#222')
    .attr('stroke', '#b2d166')
    .style('stroke-width', 0.8)
    .on('mouseenter', function () {
      d3.select(this).style('stroke-width', 1.5)
    })
    .on('mouseleave', function () {
      d3.select(this).style('stroke-width', 0.8)
    })

  // 区域名称
  const fontSize = 11
  bounds
    .append('g')
    .selectAll('text')
    .data(features)
    .enter()
    .append('text')
    .attr('dx', (d) => {
      return pathGenerator.centroid(d)[0]
    })
    .attr('dy', (d) => pathGenerator.centroid(d)[1])
    .text((d) => d.properties.fullname)
    .attr('fill', '#b2d166')
    .attr('font-size', `${fontSize}px`)
    .attr('transform', (d) => {
      const fullname = d.properties.fullname
      if (fullname) {
        return `translate(-${(fullname.length * fontSize) / 2}, 0)`
      } else {
        return 'translate(0, 0)'
      }
    })
    .attr('opacity', 0.5)

  // 4. Create scales - 创建比例尺

  const values = dataset.map((item) => item.value)
  const circleRadius = d3
    .scaleLinear()
    .domain([Math.min(...values), Math.max(...values)])
    .range([3, 20])

  // 5. Draw data - 绘制数据

  console.log(projection([117.347043, 39.288036]))

  const bubbleGroup = bounds.append('g')
  bubbleGroup
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => projection(getProvinceCenter(d.name, features))[0])
    .attr('cy', (d) => projection(getProvinceCenter(d.name, features))[1])
    .transition()
    .duration(1000)
    .attr('r', (d) => circleRadius && circleRadius(d.value))
    .attr('fill', '#b2d166')
    .attr('opacity', 0.75)

  // 6. Draw peripherals - 绘制周围部分，例如legend（图例）等

  // 7. Set up interactions - 设置交互
}

function getProvinceCenter(name, features) {
  const rst = features.find((item) => item.properties.fullname === name)
  return rst.properties.center
}

initMap()
