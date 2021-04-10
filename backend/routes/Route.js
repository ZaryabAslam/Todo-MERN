const route = require('express').Router();
const Todo = require('../models/Todo')


route.get('/',(req,res)=>{
    Todo.find((err,result)=>{
        if(err) throw new Error(err);
        //console.log(result)
        res.json(result)
    })
})

//setting post request,when user sends data means add new todo
route.post('/',(req,res)=>{
    //it will create and insert a record in database
    Todo.create(req.body,(err,result)=>{
        if(err) throw new Error(err);
        //console.log(result)
        res.json(result)
    })
})
//it is used to update todo and req.body will be update to update the new value
//new: true or returnOriginal: false -- they both are same, use any of them to return updated data
route.put('/:id',(req,res)=>{
    Todo.findOneAndUpdate({ _id: req.params.id },req.body,{new: true}, (err,result)=>{
        if(err) throw new Error(err);
        //console.log(result)
        res.json(result)
    })
})
//it is used to delete an item from todo
route.delete('/:id',(req,res)=>{
    Todo.findOneAndRemove({ _id: req.params.id },(err,result)=>{
        if(err) throw new Error(err);
        //console.log(result)
        res.end()
    })
})

module.exports = route;