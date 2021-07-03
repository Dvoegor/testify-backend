
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Profiles = require("../models/Profiles")

// router.get("/", (req, res) => {
//   res.status(200).send("auth");
// });

router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const profile = await Profiles.findAll({where: {email: email, password: password}, raw: true})
    const user = profile[0]
    const userId = user.id
    const token = jwt.sign({ id: userId }, process.env.SECRET)
    res.setHeader('auth-token', token);
    res.status(200).send("Верные данные")
});

module.exports = router;