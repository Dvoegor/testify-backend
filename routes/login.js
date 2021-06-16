
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
    // console.log(req.body)
    const profile = await Profiles.findAll({where: {email: email, password: password}, raw: true})
    const user = profile[0]
    // if (!admin) {
    //     return res.status(200).send("Неверные данные");
    // }
    const userId = user.id
    // res.status(200).send(`${adminId}`);
    const token = jwt.sign({ id: userId }, process.env.SECRET)
    res.setHeader('auth-token', token);
    // if (password === 'admin') {
    //   res.setHeader('admin', 'true');
    // } else {
    //   res.setHeader('admin', 'false');
    // }
    res.status(200).send("Верные данные")
});

module.exports = router;