//实现Storage，使得该对象为单例，实现方法 setItem(key,value) 和 getItem(key)。
class Storage {
  static getInstance() {
    if(!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance 
  }

  setItem(key, val) {
    this[key] = val
  }

  getItem(key) {
    return this[key]
  }
}

const s1 = Storage.getInstance()
const s2 = Storage.getInstance()

s1.setItem('name', 'kaho')
console.log(s1.getItem('name'))
console.log(s2.getItem('name'))
console.log(s1 === s2)