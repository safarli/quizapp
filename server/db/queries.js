const pg = require("pg");
const pool = new pg.Pool();

const getAllQuestions = async (req, res) => {
  const client = await pool.connect();
  const queryResult = await client.query("SELECT * FROM questions_general");
  res.send(queryResult.rows);
  client.release();
};

const getQuestion = async (req, res) => {
  let questionID = req.params.id;
  const client = await pool.connect();
  let queryResult = null;
  try {
    queryResult = await client.query(
      "SELECT * FROM questions_general WHERE id=$1",
      [questionID]
    );
  } catch (e) {
    console.log(`***!!! ${e}`);
  }
  res.send(queryResult.rows);
};

module.exports = {
  getAllQuestions: getAllQuestions,
  getQuestion: getQuestion,
};
