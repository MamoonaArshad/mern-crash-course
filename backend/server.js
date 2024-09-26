// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js'
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import router from "../routes/product.routes.js";


dotenv.config();
const app = express();
app.use(express.json()); //allows json data to be parsed in the body

app.use("/api/products", router)

app.listen(5001, () => {
    connectDB();
    console.log('Server is running on port 5001');
});

