module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  });
};
