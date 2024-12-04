const  chats  = require('./data/data')
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 5000;
// converting request to json before sending
app.use(express.json());
app.get('/',(req,res)=> {
    res.send('api is success121');
})
// app.get('/api/chats',(req,res)=> {
// res.send(chats);
// })
// app.get('/api/chats/:id',(req,res)=> {
//    const chat =  chats.filter(chat=>chat._id === req.params.id);;
//    res.send(chat);
// })

//adding end points for authentication
app.use('/api/user',userRoutes);

//get user chat details
app.use('/api/chat',chatRoutes);

//error handleling
// app.use(notFound);
// app.use(errorHandler)

app.listen(port, ()=> {
    console.log('hurrray it runs')
})