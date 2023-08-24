// const oauthService = require("./auth.service");


// // Controller code which orchestrates the overall process
// // It calls the service functions where the business logic is present
// function oauthProcessor(code, done) {
//   /**
//    * 
//    * Get the access token for the logged in user
//    * 
//    */
 
// }

// module.exports = {
//   oauthProcessor
// };

const oauthService = require("./auth.service");

async function oauthProcessor(req, res) {
  try {
    const code = req.query.code;
    if (!code) {
      return res.status(400).json({ error: "Missing authorization code." });
    }

    const token = await oauthService.getGithubAccessToken(code);
    if (!token) {
      return res.status(401).json({ error: "Failed to obtain access token." });
    }

    // Set the token in a cookie or session storage
    res.cookie('githubAccessToken', token, { maxAge: 3600000 });

    // Redirect to the authorized page
    res.redirect('/authorized');
  } catch (error) {
    console.error("Error in oauthProcessor:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  oauthProcessor
};
