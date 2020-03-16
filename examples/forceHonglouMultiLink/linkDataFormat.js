// 关系分组
const setRelationGroup = (links) => {
  //对连接线进行统计和分组，不区分连接线的方向，只要属于同两个实体，即认为是同一组
  let linkMap  = {}
  let linkGroup = {}

  links.map(item => {
    let key = item.source < item.target
      ? item.source + ':' + item.target
      : item.target + ':' + item.source

    if (!linkMap.hasOwnProperty(key)) {
      linkMap[key] = 0
    }
    linkMap[key] +=1;

    if (!linkGroup.hasOwnProperty(key)) {
      linkGroup[key]=[]
    }
    linkGroup[key].push(item)

    // 设置link type
    item.linkType = item.source === item.target ? 'self' : 'notself'

    return item
  })

  /* console.log('linkMap',linkMap)
  console.log('linkGroup',linkGroup)
  console.log('links',links) */

  links = setLinkNumber(links, linkMap, linkGroup)

  return links
}

// 设置link编号
const setLinkNumber = (links, linkMap, linkGroup) => {
  links.map(item => {
    let key = item.source < item.target
      ? item.source + ':' + item.target
      : item.target + ':' + item.source

    item.size = linkMap[key]

    // 同一组进行编号
    let group = linkGroup[key]

    /* let groupLen = group.length
    let midLen = Math.floor(groupLen / 2)

    let num = !groupLen % 2 
      ? groupLen / 2
      : (groupLen + 1) / 2

    group.map((item, index) => {
      let temNum = num
      if (index <= midLen) {
        item.linkNum = temNum--
      } else {
        item.linkNum = index + 1 - midLen
      }

      return item
    }) */

    dispatchNumber(group, item.linkType)

    return item
  }) 

  return links
}

const dispatchNumber = (group, type) => {
  if (group.length === 0) return
  //对该分组内的关系按照方向进行分类，此处根据连接的实体ASCII值大小分成两部分
  let linksA = [], linksB = []
  group.forEach(item => {
    if (item.source < item.target){
      linksA.push(item)
    } else {
      linksB.push(item)
    }
  })

  //确定关系最大编号。为了使得连接两个实体的关系曲线呈现对称，根据关系数量奇偶性进行平分。
  //特殊情况：当关系都是连接到同一个实体时，不平分
  var maxLinkNumber = 0
  if (type ==='self') {
    maxLinkNumber = group.length
  } else {
    maxLinkNumber = group.length % 2 == 0 
      ? group.length / 2
      : (group.length+1) / 2
  }
  //如果两个方向的关系数量一样多，直接分别设置编号即可
  if (linksA.length == linksB.length) {
    var startLinkNumber = 1;
    for (var i = 0; i < linksA.length; i++){
      linksA[i].linknum = startLinkNumber++;
    }
    startLinkNumber = 1;
    for (var i = 0; i < linksB.length; i++) {
      linksB[i].linknum = startLinkNumber++;
    }
  } else {
    //当两个方向的关系数量不对等时，先对数量少的那组关系从最大编号值进行逆序编号，然后在对另一组数量多的关系从编号1一直编号到最大编号，再对剩余关系进行负编号
    //如果抛开负号，可以发现，最终所有关系的编号序列一定是对称的（对称是为了保证后续绘图时曲线的弯曲程度也是对称的）
    var biggerLinks, smallerLinks;
    if(linksA.length > linksB.length){
      biggerLinks = linksA;
      smallerLinks = linksB;
    }else{
      biggerLinks = linksB;
      smallerLinks = linksA;
    }

    var startLinkNumber = maxLinkNumber;
    for (var i=0; i < smallerLinks.length; i++) {
      smallerLinks[i].linknum = startLinkNumber--;
    }
    var tmpNumber = startLinkNumber;

    startLinkNumber = 1;
    var p = 0;
    while(startLinkNumber <= maxLinkNumber){
      biggerLinks[p++].linknum = startLinkNumber++;
    }
    //开始负编号
    startLinkNumber = 0-tmpNumber;
    for(var i=p;i<biggerLinks.length;i++){
      biggerLinks[i].linknum = startLinkNumber++;
    }
  } 
}