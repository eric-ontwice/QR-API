// User Routes
// Require Express Router
const router = require("express").Router();

// Retrive the methods that exist in QR Controller
const QRCodesController = require("../controllers/qr_codes")

router.get("/", QRCodesController.allQRCodes)
router.get("/redirect/:id", QRCodesController.redirectToURL)
// router.get("/:id", QRCodesController.getQRCode)
router.post("/", QRCodesController.createQR)

module.exports = router;