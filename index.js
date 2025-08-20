const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=requre('cors');

dotenv.config();


const {buyProduct}=require('./controllers/buyProduct');

const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to Ecommerce');
});

app.post('/buyProduct/:id/:userId',buyProduct);

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success:false,
        message: 'Something went wrong!',
        error:err.message
    });
});


const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is running at Port : ${port}`);
});