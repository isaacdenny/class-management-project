# class-management-project
Class Management application portal for teachers and students

## Project Summary
This full-stack application provides students and teachers with a platform 
to view all of their classes in a calendar form. Teachers can add, or 
remove their classes. Students can enroll in classes at their university.

## Technologies

### API
- NodeJS

### Testing
- Postman

### Routing
- Express

### Deployment
- Docker

### Hosting
- Firebase
- Vercel

### Database
- MySQL

### Dev Environment
- NextJS
- Typescript
- Eslint
- NodeJS

### State Management
- Redux

## Local Development
1. Clone this repo and `cd` into the repo directory
2. Make sure you have Docker and Docker-Compose installed
4. Launch the Docker containers with: `docker-compose up`

## Schema

### Student

- id (PK)
- username
- email (UNIQUE)
- password
- studentID (UNIQUE)
- created_at
- updated_at

### Teacher

- id (PK)
- username
- email (UNIQUE)
- password
- created_at
- updated_at

### Class

- id (PK)
- title
- description
- teacher (teacher.id)
- meeting_time
- meeting_dates
- created_at
- updated_at
- published_status

### Class-Student Connection Table

- class.id
- student.id

## Design API

#### /auth/student/login
- Email, Password

#### /auth/teacher/login
- Email, Password

#### /auth/student/register
- Student Schema

#### /auth/teacher/register
- Teacher Schema

#### classes/
- GET: list of classes
- POST: create a new class
- DELETE: delete class

#### classes/:id
- GET: class at id
- PATCH: update class
- DELETE: delete class

#### teachers/:id/
- GET
- DELETE

#### students/:id/
- GET
- DELETE

## Planning TODOs
- [x] List all requirements
- [x] Create Schema
- [x] Design API
- [x] Design DB relations
- [x] Create Mockups
- [x] Choose Technologies
