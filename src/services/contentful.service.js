const { createClient } = require("contentful");

let service = {};
const config = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  token: process.env.CONTENTFUL_TOKEN
};

let client = null;

service.getHomeContent = getHomeContent;
service.getBlogPosts = getBlogPosts;

module.exports = service;

function getHomeContent() {
  client = createClient({
    space: config.spaceId,
    accessToken: config.token
  });

  return client
    .getEntries({
      content_type: "home"
    })
    .then(response => response.items);
}

function getBlogPosts() {
  console.log(config);
  client = createClient({
    space: config.spaceId,
    accessToken: config.token
  });

  return client
    .getEntries({
      content_type: "blog",
      order: "-sys.createdAt" // Ordering the entries by creation date
    })
    .then(response => response.items);
}
