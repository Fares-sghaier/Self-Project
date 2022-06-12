const router = require('express').Router();
const userController = require("../controllers/User.controller");

router.get("/", userController.selectAll);
router.post("/create",userController.createUser)
module.exports = router;
