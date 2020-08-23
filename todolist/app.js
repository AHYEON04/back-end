const express = require("express");
const app = express();
const sequelize = require('./models').sequelize;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: false }));


sequelize.sync();

app.use("/", routes);

app.get("/", (req, res)=>{
    res.send("string");
})

app.listen(8000, ()=> {
    console.log("서버가 켜짐");
})