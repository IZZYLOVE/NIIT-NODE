# 1. Get all the blogs created by user with id 17.
db.blogs.find({ "user.userId": 17 })

# 2. Update User ratings for user with id 10 to 5.
db.users.updateOne({ userId: 10 }, { $set: { "userRatings": 5 } })

# 3. Remove all the documents created by user 80, since he has deleted his account.
db.blogs.deleteMany({ "user.userId": 80 })

# 4. Add a new column to all the documents for status as "ACTIVE" as default value for all.
db.blogs.updateMany({}, { $set: { status: "ACTIVE" } })

# 5. Get all users with rating above and equal to 4.
db.users.find({ "userRatings": { $gte: 4 } })

# 6. Get all users with rating lesser to 4.
db.users.find({ "userRatings": { $lt: 4 } })

# 7. Update users with ratings more than 4 with tags as a new field and value array of ["master", "created", "blogs"]
db.users.updateMany({ "userRatings": { $gt: 4 } }, { $set: { tags: ["master", "created", "blogs"] } })

# 8. Find users who have tags value "created" and "blogs"
db.users.find({ "tags": { $all: ["created", "blogs"] } })
