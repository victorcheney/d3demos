let height = 500
let width = 965
let margin = { top: 0, right: 0, bottom: 10, left: 0 }

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

const projection = d3.geoNaturalEarth1()
const pathGenerator = d3.geoPath().projection(projection)

const g = svg.append('g')

// 背景
g.append('path')
  .attr('class', 'sphere')
  .attr('d', pathGenerator({ type: 'Sphere' }))

// 缩放
svg.call(
  d3.zoom().on('zoom', () => {
    g.attr('transform', d3.event.transform)
  })
)

d3.json('./countries-110m.json').then(data => {
  const countries = topojson.feature(data, data.objects.countries)

  let taiwanFeatures = countries.features.filter(d => {
    return d.properties.name === 'Taiwan'
  })

  countries.features = countries.features.filter(d => {
    return d.properties.name !== 'Taiwan'
  })

  countries.features = countries.features.map(d => {
    if (d.properties.name === 'China') {
      d.geometry.coordinates.push(taiwanFeatures[0].geometry.coordinates)
    }
    return d
  })

  const paths = g
    .selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', pathGenerator)
    .append('title')
    .text(d => d.properties.name)
})
