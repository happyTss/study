let express = require('express')
let app = express()

let WebSocket = require('ws')
let wss = new WebSocket.Server({port:3000})
  wss.on('connection',function (ws) {
    ws.on('message',function(e){
      console.log(e)
      ws.send("I Love U")
    })
  })
