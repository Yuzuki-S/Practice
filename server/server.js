var path = require('path')
var express = require('express')
const db = require('./routes/db/db')
var server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))


server.get('/add', (req, res) => { 
   //console.log("received: ", req.query.bag);
    db.addPackage(req.query.bag)
    .then(
      data => {
        console.log("HERE ", data);
        
       res.json(data[0]); 
      }
    )
   })


module.exports = server
