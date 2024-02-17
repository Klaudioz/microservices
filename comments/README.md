# Comments Service API

The Comments Service API is designed to manage comments associated with specific posts. It allows clients to create a new comment for a post and to retrieve all comments associated with a post.

![Comments|500](https://cln.sh/QDmtLwJRlVjsCHNRPDDQ/download)
![CommentsByPostId|500](https://cln.sh/d9nTNJ2lD4vflRmfcWmT/download)


## Endpoints

### Create a Comment

- **Path**: `/posts/:id/comments`
- **Method**: `POST`
- **Body**: Required - JSON object containing the content of the comment.
  - Example: `{ "content": "Your Comment Content" }`
- **Goal**: To create a comment associated with the given post ID.

### Retrieve All Comments

- **Path**: `/posts/:id/comments`
- **Method**: `GET`
- **Body**: Not required
- **Goal**: To retrieve all comments associated with the given post ID.

## Usage

To **create a comment**, replace `:id` with the ID of the post and send a POST request to `/posts/:id/comments` with a JSON body containing the content of the comment.

To **retrieve all comments** for a post, replace `:id` with the ID of the post and send a GET request to `/posts/:id/comments`. This request does not require a body.

## Testing Commands

```shell
# Creating a New Comment for a Post
curl -X POST http://localhost:4001/posts/123/comments \
-H "Content-Type: application/json" \
-d '{"content": "This is a great post!"}'

# Expected Response:
# {"id":"c90d6a","content":"This is a great post!"}%

# Retrieving All Comments for a Post
curl -X GET http://localhost:4001/posts/123/comments

# Expected Response:
# [{"id":"c90d6a","content":"This is a great post!"}]%
```

## Responses

The POST request to /posts/:id/comments will return the created comment object along with a status code indicating success (typically 201 Created).
The GET request to /posts/:id/comments will return an array of comment objects and a status code of 200 OK if successful.
Please ensure your requests are correctly formatted and include all necessary headers, especially for POST requests which require a Content-Type: application/json header.