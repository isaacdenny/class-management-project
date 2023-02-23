import { db } from "../../index.js"

export const getClass = async (req, res) => {
  try {
    const { id } = req.params
    let sql = `SELECT * FROM classes WHERE ClassID = '${id}'`

    let query = db.query(sql, (err, result) => { 
      if (err) res.status(500).json(err.message)
      else {
        let data = result[0]
        res.status(200).json(data)
        console.log(data)
      }
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

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