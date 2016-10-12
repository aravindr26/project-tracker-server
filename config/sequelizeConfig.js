var Sequelize    = require('sequelize');

var sequelize = new Sequelize('project_tracker', 'root', 'root', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    pool: false
});

sequelize.authenticate().then(function (error) {
 if (error) {
    console.log('There is connection in ERROR');
 } else {
    console.log('DB Connection has been established successfully');
 }
});

module.exports = sequelize;