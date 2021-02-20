var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'postgres://localhost/library',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'library'
  },
  pool: { min: 0, max: 7 }
})
module.export =  knex