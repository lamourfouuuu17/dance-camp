const Router = require("express");
const router = new Router();
const masterclassController = require("../controllers/masterclassController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), masterclassController.create);
router.get("/", masterclassController.getAll);
// router.get("/:id", masterclassController.getOne);

module.exports = router;
