import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false
  }
});

export default mongoose.model('Todo', todoSchema);
