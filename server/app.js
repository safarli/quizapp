const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const queries = require("./db/queries.js");
const app = express();
const PORT = process.env.PORT;

app.get("/getusers", queries.getUsers);

app.listen(PORT, () =>
  console.log(`Server launched and listening on port ${PORT}`)
);
