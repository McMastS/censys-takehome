/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import KeyValueStore from '../store/store';

class StoreService {
  private store: KeyValueStore;

  constructor() {
    this.store = new KeyValueStore();
  }

  getKey(key: string) {
    return this.store.get(key);
  }

  deleteKey(key: string) {
    return this.store.delete(key);
  }

  storeKeyValuePair(key: string, value: any) {
    this.store.set(key, value);
  }
}

export default StoreService;
