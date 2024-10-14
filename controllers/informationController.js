const Information = require('../model/Information');

exports.getInformation = async (req, res) => {
    try {
      const info = await Information.find(); // สมมุติว่าดึงข้อมูลจาก MongoDB
      res.status(200).json(info); // ส่งข้อมูลกลับไปยัง client
    } catch (err) {
      if (!res.headersSent) { // ตรวจสอบว่า header ถูกส่งไปแล้วหรือไม่
        res.status(500).json({ message: "Error retrieving information" });
      } else {
        console.log("Headers already sent, error cannot be sent: ", err);
      }
    }
  };

exports.getInformationID = async (req,res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);
        res.status(200).json(information);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

exports.postInformation = async (req,res) => {
    try {
        const { name,surname,birthday,age,sex,status,blood_group,nationality,ethnicity,religion,address,email,phonenumber,shopname,renewal_period,date_information,expires_information,startdate,history_information,location} = req.body;

        const information = new Information({ name,surname,birthday,age,sex,status,blood_group,nationality,ethnicity,religion,address,email,phonenumber,shopname,renewal_period,date_information,expires_information,startdate,history_information,location});

        const savedInformation = await information.save();
        res.status(201).json(savedInformation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateInformation = async (req,res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);
        if (!information) return res.status(404).json({ message: 'Information not found'});
        const update = req.body;
        const updateInformation = await information.save();
        res.json(updateInformation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteInformation = async (req,res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);
        if (!information) return res.status(404).json({ message: 'Information not found' });
        await Information.findByIdAndDelete(id);
        res.json({ message: 'Information deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};