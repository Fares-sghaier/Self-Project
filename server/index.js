const express = require("express");
const cors = require("cors");
require("dotenv").config();
var items = require("./database-mongo");

const UserRoutes = require("./routes/User.routes");
const AuthRoutes = require("./routes/Auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cors());

app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
