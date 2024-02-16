# Posts Service API

The Posts Service API is designed to facilitate the creation and retrieval of posts. It defines endpoints to create a new post and to retrieve all existing posts.

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

To **create a post**, send a POST request to `/posts` with a JSON body containing the post's title. For example:

```json
{
  "title": "Hello World"
}
```

![Posts Service Diagram](https://cln.sh/hh8WQnrmZBXjsD2z9Hyk/download)