/**
 * Created by aravind on 10/8/16.
 */
var projectMemberService = require('../services/projectMemberServices');
var userService = require('../services/userServices');
var mailService = require('../services/mailService');
var json2csv = require('json2csv');
var fs = require('fs');
var _ = require('lodash');

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


exports.exportMemberData = function(req,res) {
	var data= [];	
	projectMemberService.getProjectMemberDetails(req.body.project_id)
    .then(function (userList) {
       userService.getUserListById(userList)
         .then(function (memberData) {
           if (!memberData) {
             res.send({
             	status: false,
             	message: 'No data Found'
             })
           } else {
						  _(memberData).forEach(function (value, key) {
          				data.push(memberData[key].dataValues);
        		 })
           	 var fields = ['userId','firstName', 'lastName', 'email'];
						 var csv = json2csv({ data: data, fields: fields });
						 res.setHeader('Content-disposition', 'attachment; filename=file.csv');
	           res.set('Content-Type', 'text/csv');
	           res.status(200).send(csv);
           } 
         })
    })
}