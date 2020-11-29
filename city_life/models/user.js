module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    userId: {
      type: DataTypes.STRING(10),
      primarykey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    character: {
      type: DataTypes.INTEAGER,
      allowNull: false,
    },
    money: {
      type: DataTypes.INTEAGER,
      allowNull: false,
      defalt: 0,
    },
    weight: {
      type: DataTypes.INTEAGER,
      allowNull: false,
      defalt: 50,
    },
  });
};
