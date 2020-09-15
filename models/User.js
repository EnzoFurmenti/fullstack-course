const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    emil:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    user:{
        ref:'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('users', categorySchema);