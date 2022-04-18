const express =require('express');
const dotenv =require('dotenv');
const bodyParser =require('body-parser');

const connectDB =require('./config/db');
const app =express();
app.use(bodyParser.json());
// app.get('/',(req,res) => { 
//     res.send("hello world")
// })

// app.get('/employees',(req,res) => { 
//     res.send("Employee")
// })
dotenv.config({path:'./config/config.env'});
connectDB();

app.use('/',require('./routes/index'))
app.listen(3000)