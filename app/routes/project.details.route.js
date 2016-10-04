var router = require('express').Router();
var projectsController =  require('../controllers/projectsController');

router.post('/createProject',projectsController.createProject);
router.get('/getAllProjects',projectsController.getAllProjects);
router.get('/projectDetailsById',projectsController.getProjectDetailsById);
router.delete('/deleteProject',projectsController.deleteProject);
router.get('/updateProject',projectsController.updateProject);

module.exports = router;