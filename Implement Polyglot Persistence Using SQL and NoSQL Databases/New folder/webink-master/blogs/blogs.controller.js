// const blogsService = require("./blogs.service"); 

// const saveBlog = function (blog, done) {
//   // call the method from blogs service to save the blog
// }

// const findBlogs = function (done) {
//   // call the method from blogs service to fetch all blogs
// }
 

// module.exports = {
//   saveBlog,
//   findBlogs
// }


const blogsService = require("./blogs.service");

const saveBlog = function (blog, done) {
  blogsService.saveBlog(blog, (err, results) => {
    if (err) {
      return done({ STATUS: "DATA_ERROR", error: "Encountered data error in saving blog..!" });
    }

    return done(null, results);
  });
}

const findBlogs = function (done) {
  blogsService.findBlogs((err, results) => {
    if (err) {
      return done({ STATUS: "DATA_ERROR", error: "Encountered data error in fetching blogs..!" });
    }

    return done(null, results);
  });
}

module.exports = {
  saveBlog,
  findBlogs
}
