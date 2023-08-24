// const express = require('express');
// const config = require("../config");
// const router = express.Router();
// const oauthCtrl = require("./auth.controller");

// // redirects the login to consent authorization screen from github
// router.get('/login', (req, res) => {
 
// });


// // Callback url to which github oauth code is sent 
// router.get('/callback', (req, res) => {
 
//         // Return the token in cookie
//         // Data should be sent either in cookie or in session storage
       
// });

// module.exports = router;

const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

router.get('/login', (req, res) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`;
  res.redirect(githubAuthUrl);
});

router.get('/callback', async (req, res) => {
  try {
    const code = req.query.code;
    if (!code) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = await oauthCtrl.getGithubAccessToken(code);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Set the token in a cookie or session storage
    res.cookie('githubAccessToken', token, { maxAge: 3600000 });

    // Redirect to the authorized page
    res.redirect('/authorized');
  } catch (error) {
    console.error("Error in /callback route:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;


