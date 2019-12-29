function createAlisVisual() {
  let t = 2
  const e = 2 * Math.PI,
    PI = Math.PI,
    n = Math.PI / 2
  let r, l, o, s, d, c, p, u, h, g, f, y, x, v, _, w
  const b = 'white',
    k = 'black',
    E = 'rgb(207,0,0)',
    C = 'rgb(180,180,180)',
    S = '#009AD2'
  let M,
    A,
    P,
    L,
    B,
    O,
    T,
    colorRange = [k, E, S, b, k, b, E, k],
    R = ['de', 'os', 'fe', 'ml', 'prediction', 'pt', 'tasks', 'td'],
    D = {},
    N = {},
    U = {},
    margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    width = 100,
    height = 100,
    G = width + margin.left + margin.right,
    z = height + margin.top + margin.bottom
  const $ = d3.arc(),
    H = d3.arc()
  let Y,
    q,
    j,
    V,
    X,
    K,
    Q,
    Z = null,
    tt = [],
    et = 2,
    at = 30,
    nt = 'Nunito'
  const rt = d3.utcParse('%Y-%m-%d %H:%M:%S.%L UTC'),
    lt = d3.utcParse('%Y-%m-%d %H:%M:%S UTC')
  let it
  const ot = d3
    .stratify()
    .id(t => t.id)
    .parentId(t => t.parentId)
  let st = null,
    dt = function(t) {},
    ct = function() {},
    pt = function(t) {},
    ut = !1,
    ht = !1,
    mt = null,
    gt = null,
    ft = null,
    yt = null
  const randomUniform = d3.randomUniform(0.8, 2)
  lineRadial = d3
    .lineRadial()
    .angle(t => t.angle + n)
    .radius(t => t.radius)
    .curve(d3.curveBasis)
  _t = d3.scaleLinear()
  wt = d3
    .scaleLinear()
    .domain([0, 0.15 * PI])
    .range([0, 0.02 * PI])
    .clamp(!0)
  scaleSqrt = d3
    .scaleSqrt()
    .domain([0, 1, 70])
    .range([1.5, 1.5, 20])
    .clamp(!0)
  scaleOrdinal = d3
    .scaleOrdinal()
    .domain([
      'COMPLETED',
      'FAILED',
      'UMUNTU',
      'PENDING',
      'COMPLETE',
      'RUNNING',
      'FAILURE',
      'SUCCESS'
    ])
    .range(colorRange)
    .unknown('white')
  scalePow = d3.scalePow().exponent(0.6)
  Ct = d3
    .scaleLinear()
    .domain([20, 500, 1e3])
    .range([175, 250, 300])
    .clamp(!0)
  St = d3
    .scaleLinear()
    .domain([20, 500, 1e3])
    .range([1, 1.1, 1.1])
    .clamp(!0)
  Mt = d3
    .scaleLinear()
    .domain([50, 900])
    .range([50, 1500])
    .clamp(!0)

  function At(t) {
    p = t
      .append('canvas')
      .attr('id', 'canvas-background')
      .style('pointer-events', 'none')
    u = p.node().getContext('2d')
    r = t
      .append('canvas')
      .attr('id', 'canvas-links')
      .style('pointer-events', 'none')
      .style('opacity', 1)
    l = r.node().getContext('2d')
    o = t
      .append('canvas')
      .attr('id', 'canvas-nodes')
      .style('pointer-events', 'all')
      .on('mousemove', It)
      .on('click', Ot)
    s = o.node().getContext('2d')
    d = t
      .append('canvas')
      .attr('id', 'canvas-hover')
      .style('pointer-events', 'none')
    c = d.node().getContext('2d')
    h = t
      .append('svg')
      .attr('id', 'svg-hover')
      .style('pointer-events', 'none')
    g = h.append('g')
    y = g
      .append('g')
      .attr('id', 'center-text-group')
      .style('opacity', 0)
    x = y.append('g').attr('id', 'title-timeframe-group')
    v = y.append('g').attr('id', 'title-services-group')
    _ = y
      .append('g')
      .attr('id', 'title-domain-group')
      .style('display', 'none')
    w = y
      .append('g')
      .attr('id', 'title-node-group')
      .style('opacity', 0)
    ;(function() {
      x.attr('transform', 'translate(0,-85)')
      x.append('text')
        .attr('class', 'center-text center-text-small')
        .attr('id', 'time-frame-min')
        .attr('dy', '0.35em')
      x.append('text')
        .attr('class', 'center-text center-text-small')
        .attr('id', 'time-frame-dash')
        .attr('dy', '1.5em')
        .style('letter-spacing', '-0.1em')
        .style('fill', 'rgb(120,120,120)')
        .style('font-weight', 700)
        .text('–––––––')
      x.append('text')
        .attr('class', 'center-text center-text-small')
        .attr('id', 'time-frame-max')
        .attr('dy', '2.75em')
      v.attr('transform', 'translate(' + [-20, 8] + ')')
      v.append('text')
        .attr('class', 'center-text center-text-big')
        .attr('id', 'node-title')
        .attr('x', 20)
        .attr('y', -23)
        .attr('dy', '0.35em')
        .text('Services')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('id', 'node-completed')
        .attr('dy', '0.5em')
        .attr('x', '-0.2em')
        .style('fill', 'rgb(220,220,220)')
        .style('text-anchor', 'end')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('dy', '0.5em')
        .style('fill', 'rgb(220,220,220)')
        .style('text-anchor', 'start')
        .text(' | completed')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('id', 'node-running')
        .attr('x', '-0.2em')
        .attr('dy', '2.1em')
        .style('text-anchor', 'end')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('dy', '2.1em')
        .style('text-anchor', 'start')
        .text(' | running')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('id', 'node-umuntu')
        .attr('x', '-0.2em')
        .attr('dy', '3.7em')
        .style('fill', S)
        .style('font-weight', 700)
        .style('text-anchor', 'end')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('dy', '3.7em')
        .style('fill', S)
        .style('font-weight', 700)
        .style('text-anchor', 'start')
        .text(' | umuntu')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('id', 'node-failed')
        .attr('x', '-0.2em')
        .attr('dy', '5.3em')
        .style('fill', chroma(E).brighten(0.5))
        .style('font-weight', 700)
        .style('text-anchor', 'end')
      v.append('text')
        .attr('class', 'center-text center-text-services')
        .attr('dy', '5.3em')
        .style('fill', chroma(E).brighten(0.5))
        .style('font-weight', 700)
        .style('text-anchor', 'start')
        .text(' | failed')
      w.append('text')
        .attr('class', 'center-text-small')
        .attr('y', -95)
        .attr('dy', '0.35em')
        .style('font-weight', 400)
        .style('fill', 'rgb(180,180,180)')
        .text('Created on')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-creation')
        .attr('y', -95)
        .attr('dy', '1.9em')
        .style('font-weight', 700)
      w.append('text')
        .attr('class', 'center-text-small')
        .attr('y', -45)
        .attr('dy', '0.35em')
        .style('font-weight', 400)
        .style('fill', 'rgb(180,180,180)')
        .text('Time between creation & last update')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-duration')
        .attr('y', -45)
        .attr('dy', '1.9em')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-id-domain')
        .attr('y', 20)
        .attr('dy', '-0.35em')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-id-number')
        .attr('y', 20)
        .attr('dy', '1.05em')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-state')
        .attr('y', 20)
        .attr('dy', '3.5em')
        .style('font-weight', 700)
        .style('font-size', '12px')
      w.append('text')
        .attr('class', 'center-text')
        .attr('id', 'node-dash')
        .attr('y', 20)
        .attr('dy', '4.6em')
        .style('fill', 'rgb(160,160,160)')
        .style('letter-spacing', '-0.1em')
        .text('––––––––')
      w.append('text')
        .attr('class', 'center-text-small')
        .attr('id', 'node-domain')
        .attr('y', 20)
        .attr('dy', '6.8em')
        .style('letter-spacing', '0.2em')
      _.attr('transform', 'translate(-80,0)')
        .style('pointer-events', 'all')
        .style('cursor', 'pointer')
        .on('click', () => {
          o.on('mousemove', null), At.filterDomain('reset')
        })
      _.append('rect')
        .attr('id', 'domain-reset-rect')
        .attr('x', -20.5)
        .attr('y', -17.5)
        .attr('width', 41)
        .attr('height', 35)
        .style('fill', 'black')
      _.append('path')
        .attr('id', 'domain-reset-line')
        .attr('d', 'M' + [20.5, -30] + ' L' + [20.5, 30])
        .style('stroke', 'white')
        .style('stroke-width', 1)
      _.append('text')
        .attr('class', 'center-text-small')
        .attr('id', 'domain-reset')
        .attr('dy', '0.35em')
        .style('letter-spacing', '0.1em')
        .style('font-weight', 700)
        .style('pointer-events', 'none')
        .text('reset')
    })()
    f = g.append('g').attr('class', 'domain-hover-group')
    it = d3
      .forceSimulation()
      .force(
        'collide',
        d3
          .forceCollide()
          .radius(t => t.r + Math.max(2, Math.min(0.2 * t.r, 4)))
          .strength(0.7)
      )
      .force(
        'x',
        d3
          .forceX()
          .x(t => t.x)
          .strength(0.1)
      )
      .force(
        'y',
        d3
          .forceY()
          .y(t => t.y)
          .strength(0.1)
      )
  }

  function Pt() {
    scaleSqrt.range([1.5, 1.5, 20]),
      (Y = Ct(L)),
      (q = 200 * St(L)),
      scalePow.range([Y, Y + q]),
      scalePow(et + 1) - scalePow(et) > 50 &&
        ((q = 40 * (Q - et) * St(L)), scalePow.range([Y, Y + q])),
      $.innerRadius(Y - 50)
        .outerRadius(Y - 47)
        .cornerRadius(2),
      H.innerRadius(Y - 75).outerRadius(Y - 40),
      (function() {
        P.forEach(t => (t.r = scaleSqrt(t.degree))),
          (j = d3.sum(P, t => 2 * t.r + 1)),
          (j += (V = 0.015 * j) * X)
        let t = -n,
          PI = P[0].domain
        P.forEach((n, r) => {
          PI !== n.domain && (t += (e / j) * V)
          let l = (e / j) * (2 * n.r + 1)
          ;(n.angle = t + l / 2),
            (n.radius = scalePow(n.depth)),
            L > 120 && (n.radius += 1.1 * (n.r < 5 && r % 2 == 0 ? 1 : -1)),
            (n.x = n.radius * Math.cos(n.angle)),
            (n.y = n.radius * Math.sin(n.angle)),
            (t += l),
            (PI = n.domain)
        })
      })(),
      (function() {
        let t = Math.min((0.01 * e) / X, 0.01 * e)
        if (((tt = []), X > 1))
          K.forEach((PI, r) => {
            let l = P.filter(t => t.domain === PI),
              i = d3.extent(l, t => t.angle)
            tt.push({
              domain: PI,
              value: d3.sum(l, t => t.r + 1),
              startAngle: i[0] + n - t,
              endAngle: i[1] + n + t,
              centerAngle: (i[0] + i[1]) / 2 + n,
              centerPaddingAngle: i[0] - ((e / j) * V) / 2,
              index: r,
              max_depth: d3.max(l, t => t.depth)
            })
          })
        else {
          let t = K[0]
          tt.push({
            domain: t,
            value: d3.sum(P, t => t.r + 1),
            startAngle: 0,
            endAngle: e,
            centerAngle: PI,
            centerPaddingAngle: 0,
            index: 0,
            max_depth: d3.max(P, t => t.depth)
          })
        }
      })(),
      (function() {
        it.nodes(P).stop()
        for (let t = 0; t < 50; ++t) it.tick()
        P.forEach(t => {
          ;(t.radius = Math.sqrt(qt(t.x) + qt(t.y))),
            (t.angle = Math.atan(t.y / t.x)),
            t.x < 0 && (t.angle += PI)
        })
      })(),
      B.forEach(t =>
        (function(t) {
          for (
            t.pos_pure = (function(t) {
              let n = [],
                r = t.source.angle,
                l = t.source.radius,
                i = t.target.angle,
                o = t.target.radius,
                s = (l + o) / 2,
                d = o - l
              _t
                .range([s + 0.2 * d, s - 0.2 * d])
                .domain([-1, t.source.num_children]),
                i - r < -PI
                  ? ((t.rotation = 'cw'),
                    (t.total_angle = e + (i - r)),
                    (t.angle_sign = 1))
                  : i - r < 0
                  ? ((t.rotation = 'ccw'),
                    (t.total_angle = r - i),
                    (t.angle_sign = -1))
                  : i - r < PI
                  ? ((t.rotation = 'cw'),
                    (t.total_angle = i - r),
                    (t.angle_sign = 1))
                  : ((t.rotation = 'ccw'),
                    (t.total_angle = e - (i - r)),
                    (t.angle_sign = -1))
              let c,
                p = _t(t.target.child_id),
                u = r + t.angle_sign * wt(t.total_angle),
                h = p,
                m = i - t.angle_sign * wt(t.total_angle),
                g = p
              i - r < -PI
                ? (c = e + (m - u))
                : i - r < 0
                ? (c = u - m)
                : i - r < PI
                ? (c = m - u)
                : i - r < e && (c = e - (m - u)),
                y(r, l),
                y(u, h)
              const f = Math.abs(Math.floor(c / 0.07)) - 1
              if (f >= 1) {
                let PI = u,
                  n = 'cw' === t.rotation ? 1 : -1
                for (let t = 0; t < f; t++) y((PI += (0.07 * n) % e), p)
              }

              function y(t, e) {
                n.push({
                  angle: t,
                  radius: e,
                  x: e * Math.cos(t),
                  y: e * Math.sin(t)
                })
              }
              return y(m, g), y(i, o), n
            })(t),
              t.paths = [],
              i = 0;
            i < 8;
            i++
          ) {
            let e = JSON.parse(JSON.stringify(t.pos_pure))
            Bt(e, randomUniform()), t.paths.push(e)
          }
        })(t)
      ),
      ct(),
      ut
        ? (function() {
            gt && gt.stop()
            ft && clearTimeout(ft)
            yt && clearTimeout(yt)
            ;(ht = !1), ct()
            const t = d3.easeCubic
            P.forEach(t => {
              ;(t.tx = t.x),
                (t.ty = t.y),
                (t.t_angle = t.angle),
                (t.t_radius = t.radius),
                (t.interpolate_opacity = d3.interpolate(t.s_opacity, 1)),
                (t.reveal_counter = 0)
            })
            d3
              .selectAll('#canvas-links, #canvas-background')
              .transition('fade')
              .duration(250)
              .style('opacity', 0)
              .on('end', () => {
                Yt([l, u])
              }),
              y
                .transition('fade')
                .duration(250)
                .style('opacity', 0)
                .on('end', () => {
                  d3
                    .selectAll('#title-timeframe-group, #title-services-group')
                    .style('opacity', 1),
                    w.style('opacity', 0),
                    _.style('display', 'none'),
                    zt(),
                    $t()
                }),
              st &&
                (o
                  .transition('fade')
                  .duration(150)
                  .style('opacity', 1),
                d
                  .transition('fade')
                  .duration(150)
                  .style('opacity', 0))
            ft = setTimeout(() => {
              mt = d3.timer(e => {
                const PI = t(Math.min(1, e / 500))
                if (
                  (P.forEach(t => {
                    null !== t.sx
                      ? ((t.x = t.sx * (1 - PI) + t.tx * PI),
                        (t.y = t.sy * (1 - PI) + t.ty * PI),
                        (t.radius = t.s_radius * (1 - PI) + t.t_radius * PI),
                        (t.angle = t.s_angle * (1 - PI) + t.t_angle * PI))
                      : (t.opacity = t.interpolate_opacity(PI))
                  }),
                  Nt(),
                  e >= 500)
                ) {
                  mt.stop(),
                    (ut = !1),
                    Rt(),
                    Dt(),
                    Z && _.style('display', null)
                  let t = Mt(L)
                  d3
                    .selectAll(
                      '#canvas-links, #canvas-background, #center-text-group'
                    )
                    .transition('fade')
                    .duration(350)
                    .delay(t)
                    .style('opacity', 1),
                    (yt = setTimeout(() => {
                      o.on('mousemove', It), Gt(), (ht = !0)
                      let t = 0
                      gt = d3.interval(() => {
                        Nt(), (t += 1) >= 10 && (gt.stop(), (ht = !1))
                      }, 100)
                    }, t + 100))
                }
              })
            }, 250)
          })()
        : (zt(), $t(), y.style('opacity', 1), Rt(), Dt(), Nt(), Gt())
  }

  function Lt(t, e) {
    ;(P = (function(t) {
      return (
        (U = {}),
        t.forEach(t => {
          ;(t.percentageComplete = +t.percentageComplete),
            (t.time_updated = rt(t.updated)),
            (t.time_created = rt(t.created)),
            null === t.time_updated && (t.time_updated = lt(t.updated)),
            null === t.time_created && (t.time_created = lt(t.created)),
            (t.duration = (t.time_updated - t.time_created) / 1e3 / 60),
            (U[t.id] = t)
        }),
        (t = t.sort((t, e) =>
          t.domain > e.domain
            ? 1
            : t.domain < e.domain
            ? -1
            : t.time_created > e.time_created
            ? 1
            : t.time_created < e.time_created
            ? -1
            : 0
        )).forEach(t => {
          let e = U[t.parentId]
          '' === t.parentId || e || (t.parentId = ''),
            '' === t.parentId && (t.parentId = t.domain)
        }),
        t
      )
    })(JSON.parse(JSON.stringify(t)))),
      (L = P.length),
      (K = [...new Set(P.map(t => t.domain))]),
      (X = K.length),
      (B = (B = JSON.parse(JSON.stringify(e))).filter(
        t => U[t.source] && U[t.target]
      )),
      P.forEach(t => {
        ;(t.degree = B.filter(e => e.source == t.id).length),
          (t.opacity = 1),
          (t.reveal_counter = 10)
      }),
      K.forEach(t => {
        P.push({
          id: t,
          parentId: 'alis',
          domain: t
        })
      }),
      P.push({
        id: 'alis',
        parentId: null
      }),
      ot(P).each(t => {
        let e = U[t.id]
        if (e) {
          ;(e.depth = t.depth),
            (e.num_children = t.children ? t.children.length : 0),
            t.children &&
              t.children.forEach((t, e) => {
                let PI = U[t.id]
                PI.child_id = e
              })
          let PI = t.parent
          if (K.indexOf(PI.data.id) < 0) {
            for (; K.indexOf(PI.data.parentId) < 0; ) PI = PI.parent
            e.parent_group = PI.data.id
          } else e.parent_group = t.data.id
        }
      }),
      P.splice(-(K.length + 1)),
      (O = d3.extent(P, t => t.depth)),
      (Q = O[1]),
      scalePow.domain(O)
    let PI = P.filter(
      t =>
        'COMPLETED' === t.state ||
        'COMPLETE' === t.state ||
        'SUCCESS' === t.state
    ).map(t => t.duration)
    PI.length > 0 &&
      ((at = Math.max(3, d3.mean(PI) + 2 * d3.deviation(PI))),
      (at = Math.min(at, 30))),
      (N = {}),
      (D = {}),
      B.forEach(t => {
        ;(t.id = t.source + ',' + t.target),
          (D[t.id] = !0),
          N[t.source] || (N[t.source] = []),
          N[t.target] || (N[t.target] = []),
          N[t.source].push(U[t.target]),
          N[t.target].push(U[t.source]),
          (t.source = U[t.source]),
          (t.target = U[t.target]),
          (t.color = C),
          (t.opacity = 0.1),
          (t.stand_out = !1),
          scaleOrdinal(t.target.state) === E &&
            ((t.opacity = 0.15), (t.color = E), (t.stand_out = !0))
      })
  }

  function Bt(t, PI) {
    for (let n = 1; n < t.length - 1; n++) {
      let r = t[n]
      ;(r.radius = r.radius + PI * (Math.random() > 0.5 ? 1 : -1)),
        (r.angle = r.angle + (PI * (Math.random() > 0.5 ? 1 : -1)) / (80 * e))
    }
  }

  function Ot() {
    d3.event
      ? (d3.event.stopPropagation(), (m = d3.mouse(this)))
      : (current_click = null)
    let t = Tt(m)
    pt(t)
  }

  function Tt(t) {
    let e = !1,
      PI = null
    for (let n = 0; n < P.length; n++) {
      if (P[n].r < 25) continue
      let r = P[n].x - t[0],
        l = P[n].y - t[1]
      if (qt(r) + qt(l) < qt(P[n].r)) {
        ;(e = !0), (PI = P[n])
        break
      }
    }
    return e || (PI = it.find(t[0] - width / 2, t[1] - height / 2, 25)), PI
  }

  function It() {
    d3.event ? (d3.event.stopPropagation(), (m = d3.mouse(this))) : (st = null)
    let t = Tt(m)
    ;(t && st === t) ||
      (t
        ? (!(function(t) {
            d3
              .selectAll('#canvas-background, #canvas-links, #canvas-nodes')
              .interrupt('fade')
              .style('opacity', 0.2),
              d.interrupt('fade').style('opacity', 1)
            let PI = t.parent_group
            if ((dt(t), null === st || t !== st)) {
              ;(c.globalAlpha = 1),
                Yt([c]),
                (function(t) {
                  const e = d3.timeFormat('%H:%M - %B %-d')
                  w.select('#node-creation').text(e(t.time_created)),
                    w.select('#node-duration').text(
                      (function(t, e) {
                        let PI = Math.pow(10, e)
                        return (
                          (t = parseFloat((t * PI).toFixed(11))),
                          Math.round(t) / PI
                        )
                      })(t.duration, 2) + ' mins'
                    ),
                    scaleOrdinal(t.state) === b && t.duration > at
                      ? w
                          .select('#node-duration')
                          .style('fill', chroma(E).brighten(0.5))
                          .style('font-weight', 700)
                      : w
                          .select('#node-duration')
                          .style('fill', null)
                          .style('font-weight', null)
                  w.select('#node-domain').text(t.domain.toUpperCase()),
                    w
                      .select('#node-id-domain')
                      .text(t.service + ' | ' + t.version),
                    w
                      .select('#node-id-number')
                      .text(t.id.match(/\d+(?=\D*$)/, ''))
                  let PI = scaleOrdinal(t.state)
                  'black' === PI
                    ? (PI = 'rgb(220,220,220)')
                    : PI === E && (PI = chroma(PI).brighten(0.5))
                  w.select('#node-state')
                    .style('fill', PI)
                    .text(t.state.toLowerCase())
                })(t),
                d3
                  .selectAll(
                    '#title-timeframe-group, #title-services-group, #title-domain-group'
                  )
                  .interrupt('fade')
                  .style('opacity', 0),
                w.interrupt('fade').style('opacity', 1),
                _.style('display', 'none')
              let n = [
                ...new Set(
                  P.filter(t => t.parent_group === PI).map(t => t.domain)
                )
              ]
              Jt(c, n),
                (c.shadowBlur = 0),
                lineRadial.context(c),
                B.filter(
                  t =>
                    t.source.parent_group === PI && t.target.parent_group === PI
                ).forEach(e => {
                  e.source.id !== t.id &&
                    e.target.id !== t.id &&
                    Ut(c, e, !0, 0.5, 1)
                }),
                B.filter(
                  e => e.source.id === t.id || e.target.id === t.id
                ).forEach(t => {
                  Ut(c, t, !0, 1, 1.75, t.color === E ? t.color : 'white')
                }),
                (c.globalCompositeOperation = 'source-over'),
                (c.shadowBlur = 0),
                (c.lineWidth = 2),
                P.filter(t => t.parent_group === PI).forEach(t => {
                  Wt(c, t)
                }),
                (c.shadowBlur = 0),
                (c.lineWidth = 3),
                c.setLineDash([0, 5]),
                P.filter(t => t.parent_group === PI).forEach(t => {
                  Ft(c, t)
                }),
                c.setLineDash([])
              let r = 'white'
              scaleOrdinal(t.state) === b && t.duration > at && (r = E),
                (c.strokeStyle = c.shadowColor = r),
                (c.shadowBlur = 20),
                (c.lineWidth = r === E ? 3 : 2)
              let l = Math.max(1.4 * t.r, t.r + 7)
              c.beginPath(), c.arc(t.x, t.y, l, 0, e), c.stroke()
            }
          })(t),
          (st = t))
        : null !== st &&
          ((st = null),
          (function() {
            ct(),
              $t(),
              d3
                .selectAll(
                  '#title-timeframe-group, #title-services-group, #title-domain-group'
                )
                .transition('fade')
                .duration(300)
                .style('opacity', 1),
              w
                .transition('fade')
                .duration(300)
                .style('opacity', 0),
              Z && _.style('display', null)
            d3
              .selectAll('#canvas-background, #canvas-links, #canvas-nodes')
              .transition('fade')
              .duration(300)
              .style('opacity', 1),
              d
                .transition('fade')
                .duration(300)
                .style('opacity', 0)
          })()))
  }

  function Rt() {
    var t
    Yt([u]),
      (u.fillStyle = 'black'),
      u.fillRect(-margin.left - width / 2, -margin.top - height / 2, G, z),
      ((t = u).lineWidth = 1.5),
      (t.strokeStyle = 'rgba(255,255,255,0.2)'),
      (t.shadowBlur = 0),
      tt.forEach(e => {
        let PI = d3.range(2, e.max_depth + 1)
        PI.forEach(PI => {
          t.beginPath(),
            t.arc(0, 0, scalePow(PI), e.startAngle - n, e.endAngle - n),
            t.stroke()
        })
      }),
      Jt(u)
  }

  function Dt() {
    Yt([l]),
      (l.lineWidth = 1),
      lineRadial.context(l),
      B.forEach(t => {
        Ut(l, t)
      }),
      (l.globalCompositeOperation = 'source-over')
  }

  function Nt() {
    Yt([s]),
      (s.shadowBlur = 0),
      (s.shadowColor = 'black'),
      (s.lineWidth = 2),
      P.forEach(t => {
        Wt(s, t)
      }),
      (s.shadowBlur = 0),
      (s.lineWidth = 3),
      s.setLineDash([0, 5]),
      P.forEach(t => {
        Ft(s, t)
      }),
      s.setLineDash([])
  }

  function Ut(t, e, PI = !1, n, r = 0.7, l) {
    ;(n = n || e.opacity),
      e.stand_out
        ? ((t.lineWidth = 1), (t.globalCompositeOperation = 'screen'))
        : ((t.lineWidth = 0.7), (t.globalCompositeOperation = 'source-over')),
      PI
        ? (t.beginPath(),
          (t.strokeStyle = chroma(l || e.color)
            .alpha(n)
            .css()),
          (t.lineWidth = r),
          lineRadial(e.pos_pure),
          t.stroke())
        : ((t.strokeStyle = chroma(e.color)
            .alpha(n)
            .css()),
          e.paths.forEach(e => {
            t.beginPath(), lineRadial(e), t.stroke()
          }))
  }

  function Wt(t, PI) {
    let n = PI.radius * Math.cos(PI.angle),
      r = PI.radius * Math.sin(PI.angle)
    if (
      (ht && (PI.reveal_counter = PI.reveal_counter + 1),
      (t.shadowBlur = 0),
      t.beginPath(),
      t.moveTo(n + PI.r, r),
      t.arc(n, r, PI.r, 0, e),
      scaleOrdinal(PI.state) === k)
    )
      (t.shadowColor = chroma('rgb(220,220,220)')
        .alpha(PI.opacity)
        .css()),
        (t.strokeStyle = `rgba(225,225,225,${0.8 * PI.opacity})`),
        (t.fillStyle = chroma('black')
          .alpha(PI.opacity)
          .css()),
        t.stroke(),
        ut || (t.shadowBlur = PI.r + 2),
        t.fill()
    else {
      let e = scaleOrdinal(PI.state),
        l = chroma(e).brighten(1),
        o = chroma(e)
          .alpha(PI.opacity)
          .css()
      if (
        ((l = chroma(l)
          .alpha(PI.opacity)
          .css()),
        (t.fillStyle = t.strokeStyle = o),
        !ut || ht)
      ) {
        for (t.shadowColor = o, i = 0; i < PI.reveal_counter; i++)
          (t.shadowBlur = 80 - 8 * i),
            (t.globalAlpha = i * ('white' === e ? 0.075 : 0.1)),
            t.fill()
        ;(t.globalAlpha = 1), (t.shadowBlur = 0)
      }
      if (PI.r > 1 && e !== b && !ut) {
        let e = t.createRadialGradient(n, r, 0, n, r, 1 * PI.r)
        e.addColorStop(0, l), e.addColorStop(1, o), (t.fillStyle = e)
      }
      t.fill(), PI.r < 5 && t.stroke()
    }
  }

  function Ft(t, PI) {
    if (scaleOrdinal(PI.state) === b && PI.duration > at) {
      let n = PI.radius * Math.cos(PI.angle),
        r = PI.radius * Math.sin(PI.angle),
        l = Math.max(1.4 * PI.r, PI.r + 7)
      t.beginPath(),
        t.moveTo(n + l, r),
        t.arc(n, r, l, 0, e),
        (t.strokeStyle = chroma(E)
          .alpha(PI.opacity)
          .css()),
        t.stroke()
    }
  }

  function Jt(t, r) {
    ;(r = r || tt.map(t => t.domain)),
      (t.font = 'normal normal 400 9px ' + nt),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      (t.globalAlpha = 1),
      (t.strokeStyle = 'rgba(255,255,255,0.8)'),
      (t.lineWidth = 1.5),
      (t.shadowColor = 'white'),
      $.context(t),
      tt
        .filter(t => r.indexOf(t.domain) >= 0)
        .forEach(r => {
          t.fillStyle = 'rgba(255,255,255,0.5)'
          for (let e = 0; e < 10; e++)
            (t.shadowBlur = 8 * e),
              (t.globalAlpha = 1 - 0.1 * e),
              t.beginPath(),
              $(r),
              t.fill()
          ;(t.globalAlpha = 1), (t.fillStyle = 'rgba(255,255,255,1)')
          let l = r.centerAngle < n || r.centerAngle > e - n ? 'up' : 'down',
            i = $.innerRadius()() - 15
          !(function(t, e, n, r, l, i = 1, o = !1) {
            let s = 'up' === l ? n : n - PI
            'up' === l &&
              (e = e
                .split('')
                .reverse()
                .join(''))
            for (let PI = 0; PI < e.length; PI++) {
              let n = t.measureText(e[PI]).width
              s += (n + (PI === e.length - 1 ? 0 : i)) / r / 2
            }
            t.save(), t.rotate(s)
            for (let PI = 0; PI < e.length; PI++) {
              let n = t.measureText(e[PI]).width / 2
              t.rotate(-n / r),
                t.fillText(e[PI].toUpperCase(), 0, ('up' === l ? -1 : 1) * r),
                t.rotate(-(n + i) / r)
            }
            t.restore()
          })(t, r.domain, r.centerAngle, i, l, 3)
        })
  }

  function Gt() {
    var t
    f.selectAll('.domain-hover-arc')
      .data(tt)
      .enter()
      .append('path')
      .attr('class', 'domain-hover-arc')
      .style('fill', 'none')
      .style('cursor', 'pointer')
      .style('pointer-events', 'all')
      .attr('d', t => H(t))
      .on('click', t => {
        t.domain === Z
          ? (o.on('mousemove', null), At.filterDomain('reset'))
          : tt.length > 1 &&
            (o.on('mousemove', null), At.filterDomain(t.domain))
      })
      .on('mouseover', e => {
        !ut &&
          tt.length > 1 &&
          ((t = e.domain),
          Yt([c]),
          (c.globalAlpha = 1),
          d3
            .selectAll('#canvas-background, #canvas-links, #canvas-nodes')
            .interrupt('fade')
            .style('opacity', 0.2),
          d.interrupt('fade').style('opacity', 1),
          $t(t),
          Jt(c, t),
          (c.shadowBlur = 0),
          lineRadial.context(c),
          B.filter(e => e.source.domain === t && e.target.domain === t).forEach(
            t => {
              Ut(c, t, !0, 0.5, 1)
            }
          ),
          (c.globalCompositeOperation = 'source-over'),
          (c.shadowBlur = 0),
          (c.lineWidth = 2),
          P.filter(e => e.domain === t).forEach(t => {
            Wt(c, t)
          }),
          (c.shadowBlur = 0),
          (c.lineWidth = 3),
          c.setLineDash([0, 5]),
          P.filter(e => e.domain === t).forEach(t => {
            Ft(c, t)
          }),
          c.setLineDash([]),
          (st = e.domain))
      })
  }

  function zt() {
    x.select('#time-frame-min').text(T[0]),
      x.select('#time-frame-max').text(T[1])
  }

  function $t(t) {
    let e
    ;(e = t
      ? P.filter(e => e.domain === t).map(t => t.state)
      : P.map(t => t.state)),
      v
        .select('#node-completed')
        .text(
          e.filter(
            t => 'COMPLETE' === t || 'COMPLETED' === t || 'SUCCESS' === t
          ).length
        ),
      v
        .select('#node-running')
        .text(e.filter(t => 'PENDING' === t || 'RUNNING' === t).length),
      v.select('#node-umuntu').text(e.filter(t => 'UMUNTU' === t).length),
      v
        .select('#node-failed')
        .text(e.filter(t => 'FAILED' === t || 'FAILURE' === t).length)
  }

  function Ht(t, e, PI) {
    t
      .attr('width', PI * G)
      .attr('height', PI * z)
      .style('width', `${G}px`)
      .style('height', `${z}px`),
      e.scale(PI, PI),
      e.translate(margin.left + width / 2, margin.top + height / 2)
  }

  function Yt(t) {
    t.forEach(t => {
      t.clearRect(-margin.left - width / 2, -margin.top - height / 2, G, z)
    })
  }

  function qt(t) {
    return t * t
  }
  return (
    (At.createChart = (nodes, links, time_frame_format) => {
      ;(M = nodes),
        (A = links),
        (T = time_frame_format),
        Lt(nodes, links),
        At.resize()
    }),
    (At.updateChart = (t, e, PI, n = !0, r = !1) => {
      mt && mt.stop(),
        o.on('mousemove', null),
        f.selectAll('.domain-hover-arc').remove(),
        t.forEach(t => {
          let e = U[t.id]
          e
            ? ((t.sx = e.x),
              (t.sy = e.y),
              (t.s_angle = e.angle),
              (t.s_radius = e.radius),
              (t.s_opacity = 1))
            : ((t.sx = null),
              (t.sy = null),
              (t.s_angle = null),
              (t.s_radius = null),
              (t.s_opacity = 0))
        }),
        n && ((M = t), (A = e), (T = PI), (Z = r ? Z : null)),
        (ut = !0),
        r && Z && (t = t.filter(t => t.domain === Z)),
        Lt(t, e),
        Pt()
    }),
    (At.filterDomain = t => {
      f.selectAll('.domain-hover-arc').remove(),
        'reset' === t
          ? ((ut = !0), (Z = null), At.updateChart(M, A, T, !1))
          : R.indexOf(t) < 0
          ? console.log('unknown domain name')
          : ((ut = !0),
            (Z = t),
            At.updateChart(
              M.filter(e => e.domain === t),
              A,
              T,
              !1
            ))
    }),
    (At.resize = () => {
      ;(G = width + margin.left + margin.right),
        (z = height + margin.top + margin.bottom),
        (t = Math.min(
          2,
          (function(t) {
            let e = window.devicePixelRatio || 1,
              PI =
                t.webkitBackingStorePixelRatio ||
                t.mozBackingStorePixelRatio ||
                t.msBackingStorePixelRatio ||
                t.oBackingStorePixelRatio ||
                t.backingStorePixelRatio ||
                1
            return e / PI
          })(u)
        )),
        Ht(p, u, t),
        Ht(r, l, t),
        Ht(o, s, t),
        Ht(d, c, t),
        h.attr('width', G).attr('height', z),
        g.attr(
          'transform',
          'translate(' +
            [margin.left + width / 2, margin.top + height / 2] +
            ')'
        ),
        (u.lineCap = 'round'),
        (l.lineCap = 'round'),
        (s.lineCap = 'round'),
        (c.lineCap = 'round'),
        (s.lineWidth = 2),
        Pt()
    }),
    (At.width = function(t) {
      return arguments.length ? ((width = t), At) : width
    }),
    (At.height = function(t) {
      return arguments.length ? ((height = t), At) : height
    }),
    (At.showTooltip = function(t) {
      return arguments.length ? ((dt = t), At) : dt
    }),
    (At.hideTooltip = function(t) {
      return arguments.length ? ((ct = t), At) : ct
    }),
    (At.clickFunction = function(t) {
      return arguments.length ? ((pt = t), At) : pt
    }),
    At
  )
}
