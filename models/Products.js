// Ordering Food Model

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Products extends Model {}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    isVeg : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    desc : {
         type: DataTypes.STRING,
            allowNull: false,
    },
    price : {
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
}, 
{           
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "products",
  }
 );

module.exports = Products;
