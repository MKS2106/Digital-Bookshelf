# Digital BookShelf API
A simple RESTful API built with Node.js and Express for managing a library’s book inventory.

## Features
- Create new book records  
- View all books  
- Find a book by ID  
- Update a book’s information  
- Remove a book from the collection  

## Technologies Used
- Node.js  
- Express.js  
- JSON for data exchange  

### Prerequisites
- Node.js installed on your machine  
- nodemon Installed(npm i -D nodemon)
- dotenv Installed(npm i dotenv)
- mongoose Installed(npm i mongoose)
- Postman

### Steps to run 
- Clone the repository 
- Navigate to project directory(cd to directory)
- Install dependencies npm init y 
- Update pakage.json file as per requirement
- Add and update .env file and add the DB connection key
- Run the server (npm run dev)

### API End point 
- GET : 
1. `/api/books`
2. `/api/book/book_id`

- POST
1. `api/books`
 request body 
 {
  "title": "string",
  "author": "string"
 
}

- PUT
1. `api/books/book_id`
request body
{
  "title": "Updated_string",
  "author": "string"
}

- Delete
1. `api/books/book_id`