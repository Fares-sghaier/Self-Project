const express = require("express");
const cors = require("cors");
const path = require('path');
const  items = require("./database-mongo");

require("dotenv").config();







const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Fixing the 404 error when refreaching the page
const frontend = path.join(__dirname, '/../client/public');
app.use('/', express.static(frontend));
app.use(function (req, res, next) {
  res.sendFile(path.join(frontend, 'index.html'));
});


//////////////IMPORTING ROUTES////////////////
const UserRoutes = require("./routes/User.routes");
const AuthRoutes = require("./routes/Auth.routes");


//////////////PATHS////////////////
app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
