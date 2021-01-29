const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

// DB connection
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to database!");
});

// Controllers
const todoController = require('./routes');
app.use('/api/v1/todo',todoController);


app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
});