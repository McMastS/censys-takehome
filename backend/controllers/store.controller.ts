/* eslint-disable import/no-unresolved */
import express from 'express';
import StoreService from '../services/store.service';

const storeService = new StoreService();

const retrieveKey = (
  req: express.Request,
  res: express.Response,
) => {
  const { key } = req.params;
  const value = storeService.getKey(key);
  if (!value) {
    return res.status(404).send();
  }

  return res.status(200).send({
    key,
    value,
  });
};

const storeKeyValue = (req: express.Request, res: express.Response) => {
  const { key, value } = req.body;
  storeService.storeKeyValuePair(key, value);

  return res.status(204).send();
};

const deleteKey = (req: express.Request, res: express.Response) => {
  const { key } = req.params;
  const deleted = storeService.deleteKey(key);
  if (!deleted) {
    return res.status(404).send();
  }

  return res.status(204).send();
};

export {
  retrieveKey,
  storeKeyValue,
  deleteKey,
};
