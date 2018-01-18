const express = require('express')
const router = express.Router()
const twit = require('../controllers/twitCtrl')
const auth = require('../middlewares/Authorization')

router.get('/', auth.authorization, twit.getTwit)
router.post('/', auth.authorization, twit.createTwit)
router.delete('/:id', auth.authorization, twit.deleteTwit)

module.exports = router
