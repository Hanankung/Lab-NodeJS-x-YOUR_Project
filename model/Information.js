//Databases employee ข้อมูลที่จะใช้ในการกรอก
const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
    //ใส่ แอคตีบิว เพื่อสร้างdatabase
    name:{type: String, require:true},
    surname: {type:String, require:true},
    birthday:{type:String , reqire:true},
    age:{type:String , require:true},
    sex:{type:String, require:true},
    status:{type:String, require:true},
    blood_group:{type:String, require:true},
    nationality:{type:String, require:true},
    ethnicity:{type:String, require:true},
    religion:{type:String, require:true},
    address:{type:String, require:true},
    email:{type:String, require:true},
    phonenumber:{type:String, require:true},
    shopname:{type:String, require:true},
    renewal_period:{type:String, require:true},
    date_information:{type:String, require:true},
    expires_information:{type:String, require:true},
    startdate:{type:String, require:true},
    history_information:{type:String, require:true},
    location:{type:String, require:true},
},
{timestamps: true, versionKey: false}
);

const Information = mongoose.model('Information', informationSchema);
module.exports = Information
