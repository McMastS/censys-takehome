/* eslint-disable import/no-unresolved */
import express from 'express';
import { storeKeyValue, retrieveKey, deleteKey } from '../controllers/store.controller';

const router = express.Router();

router.post('/keys', storeKeyValue);
router.get('/keys/:key', retrieveKey);
router.delete('/keys/:key', deleteKey);

export default router;
