"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
const express_1 = __importDefault(require("express"));
const store_controller_1 = require("./controllers/store.controller");
// import router from './routes/store.routes';
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
const router = express_1.default.Router();
// const controller = new StoreController();
router.post('/keys', store_controller_1.storeKeyValue);
router.get('/keys/:key', store_controller_1.retrieveKey);
router.delete('/keys/:key', store_controller_1.deleteKey);
app.use('/v1', router);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Press CTRL-C to stop');
});
