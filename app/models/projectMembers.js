/**
 * Created by aravind on 10/8/16.
 */

var Sequelize = require('sequelize');
module.exports = function (sequelize) {
    var projectMembers = sequelize.define("project_members", {
        project_member_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        project_member_role: Sequelize.STRING,
        project_member_added_by: Sequelize.STRING
    });

    /*, {
        classMethods: {
            associate: function (models) {
                projectMembers.belongsTo(models.projects, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        field: 'project_id',
                        allowNull: false
                    }
                });
            }
        }
    }*/
    return projectMembers;
};
