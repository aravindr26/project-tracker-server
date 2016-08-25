var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').projects;
console.log(db);
exports.createProject = function(req,res) {

    var projectDetails = {
      project_name: req.body.projectName,
      project_description: req.body.projectDescription,
      project_start_date: req.body.projectStartDate,
      project_end_date: req.body.projectEndDate,
      project_sprint_duration: req.body.projectSprintDuration
    };

    sequelize.sync({ force: false }).then(function () {
      db.create(projectDetails).then(function () {
        res.send({"status": true, "message": "Project successfully created."});
      }, function (error) {
        res.send({"status": false, "message": "Project creation failed"});
      });
    });
}

exports.deleteProject = function(req, res) {
  sequelize.sync({ force: false }).then(function () {
    db.findOne({where: {project_id: req.body.projectId}}).then(function(project) {
      if (project && project.dataValues.project_id) {
        Projects.destroy({where: {project_id: req.body.projectId}}).then(function () {
        res.send({"status": true, "message": "Project deleted."});
        }, function (error) {
        res.send({"status": false, "message": "Project deletion failed"});
        });
      } else {
        res.send({"message": "Project details not found"});
      }
    });
  });
}
