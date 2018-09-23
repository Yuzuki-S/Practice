import request from 'superagent'

export function addBag() {
    console.log("I am here")
     return request.get('/add')
   }