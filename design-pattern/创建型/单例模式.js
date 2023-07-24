//一个类保证只生成一个实例
//实现一
class SingleDog {
  show() {
    console.log("我是一个单例对象");
  }

  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}

//实现二
SingleDog.getInstance2 = (function() {
  let instance = null
  return function() {
    if(!instance) {
      instance = new SingleDog()
    }
    return instance
  }
})()

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

console.log(s1 === s2);

const s3 = SingleDog.getInstance2();
const s4 = SingleDog.getInstance2();

console.log(s3 === s4);
