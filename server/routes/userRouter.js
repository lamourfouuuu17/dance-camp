const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", userController.registration); //user create
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.auth); // user get

module.exports = router;
