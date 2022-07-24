const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://127.0.0.1:27017/SAC-Applications"
);


//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-app-name');