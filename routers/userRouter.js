const requireUser = require('../middlewares/requireUser');
const userController=require("../controllers/userController")
const router = require('express').Router();

router.post("/follow", requireUser, userController.followOrUnfollowUserController)
router.get('/getFeedData', requireUser, userController.getPostOfFollowing)
router.get('/getmyposts', requireUser, userController.getMyPosts)
router.get('/getuserposts', requireUser, userController.getUserPost)
router.get('/getMyInfo', requireUser, userController.getMyInfo)
router.delete('/', requireUser, userController.deleteMyProfile)
router.post('/getUserProfile', requireUser, userController.getUserProfile)
router.put('/', requireUser, userController.updateUserProfile)
module.exports = router;