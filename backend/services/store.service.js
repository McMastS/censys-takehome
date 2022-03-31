"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const store_1 = __importDefault(require("../store/store"));
class StoreService {
    constructor() {
        this.store = new store_1.default();
    }
    getKey(key) {
        return this.store.get(key);
    }
    deleteKey(key) {
        return this.store.delete(key);
    }
    storeKeyValuePair(key, value) {
        this.store.set(key, value);
    }
}
exports.default = StoreService;
