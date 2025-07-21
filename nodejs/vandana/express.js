const express = require('express')
const app = express()
const port = 8000
// path and handler

app.use(express.static('public'))

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.get('/', (req,res) => {
  console.log("Hey its a get request");
  res.send('Hello World!,I am vandana')
})

app.post('/',(req,res)=> {
  console.log("Hey its a post request")
  res.send('Hello World!')
})

app.get('/index', (req,res) => {
  console.log("Hey its a index");
  res.sendFile('templates/index.html',{root:__dirname})
})
// app.get('/blog/:slug/:second/',(req,res) =>{
//   console.log(req.params)
//   console.log(req.query)
//   res.send(`hello ${req.params.slug} and ${req.params.second}`)
// })
// app.get('/about',(req,res)=>{
//   res.send('Hello about!')
// })
// app.get('/contact',(req,res)=>{
//   res.send('Hello contact!')
// })
// app.get('/blog',(req,res)=>{
//   res.send('Hello blog!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
