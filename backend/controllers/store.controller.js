"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKey = exports.storeKeyValue = exports.retrieveKey = void 0;
const store_service_1 = __importDefault(require("../services/store.service"));
const storeService = new store_service_1.default();
console.log('store', storeService);
const retrieveKey = (req, res) => {
    const { key } = req.params;
    const value = storeService.getKey(key);
    if (!value) {
        res.status(204).send();
    }
    res.status(200).send({
        key,
        value,
    });
};
exports.retrieveKey = retrieveKey;
const storeKeyValue = (req, res) => {
    const { key, value } = req.body;
    storeService.storeKeyValuePair(key, value);
    res.status(204).send();
};
exports.storeKeyValue = storeKeyValue;
const deleteKey = (req, res) => {
    const { key } = req.params;
    const deleted = storeService.deleteKey(key);
    if (!deleted) {
        res.status(404).send();
    }
    res.status(204).send();
};
exports.deleteKey = deleteKey;
