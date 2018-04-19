const mongoose = require('mongoose');
const { Schema } = mongoose;
//above is identical to: const Schema = mongoose.Schema since the variable Schema is the same 
//as what we're calling in from mongoose
//It is called destructuring

const userSchema = new Schema({
   googleId: String 
});

mongoose.model('users', userSchema);