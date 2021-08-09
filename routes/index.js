// General Routes
// Require Express Router
const router = require("express").Router()

// Retrive routers
const usersRoutes = require("./users")
const qrsRoutes = require("./qrs")

// Routes
router.use("/users", usersRoutes)
router.use("/qrs", qrsRoutes)

router.use("/", function(request, response) {
    return response.send("Welcome to Dynamic QR API")
})

module.exports = router