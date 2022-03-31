// This class represents a fictional, more complicated key value store.
// I added this class as a wrapper over a map so that in a real world
// scenario we could switch out the map for some other key value store.
class KeyValueStore {
  private store: Map<string, any>;

  constructor() {
    this.store = new Map();
  }

  get(key: string) {
    return this.store.get(key);
  }

  set(key: string, value: any) {
    this.store.set(key, value);
  }

  delete(key: string) {
    return this.store.delete(key);
  }
}

export default KeyValueStore;
