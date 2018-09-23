
const server = express()
const db = require('./db/db')
const express = require('express')



server.get('/add', (req, res) => {
    console.log(req.user.username)
    let package = req.query;
    db.savePackage(package, req.user.username)
    .then(
      data => {
       res.json(data); 
      }
    )
   })
  
  module.exports = router