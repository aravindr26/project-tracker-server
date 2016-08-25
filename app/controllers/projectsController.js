var projectService = require('../services/projectsServices');

exports.createProject = function (req, res) {
  if (req.body.projectName && req.body.projectDescription) {
  	projectService.createProject(req, res);
  } else {
  	res.send({"status": false, "message": "Mandatory fields are missing"});
  }
}

exports.getProjectList = function (req, res) {
  res.send({"message":"under development"});
}

exports.getProjectDetails = function (req, res) {
  res.send({"message":"under development"});
}

exports.deleteProject = function (req,res) {
  if (req.body.projectId) {
    projectService.deleteProject(req, res);
  } else {
  	res.send({"status": false, "message": "Mandatory fields is missing"});
  }
}

exports.updateProject = function (req, res) {
  res.send({"message":"under development"});
}