const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
// console.log(__dirname);
const { logout, login, addUser } = require(`${__dirname}/controllers/authCtrl`);
const {
  getPost,
  getPostsByUserId,
  uploadPost
} = require(`${__dirname}/controllers/postCtrl`);
massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, ///why do I have to set this to true
    /////wtf is the difference
    cookie: {
      maxAge: 100000
    }
  })
);

// AUTH ENDPOINTS

app.get("/api/auth/logout", logout);
app.post("/api/auth/register", addUser);
app.post("/api/auth/login", login);

app.get("/api/posts/:userid", getPostsByUserId);
app.get("/api/post/:postid", getPost);
app.post("/api/post/:userid", uploadPost);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
