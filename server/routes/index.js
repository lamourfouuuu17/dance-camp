const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const masterclassRouter = require("./masterclassRouter");

router.use("/user", userRouter);
router.use("/masterclass", masterclassRouter);

module.exports = router;
