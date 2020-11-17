// Show all blogposts
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

const form = `
<form action="/create/submit">
  <input type="text" name="title" placeholder="Title of Post" />
  <input type="text" name="text" placeholder="Text of Post" />
  <input type="text" name="author" placeholder="Author" />
  <button type="submit">Submit Post</button>
</form>
`;

// Default route serves form
router.get("/", (req, res) => res.send(form));
// Route for submitting the form
router.get("/submit", (req, res) => {
  const queryParams = req.query; // ?title=words&text=words&author=words... { title: "text", }
  // custom IDs for our posts
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase(); // for any spaces, replace with a dash
  // inputting 'My Post' will become 'my-post' // ID is shown in Firestore console

  blogposts
    .doc(idFromTitle)
    .set(queryParams) // ?title=words&text=words&author=words
    .then(function (doc) {
      res.send(
        `<h1>Successful Submission</h1><p><a href="/create">Create another post</a></p>`
      );
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
}); // localhost:4000/submit -- this will post 'Successful..' or 'Failed..' to localhost:4000/submit

module.exports = router;
