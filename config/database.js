import { Sequelize } from "sequelize";

const db = new Sequelize("attendify", "root", "putrajan21", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
