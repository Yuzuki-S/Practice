const environment = process.env.NODE_ENV || 'development'
const config = require('../../../knexfile')[environment]
const db = require('knex')(config)

function addPackage(package) {
   return db('package')
   .insert({package: package})
   .then(data => {
       console.log(data);
       
       return db('package')
       .select()
        .where({'id': data[0]})
    
        
   })
}


module.exports = {
    addPackage
}