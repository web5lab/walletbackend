require("dotenv").config();
const express = require("express");
const { VerifyServer } = require("./middleware/serverAuth");
const bodyParser = require("body-parser");
const databaseConnection = require("./mongoDb/db");
const { fn3 } = require("./Services/testnet/coinService");
const cors = require("cors");

const app = express();
const Port = 3001;
const router = express.Router();

// routes import here
const testnetRoute = require("./routes/testnetRoutes");
const adminRoute = require("./routes/adminRoutes");
const logErrors = require("./helper/errorLogger");

app.use("/", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add the error log middleware to the app
app.use(logErrors);
app.use(cors({ origin: "*" }));

// routes using here
app.use("/testnet", testnetRoute);
app.use("/admin", adminRoute);
app.use("/server/:secretKey", VerifyServer);

databaseConnection(() => {
  app.listen(Port, () => {
    console.log(`server listening on port ${Port}`);
  });
});

app.post("/testfn", async (req, res) => {
  const t = await fn3();
  res.json(t);
});

app.get("/testapi", async (req, res) => {
  res.send("ok");
});

app.get("/error", function (req, res) {
  for (let index = 0; index < 100000000; index++) {
    logErrors(`test${Date()}`);
  }
  res.send("updated");
});
