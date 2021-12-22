const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Masterclass } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "48h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(
        ApiError.badRequest("Something wrong with email or password")
      );
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("This user already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, role, password: hashPassword });
    // const basket =
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("No such user :("));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Incorrect password"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async auth(req, res, next) {
    res.json({ message: "Good job" });
  }
}

module.exports = new UserController();
