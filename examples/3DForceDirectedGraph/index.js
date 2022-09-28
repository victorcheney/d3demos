const elem = document.getElementById('chart')

const Graph = ForceGraph3D()(elem)
  .jsonUrl('./blocks.json')
  .nodeAutoColorBy('user')
  .nodeLabel((node) => `${node.user}: ${node.description}`)
  .onNodeClick((node) =>
    window.open(`https://bl.ocks.org/${node.user}/${node.id}`, '_blank')
  )
