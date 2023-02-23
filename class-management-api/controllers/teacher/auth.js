import { db } from "../../index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { Email, Password } = await req.body;
    const sql = `SELECT * FROM teachers WHERE Email = '${Email}'`;
    const query = db.query(sql, async (err, result) => {
      if (err) console.log(err);
      const userData = result[0];
      if (!userData)
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      const isMatch = await bcrypt.compare(Password, userData.Password);
      if (!isMatch)
        return res.status(400).json({ message: "Invalid password" });
      const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET);
      delete userData.password;
      return res.status(200).json({ token, userData });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, School, EmployeeID } =
      await req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(Password, salt);

    let newTeacher = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: passwordHash,
      School: School,
      EmployeeID: EmployeeID,
    };
    let sql = "INSERT INTO teachers SET ?";
    let query = db.query(sql, newTeacher, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(result);
      return res.status(201).json({
        message: "Register Successful -- " + JSON.stringify(newTeacher),
      });
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/* Create a new students table

      "CREATE TABLE teachers (id int AUTO_INCREMENT, FirstName VARCHAR(20) NOT NULL, LastName VARCHAR(20) NOT NULL, Email VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL, School VARCHAR(255) NOT NULL, EmployeeID VARCHAR(255) NOT NULL, PRIMARY KEY (id), UNIQUE (Email, EmployeeID))"
*/
