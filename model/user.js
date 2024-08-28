//databases User สมัครสมาชิก
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type: String, require:true},
    surname:{type: String, require:true},
    birthday:{type: String, require:true},
    sex:{type: String, require:true},
    nationality:{type: String, require:true},
    religion:{type: String, require:true},
    address:{type: String, require:true},
    phonenumber:{type: String, require:true},
    email:{type: String, require:true},
    username:{type: String, require:true},
    password:{type: String, require:true},
    role:{type: String, require:true},
},
{timeseries: true, versionKey: false}
);
const user = mongoose.model('users', userSchema, 'users');
module.exports = user