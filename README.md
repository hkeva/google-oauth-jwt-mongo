# Google OAuth JWT Auth Server

A simple authentication server built with Node.js, Express, Google OAuth, JWT, and MongoDB.  
This project demonstrates secure login using Google and issuing JWT tokens stored in HttpOnly cookies.


## Installation

Clone the repository

git clone https://github.com/yourusername/google-oauth-jwt-auth-server.git

Go to project folder

cd google-oauth-jwt-auth-server

Install dependencies

npm install


## Environment Variables

Create a `.env` file in the root folder

Example:

PORT=3000

MONGO_URI=your_mongodb_connection

GOOGLE_CLIENT_ID=your_client_id  
GOOGLE_CLIENT_SECRET=your_client_secret  
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback  

JWT_SECRET=your_secret


## Run the project

Development mode:

npm run dev

Production mode:

npm start
