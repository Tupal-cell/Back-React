const { createUser, findAllUsers, findUserById, updated,} = require("./user.controller");

const router = require ("express").Router();

router.post("/", createUser);
router.get("/", findAllUsers);
router.get("/:id",findUserById);
router.patch("/", updated);

module.exports = router;
