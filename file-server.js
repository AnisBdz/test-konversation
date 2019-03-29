var express = require('express')
var multer  = require('multer')
var move = require('move-file')
var upload = multer({ dest: 'uploads/' })

var app = express()
app.use('/files', express.static('files'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/profile', upload.single('file'), function (req, res, next) {
    move(`uploads/${req.file.filename}`, `files/${req.file.originalname}`)
    .then(() => res.end(`http://localhost:3000/files/${req.file.originalname}`))
})

app.listen(3000)
