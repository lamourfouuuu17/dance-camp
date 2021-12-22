const Router = require("express");
const router = new Router();
const masterclassController = require("../controllers/masterclassController");

router.post("/", masterclassController.create);
router.get("/", masterclassController.getAll);
// router.get("/:id", masterclassController.getOne);

module.exports = router;
