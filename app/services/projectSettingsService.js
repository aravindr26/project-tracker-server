var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').projectSettings;
var _ = require('lodash');

exports.saveProjectSettingsData = function(req, res) {
  var projectSettings = {
    project_start_date: req.body.startDate,
    project_sprint_duration: req.body.projectSprintDuration,
    project_end_date: req.body.endDate,
    project_sprint_starts_on: req.body.projectSprintDay,
    project_id: req.body.project_id
  };

  sequelize.sync({ force: false }).then(function () {
        db.create(projectSettings).then(function () {
          res.send({"status": true,"message": "Project settings saved successfully"});
        }, function (error) {
           res.send({"status": false,"message": "Failed to save project settings"});
        });
    });
}

exports.getProjectSettings = function(req, res) {
 db.findOne({where: {project_id: req.param('project_id')}})
  .then(function (projectData) {
    if(!projectData) {
      res.send({"status": false, "message": "No project Found"})
    } else {
      res.send({"status": true, "ProjectData": projectData.dataValues})
    }
  })
}