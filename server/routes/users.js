const express = require('express')
const router = express.Router()
const user = require('../controllers/userCtrl')
const auth = require('../middlewares/Authorization')
const imageHelper = require('../helpers/imageHelpers')

router.post('/auth/login', user.login)
router.post('/auth/register', user.register)
router.post('/profile', auth.authorization, user.getProfile)
router.put('/:id', auth.authorization,
  auth.isSelf,
  imageHelper.multer.single('image'),
  imageHelper.sendUploadToGCS,
  user.updateProfile
)

module.exports = router
