# SKILL HUNTER

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)

## Introduction

Skill Hunter is a comprehensive web application designed to be your ultimate companion in the job hunting journey. Whether you're a fresh graduate, a seasoned professional, or someone looking for a career change, Skill Hunter is here to empower and guide you towards landing your dream job.

![homepage](public/droid-home.png)

## Dependencies

These are the dependencies used in the Skill Hunter project. They form the foundation of the web application, providing essential functionalities, UI components, and routing capabilities. Make sure to install these dependencies before running the application using `npm install` or `yarn install`.

### Prerequisites

- Node.js (v18.15.0 or later)
- npm (v9.6.7 or later)

### Front-end Dependencies

- React: v18.2.0
- React DOM: v18.2.0
- React Icons: v4.10.1
- React Router DOM: v6.14.2
- React Scripts: v5.0.1
- React Toastify: v9.1.3

### Dev Dependencies

- Tailwindcss: v3.3.3

## View deployed project

```
https://skill-hunter.onrender.com/
```

## Project Setup

### 1. Clone the repository

```
git clone https://github.com/Bisinle/Skill-Hunter
```

### 2. Navigate to the project directory

```
cd Skill-Hunter
```

### 3. Install required dependencies

In the project directory, install the required dependencies

```
npm install
```

or

```
yarn install

```

### 4. Install and start JSON server

#### Install JSON server

```
npm install -g json-server
```

#### Start JSON Server

```
json-server --watch db.json
```

- **Note:** Running this command will instruct `json-server` to use the `db.json` file in the terminal's current directory, so make sure to run this command from the same directory as this project.

#### Test the server by visiting this route in the browser

```
http://localhost:3000/careers
```

Sample:

```json
{
    "id": 1,
    "title": "Senior Software Engineer",
    "salary": 5000,
    "location": "Nairobi",
    "company": "Amazon",
    "description": "Design web and mobile applications, testing and documentation",
    "type": "full-time",
    "posted": "30/1/2023",
    "experience": 4,
    "skills": "react, js, html, css, scrum",
    "details": "The company is seeking a Software Engineer with expertise in Guidewire GOSU to join their cross-functional team in the E&S insurance segment. The engineer will collaborate with various teams to enhance and maintain systems supporting business processes. Responsibilities include delivering solutions, implementing features, estimating tasks, conducting testing, debugging, and staying updated on software design best practices..."
},

```

### 5. Start the development server

```
npm start
```

This runs the app in the development mode.

### 6. Open your browser and interact with the app

The app will open on your default browser automatically when `npm start` is run, but if it doesn't, open [http://localhost:3000](http://localhost:3000) to view it.


## Features

- New Job Listings:
    - See new job listings in the homepage.

- Job Search and Filter:
    - Easily search and filter job listings from various industries and locations. Find opportunities that match your skills and interests.

  ![filter](public/filter-bots.png)

- View Job Details:
    - Get in-depth information about each job listing, including company details, job description, required qualifications, and more.

  ![filter](public/filter-bots.png)

- An Admin Profile: 

    - The administrator profile allows priviledged users to check and edit job details as well as delete job postings.

    - They can also add new job listings as is seen on the form on the right side.

    - Applications for these jobs are received and admins can toggle view between the form and the applications.

    ![filter](public/filter-bots.png)

- Admin Profile Applications Table
    - View the list of applications made by the users on this interactive table that also allows deleting of records.

    ![filter](public/filter-bots.png)


## Acknowledgements
We would like to express our gratitude to the open-source community and all the developers whose libraries and tools have made this project possible.

Thank you for using Skill Hunter! We hope it helps you on your journey to a successful and fulfilling career. Happy job hunting! 🚀

## Authors & License

Authored by:

[Abdiwadud Mohammed](https://github.com/Bisinle)

[Arshavine Waema](https://github.com/ArshavineRoy)

[Geoffrey Bii](https://github.com/Bii-teki)

[Yusra Mohamed](https://github.com/yusram99)

[Mercy Chepchirchir](https://github.com/Mercy-chepchirchir)

[Houstin Angwenyi](https://github.com/Houstin0)



Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
