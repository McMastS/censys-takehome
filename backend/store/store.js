"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This class represents a fictional, more complicated key value store.
// I added this class as a wrapper over a map so that in a real world
// scenario we could switch out the map for some other key value store.
class KeyValueStore {
    constructor() {
        this.store = new Map();
    }
    get(key) {
        return this.store.get(key);
    }
    set(key, value) {
        this.store.set(key, value);
    }
    delete(key) {
        return this.store.delete(key);
    }
}
exports.default = KeyValueStore;
