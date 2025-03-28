const express= require('express');
const app=express();
const path=require('path');
const socketio=require('socket.io');
const http=require('http');


const server=http.createServer(app);
const io=socketio(server);

app.set('view engine','ejs');
// app.set(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log('New WebSocket Connection');

    socket.on('sendLocation', (data) => {
        io.emit('receiveLocation', { id: socket.id, ...data });
    });

    socket.on('disconnect', () => {
        io.emit("userDisconnected", { id: socket.id }); 
    });
});








app.get('/',(req,res)=>{
    res.render('index');
});


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});