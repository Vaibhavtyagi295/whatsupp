const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const http = require('http').createServer(app);

const port = process.env.port ||  3000  

http.listen(port,()=>{
    console.log(`jkhjhghj${port}`)
});

app.use(express.static(__dirname +'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
});

const io =require("socket.io")(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})
