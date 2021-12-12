const express = require('express')
const userRouter = require('./routes/userRouter')
const homeRouter = require('./routes/homeRouter')
const productRouter = require('./routes/productRouter')
const app = express();
const path = require('path')
app.use(express.static(__dirname + '/views/'));
app.use(express.urlencoded({extended:true}))
app.use('/home',homeRouter)
app.use('/users',userRouter)
app.use('/products',productRouter)
app.use((err,req,res,next)=>{
    res.end(`Something is wrong. Please try later. ${err}`)
})
app.listen(3000,()=>{
    console.log('listening to port 3000')
})