const { response } = require('express')
const express = require('express')
const app = express()
let db = require('./connection')
// multer for uploading images
const port = process.env.PORT || 9000
var cors = require('cors')
app.use(cors())
app.listen(port, () => console.log(`listening on port: ${port}`))

app.get('/books',(request,response) =>{
  const posts = await db.select('title', 'author', ).from('books')
  return response.send({text:posts})
})