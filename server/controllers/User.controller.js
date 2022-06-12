// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
const { log } = require("console");
const { User, validate } = require("../database-mongo/models/User.model.js");
const bcrypt = require("bcrypt");



const selectAll = async function (req, res) {
  try {
    const items = await User.find({});
    res.status(200).send(items);
  } catch (error) {
    res.status(200).send(error);
  }
}; //Tested

const createUser = async (req, res) => {
  console.log(req.body,"hellllll")
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error,"error")
     res.status(500).send({ message: "Internal Server Error" });
  }
}; //Tested



module.exports = { selectAll, createUser };
