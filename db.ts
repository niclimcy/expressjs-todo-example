import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/todo')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
