const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Tests = require("../models/Tests");

//FIXME: add verifyToken to router

router.post("/", (req, res) => {
  // const idList = req.query.list;
  const profileId = req.body.profileId;
  const testName = req.body.testName;
  const idArr = req.body.idArr;

  console.log(idArr)

  console.log(req.body)
  res.send("dasda")
  // Tests.create({
  //   profile_id: profileId,
  //   test_name: testName
  // })
  //   .then((data) => {
  //     console.log(data.dataValues.id)
  //   })
  //   .catch((err) => res.send(err));
});

module.exports = router;
