// const axios = require('axios');
// const config = require("../config");

// // function to get the access token
// function getGithubAccessToken(code, done) {
  
// }


// // Function to get the user profile for the token provided
// function getAccessTokenOfUser(token, done) {
//   // Github APIs are authenticated and we have to share the token in headers
//   // The token is same as what we recieved in the previous step
  
// }

// module.exports = {
//   getGithubAccessToken,
//   getAccessTokenOfUser
// }

const axios = require('axios');
const config = require("../config");

async function getGithubAccessToken(code) {
  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      code: code
    }, {
      headers: {
        'Accept': 'application/json'
      }
    });

    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.error("Error in getGithubAccessToken:", error);
    return null;
  }
}

async function getAccessTokenOfUser(token) {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const user = response.data;
    return user;
  } catch (error) {
    console.error("Error in getAccessTokenOfUser:", error);
    return null;
  }
}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
};



