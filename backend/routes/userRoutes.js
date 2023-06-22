const express = require('express')
const router = express.Router()
const { resgisterUser, loginUser, getMe } = require('../controller/userContoller')
const { auth } = require('../middleware/authMiddleware')
router.post('/', resgisterUser)
router.post('/login', loginUser)
router.get('/me', auth,getMe)


module.exports = router
