//databases login_admin
const mongoose = require('mongoose');
const loginAdminSchema = new mongoose.Schema({
    username:{type: String, require:true},
    password:{type: String, require:true},
},
{timestamps: true, versionKey: false}
);
const Login = mongoose.model('Login',loginAdminSchema);
module.exports = Login