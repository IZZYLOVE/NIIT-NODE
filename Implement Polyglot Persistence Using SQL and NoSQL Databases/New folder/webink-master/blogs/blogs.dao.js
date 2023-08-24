// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = "blogmanagementDB";

// const saveBlog = async function (blog, done) {

//     // establish connection with mongo

//     // insert blog document to blogs collection of blogmanagementDB database

//     const insertResult = null;

//     // store the insert command result in insertResult

//     if (!insertResult) {
//         console.log("Error in saving blog, ERROR::");

//         // EXITING
//         return done("Failed to save blog due to data errors..!");
//     }

//     // EXITING with results
//     return done(null, blog);

// }

// const findBlogs = async function (done) {
//     // establish connection with mongo

//     // fetch all blogs from blogs collection of blogmanagementDB database

//     const findResult = null;
    
//     // store the find command result in findResult

//     if (!findResult) {
//         console.log("Error in fetching blogs");

//         // EXITING
//         return done("Failed to fetch blogs due to data errors..!");
//     }

//     // EXITING with results
//     return done(null, findResult);
// }


// module.exports = {
//     saveBlog,
//     findBlogs,
// }


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "blogmanagementDB";

const saveBlog = async function (blog, done) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('blogs').insertOne(blog);
    return done(null, result.ops[0]);
  } catch (error) {
    console.log("Error in saving blog:", error);
    return done("Failed to save blog due to data errors..!");
  } finally {
    await client.close();
  }
}

const findBlogs = async function (done) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const blogs = await db.collection('blogs').find({}).toArray();
    return done(null, blogs);
  } catch (error) {
    console.log("Error in fetching blogs:", error);
    return done("Failed to fetch blogs due to data errors..!");
  } finally {
    await client.close();
  }
}

module.exports = {
  saveBlog,
  findBlogs
}
