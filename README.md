Mediku - Project Installation and Setup Guide
Welcome to the Mediku project. This project is a web application built with React that allows users to log in, access different dashboards based on roles (e.g., admin, user), and manage content securely. Below are the instructions to set up the project on your local machine and get started.

Table of Contents
Prerequisites
Installation
Running the Project
Accessing Different Dashboards
Contribution
License
Prerequisites
Before you start, ensure you have the following installed:

Node.js (LTS version recommended)
npm (Node Package Manager)
You can download Node.js and npm from Node.js website.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/mediku.git
cd mediku
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

You need to create a .env file in the root of your project with the following variables:
env
Copy code
REACT_APP_API_URL=https://your-api-url.com
Build the project:

bash
Copy code
npm run build
Start the development server:

bash
Copy code
npm run start
The application should now be running on http://localhost:3000.

Running the Project
To run the project locally:

Start the development server:

bash
Copy code
npm start
This will compile your code and launch the project on http://localhost:3000.

Login to access different dashboards:

Admin: You can log in with the following credentials:
Email: admin@example.com
Password: admin123
The dashboard will redirect you to the admin panel if the login is successful.
User Dashboard: After login, users will be redirected to the appropriate dashboard based on their role (currently only admin).

Accessing Different Dashboards
Login Page: To access the application, open http://localhost:3000 in your browser.

Login Form:

Enter your email and password.
Click on Log In.
Redirection:

If logged in as admin, you will be redirected to the admin-dashboard.html.
Users with other roles will be redirected to their respective dashboards (to be implemented).
Contribution
We welcome contributions from the community! If you would like to contribute to the Mediku project:

Fork the repository.
Create a new branch: git checkout -b feature-branch
Make your changes and commit: git commit -am 'Add new feature'
Push to the branch: git push origin feature-branch
Create a pull request on GitHub.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please reach out to:

Developer: Olivier N Dev
