# Portfolio Backend API Summary

## Overview
Your Spring Boot backend is **running on `http://localhost:8080`** and stores all reviews in a MySQL database. The frontend can fetch and submit reviews via REST API endpoints.

---

## 🔗 API Endpoints

### 1. GET `/api/reviews` — Fetch All Reviews
**What it does:** Returns all reviews from the database, sorted by newest first.

**Frontend usage:**
```javascript
const response = await fetch('http://localhost:3000/api/reviews');
const reviews = await response.json();
console.log(reviews);
```

**Response (JSON array):**
```json
[
  {
    "id": 1,
    "name": "Jane D.",
    "rating": 5,
    "comment": "Loved browsing through this site!",
    "avatar": "data:image/png;base64,...",
    "date": "2026-05-12"
  },
  {
    "id": 2,
    "name": "Mark T.",
    "rating": 4,
    "comment": "Great portfolio!",
    "avatar": "",
    "date": "2026-05-20"
  }
]
```

---

### 2. POST `/api/reviews` — Submit a New Review
**What it does:** Creates a new review and stores it in the database.

**Frontend usage:**
```javascript
const newReview = {
  name: "John D.",
  rating: 5,
  comment: "Amazing work!",
  avatar: "data:image/png;base64,...", // or empty string
  date: "2026-07-03"
};

const response = await fetch('http://localhost:3000/api/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newReview)
});

const savedReview = await response.json();
console.log(savedReview); // Returns the review with generated ID
```

**Request body (JSON):**
```json
{
  "name": "string (required)",
  "rating": "number 1-5 (required)",
  "comment": "string (required)",
  "avatar": "base64 string or URL (optional)",
  "date": "YYYY-MM-DD (optional - defaults to today)"
}
```

**Response (JSON):**
```json
{
  "id": 3,
  "name": "John D.",
  "rating": 5,
  "comment": "Amazing work!",
  "avatar": "data:image/png;base64,...",
  "date": "2026-07-03"
}
```

---

## 📊 Database Structure

The backend automatically creates this table on first run:

```sql
CREATE TABLE reviews (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  rating INT NOT NULL (1-5),
  comment VARCHAR(5000) NOT NULL,
  avatar LONGTEXT,
  date DATE NOT NULL
);
```

**Connection details:**
- Host: `localhost`
- Port: `3306`
- Database: `portfolio_db`
- User: `root`
- Password: `YOUR_MYSQL_PASSWORD`

---

## 🖼️ How Images Work

**Avatar images are stored as base64 strings in the database:**

1. **Frontend captures image** → Converts to base64 string
2. **Sends to backend** via POST `/api/reviews` with `avatar: "data:image/png;base64,..."`
3. **Backend stores** the base64 string in the `reviews.avatar` column
4. **Frontend retrieves** the base64 string from GET `/api/reviews`
5. **Frontend displays** directly: `<img src={avatar} />`

**Example in React:**
```javascript
// Convert file to base64
const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

// Upload with image
const handleSubmit = async (name, rating, comment, imageFile) => {
  let avatar = "";
  if (imageFile) {
    avatar = await fileToBase64(imageFile);
  }

  const response = await fetch('http://localhost:3000/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, rating, comment, avatar })
  });

  return response.json();
};
```

---

## ⚙️ CORS Configuration

The backend allows requests **only from `http://localhost:3000`** (your React frontend).

**Allowed methods:** GET, POST, PUT, DELETE, OPTIONS  
**Allowed headers:** All (`*`)

If you move the frontend to a different URL, you'll need to update the backend's `CorsConfig.java`.

---

## 🚀 Project Structure

```
portfolio-backend/
├── src/main/java/com/polanch/portfolio/
│   ├── PortfolioBackendApplication.java      (Main entry point)
│   ├── config/
│   │   └── CorsConfig.java                   (CORS setup)
│   ├── controller/
│   │   └── ReviewController.java             (API endpoints)
│   ├── entity/
│   │   └── Review.java                       (Database model)
│   ├── repository/
│   │   └── ReviewRepository.java             (Database access)
│   └── service/
│       └── ReviewService.java                (Business logic)
└── src/main/resources/
    └── application.properties                (Config: MySQL, port 8080)
```

---

## 🔧 Validation Rules

**When submitting reviews, these rules apply:**

| Field | Rule |
|-------|------|
| `name` | Required, cannot be blank |
| `rating` | Required, must be 1-5 |
| `comment` | Required, cannot be blank, max 5000 chars |
| `avatar` | Optional, stored as base64 or URL |
| `date` | Optional, defaults to today if not provided |

If validation fails, you'll get a **400 Bad Request** error.

---

## 📡 Connection Flow

```
React Frontend (port 3000)
        ↓
   Vite proxy
        ↓
Spring Boot Backend (port 8080) — /api/reviews
        ↓
   ReviewController
        ↓
   ReviewService
        ↓
   ReviewRepository
        ↓
   MySQL Database (localhost:3306/portfolio_db)
```

---

## ✅ Backend Status

- **Server:** Running on `http://localhost:8080`
- **Database:** Connected to MySQL `portfolio_db`
- **API:** Ready to accept requests from `http://localhost:3000`
- **Tables:** `reviews` table auto-created

**Start the backend:**
```bash
cd C:\Users\John Lloyd\IdeaProjects\portfolio-backend
.\mvnw spring-boot:run
```

Now your frontend can fetch and submit reviews! 🎉
