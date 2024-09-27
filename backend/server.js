// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

import router from "../routes/product.routes.js";


dotenv.config();
const app = express();
app.use(express.json()); //allows json data to be parsed in the body
const PORT = process.env.port || 5001
app.use("/api/products", router)

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port', PORT);
});

