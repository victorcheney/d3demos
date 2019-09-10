let margin = {
  top: 20,
  right: 0,
  bottom: 80,
  left: 40
}

let width = 900,
  height = 700

let color = {
  text: '#8fac4a',
  chart: '#41433d'
}

const data = {
  sales: 8000,
  profit: 4200,
  list: [
    {
      name: '子公司1',
      time: '2000-01-01',
      scale: 50,
      sales: 320,
      profit: 160,
      status: 1
    },
    {
      name: '子公司2',
      time: '2000-02-01',
      scale: 92,
      sales: 100,
      profit: 60,
      status: 0,
    },
    {
      name: '子公司3',
      time: '2000-09-01',
      scale: 125,
      sales: 350,
      profit: 200,
      status: 1
    },
    {
      time: '2002-09-01',
      scale: 115,
      sales: 290,
      profit: 120,
      name: '子公司4',
      status: 1
    },
    {
      time: '2002-01-01',
      scale: 80,
      sales: 250,
      profit: 110,
      name: '子公司5',
      status: 1
    },
    {
      time: '2002-01-01',
      scale: 170,
      sales: 350,
      profit: 120,
      name: '子公司6',
      status: 1
    },
    {
      time: '2004-01-01',
      scale: 145,
      sales: 350,
      profit: 160,
      name: '子公司7',
      status: 1
    },
    {
      time: '2004-08-01',
      scale: 110,
      sales: 200,
      profit: 100,
      name: '子公司8',
      status: 1
    },
    {
      time: '2004-03-01',
      scale: 195,
      sales: 300,
      profit: 120,
      name: '子公司9',
      status: 1
    },
    {
      time: '2003-11-01',
      scale: 75,
      sales: 280,
      profit: 120,
      name: '子公司10',
      status: 1
    },
    {
      time: '2005-06-01',
      scale: 80,
      sales: 160,
      profit: 80,
      name: '子公司11',
      status: 1
    },
    {
      time: '2005-11-01',
      scale: 170,
      sales: 310,
      profit: 160,
      name: '子公司12',
      status: 0
    },
    {
      time: '2006-04-01',
      scale: 105,
      sales: 280,
      profit: 120,
      name: '子公司13',
      status: 1
    },
    {
      time: '2006-09-01',
      scale: 140,
      sales: 200,
      profit: 80,
      name: '子公司14',
      status: 1
    },
    {
      time: '2007-07-01',
      scale: 200,
      sales: 400,
      profit: 180,
      name: '子公司15',
      status: 1
    },
    {
      time: '2008-05-01',
      scale: 150,
      sales: 320,
      profit: 130,
      name: '子公司16',
      status: 1
    },
    {
      time: '2007-07-01',
      scale: 90,
      sales: 220,
      profit: 100,
      name: '子公司17',
      status: 1
    },
    {
      time: '2008-09-01',
      scale: 110,
      sales: 240,
      profit: 100,
      name: '子公司18',
      status: 1
    },
    {
      time: '2010-01-01',
      scale: 90,
      sales: 210,
      profit: 80,
      name: '子公司19',
      status: 1
    },
    {
      time: '2009-08-01',
      scale: 190,
      sales: 280,
      profit: 110,
      name: '子公司20',
      status: 1
    },
    {
      time: '2010-06-01',
      scale: 155,
      sales: 210,
      profit: 110,
      name: '子公司21',
      status: 1
    },
    {
      time: '2010-03-01',
      scale: 120,
      sales: 180,
      profit: 80,
      name: '子公司22',
      status: 1
    },
    {
      time: '2011-05-01',
      scale: 200,
      sales: 300,
      profit: 140,
      name: '子公司23',
      status: 1
    },
    {
      time: '2013-10-01',
      scale: 130,
      sales: 200,
      profit: 100,
      name: '子公司24',
      status: 1
    },
    {
      time: '2013-10-01',
      scale: 80,
      sales: 240,
      profit: 100,
      name: '子公司25',
      status: 1
    },
    {
      time: '2011-09-01',
      scale: 85,
      sales: 280,
      profit: 130,
      name: '子公司26',
      status: 1
    },
    {
      time: '2012-07-01',
      scale: 150,
      sales: 380,
      profit: 160,
      name: '子公司27',
      status: 1
    },
    {
      time: '2015-01-01',
      scale: 150,
      sales: 190,
      profit: 90,
      name: '子公司28',
      status: 1
    },
    {
      time: '2012-02-01',
      scale: 120,
      sales: 160,
      profit: 60,
      name: '子公司29',
      status: 1
    },
    {
      time: '2014-02-01',
      scale: 180,
      sales: 245,
      profit: 110,
      name: '子公司30',
      status: 0
    },
    {
      time: '2015-06-01',
      scale: 110,
      sales: 300,
      profit: 140,
      name: '子公司31',
      status: 1
    },
    {
      time: '2015-11-01',
      scale: 60,
      sales: 300,
      profit: 150,
      name: '子公司32',
      status: 1
    },
  ]
}

// 给纵轴留出的左侧距离，以下很多定位需要用到这个常量
const pl = 30
// 定义根节点外圆半径
const rootNodeR1 = 50
// 根据数据计算根节点内圆半径
const { sales = 0, profit = 0 } = data
const rootNodeR2 = sales ? (profit / sales) * rootNodeR1 : 0

// 子节点半径最大值
const maxRadius = 40
// 子节点半径最小值
const minRadius = 10
// 波纹动画扩散距离
const nodeAnimateWidth = 20
// 纵轴0刻度与根节点的距离
const rootNodeGap = 50
// 当前hover的子节点的索引值
let hoverIndex = -1
// 用于控制波纹动画的有无
let isNodeAnimate = true

// 横轴：时间比例尺
const xRange = [maxRadius + nodeAnimateWidth + pl, width - maxRadius - nodeAnimateWidth]
const xDataList = data.list.map(item => item.time)
const xScale = d3.scaleTime().domain([new Date(d3.min(xDataList)), new Date(d3.max(xDataList))]).range(xRange)

// 纵轴：线性比例尺
const yDataList = data.list.map(item => item.scale)
const yRangeStart = height - rootNodeR1 * 2 - rootNodeGap
const yRangeEnd = 2 * maxRadius + nodeAnimateWidth
const yScale = d3.scaleLinear().domain([0, d3.max(yDataList)]).range([yRangeStart, yRangeEnd])

// 气泡大小：线性比例尺
const rDataList = data.list.map(item => item.sales)
const rRange = [minRadius, maxRadius]
const rScale = d3.scaleLinear().domain([d3.min(rDataList), d3.max(rDataList)]).range(rRange)

// 颜色值计算
const colorList = ['#85a0ff', '#00b5ff', '#6cffea', '#fffaa4', '#ff315f']
const gap = colorList.length > 1 ? 100 / (colorList.length - 1) : 0
const colorDataList = colorList.map((item, index) => ({
    offset: `${index * gap}%`, color: item
  })
)

// 定义动画
const transition = () =>
  d3
    .transition()
    .duration(750)
    .ease(d3.easeLinear)

/**
 * @description 遍历去设置元素样式
 * @param ele 作用元素
 * @param styleObj 样式对象
 */
const setStyle = (ele, styleObj) => {
  Object.keys(styleObj).forEach(key => {
    ele.attr(key, styleObj[key])
  })
}

/**
 * @description 画单圆
 * @param g 容器
 * @param x 圆心x坐标
 * @param y 圆心y坐标
 * @param r 圆半径大小
 * @param s 圆的样式
 * @param c 圆的类名
 */
const drawCircle = (g, x, y, r, s = {}, c = '') => {
  g.append('circle')
    .attr('class', c)
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', 0)
    .call(setStyle, s)
    .transition(transition())
    .attr('r', r)
}

/**
 * @description 画双圆
 * @param g 容器
 * @param x 外圆最底部x坐标
 * @param y 外圆最底部y坐标
 * @param r1 外圆半径
 * @param r2 内圆半径
 * @param s1 外圆样式
 * @param s2 内圆样式
 * @param align 内圆所在位置：top、bottom
 * @param cls 双圆类名
 */
const drawDoubleCircle = (
  g,
  x,
  y,
  r1,
  r2,
  s1 = {},
  s2 = {},
  align = 'bottom',
  cls = ''
) => {
  let innerY = y - r2
  if (align === 'top') {
    innerY = y - 2 * r1 + r2
  }
  drawCircle(g, x, y - r1, r1, s1, `${cls}-outer`)
  drawCircle(g, x, innerY, r2, s2, `${cls}-inner`)
}

/**
 * @description 画波纹动画
 * @param g 容器
 * @param x 波纹圆心x坐标
 * @param x 波纹圆心y坐标
 * @param x 波纹起始半径大小
 * @param x 需要波纹动画的子节点索引值
 */
const drawRippleAnimate = (g, x, y, r, idx) => {
  let times = 1
  const loop = () => {
    let interval = d3.interval(() => {
      if (isNodeAnimate || hoverIndex === idx) {
        g.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('fill', 'none')
          .attr('stroke-width', 1)
          .attr('stroke', '#fff')
          .attr('r', r)
          .style('stroke-opacity', 1)
          .transition()
          .duration(1500)
          .ease(d3.easeLinear)
          .attr('r', r + nodeAnimateWidth)
          .style('stroke-opacity', 0.001)
          .remove()
      }
      if (times > 10) {
        interval.stop()
        interval = null
        drawRippleAnimate(g, x, y, r, idx)
      }
      ++times
    }, 1000)
  }
  loop()
}

/**
 * @description hover子节点效果
 * @param g 子节点容器
 */
const drawHoverStyle = (svg, g) => {
  g
    .on('mouseenter', () => { // 鼠标hover子节点
      // 设置当前hover的子节点索引
      hoverIndex = parseInt(g.attr('index'), 10)
      // 所有波纹动画停止
      isNodeAnimate = false
      // 所有子节点变暗
      svg.selectAll('.child-node-outer')
        .attr('fill-opacity', 0.1)
        .attr('stroke-opacity', 0.1)
      svg.selectAll('.child-node-inner')
        .attr('fill-opacity', 0.1)
      // 所有子节点标签值变暗
      svg.selectAll('.child-node-label')
        .attr('fill-opacity', 0.1)
      // 所有连线变暗
      svg.selectAll('.link')
        .attr('stroke-opacity', 0.1)
      // 所有网格线变暗
      svg.selectAll('.axis-grid')
        .attr('stroke-opacity', 0.1)
      // 当前子节点高亮
      g.select('.child-node-outer')
        .attr('fill-opacity', 1)
        .attr('stroke-opacity', 1)
      g.select('.child-node-inner')
        .attr('fill-opacity', 1)
      // 当前连线高亮
      svg.selectAll(`.link-${hoverIndex}`)
        .attr('stroke-opacity', 1)
        .attr('stroke-width', 2)
      // 当前子节点标签值高亮
      svg.selectAll(`.child-node-label-${hoverIndex}`)
        .attr('fill-opacity', 1)
    })
    .on('mouseleave', () => { // 鼠标移出子节点
      // 取消当前hover的子节点索引
      hoverIndex = -1
      // 所有波纹动画继续
      isNodeAnimate = true
      // 所有子节点恢复
      svg.selectAll('.child-node-outer')
        .attr('fill-opacity', 0.85)
        .attr('stroke-opacity', 0.85)
      svg.selectAll('.child-node-inner')
        .attr('fill-opacity', 0.60)
      // 所有连线恢复
      svg.selectAll('.link')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', 1)
      // 所有网格线恢复
      svg.selectAll('.axis-grid')
        .attr('stroke-opacity', 0.2)
      // 所有子节点标签值恢复
      svg.selectAll('.child-node-label')
        .attr('fill-opacity', 0.65)
    })
}

/**
 * @description 画贝塞尔曲线
 * @param d 起点和终点坐标，示例：[{x: 0, y: 0}, {x: 100, y: 100}]
 */
const drawLine = d => {
  return `M${d[0].x}, ${d[0].y} C ${d[0].x}, ${(d[0].y + d[1].y) / 2} ${d[1].x}, ${(d[1].y + d[0].y) / 2} ${d[1].x}, ${d[1].y}`
}

const initChart = () => {
  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    // .attr('style', `background: -webkit-radial-gradient(#0f2aaf, #000a3c 80%)`)

    // 定义根节点容器
    const rootNodeG = svg.append('g').attr('class', 'root-node-g')

  // width - 1 是为了让根节点底部没有被截掉的感觉
  drawDoubleCircle(rootNodeG, (width + pl) / 2, height - 1, rootNodeR1, rootNodeR2, {
    'fill': '#00C9FF',
    'fill-opacity': 0.65,
    'stroke': '#00C9FF',
    'stroke-width': 2,
  }, {
    'fill': '#00C9FF',
    'fill-opacity': 0.65,
    'stroke': '#00C9FF',
    'stroke-width': 2,
  }, 'top', 'root-node')

  rootNodeG.selectAll('text')
    .data([sales, profit])
    .enter()
    .append('text')
    .attr('class', (d, index) => `root-node-label`)
    .attr('x', (width + pl) / 2)
    .attr('y',  (d, index) => index === 0 ? height - rootNodeR1 + rootNodeR2 : height - 2 * rootNodeR1 +  rootNodeR2)
    .text(d => `${d}/万`)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('fill', '#fff')
    .attr('fill-opacity', (d, index) => index === 0 ? 0.45 : 1)
    .attr('font-size', 0)
    .transition(transition())
    .attr('font-size', (d, index) => index === 0 ? 13 : 13 * 0.9)

  // 定义线性渐变过滤器
  svg.append('defs')
    .append('linearGradient')
    .attr('id', 'liner-color')
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr('x1', nodeAnimateWidth + pl)
    .attr('x2', width - nodeAnimateWidth)
    .attr('y1', 0)
    .attr('y2', 0)
    .selectAll('stop')
    .data(colorDataList)
    .enter()
    .append('stop')
    .attr('offset', d => d.offset)
    .attr('stop-color', d => d.color)

  // 定义子节点总容器
const childNodeG = svg.append('g').attr('class', 'child-node-g')
// 画所有子节点
childNodeG.selectAll('.child-node')
  .data(data.list)
  .enter()
  .append('g')
  .attr('class', 'child-node')
  .attr('index', (d, index) => index)
  .each(function (d, index) { // 遍历去画子节点
    const x = xScale(new Date(d.time))
    const y = yScale(d.scale)
    const r1 = rScale(d.sales)
    const r2 = d.sales ? ((d.profit || 0) / d.sales) * r1 : 0
    // 定义子节点容器
    const nodeG = d3.select(this)
      .attr('cursor', 'pointer')
    // 画子节点双圆
    drawDoubleCircle(nodeG, x, y, r1, r2, {
      'fill': !d.status ? '#eee' : 'url(#liner-color)',
      'fill-opacity': 0.85,
      'stroke': '#fff',
      'stroke-opacity': 0.85,
    }, {
      'fill': '#fff',
      'fill-opacity': 0.60,
    }, 'bottom', 'child-node')
    // 画子节点标签值
    nodeG.append('text')
      .attr('class', `child-node-label child-node-label-${index}`)
      .attr('x', x)
      .attr('y', y)
      .text(d => d.name)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'text-before-edge')
      .attr('fill', '#fff')
      .attr('fill-opacity', 0.65)
      .attr('dy', 4)
      .attr('font-size', 0)
      .transition(transition())
      .attr('font-size', 10)

    // hover效果
    drawHoverStyle(svg, nodeG)

    // 异常波纹
    if (!d.status) {
      drawRippleAnimate(nodeG, x, y - r1, r1, index)
    }
  })

  // 定义连线路径容器
  const linkG = svg.append('g').attr('class', 'link-g')
  // 定义路径起点
  const start = {
    x: (width + pl) / 2,
    y: height - rootNodeR1 * 2 - 1, // 减1是为了让根节点底部没有被截掉
  }
  // 画所有连线路径
  linkG.selectAll('path')
    .data(data.list)
    .enter()
    .append('path')
    .attr('class', (d, index) => `link link-${index}`)
    .attr('fill', 'transparent')
    .attr('stroke', d => !d.status ? '#fff' : 'url(#liner-color)')
    .attr('stroke-width', 1)
    .attr('stroke-opacity', 0.6)
    .attr('d', drawLine([start, start]))
    .transition(transition())
    .attr('d', d => drawLine([start, {
      x: xScale(new Date(d.time)),
      y: yScale(d.scale),
    }]))
    
  // 定义刻度数量
  const tickCount = 6
  // 定义刻度值数组
  let result = []
  // 获取纵轴比例尺定义域
  const yDomain = yScale.domain()
  // 计算步长
  const step = (yDomain[1] - yDomain[0]) / (tickCount - 1)
  // 计算得出刻度值数组
  for (let i = 0; i < tickCount; i += 1) {
    result[i] = step * i + yDomain[0]
  }

  // 定义坐标轴线容器
  const axisG = svg.append('g').attr('class', 'axis-g')
  // 画网格线及刻度值
  axisG.selectAll('.axis')
    .data(result)
    .enter()
    .append('g')
    .attr('class', 'axis')
    .attr('transform', d =>`translate(0, ${yScale(d)})`)
    .each(function (d) {
      // 画横轴网格线
      d3.select(this).append('line')
        .attr('class', 'axis-grid')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('stroke', '#fff')
        .attr('stroke-opacity', 0.2)
        .attr('stroke-width', 1)
      // 画横横轴刻度
      d3.select(this).append('text')
        .attr('transform', `translate(${pl}, 0)`)
        .attr('class', 'axis-tick')
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'text-before-edge')
        .attr('fill', '#fff')
        .attr('fill-opacity', 0.8)
        .attr('font-size', 12)
        .attr('dy', 4)
        .text(d)
    })

  axisG.append('text')
    .attr('class', 'axis-title')
    .attr('transform', `translate(${pl}, ${nodeAnimateWidth})`)
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'text-before-edge')
    .text('公司规模')
    .attr('dx', 20)
    .attr('fill', '#fff')
    .attr('fill-opacity', 0.8)
    .attr('font-size', 12)
}

initChart()
