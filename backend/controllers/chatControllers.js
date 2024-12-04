const expressAsyncHandler = require("express-async-handler")
const Chat = require("../models/chatModel")
const User = require("../models/userModel")
const fetchChats = expressAsyncHandler(async (req,res)=> {
try{
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async (results)=> {
        console.log('resultes123',results)
        results = await User.populate(results,{
            path:"latestMessage.sender",
            select: "name pic email"
        });
        // res.status(200).send(results);
    });
    
    res.status(200).send('dfa')
}catch(err){
res.status(400);
throw new Error(err.message);
}
})
module.exports = {fetchChats}