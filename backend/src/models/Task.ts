import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
});

TaskSchema.plugin(mongoosePaginate);
export const TaskModel = mongoose.model('Task', TaskSchema);
