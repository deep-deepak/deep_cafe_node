const mongoose = require('mongoose');

const databaseUrl = 'mongodb://127.0.0.1:27017/deep_cafe';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
