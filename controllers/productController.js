const Product = require('../models/product')
const fs = require('fs')
const path = require('path')
exports.getAll = (req,res,next)=>{
    let data = fs.readFile(path.join(__dirname,'../views','listofproducts.html'),'utf8',(err,data)=>{
        if(err){
            throw new Error('Something wrong happened')
        }
        let list = Product.getAll().reduce(function(accum,p){
            return accum + '<tr><td>'+p.id+'</td><td>'+p.name+'</td><td>'+p.price+'</td><td>'+p.description+'</td><td><a href="/products/deleteproduct/'+p.id+'">Delete</a></td></tr>';
        },"");
        res.status(200).end(data.replace('#data',list));
    })
}
exports.addproduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../views','addproduct.html'));
}
exports.deleteProductById = (req,res,next)=>{
    Product.deleteById(req.params.prodId);
    res.redirect('/products/getAll')
}
exports.save = (req,res,next)=>{
    let obj = req.body;
    let product = new Product(obj.id,obj.name,obj.price,obj.description).save();
    res.status(200).end('Product Added Successfully')
}