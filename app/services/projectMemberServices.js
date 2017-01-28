/**
 * Created by aravind on 10/8/16.
 */

var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').projectMembers;
var _ = require('lodash');
exports.addProjectMember = function(req, res, user_id) {
    var projectMemberDetails = {
        project_member_role: req.body.projectMemberRole,
        project_id: req.body.project_id,
        userId: user_id
    };

    return sequelize.sync({ force: false }).then(function () {
        return db.create(projectMemberDetails).then(function () {
          return true;
        }, function (error) {
          return false; 
        });
    });
}

exports.getProjectMemberDetails = function(projectID) {
    var projectMemberList = [];
    return db.findAll({where: {project_id: projectID}})
      .then(function(projectMemberData) {
        _(projectMemberData).forEach(function (value, key) {
          projectMemberList.push(projectMemberData[key].dataValues.userId);
        })
        return projectMemberList;
      })
}

exports.getProjectDetailsByMemberId = function(userId) {
  var projectList= [];
  return db.findAll({where: {userId: userId}})
  .then(function(pojectData) {
    _(pojectData).forEach(function (value, key) {
      projectList.push(pojectData[key].dataValues.project_id);
    })
    return projectList;
  })
}

exports.deleteMemberById = function(req, res) {
  return db.destroy({
    where:{
      userId: req.param('member_id'),
      project_id: req.param('project_id')
    }
  }).then(function(data){
    return data;
  })
}