
var sequelize = require('../../config/sequelizeConfig');
var _ = require('lodash');
var db = require('../models').projects;
var story_type = require('../models').story;
var project_member = require('../models').projectMembers;
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

exports.getTopProjects =  function (projectData) {
  var projectList = [];
  return db.findAll({
    where: { 
      project_id: {
        $in: projectData
      }
    },
    include: [{
      model: story_type,
      attributes: ['story_type']
    },
    {
      model: project_member,
      attributes: ['project_member_id']
    }]
  }).then(function(project) {
      console.log('project====', project);
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

exports.getProjectDetailsById = function(req, res) {
  db.findOne({where: {project_id: req.param('project_id')}})
  .then(function (projectData) {
    if(!projectData) {
      res.send({"status": false, "message": "No project Found"})
    } else {
      res.send({"status": true, "ProjectData": projectData.dataValues})
    }
  })
}

exports.updateProjectInfo =function(req, res) {
  db.update({
    project_name: req.body.projectName,
    project_description: req.body.projectDescription
  },
  {
    where : {
      project_id: req.body.project_id
    }
  }).then(function (projectData) {
    if(!projectData) {
      res.send({"status": false, "message" : "Failed to update project"});
    } else {
      res.send({"status":true, "message": "Project data updated successfully"});
    }
  })
}
