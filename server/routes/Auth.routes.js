const router = require('express').Router();
const authController = require("../controllers/Auth.controller");

router.post("/validate",authController.validation)

module.exports = router;