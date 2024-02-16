const express = require('express'); // Express module
const bodyParser = require('body-parser'); // Parse HTTP request bodies in middleware
const { randomBytes } = require('crypto'); // Cryptographic random number generation module}
const app = express(); // Express instance
const posts = {}; // Store all the posts in memory

app.use(bodyParser.json()); // Parse HTTP request bodies in middleware)

// route handler for HTTP GET requests to /posts
app.get('/posts', (req, res) => {
  res.send(posts); // Send all the posts have been created so far
  });

// route handler for HTTP POST requests to /posts
app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex'); // Generate a random ID for the post
  const { title } = req.body; // Get the title from the request body
  posts[id] = { id, title }; // Store the post in memory
  res.status(201).send(posts[id]); // Send the post back to the client
  });

// listen to HTTP requests on port 4000
app.listen(4000, () => {
  console.log('Server running on port 4000');
  });