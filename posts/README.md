# Posts Service API

The Posts Service API is designed to facilitate the creation and retrieval of posts. It defines endpoints to create a new post and to retrieve all existing posts.

![Posts Service Diagram](https://cln.sh/hh8WQnrmZBXjsD2z9Hyk/download)

## Endpoints

### Create a New Post

- **Path**: `/posts`
- **Method**: `POST`
- **Body**: Required - JSON object containing the title of the post.
  - Example: `{ "title": "Your Post Title" }`
- **Goal**: To create a new post with the given title.

### Retrieve All Posts

- **Path**: `/posts`
- **Method**: `GET`
- **Body**: Not required
- **Goal**: To retrieve a list of all existing posts.

## Usage

To **create a post**, send a POST request to `/posts` with a JSON body containing the post's title. 

To **retrieve all posts**, send a GET request to `/posts`. This request does not require a body.

## Testing Commands

```shell
# Creating a New Post
curl -X POST http://localhost:4000/posts \
-H "Content-Type: application/json" \
-d '{"title": "First Post"}'

# Expected Response:
# {"id":"1850126a","title":"First Post"}%

# Retrieving All Posts
curl -X GET http://localhost:4000/posts

# Expected Response:
# {"1850126a":{"id":"1850126a","title":"First Post"}}%
```

## Responses

The POST request to /posts will return the created post object along with a status code indicating success (typically 201 Created).
The GET request to /posts will return an array of post objects and a status code of 200 OK if successful.
Please ensure your requests are correctly formatted and include all necessary headers, especially for POST requests which require a Content-Type: application/json header.