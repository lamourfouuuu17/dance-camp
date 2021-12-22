const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, defaultValue: "Name" },
  surname: { type: DataTypes.STRING, defaultValue: "Surname" },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Role = sequelize.define("role", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameRole: { type: DataTypes.STRING },
});

const UserHasRole = sequelize.define("userHasRole", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Masterclass = sequelize.define("masterclass", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  teacherName: { type: DataTypes.STRING, allowNull: false },
  teacherSurname: { type: DataTypes.STRING, allowNull: false },
  style: { type: DataTypes.STRING, unique: true, allowNull: false },
  styleDesc: { type: DataTypes.STRING, allowNull: true },
  date: { type: DataTypes.DATE, allowNull: false },
  // time: { type: DataTypes.TIME },
});

const UserHasMasterclass = sequelize.define("userHasMasterclass", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

User.belongsToMany(Role, { through: UserHasRole });
Role.belongsToMany(User, { through: UserHasRole });

User.belongsToMany(Masterclass, { through: UserHasMasterclass });
Masterclass.belongsToMany(User, { through: UserHasMasterclass });

module.exports = {
  User,
  Role,
  UserHasRole,
  Masterclass,
  UserHasMasterclass,
};
