const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const User = require('../models/userModel');
//creating logic for userRouter page .ie user registration

const registerUser = asyncHandler (async (req,res)=> {
    console.log('request in usercontroller',req.body);
const {name, email,password, pic } = req.body;
if(!name || !email || !password){
    res.status(400);
    throw new Error('Please enter all the fields');
}
//check if user exist for given email
const userExists = await User.findOne({email});
if(userExists) {
    res.status(400);
    throw new Error("User already exists");
}
const user = await User.create({
    name: name,
    email: email,
    password: password,
    pic: pic
});
//response coming from api
if(user){
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
    })
}else{
 res.status(400);
 throw new Error('User not found');   
}
})

// authenticate user
const authUser = asyncHandler(async (req,res) => {
const {email, password} = req.body;
const user = await User.findOne({email});//will check in db
console.log('user',user)
console.log('test',await user.matchPassword(password))
if(user && (await user.matchPassword(password))){
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
    })
}else{
    res.status(400);
    throw new Error("Invalid Email or Password");
}
})

//search user i.e api/user?search=amit

const allUsers = asyncHandler(async(req,res)=> {
const keyword = req.query.search;

console.log('search keyword',keyword);
})



module.exports = {registerUser, authUser, allUsers};
