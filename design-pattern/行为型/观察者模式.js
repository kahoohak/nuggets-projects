class Publisher {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    const index = this.observers.findIndex((item) => item === observer);
    if (index) this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class Observer {
  constructor() {}

  update() {
    console.log("订阅者更新了");
  }
}

class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prdContext = null
  }

  getPrd() {
    return this.prdContext
  }

  setPrd(context) {
    this.prdContext = context
    this.notify()
  }
}

class DevelopObserver extends Observer {
  constructor() {
    super()
  }

  update(publisher) {
    console.log('最新的', publisher.getPrd())
  }
}

const prd = new PrdPublisher()
const dev1 = new DevelopObserver()
const dev2 = new DevelopObserver()
prd.add(dev1)
prd.add(dev2)

prd.setPrd('prd2.0')