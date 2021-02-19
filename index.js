const { response } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`listening on port: ${port}`))

app.get('/books',(request,response) =>{
  response.send('BOOKS ARE HERE')
})