const { response } = require('express')
const express = require('express')
const app = express()
// multer for uploading images
const port = process.env.PORT || 9000
var cors = require('cors')
app.use(cors())
app.listen(port, () => console.log(`listening on port: ${port}`))

app.get('/books',(request,response) =>{
  return response.send({text:"Books Are Here"})
})