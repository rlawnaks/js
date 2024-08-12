const express = require("express");

const router = express.Router();

const phoneController = require("./phoneController");

router.use("/phone", phoneController);

// ** router export
module.exports = router;
