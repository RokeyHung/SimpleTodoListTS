import { Router } from 'express';

import * as TaskController from '../service/TaskService';

export default (router: Router) => {
  router.get('/tasks', TaskController.getAllTasks);
  router.post('/tasks', TaskController.createTask);
  router.put('/tasks/:id', TaskController.updateTask);
  router.delete('/tasks/:id', TaskController.deleteTask);
};
