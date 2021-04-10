const express = require('express')
const app = express();
const route = require('./routes/Route');
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3030;

//it is a middleware used to parse the json to every route ans show data in req.body req
app.use(express.json())
//it is used to remove cors errors.i.e cross port errors(3000 and 3030)
app.use(cors())
//making connection
mongoose.connect('mongodb://localhost/todolist', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
.then(()=>console.log('connected to db'))
.catch((err)=>console.error(err));

app.use('/todos',route)


//listening to port
app.listen(PORT, ()=>{
    console.log('server listening at port no ' + PORT)
})