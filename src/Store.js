class Store {
  constructor(data) {
    this.storeData = {...data}
    this.subscribers = []
  }

  set data(storeData) {
    this.storeData = {...this.storeData, ...storeData}
    this.subscribers.forEach(fn => fn())
  }

  get data() {
    return this.storeData
  }

  subscribe(fn) {
    this.subscribers.push(fn)
  }
}

export default Store