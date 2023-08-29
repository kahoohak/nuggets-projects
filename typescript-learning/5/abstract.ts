//抽象类
abstract class AbsUser {
  abstract name: string
  abstract getName(prefix: string): number
}

class User implements AbsUser {
  constructor(public name: string) {}

  getName(prefix: string): number {
    return (prefix + this.name).length 
  }
}

//接口描述类的结构
interface InterfaceUser {
  name: string
  getName(prefix: string): number
}

class OtherUser implements InterfaceUser {
  constructor(public name: string) {}

  getName(prefix: string): number {
    return (prefix + this.name).length 
  }
}

export {}