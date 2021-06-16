const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const Tests = require("../models/Tests");
const Questions = require("../models/Questions");

//FIXME: add verifyToken to router

router.post("/", (req, res) => {
  // const idList = req.query.list;
  const profileId = req.body.profileId;
  const testName = req.body.testName;
  const idArr = req.body.idArr;

  Tests.create({
    profile_id: profileId,
    test_name: testName
  })
    .then((data) => {
      // console.log(data.dataValues.id)
      const testId =  data.dataValues.id
      const questionsArr = [];
      idArr.forEach(element => {
        questionsArr.push({test_id: testId, word_id: element})
      });
      // console.log(questionsObj)
      Questions.bulkCreate(questionsArr).then(data => {
        let resultObj = {    
          testId: testId, 
          wordIds: []        
        };
        
        data.forEach(element => {
          resultObj.wordIds.push(element.dataValues.word_id)
        });
        // console.log(resultObj)
        res.send(resultObj)
      })
    })
    .catch((err) => res.send(err));
});

module.exports = router;
