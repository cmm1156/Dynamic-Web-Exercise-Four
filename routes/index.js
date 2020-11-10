// Show all blogposts
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const db = firebase.firestore();
// Reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  // Inside of this arrow function, we can do aanything we along as somethign is returned at the end
  const blogpostsArray = [];

  blogposts
    .get()
    .then((querySnapshot) => {
      // console.log("querySnapshot", querySnapshot);
      // Loop through query snapshot and push to array
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
