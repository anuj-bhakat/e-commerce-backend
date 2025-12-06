import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"; 
import productRoutes from "./routes/productRoutes.js"; 
import orderRoutes from "./routes/orderRoutes.js"; 


dotenv.config();
const app=express();

app.use(express.json());


app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes)

//Local Server
mongoose.connect(process.env.MONGODB_URI_LOCAL).then(()=>{
    console.log("MongoDB Connected");
    app.listen(5000,()=>console.log("Server running on port 5000"));
}).catch(err=>console.log(err));