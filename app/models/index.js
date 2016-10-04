/**
 * Created by aravind on 13/8/16.
 */

/*global global:false, require:false, process:false, __dirname:false, module:false*/
var sequelize = require('../../config/sequelizeConfig');
var Sequelize = require('sequelize');


    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        User: sequelize.import(__dirname + '/user'),
        projects: sequelize.import(__dirname + '/projects'),
        projectMembers: sequelize.import(__dirname + '/projectMembers'),
        projectMembersReference: sequelize.import(__dirname + '/projectMemberReference')
    };
    
    /*ProjectMember*/
   global.db.projectMembers.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey:'project_id'});
   global.db.projectMembers.belongsTo(global.db.User, {foreignKey: 'userId', targetKey: 'userId'});

    /* Project member reference - temporary table
     (storing member details till member verifies through email)*/

   global.db.projectMembersReference.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey: 'project_id'}); 
module.exports = global.db;
