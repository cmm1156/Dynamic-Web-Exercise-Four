// Show all blogposts
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("Show All Blogposts"));

module.exports = router;
