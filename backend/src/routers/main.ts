import express from 'express';
import TaskRouter from './TaskRouter';

const router = express.Router();

export default (): express.Router => {
  TaskRouter(router);

  return router;
};
