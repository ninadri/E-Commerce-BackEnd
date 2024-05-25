const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Declares a new class Tag that extends the Sequelize Model class
class Tag extends Model {}

Tag.init(
  {
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
