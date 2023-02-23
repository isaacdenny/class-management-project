import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.js";
import teacherRoutes from "./routes/teacher.js";
import helmet from "helmet";
import mysql from "mysql";

/* LOAD ENV */
dotenv.config();

/* CREATE DB CONNECTION */
export const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "classmanage",
});

/* CONNECT */
db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected successfully");
});

/* CONFIGURATIONS */
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

/* START SERVER */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
