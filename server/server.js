var path = require('path')
var express = require('express')

var server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))


server.get('/add', (req, res) => {
    console.log('hit')
    let package = req.query;
    db.savePackage(package, req.user.username)
    .then(
      data => {
       res.json(data); 
      }
    )
   })


module.exports = server
