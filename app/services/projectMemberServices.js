/**
 * Created by aravind on 10/8/16.
 */

var sequelize = require('../../config/sequelizeConfig');
var db = require('../models').projectMembers;
exports.addProjectMember = function(req,res) {
    var projectMemberDetails = {
        project_member_role: req.body.projectMemberRole,
        project_member_added_by: req.body.memberAddedBy,
        project_id: req.body.project_id
    };

    sequelize.sync({ force: false }).then(function () {
        db.create(projectMemberDetails).then(function () {
            res.send({"status": true, "message": "Project Members added successfully"});
        }, function (error) {
            console.log(error);
            res.send({"status": false, "message": "Failed to add the member"});
        });
    });
}
