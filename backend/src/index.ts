import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routers/main';
import * as db from './config/db/index';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

db.connect();

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

app.use('/api', router());
