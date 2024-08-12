const express = require("express");

const router = express.Router();

const phoneService = require("../service/phoneService");
router.get("/", (req, res) => {
  res.render("phone/phoneSave.html");
});

router.post("/", async (req, res) => {
  const data = req.body;
  const savePhone = await phoneService.save(data);
  if (savePhone == true) res.render("phone/saveSuccess.ejs", { data });
  else res.send("result: " + false);
});

router.get("/list", async (req, res) => {
  const result = await phoneService.findAll();
  res.send(result);
});

module.exports = router;
