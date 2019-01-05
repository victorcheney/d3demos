let menuData = [{
    id: '1',
    name: '径向堆积柱状图',
    url: 'examples/RadialStackedBar/index.html',
    originUrl: 'examples/RadialStackedBar/index.html',
    img: 'src/img/RadialStackedBar.png'
  },
  {
    id: '2',
    name: '带可编辑注释的折线图',
    url: 'examples/riseOfBitcoin/index.html',
    originUrl: 'https://beta.observablehq.com/@bsurnida/d3-annotation-with-d3-line-chart',
    img: 'src/img/riseOfBitcoin.png'
  },
  {
    id: '3',
    name: '分层条形图',
    url: 'examples/hierarchicalBarChart/index.html',
    originUrl: 'https://bl.ocks.org/mbostock/1283663',
    img: 'src/img/hierarchicalBarChart.png'
  },
  {
    id: '4',
    name: '排序柱状图',
    url: 'examples/sortablebarchart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-sortable-bar-chart',
    img: 'src/img/sortablebarchart.png'
  },
  {
    id: '5',
    name: '螺旋曲线显示随时间变化数据',
    url: 'examples/condegramSpiralPlot/index.html',
    originUrl: 'https://bl.ocks.org/arpitnarechania/027e163073864ef2ac4ceb5c2c0bf616t',
    img: 'src/img/condegramSpiralPlot.png'
  },
  {
    id: '6',
    name: '横向实时图表',
    url: 'examples/realtimeHorizonChart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-realtime-horizon-chart',
    img: 'src/img/realtimeHorizonChart.png'
  },
  {
    id: '7',
    name: '堆状条形图分组条形图切换',
    url: 'examples/stackedToGroupedBars/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-stacked-to-grouped-bars',
    img: 'src/img/stacktogroupbar.png'
  },
  {
    id: '8',
    name: '面积图',
    url: 'examples/areaChart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-area-chart',
    img: 'src/img/areaChart.png'
  },
  {
    id: '9',
    name: '折叠树图',
    url: 'examples/collapsibleTree/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/collapsible-tree',
    img: 'src/img/collapsibleTree.png'
  },
  {
    id: '10',
    name: '折线图',
    url: 'examples/linechart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-line-chart',
    img: 'src/img/linechart.png'
  },
  {
    id: '11',
    name: '柱状图',
    url: 'examples/barchart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-bar-chart',
    img: 'src/img/barchart.png'
  },
  {
    id: '12',
    name: '饼图',
    url: 'examples/piechart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-pie-chart',
    img: 'src/img/piechart.png'
  },
  {
    id: '13',
    name: '环形图',
    url: 'examples/donutchart/index.html',
    originUrl: 'https://beta.observablehq.com/@mbostock/d3-donut-chart',
    img: 'src/img/donutchart.png'
  }
]

function formatMainpageMenu(menuData) {
  let menuStr = '<ul>~</ul>';

  menuData = menuData.map((item) => {

    let tempStr = `<li>
        <img src="${item.img}" alt="">
        <div class="p-link">
          <a href="${item.url}">${item.name}</a>
          <a href="${item.originUrl}"><i class="fa fa-link"></i></a>
        </div>
      </li>`;

    return tempStr;
  });

  return menuStr.replace(/~/, menuData.join(''))
}

function formatItempageMenu(menuData) {
  let menuStr = '<ul class="menu">~</ul>';

  menuData = menuData.map((item) => {

    let tempStr = `
      <li class="menu-item">
        <a href="../../${item.url}"><span>${item.name}</span></a>
        <a href="${item.originUrl}"><i class="fa fa-link"></i></a>
      </li>
      `;

    return tempStr;
  });

  return menuStr.replace(/~/, menuData.join(''))
}


// 主页面列表html
$('.list-container').html(formatMainpageMenu(menuData));

$('.aside').html(formatItempageMenu(menuData));

/* 
<ul class="menu">
        <li class="menu-item">
          <a href="../../examples/RadialStackedBar/index.html"><span>径向堆积柱状图</span></a>
          <a href="../../examples/RadialStackedBar/index.html"><i class="fa fa-link"></i></a>
        </li>
*/