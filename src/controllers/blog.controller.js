var express = require("express");
var router = express.Router();
var contentfulService = require("./../services/contentful.service");

// routes
router.get("/getposts", getPosts);

module.exports = router;

function getPosts(req, res) {
  contentfulService
    .getBlogPosts()
    .then(function(posts) {
      res.send(posts);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}