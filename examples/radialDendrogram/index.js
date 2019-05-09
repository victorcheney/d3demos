// 放射状树
let width = 900, radius = width / 2;

const tree = d3.cluster().size([2 * Math.PI, radius - 100])

const zoom = d3.zoom()
  .scaleExtent([.5, 4])
  .on('zoom', () => {
    d3.select('#chart svg > g').attr("transform", d3.event.transform);
  })


function initChart(data) {
  const root = tree(d3.hierarchy(data))
    .sort((a, b) => (a.height - b.height) || a.data.name.localeCompare(b.data.name))

  const svg = d3.select('#chart').append('svg')
    .style('width', width)
    .style('height', width)
    .style('padding', '10px')
    .style('box-sizing', 'border-box')
    .attr('viewBox', [-width/2, -width/2, width, width])
    .call(zoom)

  const g = svg.append('g')
    // .attr('transform', `translate(${width/2}, ${width/2})`)

  const link = g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#D0A342')
      .attr('stroke-opacity', '0.4')
      // .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(root.links())
    .enter().append('path')
      .attr('d', d3.linkRadial()
          .angle(d => d.x)
          .radius(d => d.y)
      )

    const node = g.append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
    .selectAll('g')
    .data(root.descendants().reverse())
    .enter().append('g')
      .attr('transform', d => `
        rotate(${d.x * 180 / Math.PI - 90})
        translate(${d.y},0)
      `);

    node.append('circle')
      .attr('fill', d => d.children ? '#D0A342' : '#999')
      .attr('r', 7);
  
    node.append('text')
        .attr('dy', '0.31em')
        .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
        .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
        .text(d => d.data.name)
        .attr('fill', '#555')
      .filter(d => d.children)
      .clone(true).lower()
        // .attr('stroke', 'white');

    return svg.node()
  
}

d3.json('data.json').then(data => {
  initChart(data)
})