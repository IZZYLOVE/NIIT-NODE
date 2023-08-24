

// //import the modules that are required

// //This method post will regiater the use
// router.post('/register',(req,res)=>{
  

//         //retrive name, email and password from request body
     
//         //calling authController registeruser method return the error msg or the result
// authController.registerUser(userDetails,(err,result)=>{
   
// })
// })

// //This method post will login the user once they are registered
// router.post('/login',(req,res)=>{
   

//         //retrive email and password from req.body
      
//         //calling the authController login usermethod return the error or the result 
//         authController.loginUser({email,password},(err,result)=>{
           
//         })

// })

// module.exports = router

const express = require('express');
const authController = require('./authController');

const router = express.Router();

router.post('/register', (req, res) => {
  const userData = req.body;
  authController.registerUser(userData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user' });
    }
    return res.status(201).json({ STATUS: 'OK', message: 'User registered successfully' });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  authController.loginUser({ email, password }, (err, token) => {
    if (err) {
      return res.status(401).json({ STATUS: 'Unauthorized', message: 'Authentication failed' });
    }
    return res.status(200).json({ STATUS: 'OK', message: 'Login successful', token });
  });
});

module.exports = router;

