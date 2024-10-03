import mongoose from "mongoose";

export const dbConn = await mongoose.connect('mongodb://127.0.0.1:27017/Saraha').then(()=> console.log('db connected..')).catch((err) =>console.log(err) );
