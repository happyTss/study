let express = require('express')
let app = express()
let whiteList = ['http://localhost:3000']
app.use(function (req,res,next) {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    //设置可以访问的源
    res.setHeader('Access-Control-Allow-Origin',origin)
  }
  next()
})
app.get('/getData',function(req,res){
  // console.log(req.headers)
  console.log(111111)
  res.end("222222")
})
app.use(express.static(__dirname))
app.listen(4000)