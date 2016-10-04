
var sequelize = require('../../config/sequelizeConfig');
var _ = require('lodash');
var db = require('../models').projects;
exports.createProject = function(req,res) {

    var projectDetails = {
      project_name: req.body.projectName,
      project_description: req.body.projectDescription
    };

    return sequelize.sync({ force: false }).then(function () {
      return db.create(projectDetails).then(function (data) {
        //res.send({"status": true, "message": "Project successfully created."});
        return data;
      }, function (error) {
        return false;
        //res.send({"status": false, "message": "Project creation failed"});
      });
    });
}

exports.getAllProjects =  function (req, res) {
  var projectList = [];
  return db.findAll().then(function(project) {
    _(project).forEach(function (value, key) {
      projectList.push(project[key].dataValues);
    })
    return projectList;
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
