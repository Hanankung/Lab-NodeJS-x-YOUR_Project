//databases User สมัครสมาชิก
const mongoose = require('mongoose');
//ข้อมูลสมัครสมาชิก
const userSchema = new mongoose.Schema({
    name:{type: String, require:false},
    surname:{type: String, require:false},
    email:{type: String, require:true},
    username:{type: String, require:true},
    password:{type: String, require:true},
    role:{type: String, require:false},
},
{timeseries: true, versionKey: false}
);
const user = mongoose.model('users', userSchema, 'users');
module.exports = user