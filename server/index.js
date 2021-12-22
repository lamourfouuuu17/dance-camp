// для запуска сервера npm run dev

require("dotenv").config();
const express = require("express"); // require - для импортирования модулей в файл
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors"); // для запросов из браузера
const { json } = require("sequelize/dist");
const PORT = process.env.PORT || 7000;
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate(); // подключение к базе данных
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is working on port ${PORT}`)); // callback будет работать при успешном запуске сервера
  } catch (e) {
    console.log(e);
  }
};

start();
