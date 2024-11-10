# Laurea UAS Full Stack Course Guestbook Application

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Application Design and Structure](#application-design-and-structure)
4. [Features](#features)
5. [Getting Started](#getting-started)
6. [Usage](#usage)
---

## Project Overview

This project is a guestbook web application developed as part of the Laurea University of Applied Sciences Full Stack Development course. The guestbook allows users to view existing messages, add new messages via standard forms, and submit messages asynchronously using AJAX. 

The main purpose of this project is to provide a platform where users can leave and view messages easily, while also demonstrating full-stack skills in both front-end and back-end development. This application combines client-side and server-side programming, form handling, and asynchronous data submission with AJAX, creating a practical and interactive web experience.

## Technologies Used

The following technologies and frameworks were used to build this project:

- **Node.js**: Used as the back-end environment to handle server-side operations, data processing, and file system interactions.
- **Express**: A lightweight web application framework for routing and managing middleware in Node.js.
- **AJAX**: Enables asynchronous data submission without reloading the page, allowing for a seamless user experience.
- **Bootstrap**: Provides a responsive, clean, and visually appealing layout, ensuring accessibility across different screen sizes.
- **JavaScript**: Powers client-side logic, especially for handling form submission and updating the guestbook dynamically.
- **JSON**: Serves as the data storage format for messages, enabling easy read and write operations.
- **File System (fs)**: The built-in Node.js `fs` module is used to read from and write to the `messages.json` file, which simulates a simple database for storing guestbook messages.

### Special Features

- **AJAX-Based Submission**: Users can submit new messages asynchronously, and the guestbook updates without needing to reload the page.
- **Dynamic Data Display**: The application retrieves and displays data from a JSON file, simulating a database without needing a full database setup.

## Application Design and Structure

The application has been designed with a simple, user-friendly interface, focusing on ease of use and accessibility. The main sections of the application are structured as follows:

### Design and Layout
- **Navigation Bar**: Provides quick links to view the guestbook, add a new message, or submit a message using AJAX.
- **Hero Section**: Features an introductory image and text to welcome users and explain the purpose of the guestbook.
- **Footer**: Displays contact information and identifies Laurea UAS as the organizing institution.

### Structure
- **Homepage (`/`)**: Contains an introduction to the guestbook application and links to various sections.
- **Guestbook (`/guestbook`)**: Displays a list of messages in JSON format or in a formatted HTML view.
- **Add New Message (`/newmessage`)**: Standard form for adding new messages to the guestbook.
- **Add via AJAX (`/ajaxmessage`)**: Form submission using AJAX, which adds a new message without reloading the page.

## Features

- **Standard and AJAX Message Submission**: Users can submit new messages via both a standard form and an AJAX form.
- **Responsive Design**: The app uses Bootstrap to ensure it looks great on all devices.
- **JSON Data Storage**: Messages are stored in a JSON file, making it easy to read and write data without a database setup.

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/guestbook.git
    ```
2. **Install Dependencies**:
    ```bash
    cd guestbook
    npm install
    ```
3. **Run the Application**:
    ```bash
    node app.js
    ```
4. **Open the Application in Your Browser**:
    Navigate to `http://localhost:3000` to access the guestbook.

## Usage

- **Viewing Messages**: Visit `/guestbook` to see a list of all messages.
- **Adding a New Message**: Visit `/newmessage` to submit a new message using a standard form.
- **Adding a Message via AJAX**: Visit `/ajaxmessage` to submit a new message using AJAX for a seamless experience.

