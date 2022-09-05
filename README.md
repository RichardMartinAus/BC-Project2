# SEASIDE CAFE
The project has been developed for Seaside cafe to enhance their online presence.

# Table of Contents
1. [Description](#Description)
2. [Get_Started](#Get_Started)
3. [Using_the_Application](#Using_the_Application)
4. [Images](#Images)
5. [Questions](#Questions)

## Description 
This web-application built for Seaside Cafe provides a easy point of contact for clients before visiting the cafe as well as knowing what is being served at Seaside cafe. The users are able to view what all dishes are being offered by the cafe and the prices. 
They are also able to reserve a table at the cafe for the current or/and future dates. 
It also offers personalised page to the user, where users can log in by creating their account on the website.

## Get Started
you will need to clone repository from https://github.com/RichardMartinAus/Seaside-Cafe.git

The project depandencies can be downloaded via npm package manager using ```npm install``` command.

We need to create a database 'cafe_db' in 'MySql' by loging into mySql using command terminal and typing command ```mysql -u root -p``` & typing the mysql password when prompted.

Once the database is created, we need to create tables by running the ```npm start``` script.

Once the tables are in place, we need to populate the database by seeding the tables with data by running the script seeds\index.js using terminal

We connect to the server via dotenv.

## Using the Application
The application has been developed with help of both front end and back end code using MVC concept. It creates the front end UI, which helps users to interact with the application.


## Images/Assets
The following images will depict the functionality of the web applicaton

### Home Page
![The homepage displays link to menu page, login page, booking page](./public/images/01_mainpage.jpg)

### Menu Page
![The menupage displays the dishes that the cafe is offering, the records are being pulled in from a database](./public/images/02_menupage.jpg)

### Login Page
![The page displays placeholder for the users to put in their username and password to that they can be validated and have access to userdash board](./public/images/03_loginpage.jpg)

### Signup Page
![The page offers users to input their credentials and sign up to have a account created, which can be accessed by their login/password](./public/images/signup.jpg)

### User dash
![The page displays user details once the user is logged in](./public/images/05currentBooking.jpg)

### Create Booking Page
![The page offers users to reserve a table at the restrauant by creating a booking ](./public/images/04_bookingpage.jpg)


### Application  
The application has been hoisted on cloud by using a cloud service platform called Heroku. The link to the application is: https://seaside-cafe.herokuapp.com/

## Collaborators
The application is a collaborative efforts of the below developers <br>
Richard Martin, <br> 
Ning Bong, <br>
Zixin Ye and <br>
Anuraag Saini

## Question / inquireies / suggestions 
For questions can be directed to us at the below addresses:
github Username: RichardMartinAus
email: richard.martin001@gmail.com
