const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user"); //เรียกไปยังสมัครสมาชิก

//Register ลงทะเบียน
exports.register = async (req, res) => {
    const {name,surname,email,username,password,role} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name,surname,email,username,password: hashedPassword,role});
        await user.save();
        res.status(201).send("User registered");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

//Login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).send("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        // สร้าง JWT token
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30m" }
        );
        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "45m" }
        );
        
        // ตรวจสอบการส่ง token กลับ
        res.status(200).json({ user, accessToken, refreshToken });
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// Refresh
exports.refresh = async (req, res) => {
    const token  = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
            { userId: user.userId },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.json({ accessToken });
    });
};