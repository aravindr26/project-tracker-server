var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var projectMembersReference = sequelize.define("project_member_reference", {
        project_member_refernce_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        project_member_role: Sequelize.STRING,
        project_member_email: Sequelize.STRING
    }, {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    });
    return projectMembersReference;
};
