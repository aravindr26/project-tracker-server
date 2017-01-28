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
        projectMembersReference: sequelize.import(__dirname + '/projectMemberReference'),
        story: sequelize.import(__dirname + '/story'),
        storyComment: sequelize.import(__dirname + '/storyComments'),
        storyLabel: sequelize.import(__dirname + '/storyLabels'),
        projectSettings: sequelize.import(__dirname + '/projectSettings'),
        storyStatus: sequelize.import(__dirname + '/storyStatus'),
        storyType: sequelize.import(__dirname + '/storyTypes')
    };

    global.db.projects.hasMany(global.db.story, {foreignKey: 'project_id', targetKey:'project_id'});
    global.db.projects.hasMany(global.db.projectMembers, {foreignKey: 'project_id', targetKey:'project_id'});
    
    /*ProjectMember*/
   global.db.projectMembers.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey:'project_id'});
   global.db.projectMembers.belongsTo(global.db.User, {foreignKey: 'userId', targetKey: 'userId'});

    /* Project member reference - temporary table
     (storing member details till member verifies through email)*/

   global.db.projectMembersReference.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey: 'project_id'}); 
   /*story details*/
   global.db.story.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey: 'project_id'});
   global.db.story.belongsTo(global.db.User, {foreignKey: 'userId', targetKey: 'userId'});
   global.db.story.hasMany(global.db.storyLabel, {foreignKey: 'story_id', targetKey: 'story_id'});


   /* Story Comments*/
   global.db.storyComment.belongsTo(global.db.story, {foreignKey: 'story_id', targetKey: 'story_id'});
   global.db.storyComment.belongsTo(global.db.User, {foreignKey: 'userId', targetKey: 'userId'});
  
  /* Story labels */
   global.db.storyLabel.belongsTo(global.db.story, {foreignKey: 'story_id', targetKey:'story_id'});

   /* project settings*/

  global.db.projectSettings.belongsTo(global.db.projects, {foreignKey: 'project_id', targetKey: 'project_id'});

module.exports = global.db;
