let width = 900,
  height = 700;

let color = {
  text: '#8fac4a',
  chart: '#41433d'
}

const zoom = d3.zoom()
  .scaleExtent([0.5, 5])
  .on('zoom', zoomed)

  function zoomed () {
    d3.selectAll('g').attr('transform', d3.event.transform)
  }

var svg = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height)
  .call(zoom);

var simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(function (d) {
    return d.id;
  }))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(width / 2, height / 2));


d3.json('data.json')
  .then(function (graph) {

    // 增加id属性
    graph.links = graph.links.map((item, index) => {
      item.id = index
      return item
    })

    // 定义箭头
    const marker = this.svg.append('svg:defs').selectAll('marker')
      .data(graph.links)
      .enter().append('svg:marker')
      .attr('id', link => 'arrow')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 12)
      .attr('refY', 0)
      .attr('markerWidth', 12)
      .attr('markerHeight', 12)
      .attr('orient', 'auto')
      .attr('stroke-width', 2)
      .append('svg:path')
      .attr('d', 'M2,0 L0,-3 L9,0 L0,3 M2,0 L0,-3')
      .attr('fill', '#ddd');

    var link = svg.append('g')
      .attr('class', 'links')
      .selectAll('.line')
      .data(graph.links)
      .enter().append('line')
      .attr('id', d => `line${d.id}`)
      .attr('marker-end', d => `url(#arrow)`); // 线条上添加箭头

    var path = svg.append('g')
      .attr('class', 'path')
      .selectAll('.text')
      .data(graph.links);

      path.exit().remove();
      var pathEnter = path.enter().append('path').
      attr('class', 'path')
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .attr('fill', 'blue')
        .attr('stroke', 'red')
        .attr('id', function (d, i) {
          return 'link' + i
        })
        .style("pointer-events", "none");
      path = pathEnter.merge(path);

    // link上的文字
    var linkText = svg.append('g')
      .attr('class', 'link-text')
      .selectAll('.text')
      .data(graph.links)
    
    // remove exit  
    linkText.exit().remove()
    var linkTextEnter = linkText.enter()
      .append('text')
      .attr('dx', 90)
      .attr('dy', -2)
      .attr('font-size', 10)
      .attr('fill', '#aaa');

    // update
    linkText.select('text').select('textPath')
      .attr('xlink:href', d => `#link${d.id}`)
      .style("pointer-events", "none")
      .text(d => d.id)

    // new
    linkTextEnter.append('textPath')
      .attr('xlink:href', d => `#link${d.id}`)
      .style("pointer-events", "none")
      .text(d => d.id)

    linkText = linkTextEnter.merge(linkText)

    var node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('circle')
      .attr('r', 5.5)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('title')
      .text(function (d) {
        return d.id;
      });

    var nodeLabel = svg.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(graph.nodes)
      .enter()
      .append('text')
      .attr('dy', 10)
      .text(d => d.id)
      .attr('fill', color.text)
      .style('font-size', 10)
      .style('text-anchor', 'middle')

    simulation
      .nodes(graph.nodes)
      .on('tick', ticked);

    simulation.force('link')
      .links(graph.links)
      .distance(function (d) {
        return d.index * 2
      });

    function ticked() {
      link
        .attr('x1', function (d) {
          return d.source.x;
        })
        .attr('y1', function (d) {
          return d.source.y;
        })
        .attr('x2', function (d) {
          return d.target.x;
        })
        .attr('y2', function (d) {
          return d.target.y;
        });

      node
        .attr('cx', function (d) {
          return d.x;
        })
        .attr('cy', function (d) {
          return d.y;
        });

      // 节点文字
      nodeLabel
        .attr('x', d => d.x)
        .attr('y', d => d.y)

      // link上的文字
      // linkText.attr('dx', d => (d.source.x + d.target.x) / 2)
      // linkText.attr('dy', d => (d.source.y + d.target.y) / 2)
      linkText.attr('transform', function (d, i) {
        if (d.target.x < d.source.x) {
          bbox = this.getBBox();
          rx = bbox.x + bbox.width / 2;
          ry = bbox.y + bbox.height / 2;
          return 'rotate(180 ' + rx + ' ' + ry + ')';
        } else {
          return 'rotate(0)';
        }
      });

      path.attr("d", function (d) {
        return "M" +
          d.source.x + "," +
          d.source.y + "L" +
          (d.target.x) + "," +
          (d.target.y)
      });

    }
  });

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}