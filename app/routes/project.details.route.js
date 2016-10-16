var router = require('express').Router();
var projectsController =  require('../controllers/projectsController');
var projectSettingsController = require('../controllers/projectSettingsController');

router.post('/createProject',projectsController.createProject);
router.get('/fetchTopProjects',projectsController.getTopProjects);
router.get('/fetchProjectDetailsById',projectsController.getProjectDetailsById);
router.delete('/deleteProject',projectsController.deleteProject);
router.post('/updateProjectDetails',projectsController.updateProject);

router.post('/saveProjectSettings',projectSettingsController.saveProjectsSettings);
router.get('/fetchProjectSettings',projectSettingsController.fetchProjectSettingsById);

module.exports = router;