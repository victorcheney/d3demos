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

// 5. Draw data - 绘制数据

// 6. Draw peripherals - 绘制周围部分，例如legend（图例）等

// 7. Set up interactions - 设置交互
