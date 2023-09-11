import { Router } from 'express';

import * as TaskController from '../service/TaskService';
import { pagination, search, searchAndPaginate } from '../controllers/paginate';

export default (router: Router) => {
  router.get('/tasks', TaskController.getAllTasks);
  router.post('/tasks', TaskController.createTask);
  router.put('/tasks/:id', TaskController.updateTask);
  router.delete('/tasks/:id', TaskController.deleteTask);
  router.get('/tasks/pagination', pagination);
  router.get('/tasks/search', searchAndPaginate);
};
