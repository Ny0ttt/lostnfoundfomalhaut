const multer = require('multer');
const path = require('path');
const request = require('supertest');
const express = require('express');
const fs = require('fs');
const app = express();
const { fileURLToPath } = require('url');

const __filenamee = fileURLToPath(require('url').pathToFileURL(__filename).toString()); 
const __dirnamee = path.dirname(__filenamee);

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirnamee, '../public/uploads/'))
    },
    filename: function (req,file, cb) {
        cb(null, file.originalname);
    }
})
var uploading = multer({

    storage: storage,
    limits: { fileSize: 1000000, files: 1},
    
  })

app.post('/upload', uploading.single('file'), (req, res) => {
  res.status(200).send('File uploaded successfully');
});

describe('File Upload', () => {
  it('should upload a file and preserve its original name', done => {
    request(app)
      .post('/upload')
      .attach('file', './testfolder/textestfile.txt') // Path to a test file
      .expect(200)
      .then(response => {
        const uploadedFilePath = path.join(__dirnamee, '../public/uploads/textestfile.txt');
        
        // Check if the file exists
        expect(fs.existsSync(uploadedFilePath)).toBe(true);
        
        // Clean up the uploaded file after the test
        fs.unlinkSync(uploadedFilePath);
        
        done();

        // console.log(" uploadedfilepath " + uploadedFilePath);
        // expect(response.text).toBe('File uploaded successfully'); done();
      })
      .catch(err => done(err));
  });
});
