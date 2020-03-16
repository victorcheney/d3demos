let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40
}

const circleRadius = {
  person: 12,
  location: 9,
  event: 6
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

const linkText = svg.append('g')
  .attr('class', 'link-text')
  .attr('class', 'zoom-g')

let linkTextEnter

const gnode = svg.append('g').attr('class', 'zoom-g')

// 创建图例
const spacing = 30
const legendG = svg
  .append('g')
  .attr('class', 'legend')
  .attr(
    'transform',
    `translate(-${width / 2 - margin.left}, -${height / 2 - spacing * 3})`
  )

const render = data => {
  /* const root = d3.hierarchy(data)
  const links = root.links()
  const nodes = root.descendants() */

  let { links, nodes, categories } = data

  links = setRelationGroup(links)
  console.log(links)

  simulation = d3
    .forceSimulation(nodes)
    .force(
      'link',
      d3
        .forceLink(links)
        .id(d => d.id)
        .distance(200)
        .strength(1)
    )
    .force('charge', d3.forceManyBody().strength(-450))
    // .force('charge', d3.forceCollide(20))
    // .force('charge', d3.forceCenter(0, 0))
    // .force('charge', d3.forceRadial(200))
    .force('x', d3.forceX())
    .force('y', d3.forceY())

  /* const linkJoin = link
    .selectAll('path')
    .data(links)
    .join('path')
    .attr('marker-end', d => `url(#${d.target.categories[0]})`) */

  const linkJoin = link
    .selectAll('path')
    .data(links)
    // .join('path')
    // .attr('marker-end', d => `url(#${d.target.categories[0]})`)

  let linkEnter = linkJoin.enter().append('path')
    .attr('marker-end', d => `url(#${d.target.categories[0]})`)
    .attr("id", function (d) {
      return `link${d.id}`;
    })

  // link上的文字
  let linkTextG = linkText.selectAll('.text')
    .data(links)

  // remove exit  
  linkTextG.exit().remove()
  linkTextEnter = linkTextG.enter()
    .append('text')
    .attr('dx', 90)
    .attr('dy', -2)
    .attr('font-size', 10)
    .attr('fill', '#aaa');

  // update
  linkTextEnter.select('text').select('textPath')
    .attr('xlink:href', d => `link${d.id}`)
    .style("pointer-events", "none")

  // new
  linkTextEnter.append('textPath')
    .attr('xlink:href', d => `#link${d.id}`)
    .style("pointer-events", "none")
    .text(d => d.label)

  linkTextG = linkTextEnter.merge(linkTextG)

  const nodeGs = gnode.selectAll('g').data(nodes, d => d.id)
  const enterNode = nodeGs
    .enter()
    .append('g')
    .call(drag(simulation))

  nodeGs
    .merge(enterNode)
    .attr('opacity', d =>
      !selectedCategory || d.categories[0] === selectedCategory ? 1 : 0.2
    )

  const node = enterNode
    .append('circle')
    .attr('stroke-width', 0.5)
    .attr('class', 'node')
    .attr('fill', d => fillColorScale(d.categories[0]))
    .attr('stroke', d => strokeColorScale(d.categories[0]))
    .attr('r', d => circleRadius[d.categories[0]])

  node.append('title').text(d => d.name)
  enterNode
    .append('text')
    .attr('x', d => circleRadius[d.categories[0]] + 2)
    .attr('dy', '.35em')
    .attr('fill', '#effffb')
    .attr('font-size', '10')
    .text(function(d) {
      return d.name
    })

  // 节点mouseover事件
  enterNode.on('mouseover', nodeMouseOver)

  simulation.on('tick', () => {
    linkEnter.attr("d", function(d) {
      //如果连接线连接的是同一个实体，则对path属性进行调整，绘制的圆弧属于长圆弧，同时对终点坐标进行微调，避免因坐标一致导致弧无法绘制
      if(d.target == d.source){
          dr = 30/d.linknum;
          return"M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 1,1 " + d.target.x + "," + (d.target.y+1);
      }else if(d.size%2 !== 0 && d.linknum === 1){
        //如果两个节点之间的连接线数量为奇数条，则设置编号为1的连接线为直线，其他连接线会均分在两边
          return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;
      } 

      //根据连接线编号值来动态确定该条椭圆弧线的长半轴和短半轴，当两者一致时绘制的是圆弧
        //注意A属性后面的参数，前两个为长半轴和短半轴，第三个默认为0，第四个表示弧度大于180度则为1，小于则为0，这在绘制连接到相同节点的连接线时用到；第五个参数，0表示正角，1表示负角，即用来控制弧形凹凸的方向。本文正是结合编号的正负情况来控制该条连接线的凹凸方向，从而达到连接线对称的效果
        var curve=1.5;
        var homogeneous=1.2;
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx*dx+dy*dy)*(d.linknum - 1.8 + homogeneous)/(curve * homogeneous);
        //当节点编号为负数时，对弧形进行反向凹凸，达到对称效果
        if(d.linknum < 0){
            dr = Math.sqrt(dx*dx+dy*dy)*(-1*d.linknum+homogeneous)/(curve*homogeneous);
            return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,0 " + d.target.x + "," + d.target.y;
        }
        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    })

    linkTextEnter.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')'
    })

    enterNode.attr('transform', function(d) {
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
    selectedCategory
  })
}

// 拖拽
const drag = simulation => {
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

const nodeMouseOver = e => {
  console.log(e)
}

d3.json('./hongloudata.json').then(data => {
  graphData = formData(data.data, data.categories)

  render(graphData)
})

function formData(data, categories) {
  let { nodes, edges } = data

  nodes.map(item => {
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
    categories
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
    selectedCategory
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
    .attr('r', d => circleRadius[d])
    .attr('fill', fillColorScale)
    .attr('opacity', d =>
      !selectedCategory || d === selectedCategory ? 1 : 0.2
    )
    .on('click', d => onClickLegend(d === selectedCategory ? null : d))

  groupsEnter
    .append('text')
    .merge(groups.select('text'))
    .text(d => categories[d])
    .attr('dy', '0.32em')
    .attr('x', textOffset)
    .attr('fill', '#effffb')
    .attr('font-size', 12)
}

const onClickLegend = d => {
  selectedCategory = d
  render(graphData)
  simulation.stop()
  d3.event.stopPropagation()
}

// 关系分组
const setRelationGroup = (links) => {
  //对连接线进行统计和分组，不区分连接线的方向，只要属于同两个实体，即认为是同一组
  let linkMap  = {}
  let linkGroup = {}

  links.map(item => {
    let key = item.source < item.target
      ? item.source + ':' + item.target
      : item.target + ':' + item.source

    if (!linkMap.hasOwnProperty(key)) {
      linkMap[key] = 0
    }

    linkMap[key] +=1;

    if (!linkGroup.hasOwnProperty(key)) {
      linkGroup[key]=[]
    }
    linkGroup[key].push(item)

    // 设置link type
    item.linkType = item.source === item.target ? 'self' : 'notself'

    return item
  })

  console.log('linkMap',linkMap)
  console.log('linkGroup',linkGroup)
  console.log('links',links)

  links = setLinkNumber(links, linkMap, linkGroup)

  return links
}

// 设置link编号
const setLinkNumber = (links, linkMap, linkGroup) => {
  links.map(item => {
    let key = item.source < item.target
      ? item.source + ':' + item.target
      : item.target + ':' + item.source

    item.size = linkMap[key]

    // 同一组进行编号
    let group = linkGroup[key]

    dispatchNumber(group, item.linkType)

    return item
  }) 

  return links
}

const dispatchNumber = (group, type) => {
  if (group.length === 0) return
  //对该分组内的关系按照方向进行分类，此处根据连接的实体ASCII值大小分成两部分
  let linksA = [], linksB = []
  group.forEach(item => {
    if (item.source < item.target){
      linksA.push(item)
    } else {
      linksB.push(item)
    }
  })

  //确定关系最大编号。为了使得连接两个实体的关系曲线呈现对称，根据关系数量奇偶性进行平分。
  //特殊情况：当关系都是连接到同一个实体时，不平分
  var maxLinkNumber = 0
  if (type ==='self') {
    maxLinkNumber = group.length
  } else {
    maxLinkNumber = group.length % 2 == 0 
      ? group.length / 2
      : (group.length+1) / 2
  }
  //如果两个方向的关系数量一样多，直接分别设置编号即可
  if (linksA.length == linksB.length) {
    var startLinkNumber = 1;
    for (var i = 0; i < linksA.length; i++){
      linksA[i].linknum = startLinkNumber++;
    }
    startLinkNumber = 1;
    for (var i = 0; i < linksB.length; i++) {
      linksB[i].linknum = startLinkNumber++;
    }
  } else {
    //当两个方向的关系数量不对等时，先对数量少的那组关系从最大编号值进行逆序编号，然后在对另一组数量多的关系从编号1一直编号到最大编号，再对剩余关系进行负编号
    //如果抛开负号，可以发现，最终所有关系的编号序列一定是对称的（对称是为了保证后续绘图时曲线的弯曲程度也是对称的）
    var biggerLinks, smallerLinks;
    if(linksA.length > linksB.length){
      biggerLinks = linksA;
      smallerLinks = linksB;
    }else{
      biggerLinks = linksB;
      smallerLinks = linksA;
    }

    var startLinkNumber = maxLinkNumber;
    for (var i=0; i < smallerLinks.length; i++) {
      smallerLinks[i].linknum = startLinkNumber--;
    }
    var tmpNumber = startLinkNumber;

    startLinkNumber = 1;
    var p = 0;
    while(startLinkNumber <= maxLinkNumber){
      biggerLinks[p++].linknum = startLinkNumber++;
    }
    //开始负编号
    startLinkNumber = 0-tmpNumber;
    for(var i=p;i<biggerLinks.length;i++){
      biggerLinks[i].linknum = startLinkNumber++;
    }
  } 
}
