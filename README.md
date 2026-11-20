# doomsday-ready-backend

## Setup

Create a `.env` file with your MongoDB connection string:

```env
PORT=5000
MONGODB_URL=mongodb://127.0.0.1:27017/doomsday-ready
```

Start the development server with `npm run dev`. The server connects to MongoDB
before accepting requests.

## Create a movie

`POST /api/movies`

```json
{
  "title": "Example Movie",
  "description": "A short description",
  "genre": "Drama",
  "releaseYear": 2024,
  "director": "Example Director",
  "posterUrl": "https://example.com/poster.jpg",
  "rating": 8.5
}
```

Only `title` is required. A successful request returns `201 Created` with the
saved movie in the `data` field.
