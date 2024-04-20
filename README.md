# Book App

## Introduction

The Book App is a simple full-stack web application designed to manage a collection of books. It allows users to view, add, edit, and delete books from a database. The application is built using a combination of React for the frontend and Laravel for the backend.

## Getting Started

### Prerequisites

To run the Book App locally, ensure you have the following tools installed:

- Node.js (v16+)
- NPM
- MySQL
- PHP
- Composer

### Installation:

1. Clone the repository:

```bash
git clone https://github.com/Kehindecodes/book-app

```

2. Navigate to the project directory:

```bash
cd Book-App

```

3. Install backend and frontend dependencies:

```bash
# Install backend dependencies
cd server
composer install

# Install frontend dependencies
cd ../client/book-app
npm install

```

4. Configure Database:
- Edit `server/config/database.php` with your MySQL credentials.

## Project Structure

The project is organized into server and client folders, each with its own set of files and directories.

## Backend

### Technology Used:

- PHP
- Laravel
- MySQL

### Setup:

1. Navigate to the server directory:

```bash
cd server

```

1. Install Dependencies:

```bash
composer install

```

1. Configure database in `server/.env` with your MySQL credentials.
2. Run the backend server:

```bash
php artisan serve

```

### **Environment Variables:**

- `DB_CONNECTION`: Your MySQL database connection type (usually `mysql`).
- `DB_HOST`: Your MySQL server hostname or IP address.
- `DB_PORT`: Your MySQL server port (usually `3306`).
- `DB_DATABASE`: Your MySQL database name.
- `DB_USERNAME`: Your MySQL username.
- `DB_PASSWORD`: Your MySQL password.

## API Endpoints:

All API responses are delivered in JSON format, with clear error codes and messages for handling unsuccessful requests.

- `GET /api/v1/books` : Retrieve a list of books.
- `POST /api/v1/books` : Create a new book.
- `GET /api/v1/books/:id` : Retrieve details for a specific book.
- `PATCH /api/v1/books/:id` : Update a specific book.
- `DELETE /api/v1/books/:id` : Delete a specific book.

## Database Schema:
The MySQL database includes tables for **`books`,`authors` and `book_authors`**. Refer to **`server/database/migrations`** for the database schema.

## Frontend

### Technology used:

- React.js
- TypeScript
- TailwindCSS

### Setup:

1. Navigate to the frontend directory:

```bash
cd client/book-app

```

1. Install dependencies:

```bash
npm install

```

1. Run the frontend development server:

```bash
npm run dev

```
