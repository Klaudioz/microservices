import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
app.use(bodyParser.json());

// Interface for comments to define the data structure
interface Comment { 
  id: string;
  content: string;
}

// Data storage (simulating a database for this example)
const commentsByPostId: Record<string, Comment[]> = {};

// GET Route
app.get('/posts/:id/comments', (req: express.Request, res: express.Response) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// POST Route
app.post('/posts/:id/comments', (req: express.Request, res: express.Response) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body; 

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content }); 

  commentsByPostId[req.params.id] = comments; 

  res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on port 4001');
});
