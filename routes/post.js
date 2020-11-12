// Show all blogposts
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

// If there is no ID provided, send this message
router.get("/", (req, res) => res.send("No Id Provided"));

// Get a post by ID
router.get("/:id", (req, res) => {
  // Get the query paramter fro mthe URL and set it to a variable
  const queryId = req.params.id;
  // Query the collection
  blogposts
    .doc(queryId) // looking up document by id
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // Checking if the document exists
        const data = doc.data(); // Assigning the document data to a variable
        return res.send(data); // send data to user who queries
      } else {
        // If no document exists, send message
        return res.send("No document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
