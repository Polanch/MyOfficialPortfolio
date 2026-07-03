# Portfolio Backend — Spring Boot Setup Instructions

> **Give this entire file to GitHub Copilot in IntelliJ** and ask it to generate the full Spring Boot project.

---

## Project Metadata (Spring Initializr)

| Field        | Value                         |
|--------------|-------------------------------|
| Build        | Maven                         |
| Language     | Java                          |
| Spring Boot  | 3.5.x (latest stable)         |
| Group        | `com.polanch`                 |
| Artifact     | `portfolio-backend`           |
| Name         | `portfolio-backend`           |
| Package Name | `com.polanch.portfolio`       |
| Packaging    | Jar                           |
| Java         | 26                            |

### Dependencies to add via Spring Initializr or pom.xml

- **Spring Web** (`spring-boot-starter-web`)
- **Spring Data JPA** (`spring-boot-starter-data-jpa`)
- **MySQL Driver** (`mysql-connector-j`)
- **Spring Boot DevTools** (`spring-boot-devtools`, scope: runtime, optional)
- **Validation** (`spring-boot-starter-validation`)

---

## Directory Structure (Spring MVC)

```
src/main/java/com/polanch/portfolio/
├── PortfolioBackendApplication.java
├── config/
│   └── CorsConfig.java
├── controller/
│   └── ReviewController.java
├── entity/
│   └── Review.java
├── repository/
│   └── ReviewRepository.java
└── service/
    └── ReviewService.java

src/main/resources/
└── application.properties
```

---

## 1. `PortfolioBackendApplication.java`

```java
package com.polanch.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(PortfolioBackendApplication.class, args);
    }
}
```

---

## 2. `entity/Review.java`

```java
package com.polanch.portfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @Min(1) @Max(5)
    @Column(nullable = false)
    private int rating;

    @NotBlank
    @Column(nullable = false, length = 5000)
    private String comment;

    @Column(columnDefinition = "LONGTEXT")
    private String avatar;

    @Column(nullable = false)
    private LocalDate date;

    // --- Getters & Setters ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
}
```

---

## 3. `repository/ReviewRepository.java`

```java
package com.polanch.portfolio.repository;

import com.polanch.portfolio.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByOrderByDateDesc();
}
```

---

## 4. `service/ReviewService.java`

```java
package com.polanch.portfolio.service;

import com.polanch.portfolio.entity.Review;
import com.polanch.portfolio.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAllByOrderByDateDesc();
    }

    public Review createReview(Review review) {
        if (review.getDate() == null) {
            review.setDate(LocalDate.now());
        }
        return reviewRepository.save(review);
    }
}
```

---

## 5. `controller/ReviewController.java`

```java
package com.polanch.portfolio.controller;

import com.polanch.portfolio.entity.Review;
import com.polanch.portfolio.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {
        return ResponseEntity.ok(reviewService.getAllReviews());
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@Valid @RequestBody Review review) {
        Review saved = reviewService.createReview(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
```

---

## 6. `config/CorsConfig.java`

```java
package com.polanch.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }
}
```

---

## 7. `src/main/resources/application.properties`

```properties
# Server
server.port=8080

# MySQL DataSource
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.properties.hibernate.format_sql=true
```

> **Replace `YOUR_MYSQL_PASSWORD`** with your actual MySQL root password before running.

---

## 8. MySQL — One-Time Database Setup

Run this in MySQL Workbench or any MySQL client **before** starting Spring:

```sql
CREATE DATABASE IF NOT EXISTS portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Spring's `ddl-auto=update` will automatically create the `reviews` table on first boot.

### Optional: Seed the initial reviews

```sql
USE portfolio_db;

INSERT INTO reviews (name, rating, comment, avatar, date) VALUES
('Jane D.',  5, 'Loved browsing through this site — clean, warm, and full of personality. The coffee shop theme is such a fun touch!', '', '2026-05-12'),
('Mark T.',  4, 'Great portfolio! Would love to see more project breakdowns, but overall a really solid first impression.',             '', '2026-05-20'),
('Riza P.',  5, 'The attention to detail in the design is amazing. Feels like a real café menu but for code projects. Love it!',       '', '2026-06-02');
```

---

## How the Frontend Connects

The React frontend (Vite, port **3000**) is already configured with a proxy:

```
POST /api/reviews  →  http://localhost:8080/api/reviews   (submit a letter)
GET  /api/reviews  →  http://localhost:8080/api/reviews   (load all letters)
```

### Request body for POST `/api/reviews`

```json
{
  "name": "John D.",
  "rating": 5,
  "comment": "Great portfolio!",
  "avatar": "",
  "date": "2026-07-03"
}
```

### Response shape (matches the React `LetterCard` component)

```json
{
  "id": 1,
  "name": "John D.",
  "rating": 5,
  "comment": "Great portfolio!",
  "avatar": "",
  "date": "2026-07-03"
}
```

---

## Running Both Together

1. Start MySQL and create `portfolio_db`
2. Update `application.properties` with your MySQL password
3. Run the Spring Boot app (`./mvnw spring-boot:run` or click ▶ in IntelliJ)
4. Run the React frontend (`npm run dev` in the `my-portfolio-beta3.0` folder)
5. Open `http://localhost:3000` — reviews will load from the database live
