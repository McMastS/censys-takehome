/* eslint-disable import/no-unresolved */
import express from 'express';
import { storeKeyValue, retrieveKey, deleteKey } from '../controllers/store.controller';

const storeRouter = express.Router();

storeRouter.post('/keys', storeKeyValue);
storeRouter.get('/keys/:key', retrieveKey);
storeRouter.delete('/keys/:key', deleteKey);

export default storeRouter;
