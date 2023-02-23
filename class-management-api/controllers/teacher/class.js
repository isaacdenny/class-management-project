import { db } from "../../index.js";

export const getClass = async (req, res) => {
  try {
    const { id } = req.params
    let sql = `SELECT * FROM classes WHERE ClassID = '${id}'`;

    let query = db.query(sql, (err, result) => {
      if (err) res.status(500).json(err.message);
      else {
        let data = result[0];
        res.status(200).json(data);
        console.log(data);
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClasses = async (req, res) => {
  try {
    // const { id } = req.body;
    // let sql = `SELECT * FROM classes WHERE ClassID = '${id}'`;

    // let query = db.query(sql, (err, result) => {
    //   if (err) res.status(500).json(err);
    //   else res.status(200).json(result);
    // });
    console.log("NOT IMPLEMENTED");
    res.status(500).json({ error: "NOT IMPLEMENTED" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createClass = async (req, res) => {
  try {
    const { ClassID, Title, Description, Teacher, ClassDays, School, StartTime, EndTime } = req.body;
    const newClass = {
      ClassID: ClassID,
      Title: Title,
      Description: Description,
      Teacher: Teacher,
      ClassDays: ClassDays,
      School: School,
      StartTime: StartTime,
      EndTime: EndTime
    }
    let sql = "INSERT INTO classes SET ?";
    let query = db.query(sql, newClass, (err, result) => {
      if (err) res.status(500).json(err.message);
      else res.status(200).json({ message: "Class Successfully Created"});
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const modifyClass = async (req, res) => {
  try {
    const {
      ClassID,
      Title,
      Description,
      Teacher,
      ClassDays,
      School,
      StartTime,
      EndTime,
    } = req.body;
    let sql = `UPDATE classes SET Title = '${Title}', Description = '${Description}', Teacher = '${Teacher}', ClassDays = '${ClassDays}', StartTime = '${StartTime}', EndTime = '${EndTime}' WHERE ClassID = '${ClassID}'`;
    let query = db.query(sql, (err) => {
      if (err) res.status(500).json(err.message);
      else res.status(200).json({ message: "Class Successfully Modified" });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Create a new students table

      "CREATE TABLE classes (id int AUTO_INCREMENT, ClassID VARCHAR(255), Title VARCHAR(20) NOT NULL, Description VARCHAR(20) NOT NULL, Teacher VARCHAR(255) NOT NULL, ClassDays VARCHAR(3) NOT NULL, School VARCHAR(255) NOT NULL, StartTime TIME NOT NULL, EndTime TIME NOT NULL, PRIMARY KEY (id), UNIQUE (ClassID));"
*/
