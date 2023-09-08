import { TaskModel } from '../models/Task';

export const getTasks = () => TaskModel.find();
export const getTaskById = (id: String) => TaskModel.findById(id);
export const createTask = (value: Record<string, any>) => new TaskModel(value).save().then((task) => task.toObject());
export const deleteTask = (id: String) => TaskModel.findOneAndDelete({ _id: id });
export const updateTask = (id: String, value: Record<string, any>) => TaskModel.findByIdAndUpdate(id, value);
