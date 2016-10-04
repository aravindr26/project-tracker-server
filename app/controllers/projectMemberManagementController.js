/**
 * Created by aravind on 10/8/16.
 */
var projectMemberService = require('../services/projectMemberServices');
var userService = require('../services/userServices');
var mailService = require('../services/mailService');

exports.addMember = function(req, res) {
    userService.userAuthCheck(req.body.projectMemberEmail)
    .then(function (userInfo) {
      if(userInfo) {
      	projectMemberService.addProjectMember(req, res, userInfo.userId);
      }else{
        //var mailObj = mailService.registrationMail(req, res);
      }
    })
}

exports.updateMember = function(req, res) {
  
}

exports.getMemberDetails = function(req, res) {
  projectMemberService.getProjectMemberDetails(req.param('project_id'))
    .then(function (userList) {
       userService.getUserListById(userList)
         .then(function (memberData) {
           if (!memberData) {
             res.send({
             	status: false,
             	message: 'No data Found'
             })
           } else {
           	 res.send({
                status: true,
                member_list: memberData 
           	 })
           } 
         })
    })
}

exports.deleteMember = function(req, res) {

}