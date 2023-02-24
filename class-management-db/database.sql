CREATE DATABASE if not exists classmanage;
USE classmanage;

CREATE TABLE if not exists students (
  id int NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  School VARCHAR(255) NOT NULL,
  StudentID VARCHAR(255) NOT NULL,
  PRIMARY KEY (id), 
  UNIQUE (Email, StudentID)
);

INSERT INTO students (FirstName, LastName, Email, Password, School, StudentID) VALUES ("John", "Smith", "johnsmith2022@u.boisestate.edu", "1234", "Boise State University", "114229887"), ("Jane", "Smith", "janesmith2022@u.boisestate.edu", "123456", "Boise State University", "114229885");

CREATE TABLE if not exists teachers (
  id int NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  School VARCHAR(255) NOT NULL,
  EmployeeID VARCHAR(255) NOT NULL,
  PRIMARY KEY (id), 
  UNIQUE (Email, EmployeeID)
);

INSERT INTO teachers (FirstName, LastName, Email, Password, School, EmployeeID) VALUES ("Delores", "Umbridge", "dumbridge@boisestate.edu", "12345", "Boise State University", "223387234"), ("Harold", "Hoser", "hhoser2022@boisestate.edu", "123456", "Boise State University", "223389321");