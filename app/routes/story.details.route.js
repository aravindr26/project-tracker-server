var router = require('express').Router();
var storyController =  require('../controllers/storyController');
var storyCommentController =  require('../controllers/storyCommentsController');
var storyLabelController = require('../controllers/storyLabelsController');
var cors = require('cors');

router.post('/addStory',storyController.addStoryData);
router.get('/fetchStoryByUser',storyController.getAllStories);
router.post('/updateStoryStatus',storyController.updateStoryStatus);
router.get('/fetchStoryByCategory',storyController.fetchStoryByStatus);
router.get('/fetchTopStories', storyController.fetchTopStories)

router.post('/addComment', storyCommentController.addComment);
router.get('/fetchCommentByStory', storyCommentController.fetchCommentsByStory);


router.post('/addStoryLabel', storyLabelController.addStoryLabel);
router.get('/fetchLabelByStory', storyLabelController.getlabelsByStory);

router.post('/saveStoryType', storyController.saveStoryType);
router.post('/saveStoryStatus', storyController.saveStoryStatus);

router.post('/exportStoryInfo', storyController.exportStoryData);


router.delete('/deleteStoryById', storyController.deleteStoryById);
router.delete('/deleteCommentById', storyCommentController.deleteCommentById);
router.delete('/deleteLabelById', storyLabelController.removeLabelById);

router.post('/updateStoryDescription', storyController.updateStoryDescription);

router.get('/getTaskCount', storyController.getTaskCountByUser);



module.exports = router;