const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth");
const { getInformation, getInformationID, postInformation, updateInformation, deleteInformation} = require("../controllers/informationController");

router.get("/", authenticateToken, getInformation);
router.get("/:id", authenticateToken, getInformationID);
router.post("/", authenticateToken, postInformation);
router.put("/:id", authenticateToken, updateInformation);
router.delete("/:id", authenticateToken, deleteInformation);

module.exports = router;