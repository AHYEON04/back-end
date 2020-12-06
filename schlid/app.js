const express = require("express");
const app = express();
const { sequelize } = require("./")

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(PORT, "번 포트에서 대기 중");
});
