const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Configuration Values for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEm1eiR_jGZqYNY8LvyrhrL50DVd4pbYo",
  authDomain: "exercise-four-500f8.firebaseapp.com",
  databaseURL: "https://exercise-four-500f8.firebaseio.com",
  projectId: "exercise-four-500f8",
  storageBucket: "exercise-four-500f8.appspot.com",
  messagingSenderId: "508889392789",
  appId: "1:508889392789:web:c960ce85af8c49873bdd9c",
};

// Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import  -- THESE ARE FILE LOCATIONS --
const indexRoute = require("./routes/index.js"); // use ./ when the folder/item starts in the base folder
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");
const submitRoute = require("./routes/createBlogpost.js");

// Routes  -- THESE ARE WEBSITE URL ROUTES --
app.use("/", indexRoute); // localhost:4000/
app.use("/post", postRoute); // localhost:4000/post
app.use("/create", createRoute); // localhost:4000/create
app.use("create/submit", submitRoute); // localhost:4000/create/submit

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
