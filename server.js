const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.mongodb_url;

const connectDB = async () => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log("Connected to DB...");
    })
    .catch(() => {
        console.log("Failed to connect to DB.");
    })
    console.log("DB Connection process completed..!");
};
connectDB();

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model('User', UserSchema);

const createUser = async () => {
    
    const newUser = new User({
        name: 'Narayana'
    });    
    const savedUser = await newUser.save();    
};

createUser();

app.get('/api', (req,res)=>{
    console.log("came into server");
    res.send({"data":"got data from server"});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})


