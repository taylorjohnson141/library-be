const express = require('express')
const bodyParser = require('body-parser')
const app = express()


let knex = require('./connection')// multer for uploading images
let axios = require('axios')
require('dotenv').config()

const port = process.env.PORT || 9000

var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on port: ${port}`))

app.get('/books',async (request,response) =>{

  const posts = await knex('books').select('title', 'author','cover','borrowed','read' )
  .catch(error =>{
    return response.send({text:error})
  })
  response.send({text:posts})
})
app.post('/addBook',(request,response) =>{
   knex('books').insert({title: request.body.title, author:request.body.author,read:request.body.hasRead, borrowed:false,cover:request.body.coverPhoto})
   .then( function (result) {
    return res.json({ success: true, body: result });     // respond back to request
 })
       .catch(error =>{
         return response.send({text:error})
      })
})
app.post('/search', (request,response) =>{
  return axios.get(`https://books.googleapis.com/books/v1/volumes?q=${request.body.query}&key=${process.env.API_KEY}`)
  .then(list =>{
    return response.json({books:list.data})
  }).catch(error =>{
    console.log(error)
  })
})