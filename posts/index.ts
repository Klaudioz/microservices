import express, { Request, Response } from 'express'; // Import syntax in TypeScript
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

interface Post {
  id: string;
  title: string;
}

const app = express();
app.use(bodyParser.json());

// Using an interface to define the shape of posts object
const posts: { [key: string]: Post } = {};

// Route handler for HTTP GET requests to /posts
app.get('/posts', (req: Request, res: Response) => {
  res.send(posts); // Send all the posts have been created so far
});

// Route handler for HTTP POST requests to /posts
app.post('/posts', (req: Request, res: Response) => {
  const id = randomBytes(4).toString('hex'); // Generate a random ID for the post
  const { title } = req.body; // Destructure title from the request body
  const newPost: Post = { id, title }; // Define newPost with the Post interface for type checking
  posts[id] = newPost; // Store the post in memory
  res.status(201).send(posts[id]); // Send the newly created post back to the client
});

// Listen to HTTP requests on port 4000
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
