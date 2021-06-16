const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Words = require("../models/Words");

//FIXME: add verifyToken to router

router.get("/", (req, res) => {
  const idList = req.query.list;

  Words.findAll({
    raw: true,
    where: { id: idList },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
