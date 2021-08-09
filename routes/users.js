// User Routes
// Require Express Router
const router = require("express").Router();

// Retrive the methods that exist in User Controller
const {
    getUsers,
    createUser
} = require("../controllers/users")

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;