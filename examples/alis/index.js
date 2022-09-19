let container = d3.select('#chart'),
  w = document.documentElement.clientWidth,
  h = document.documentElement.clientHeight,
  // size = Math.min(1400, Math.max(w, h)),
  size = 1000, //Math.min(1400, Math.max(w, h)),
  alisVisual = createAlisVisual()
    .width(size)
    .height(size)
    .clickFunction(callOnClick)
container.call(alisVisual)
const parse_date = d3.utcParse('%Y-%m-%d %H:%M:%S.%L UTC'),
  parse_date_no_ms = d3.utcParse('%Y-%m-%d %H:%M:%S UTC')
let nodes,
  filtered_nodes,
  links,
  time_frame,
  time_frame_format,
  font = new FontFaceObserver('Nunito', {
    weight: 400,
  }),
  promises = []
promises.push(font.load())
const timeFormat = d3.timeFormat('%H:%M – %b %-d')

function initChart(e) {
  links = generateLinks((nodes = e))
  nodes.forEach((e) => {
    e.time_created = parse_date(e.created)
    null === e.time_created && (e.time_created = parse_date_no_ms(e.created))
    e.time_updated = parse_date(e.updated)
    null === e.time_updated && (e.time_updated = parse_date_no_ms(e.updated))
  })
  time_frame = getTimeFrame(nodes)
  time_frame_format = [timeFormat(time_frame[0]), timeFormat(time_frame[1])]
  alisVisual.createChart(nodes, links, time_frame_format)
}

function updateChart(e) {
  links = generateLinks((nodes = e))
  nodes.forEach((e) => {
    e.time_created = parse_date(e.created)
    null === e.time_created && (e.time_created = parse_date_no_ms(e.created))
    e.time_updated = parse_date(e.updated)
    null === e.time_updated && (e.time_updated = parse_date_no_ms(e.updated))
  })
  time_frame = getTimeFrame(nodes)
  time_frame_format = [timeFormat(time_frame[0]), timeFormat(time_frame[1])]
  alisVisual.updateChart(nodes, links, time_frame_format, !0, !0)
}

function callOnClick(e) {
  console.log(e)
}
/* var socket = io()
socket.on('connect', function() {
  console.log('Connected to server!')
  // var e = location.pathname.split('/').filter(e => '' !== e)
  var e = 'public.os.alis.fund'.split('/').filter(e => '' !== e)

  socket.emit(
    'join',
    {
      domain: e[0] ? e[0] : 'all',
      limit: e[1] ? e[1] : 777
    },
    function(e) {
      e ? (alert(e), (window.location.href = '/')) : console.log('Joined')
    }
  )
}),
  socket.on('change', function(e) {
    updateChart(e)
  }),
  socket.on('init', function(e) {
    initChart(e)
  }) */

d3.json('data.json').then(function (data) {
  initChart(data[1])
})

let current_width = window.innerWidth

function generateLinks(e) {
  return e
    .filter(function (e) {
      return null !== e.parentId
    })
    .map(function (e) {
      return {
        source: e.parentId,
        target: e.id,
      }
    })
}

function getTimeFrame(e) {
  var t, i
  return (
    (t = d3.min(e, function (e) {
      return Math.min(e.time_created.getTime(), e.time_updated.getTime())
    })),
    (i = d3.max(e, function (e) {
      return Math.max(e.time_created.getTime(), e.time_updated.getTime())
    })),
    [(t = new Date(t)), (i = new Date(i))]
  )
}
d3.select(window).on('resize', function () {
  window.innerWidth !== current_width &&
    ((current_width = window.innerWidth),
    (w = document.documentElement.clientWidth),
    (h = document.documentElement.clientHeight),
    (size = Math.min(1000, Math.max(w, h))),
    alisVisual.width(size).height(size).resize())
})
