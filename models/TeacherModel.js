import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Teacher = db.define(
  "teacher",
  {
    TeacherName: DataTypes.STRING,
    Address: DataTypes.STRING,
    Email: DataTypes.STRING,
    Number: DataTypes.INTEGER,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Teacher;

(async () => {
  await db.sync();
})();
