# Todo-Examination
This is a web application for managing personal to-do lists, built using a full-stack architecture with Express.js for the backend and React.js for the frontend. It allows users to create, update, and delete their to-dos, as well as add friends, see their friends' to-dos, and login and register with secure token and cookie-based authentication. The application uses an SQL database for storing user data and to-do lists.

Requirements

* Node.js
* NPM
* SQL Database

Installation

* Clone the repository to your local machine
* Navigate to the backend directory of the project in the command line
* Run npm install to install all the required dependencies
* Navigate to the frontend directory in the command line
* Run npm install again to install the frontend dependencies
* Return to the backend/src and create a new file called .env
* Copy the contents of .env.example into the new .env file and replace the values with your own configurations (i.e., database credentials, JWT secret, etc.)

.env file contains
--------------
host = "localhost"
user= ""
password= ""
database= ""

secret = ""
---------------

* Navigate to backend/src and run ,nodemon server.js
* Navigate to frontend and run, npm run start


Features

Authentication
* Login and registration pages with secure token and cookie-based authentication
* Passwords are encrypted using bcrypt.js
* stored in SQL databse

To-Do List
* Users can create, edit, and delete their to-dos.
* To-dos can be marked as complete or incomplete
* Users can view their to-dos and their friends' to-dos
* To-dos are stored in the SQL database

Friends
* Users can add friends by their username
* Users can view their friends' to-dos
* Friends are stored in the SQL database as a separate table

Technologies Used

* React.js
* React-Router-DOM
* Express.js
* Node.js
* bcrypt
* dotenv
* joi
* jsonwebtoken
* mysql2
* nodemon

future plans

* Reminder Notifications: I'd like to add a notification system that reminds users of upcoming to-do items. This feature could be customizable, so users can choose when and how they receive notifications.
* Collaborative To-Do Lists: I think it would be helpful to allow users to create and collaborate on to-do lists with their friends. This could involve assigning tasks to specific users, setting deadlines, and tracking progress.
