let height = 500
let width = 900

let margin = {
  top: 20,
  right: 30,
  bottom: 30,
  left: 40,
}

var svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

const circle = { x: width / 2, y: height / 2, r: 70 }
let point = { x: width / 2 + 100, y: height / 2 - 100, r: 5 }

svg
  .append('circle')
  .attr('cx', circle.x)
  .attr('cy', circle.y)
  .attr('r', circle.r)
  .attr('stroke', '#8fac4a')
  .attr('fill', 'none')

svg
  .append('circle')
  .attr('cx', circle.x)
  .attr('cy', circle.y)
  .attr('r', 5)
  .attr('fill', '#fff')

let line = svg
  .append('line')
  .attr('stroke', '#8fac4a')
  .attr('x1', circle.x)
  .attr('y1', circle.y)
  .attr('x2', point.x)
  .attr('y2', point.y)

let pointSelect = svg
  .append('circle')
  .attr('r', 5)
  .attr('cx', point.x)
  .attr('cy', point.y)
  .attr('fill', 'green')

let closestPoint = closestPointOnCircleEdge(circle, point, circle.r)

let closestPSelect = svg
  .append('circle')
  .attr('cx', closestPoint.x)
  .attr('cy', closestPoint.y)
  .attr('r', 5)
  .attr('fill', 'red')

function update() {
  pointSelect.attr('cx', point.x).attr('cy', point.y)
  line
    .attr('x1', circle.x)
    .attr('y1', circle.y)
    .attr('x2', point.x)
    .attr('y2', point.y)
  closestPoint = closestPointOnCircleEdge(circle, point, circle.r)
  closestPSelect.attr('cx', closestPoint.x).attr('cy', closestPoint.y)
}

let xx = 0
let dist = circle.r + 10
let dcr = false
function ticked() {
  point.x = circle.x + dist * Math.sin(xx)
  point.y = circle.y + dist * Math.cos(xx)
  update()
  xx += 0.03
  if (dist >= 200) {
    dcr = true
  }
  if (dist < 10) {
    dcr = false
  }

  dcr ? (dist -= 1) : (dist += 1)
}
setInterval(ticked, 20)

function closestPointOnCircleEdge(A, B, r) {
  const a1 = B.x - A.x
  const b1 = (B.x - A.x) ** 2 + (B.y - A.y) ** 2

  let x = A.x + r * (a1 / Math.sqrt(b1))

  const a2 = B.y - A.y
  const b2 = (B.x - A.x) ** 2 + (B.y - A.y) ** 2

  let y = A.y + r * (a2 / Math.sqrt(b2))

  const C = { x, y }

  return C
}
