const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Declares a new class Category that extends the Sequelize Model class
class Category extends Model {}

Category.init(
  {
    // defines the model's attributes - columns
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
