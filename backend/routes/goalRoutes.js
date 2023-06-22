const express = require("express")
const router = express.Router()
const { getGoals, putGoals, setGoals, deleteGoal } = require("../controller/goalController")
const { auth } = require('../middleware/authMiddleware')

router.route('/').get(auth, getGoals).post(auth, setGoals)
router.route('/:id').delete(auth,deleteGoal).put(auth, putGoals)


module.exports = router