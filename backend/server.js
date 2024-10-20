// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import path from "path"
import { connectDB } from './config/db.js'

import router from "../routes/product.routes.js";


dotenv.config();
const app = express();
const _dirname =path.resolve()
app.use(express.json()); //allows json data to be parsed in the body
const PORT = process.env.port || 5001
app.use("/api/products", router)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(_dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
 res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
    })
}


app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port', PORT);
});

