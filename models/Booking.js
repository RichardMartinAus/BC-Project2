// Model for bookings table. bookings as guests

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Booking extends Model {
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //  }
}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bookedForDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Userid: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  guestsNo: {
    type: DataTypes.INTEGER,
  },
  active: {
    type: DataTypes.BOOLEAN,
  }
},
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "booking",
}
);

module.exports = Booking;

