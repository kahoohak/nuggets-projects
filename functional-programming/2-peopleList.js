// 这里我mock了一组员工信息作为原始数据，实际处理的数据信息量应该比这个大很多
const peopleList = [
  {
    name: 'John Lee',
    age: 24,
    career: 'engineer'
  },
  {
    name: 'Bob Chen',
    age: 22,
    career: 'engineer'
  },
  {
    name: 'Lucy Liu',
    age: 28,
    career: 'PM'
  },
  {
    name: 'Jack Zhang',
    age: 26,
    career: 'PM'
  },
  {
    name: 'Yan Xiu',
    age: 30,
    career: 'engineer'
  }
]

/*************************************************************命令式编程开始 *************************************************************/
const len = peopleList.length

// 对员工列表按照年龄【排序】
for(let i=0;i<len;i++) {
  // 内层循环用于完成每一轮遍历过程中的重复比较+交换
  for(let j=0;j<len-1;j++) {
    // 若相邻元素前面的数比后面的大
    if(peopleList[j].age > peopleList[j+1].age) {
      // 交换两者
      [peopleList[j], peopleList[j+1]] = [peopleList[j+1], peopleList[j]]
    }
  }
}

let logText = ''
for(let i=0; i<len; i++) {
  const person = peopleList[i]
  // 【筛选】出年龄符合条件的
  if( person.age >= 24 ) {
    // 从数组中【提取】目标信息到 logText
    const perLogText = `${person.name}'s age is ${person.age}`
    if(i!==len-1) {
      logText += `${perLogText},`
    } else {
      logText += perLogText
    }
  }
}

console.log(logText)
/*************************************************************命令式编程结束 *************************************************************/

/*************************************************************函数式编程结束 *************************************************************/

//定义筛选逻辑
const ageBiggerThan24 = (person) => person.age >= 24

//定义排序逻辑
const smallAgeFirst = (a, b) => a.age - b.age

//定义信息提取逻辑
const generateLogText = (person) => `${person.name}'s age is ${person.age}`

const logText2 = peopleList.filter(ageBiggerThan24).sort(smallAgeFirst).map(generateLogText).join(',')

console.log(logText2)

/*************************************************************函数式编程结束 *************************************************************/