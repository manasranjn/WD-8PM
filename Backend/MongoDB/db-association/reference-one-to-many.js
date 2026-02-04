import express from "express"
import "dotenv/config"
import mongoose from "mongoose"

const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log(err.message);
    })

// Referencing
const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

//User
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);

//Create user
// User.create({
//     name: "John",
//     email: "john@gmail.com",
// })
//     .then((user) => console.log(user))
//     .catch((e) => console.log(e));

//Create Posts with user associated
// Post.create([
//     {
//         title: "HTML Basics",
//         content: "Learn more on html",
//         author: "693d5a62c29f428ac5ba2bae",
//     },
//     {
//         title: "Express Routing",
//         content: "Organize routes with ease",
//         author: "693d5a62c29f428ac5ba2bae",
//     },
// ])
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e));

//!Fetch posts with it's user
Post.find()
    .populate("author")
    .then((postsWithUser) => console.log(postsWithUser))
    .catch((e) => console.log(e));

app.listen(5000, () => {
    console.log("Server is running");
})