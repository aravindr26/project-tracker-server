var router = require('express').Router();
var storyController =  require('../controllers/storyController');

router.post('/addStory',storyController.addStoryData);
router.get('/fetchStoryByUser',storyController.getAllStories);
/*router.get('/projectDetailsById',projectsController.getProjectDetailsById);
router.delete('/deleteProject',projectsController.deleteProject);
router.get('/updateProject',projectsController.updateProject);*/

module.exports = router;