import express from 'express';
import storeRouter from './routes/store.routes';

const app: express.Application = express();
const port = 8000;

app.use(express.json());

app.use('/v1', storeRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Press CTRL-C to stop');
});
