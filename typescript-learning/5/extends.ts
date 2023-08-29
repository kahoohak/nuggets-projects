//继承、实现、抽象类
class Base {
  print() {
    console.log('bbb')
  }
}

class Derived extends Base {
  override pprint() {
    console.log('ddd')
  }
}

// const der = new Derived()
// der.print()

export {}