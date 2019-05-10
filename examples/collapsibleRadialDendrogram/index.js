// 放射状树
let width = 900, radius = width / 2;

const tree = d3.cluster().size([2 * Math.PI, radius - 150])
// const tree = d3.tree().size([2 * Math.PI, radius - 150])

const zoom = d3.zoom()
  .scaleExtent([.5, 4])
  .on('zoom', () => {
    d3.select('#chart svg > g').attr("transform", d3.event.transform);
  })


function initChart(data) {
  const root = tree(d3.hierarchy(data))
    .sort((a, b) => (a.height - b.height) || a.data.name.localeCompare(b.data.name))

  root.descendants().forEach((d, i) => {
    d.id = i
    d._children = d.children
    if(d.depth > 3) {
        d.children = null
    }
  })
  
  const svg = d3.select('#chart').append('svg')
    .style('width', width)
    .style('height', width)
    .style('padding', '10px')
    .style('box-sizing', 'border-box')
    .attr('viewBox', [-width/2, -width/2, width, width])
    .call(zoom)

  const g = svg.append('g')
    // .attr('transform', `translate(${width/2}, ${width/2})`)

  const gLink = g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#D0A342')
      .attr('stroke-opacity', '0.4')
      // .attr('stroke-width', 1.5)
    
    const gNode = g.append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)

  function _update(source) {
    // 过渡时间
    const duration = d3.event && d3.event.altKey ? 2500 : 500

    // 过渡动画生成器
    const transition = svg.transition().duration(duration)

    // 重新获取节点和连线
    const nodes = root.descendants().reverse() // 获取从当前节点开始返回其后代节点数组
    const links = root.links()  // 返回当前节点所在子树的所有边

    // 计算新的布局
    tree(root)

    // let left = root;
    // let right = root;

    // root.eachBefore(function(node) {
    //     if(node.x < left.x) {
    //         left = node
    //     }
    //     if(node.x > right.x) {
    //         right = node
    //     }
    // })

    // 画节点
    const node = gNode.selectAll('g')
      .data(nodes)
    const nodeEnter = node.enter().append('g')
        .attr('transform', d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
        `)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
      .on('click', d => {
        d.children = d.children ? null : d._children
        _update(d)
      });

    nodeEnter.append('circle')
      .attr('fill', d => d.children ? '#D0A342' : '#999')
      .attr('r', 5);
  
    nodeEnter.append('text')
        .attr('dy', '0.31em')
        .attr('font-size', '12px')
        .attr('x', d => d.x < Math.PI === !d.children ? 10 : -10)
        .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
        .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
        .text(d => d.data.name)
        .attr('fill', 'rgba(255, 255, 255, 0.7)')
      .filter(d => d.children)
      .clone(true).lower()
        // .attr('stroke', 'white');
    // 过渡节点到新位置
    const nodeUpdate = node.merge(nodeEnter).transition(transition)
      .attr('transform', d => `
        rotate(${d.x * 180 / Math.PI - 90})
        translate(${d.y},0)
      `)
      .attr('fill-opacity', 1)
      .attr('stroke-opacity', 1)
    
    // exit节点过渡到新位置
    const nodeExit = node.exit().transition(transition).remove()
      .attr('transform', d => `
        rotate(${source.x * 180 / Math.PI - 90})
        translate(${source.y},0)
      `)
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0)

    
    // 画线
    const link = gLink.selectAll('path')
      .data(links);
    
    const linkEnter = link.enter().append('path')
        .attr('d', d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y)
        )

    // 增加的线条过渡
    const linkUpdate = link.merge(linkEnter).transition(transition)
      .attr('d', d3.linkRadial()
        .angle(d => d.x)
        .radius(d => d.y)
      )

    // 移除的link过渡
    const linkExit = link.exit().transition(transition).remove()
      .attr('d', d3.linkRadial()
        .angle(d => source.x)
        .radius(d => source.y)
      )

    };

    svg.node().update = _update

    _update(root)

    return svg.node()
  
}

d3.json('data.json').then(data => {
  initChart(data)
})