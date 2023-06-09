const express = require("express")
const router = express.Router()
const { getGoals, putGoals, setGoals } = require("../controller/goalController")
router.route('/').get(getGoals).post(setGoals)

router.put('/:id', putGoals)

module.exports = router