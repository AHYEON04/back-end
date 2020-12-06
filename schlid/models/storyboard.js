module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    date: {
      type: DataTypes.Datetime,
      allowNull: false,
      defaultValue: now(),
    },
    see: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
