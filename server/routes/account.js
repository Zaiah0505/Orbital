const express = require("express");
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  var user = req.user;
  user.password = undefined;
  res.send(user);
});

router.put('/', (req, res) => {
  var user = req.user;
  const {
    modPlan, 
    name, 
    residential, 
    major, 
    matriculationYear, 
    targetGradYear, 
    transcript,
    specialisation,
    cap,
    targetCap,
    faculty,
    facIndex,
    majorIndex
  } = req.body;
  if (modPlan) user.modPlan = modPlan;
  if (name) user.name = name;
  if (residential) user.residential = residential;
  if (major) user.major = major;
  if (matriculationYear) user.matriculationYear = matriculationYear;
  if (targetGradYear) user.targetGradYear = targetGradYear;
  if (transcript) user.transcript = transcript;
  if (specialisation) user.specialisation = specialisation;
  if (cap) user.cap = cap;
  if (targetCap) user.targetCap = targetCap;
  if (faculty) user.faculty = faculty;
  if (facIndex) user.facIndex = facIndex;
  if (majorIndex) user.majorIndex = majorIndex;
  user.save()
  .then(user => {
    res.status(200).json({
      success: true,
      updated: {
        modPlan: modPlan,
        name: name,
        residential: residential,
        major: major,
        matriculationYear: matriculationYear,
        targetGradYear: targetGradYear,
        transcript: transcript,
        specialisation: specialisation,
        cap: cap,
        targetCap: targetCap,
        faculty: faculty,
        facIndex: facIndex,
        majorIndex: majorIndex
      }
    });
  })
  .catch(err => {
    res.status(400).json({error: err});
    console.log(err);
  });
});

router.delete('/', (req, res) => {
  var user = req.user;
  user.delete()
  .then(user => {
    user.password = undefined;
    res.status(200).json({success: true, user: user});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  });
});