const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

//  express is used to convert data into json format 
app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());    
// lets import routers

const ToDoItemRoute = require('../server/routes/todoitems')

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/',ToDoItemRoute);

app.listen(PORT, ()=>console.log("Server connected"));




