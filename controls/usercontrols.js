const User = require('../models/usermodal');
const express = require('express');
 

const registeruser = async (req, res) => {
    const { userName, password } = req.body;
    try{

        const newUser = new User({ userName, password });
        await newUser.save();
        res.status(201).json({ status: 'success', result: 'User registered successfully' });    
    }
    catch (error) {
        console.log("something wrong with registration", error);
    }
}
exports.registeruser = registeruser;

exports.loginUser = async(req, res) => {
    const { userName, password } = req.body;
    const user = await User.findOne(u => u.userName === userName && u.password === password);
    if (!user) return res.status(401).json({ status: 'error', result: 'Invalid username or password' });
  
    const token = `${user.userName}-${Date.now()}`;
    res.json(new TokenViewModel({ token, expires: new Date(Date.now() + 3600000), status: 'success', result: 'Login successful' }));
  };
  