import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

export const TaskModel = mongoose.model('Task', TaskSchema);