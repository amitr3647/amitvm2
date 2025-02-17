const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async ()=> {
try{
const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('mongo db connected',conn.connection.host);
}catch (error) {
console.log('error in db connection', error.message);
process.exit();
}
}
module.exports = connectDB;