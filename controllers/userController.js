const User = require('../models/user');
const fs = require('fs')
const path = require('path');
const { isError } = require('util');
exports.adduser = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','adduser.html'));
}
exports.save = (req,res,next)=>{
    let obj = req.body;
    let user = new User(obj.id,obj.fname,obj.lname).save();
    res.status(200).end('User added successfully');
}
exports.getall = (req,res,next)=>{
    fs.readFile(path.join(__dirname,'../views','listofuser.html'),'utf8',(err,data)=>{
        if(err){
            throw new Error('Something wrong happened')
        }
        let list = User.fetchAllUser().reduce(function(accum,user){
            return accum + '<tr><td>'+user.id+'</td><td>'+user.fname+'</td><td>'+user.lname+'</td><td><a href="/users/deleteuser/'+user.id+'">Delete</a></td></tr>';
        },"");
        res.status(200).end(data.replace('#data',list));
    })
}
exports.deleteById = (req,res,next)=>{
    User.deleteById(req.params.userId);
    res.redirect('/users/getAll')
}