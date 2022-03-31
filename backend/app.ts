/* eslint-disable import/no-unresolved */
import express from 'express';
import router from './routes/store.routes';

const app: express.Application = express();
const port = 8000;

app.use(express.json());

app.use('/v1', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Press CTRL-C to stop');
});
