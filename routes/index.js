const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello Index Router")
})

router.get("/test", (req, res) => {
    res.send("Router test")
})

// ** router export
module.exports = router;