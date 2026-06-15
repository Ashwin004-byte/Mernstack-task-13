# Task 13 - File Uploads & Media Management

## Overview

This project demonstrates file upload and media management using Multer, Cloudinary, and MongoDB. Users can upload profile images, store them securely in cloud storage, and save image URLs in the database.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Cloudinary
* dotenv
* CORS

## Features

* Upload profile images
* Handle multipart/form-data using Multer
* Store images on Cloudinary
* Save image URLs in MongoDB
* Retrieve uploaded user information
* REST API implementation

## API Endpoints

### Upload Image

POST /upload

### Get All Users

GET /users

## Project Structure

```text
MERN-Task-13
│
├── Config
│   └── cloudinary.js
│
├── Middleware
│   └── upload.js
│
├── Models
│   └── User.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Learning Outcomes

* Handling file uploads in Express.js
* Managing media assets using Cloudinary
* Working with multipart/form-data
* Integrating cloud storage services
* Saving cloud-hosted image URLs in MongoDB

## Outcome

Successfully implemented image upload functionality using Multer and Cloudinary while storing image URLs in MongoDB for efficient media management.
