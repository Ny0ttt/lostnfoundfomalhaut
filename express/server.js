import multer from 'multer'
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

// const express = require('express')
const app = express()

// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/uploads/'))
    },
    filename: function (req,file, cb) {
        cb(null, file.originalname);
    }
})
var uploading = multer({
    // dest: __dirname + '../public/uploads/',
    // limits: {fileSize: 1000000, files:1},
    // dest: path.join(__dirname, '../public/uploads/'), 
    // limits: { fileSize: 1000000, files: 1},
    storage: storage,
    limits: { fileSize: 1000000, files: 1},
    
  })

// upload.single('avatar')

app.get("/api", (req, res) => {

    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })

})

// app.post("/api/posts", upload.single('image'), async (req, res) => {

//     console.log("req.boy", req.body)
//     console.log("req.file", req.file)
//     res.send({})

// })

app.post('/pictures/upload', uploading.single('image'), function(req, res) {
    res.send('File uploaded successfully');
})

app.listen(5000, () => { console.log("Server started on port 5000") })