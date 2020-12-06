const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./storyboard")(sequelize, Sequelize);
db.Food = require("./user")(sequelize, Sequelize);
db.Ball = require("./comment")(sequelize, Sequelize);

db.User.hasMany(db.storyboard);
db.Food.belongsTo(db.User);

db.User.hasMany(db.comment);
db.Word.belongsTo(db.User);

module.exports = db;
