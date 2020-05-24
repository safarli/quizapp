const pg = require("pg");
const pool = new pg.Pool();

const getUsers = async (req, res) => {
  const client = await pool.connect();
  const queryResult = await client.query("SELECT * FROM questions_general");
  res.send(queryResult.rows);
  client.release();
};

module.exports = {
  getUsers: getUsers,
};
