/*
 * @Description: In User Settings Edit
 * @Author: victorcheney
 * @Date: 2019-05-21 09:39:21
 * @LastEditTime: 2022-09-19 16:05:53
 * @LastEditors: chenfengtao
 */
const margin = {
  top: 10,
  right: 120,
  bottom: 10,
  left: 150,
}

let width = 700

let dx = 10
let dy = width / 6

let tree = d3.tree().nodeSize([dx, dy])
// 贝塞尔曲线
let diagonal = d3
  .linkHorizontal()
  .x((d) => d.y)
  .y((d) => d.x)
// 直线
/* let diagonal = d3.line()
  .x(function (d) {
    return d.y;
  })
  .y(function (d) {
    return d.x;
  }) */

let links = []

let initchart = (data) => {
  let root = d3.hierarchy(data)

  root.x0 = dy / 2
  root.y0 = 0
  root.descendants().forEach((d, i) => {
    d.id = i
    d._children = d.children
    if (d.depth > 2) d.children = null
  })

  // 缩放zoom
  const zoom = d3
    .zoom()
    .scaleExtent([0.5, 5])
    .on('zoom', () => {
      d3.select('#chart svg > g').attr('transform', d3.event.transform)
    })

  // const svg = d3.create("svg")
  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', 900 || width)
    .attr('height', 900)
    // .attr("height", dx)
    .attr('viewBox', [-margin.left, -margin.top, width, dx])
    .style('font', '10px sans-serif')
    .style('user-select', 'none')
    .call(zoom)

  const g = svg.append('g').attr('class', 'container')

  const gLink = g
    .append('g')
    .attr('fill', 'none')
    .attr('stroke', '#D0A342')
    .attr('stroke-opacity', 0.4)
    .attr('stroke-width', 1)

  const gNode = g.append('g').attr('cursor', 'pointer').attr('class', 'node')

  const allNodesId = root
    .descendants()
    .reverse()
    .map((item) => {
      return item.id
    })
  const originNodes = root.descendants().reverse()

  function update(source) {
    const duration = d3.event && d3.event.altKey ? 2500 : 250
    // const nodes = root.descendants().reverse();
    // const links = root.links();

    let orgnodes = root.descendants().reverse()
    // const links = root.links();

    let orgnodeIds = []

    orgnodeIds = orgnodes.map((item) => {
      return item.id
    })

    let hideIds = allNodesId.filter((item) => {
      return orgnodeIds.indexOf(item) == -1
    })

    // 隐藏节点的name
    let hideNames = []
    originNodes.forEach((item) => {
      if (hideIds.indexOf(item.id) > -1) {
        hideNames.push(item.data.name)
      }
    })

    // 重新计算node节点,去掉重复的节点
    let ret = recalcNodes(orgnodes)
    let nodes = ret.nodes
    let repeatedNodesId = ret.repeatedNodesId

    // 过滤出隐藏的节点
    // 点击节点收起时，从新计算的nodes中，删除收起的子节点
    nodes = nodes.filter((item) => {
      return hideNames.indexOf(item.data.name) == -1
    })

    // 重新计算links
    links = []
    root = traverseTree(root, nodes, repeatedNodesId)

    // 去重
    links = uniqueLink(links)

    // Compute the new tree layout.
    tree(root)

    let left = root
    let right = root
    root.eachBefore((node) => {
      if (node.x < left.x) left = node
      if (node.x > right.x) right = node
    })

    // const height = right.x - left.x + margin.top + margin.bottom;

    const transition = svg
      .transition()
      .duration(duration)
      .attr('height', Math.max(600, 900))
    // .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
    // .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

    // Update the nodes…
    const node = gNode.selectAll('g').data(nodes, (d) => d.id)

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${source.y0},${source.x0})`)
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('data-id', (d) => d.id)
      .on('click', (d) => {
        d.children = d.children ? null : d._children

        // 展开节点修改文字位置
        let curtexts = d3.selectAll(`g[data-id="${d.id}"] text`)
        if (d.children && d._children) {
          curtexts
            .transition(transition)
            .attr('text-anchor', 'end')
            .attr('x', -6)
        } else {
          if (d.id !== 0) {
            curtexts
              .transition(transition)
              .attr('text-anchor', 'start')
              .attr('x', 6)
          }
        }
        update(d)
      })

    nodeEnter
      .append('circle')
      .attr('r', 4.5)
      .attr('fill', (d) => (d._children ? '#D0A342' : '#999'))

    nodeEnter
      .append('text')
      .attr('dy', '0.31em')
      .attr('x', (d) => (d._children && d.children ? -6 : 6))
      .attr('text-anchor', (d) => (d._children && d.children ? 'end' : 'start'))
      .attr('fill', 'rgba(255, 255, 255, 0.7)')
      .text((d) => d.id)
      .clone(true)
      .lower()
    // .attr("stroke-linejoin", "spuare")
    // .attr("stroke-width", 0.5)
    // .attr("stroke", "#ddd");

    // Transition nodes to their new position.
    const nodeUpdate = node
      .merge(nodeEnter)
      .transition(transition)
      .attr('transform', (d) => `translate(${d.y},${d.x})`)
      .attr('fill-opacity', 1)
      .attr('stroke-opacity', 1)

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node
      .exit()
      .transition(transition)
      .remove()
      .attr('transform', (d) => `translate(${source.y},${source.x})`)
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)

    // Update the links…
    const link = gLink.selectAll('path').data(links, function (d) {
      return d.source.id + '-' + d.target.id
    })

    // Enter any new links at the parent's previous position.
    const linkEnter = link
      .enter()
      .append('path')
      // 贝塞尔曲线
      .attr('d', (d) => {
        const o = {
          x: source.x0,
          y: source.y0,
        }
        return diagonal({
          source: o,
          target: o,
        })
      })
    // 直线
    /* .attr("d", d => {
        return diagonal([{
          x: d.source.x,
          y: d.source.y
        }, {
          x: d.target.x,
          y: d.target.y
        }]);
      }); */

    // Transition links to their new position.
    link
      .merge(linkEnter)
      .transition(transition)
      // 贝塞尔曲线
      .attr('d', diagonal)
    // 直线
    /* .attr("d", d => {
        return diagonal([{
          x: d.source.x,
          y: d.source.y
        }, {
          x: d.target.x,
          y: d.target.y
        }]);
      }); */

    // Transition exiting nodes to the parent's new position.
    link
      .exit()
      .transition(transition)
      .remove()
      .attr('d', (d) => {
        const o = {
          x: source.x,
          y: source.y,
        }
        return diagonal({
          source: o,
          target: o,
        })
      })

    // Stash the old positions for transition.
    root.eachBefore((d) => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }

  svg.node().update = update

  update(root)

  return svg.node()
}

function getNodeByName(name, nodes) {
  return nodes.filter((item) => {
    return item.data.name === name
  })[0]
}

function traverseTree(node, nodes, repeatedNodesId) {
  //递归，遍历所有连接数据
  if (!node) {
    return
  }
  if (node.children && node.children.length > 0) {
    var current = this.getNodeByName(node.data.name, nodes)

    let arr = node.children

    for (var i = 0; i < arr.length; i++) {
      if (!this.getNodeByName(node.children[i].data.name, nodes)) return
      var templink = {
        source: current,
        target: this.getNodeByName(node.children[i].data.name, nodes),
      }

      links.push(templink)

      traverseTree(node.children[i], nodes, repeatedNodesId)
    }
  }

  return node
}

function recalcNodes(orgnodes) {
  let nodes = [orgnodes[0]]
  let names = []
  let repeatedNodesId = []
  let repeatedNodes = []
  orgnodes.map((item) => {
    names = nodes.map((item) => {
      return item.data.name
    })
    if (names.indexOf(item.data.name) == -1) {
      nodes.push(item)
    } else {
      repeatedNodesId.push(item.id)
      repeatedNodes.push(item)
    }
  })

  let objRepeated = {}
  repeatedNodes.map((item) => {
    if (!objRepeated[item.data.name]) {
      objRepeated[item.data.name] = []
    }
    objRepeated[item.data.name].push(item)
  })

  // 循环修改重复节点位置
  let mNodesChildren = []
  nodes = nodes.map((item) => {
    let t = objRepeated[item.data.name]
    if (t) {
      item = t[(t.length / 2) | 0]
      if (item.children) {
        mNodesChildren = mNodesChildren.concat(item.children)
      }
    }
    return item
  })

  nodes = nodes.map((item) => {
    mNodesChildren.forEach((child) => {
      if (child.data.name === item.data.name) {
        item = child
      }
    })

    return item
  })

  return {
    nodes: nodes,
    repeatedNodesId: repeatedNodesId,
  }
}

function uniqueLink(links) {
  let ret = {}
  links.forEach((item) => {
    ret[item.source.id + '-' + item.target.id] = item
  })

  return d3.values(ret)
}

d3.json('data.json').then((resp) => {
  let chart = initchart(resp.data)
  chart.update()
})
