var projectService = require('../services/projectsServices');
var projectMemberService = require('../services/projectMemberServices');

exports.createProject = function (req, res) {
  if (req.body.projectName && req.body.projectDescription) {
  	projectService.createProject(req, res)
      .then(function (data) {
        req.body.project_id = data.dataValues.project_id;
        req.body.projectMemberRole = 'Admin';
        var user_id = req.body.user_id;
        projectMemberService.addProjectMember(req, res, user_id)
          .then(function (memberData){
             res.send({"status": true, "message": "Project Added successfully"});
          }, function(error) {
             res.send({"status": false, "message": "Failed to add the project"});
          });
      }, function (error) {

      });
  } else {
  	res.send({"status": false, "message": "Mandatory fields are missing"});
  }
}

exports.getTopProjects = function (req, res) {
  projectMemberService.getProjectDetailsByMemberId(req.param('user_id')).
  then(function(projectData) {
    projectService.getTopProjects(projectData).then (function (projectList) {
    if (projectList && projectList.length) {
      res.send({
        "projects": projectList,
        "status": true
      })
    } else {
      res.send({
        "status": false
      })
    }
  })
  })
}

exports.getProjectDetailsById = function (req, res) {
  projectService.getProjectDetailsById(req, res);
}

exports.deleteProject = function (req,res) {
  if (req.body.projectId) {
    projectService.deleteProject(req, res);
  } else {
  	res.send({"status": false, "message": "Mandatory fields is missing"});
  }
}

exports.updateProject = function (req, res) {
  projectService.updateProjectInfo(req, res);
}

exports.deleteProjectById = function(req, res) {
  projectService.deleteProject(req, res)
  .then(function(data) {
    if(data) {
      res.send({
        status: true,
        message: "project deleted successfully"
      });
    } else {
      res.send({
        status: false
      });
    }
  })
}