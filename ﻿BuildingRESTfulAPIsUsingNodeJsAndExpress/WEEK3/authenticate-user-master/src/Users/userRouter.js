

// //import the required module

// //This get method will get the user with token
// router.get('/',(req,res)=>{
    
//        //retrive userdata from req claims
       

//         //Calling controller findUser method return the error or result
//         userController.findUser(userdata.email,(err,result)=>{
           
//         })
   
// })


// module.exports = router


const express = require('express');
const userController = require('./userController');
const verifyAuth = require('../aunthentication/authMiddleware');

const router = express.Router();

router.get('/', verifyAuth, (req, res) => {
  const email = req.user.email;
  userController.findUser(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching user' });
    }
    return res.status(200).json(user);
  });
});

module.exports = router;
