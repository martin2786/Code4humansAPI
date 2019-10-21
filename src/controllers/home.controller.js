var express = require("express");
var router = express.Router();
var contentfulService = require("./../services/contentful.service");

// routes
router.get("/", getMainContent);

module.exports = router;

function getMainContent(req, res) {
  contentfulService
    .getHomeContent()
    .then(function(content) {
      console.log(content);
      let result = {};
      if (content[0].fields.name === "Main content") {
        result = content[0];
      }

      res.send(result);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
