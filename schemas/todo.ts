import mongoose from 'mongoose';
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Todo', todoSchema);
