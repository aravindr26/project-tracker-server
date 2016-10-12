/**
 * Created by aravind on 10/8/16.
 */

var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var projectMembers = sequelize.define("project_member_details", {
        project_member_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        project_member_role: Sequelize.STRING,
        project_member_status: Sequelize.STRING
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
    return projectMembers;
};
