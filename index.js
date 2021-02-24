const express = require('express')
const bodyParser = require('body-parser')
const app = express()


let knex = require('./connection')// multer for uploading images
let axios = require('axios')
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
  console.log(request)
   knex('books').insert({title: request.body.title, author:request.body.author,read:request.body.hasRead, borrowed:false,cover:request.body.coverPhoto})
   .then( function (result) {
    return res.json({ success: true, body: result });     // respond back to request
 })
       .catch(error =>{
         return response.send({text:error})
      })
})
app.post('/search', (request,response) =>{
  return axios.get(`https://books.googleapis.com/books/v1/volumes?key=${process.env.key}q=island`)
  .then(list =>{
    console.log(list)
  })
})