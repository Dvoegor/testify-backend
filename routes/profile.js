const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Tests = require("../models/Tests");

//FIXME: add verifyToken to router

router.get("/", async (req, res) => {
    const profileId = req.query.profileId;
    console.log(profileId)

    Tests.findAll({
        raw: true,
        where: { profile_id: profileId },
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => res.send(err));
});

module.exports = router;
