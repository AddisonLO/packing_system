const express = require("express");
const { sequelize } = require("./models");
const app = express();
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

async function start() {
  try {
    await sequelize.sync();

    console.log("Database synced successfully.");

    if (process.env.NODE_ENV === "development") {
      app.use(cors());
    }

    require("./startup/routes")(app);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to sync database:", error);
  }
}

start();
