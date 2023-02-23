import { db } from "../../index.js";

export const search = async (req, res) => {
  const { keyword } = req.body;
  const sql = `SELECT * FROM teachers WHERE (FirstName LIKE '%${keyword}%' OR LastName LIKE '%${keyword}%' OR Email LIKE '%${keyword}%'  OR School LIKE '%${keyword}%')`;
  const query = db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    console.log(result);
    res.status(200).json(result);
  });
};
