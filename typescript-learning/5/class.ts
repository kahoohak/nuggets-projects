class User {
  constructor(public name: string) {
  }

  public getName(): string {
    return this.name
  }

  public get nameHello(): string {
    return `Hello, ${this.name}`
  }

  public set nameHello(value: string) {
    this.name = `Hello, ${value}`
  }
}

const user = new User('kaho')
console.log(user.getName())
console.log(user.nameHello)
user.nameHello = 'ohak'
console.log(user.getName())
console.log(user.name)

export {}