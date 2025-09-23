# Blog API (Express + MongoDB + JWT)

## Setup

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. The API runs on http://localhost:5000

## Endpoints (summary)

- `POST /api/auth/register` Register
- `POST /api/auth/login` Login (returns JWT)
- `POST /api/posts` Create post (protected)
- `GET /api/posts` List posts
- `GET /api/posts/:id` Get single post
- `PUT /api/posts/:id` Update post (owner only)
- `DELETE /api/posts/:id` Delete post (owner only)
- `POST /api/comments` Create comment (protected)
- `GET /api/comments?post_id=...` List comments for a post

## Notes

- Uses MongoDB via Mongoose.
- Authentication via JWT (see `src/middleware/authMiddleware.js`).
- Basic error handling and validation included as examples.
