module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment", {
    comment: {
      type: DataTypes.STRING(255),
      Null: true,
    },
  });
};
