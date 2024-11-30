const express = require('express');
const router = express.Router(); // Use router instead of app
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'MSD_07';
let status = false;

// Test route
// router.get('/test', (req, res) => {
//     res.send('Test route working...');
// });

// Create a new user using POST "api/auth/signup"
router.post('/signup', async (req, res) => { 
    try {
        console.log('Request received');
        
        // Check if user's email is already registered
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ status,'error': 'User already registered! Please try again with another email.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPassword,
            gender: req.body.gender,
        });

        const authToken = jwt.sign({ id: user.id }, JWT_SECRET);
        // console.log("User created:", authToken);
        status = true;
        res.status(200).json({ status,"success": "Ragistration successfully completed! Please login" });
    } catch (error) {
        status = false;
        console.log("Something went wrong! Please try again after some time.",error);
        res.status(500).json({status, msg: "Server error" });
    }
});


// Authenticate a user using POST "api/auth/login" 
router.post('/login', async (req, res) => { 
    try {
        // console.log('Request received');
        let {email,password} = req.body;
        
        // Check if user's email is already registered
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            status = false;
            return res.status(400).json({status, error: 'User not registered! Please use correct email or password' });
        }
        
        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword){
            status = false;
            return res.status(400).json({status,error:"Please enter correct email or password to login"})
        }

        const authToken = jwt.sign({ id: user.id }, JWT_SECRET);
        // console.log("User created:", authToken);
        status = true;
        res.status(200).json({status,authToken});
    } catch (error) {
        // console.log("Something went wrong! Please try again after some time.",error);
        res.status(500).json({ "msg": "Server error" });
    }
});



module.exports = router; // Export the router
