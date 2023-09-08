import express, { Response, Request, NextFunction } from 'express';
import * as Task from '../controllers/TaskController';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.getTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { task } = req.body;

  Task.createTask({ task })
    .then((data) => {
      console.log('Saved Successfully...');
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  Task.deleteTask(id)
    .then(() => res.send('Deleted successfully'))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task } = req.body;

  Task.updateTask(id, { task })
    .then(() => res.send('Updated successfully'))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: 'Something went wrong!' });
    });
};
