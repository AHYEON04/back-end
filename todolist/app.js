const express = require("express");
const app = express();
const sequelize = require('./models').sequelize;
const routes = require("./routes");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: false }));


sequelize.sync();

app.use("/", routes);

app.set("jwt-secret", process.env.JWT_SECRET);

app.get("/", (req, res)=>{
    res.send("string");
})

app.listen(8000, ()=> {
    console.log("서버가 켜짐");
})