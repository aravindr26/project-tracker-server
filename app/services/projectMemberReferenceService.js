var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').projectMembersReference;

exports.addProjectMemberReference = function(req,res) {
    var projectMemberReferenceDetails = {
        project_member_role: req.body.projectMemberRole,
        project_member_email: req.body.projectMemberEmail,
        project_id: req.body.project_id
    };

    sequelize.sync({ force: false }).then(function () {
        db.create(projectMemberReferenceDetails).then(function () {
            res.send({"status": true, "message": "Member added successfully, an email has been send for verification"});
        }, function (error) {
            console.log(error);
            res.send({"status": false, "message": "Failed to add the member"});
        });
    });
}   
