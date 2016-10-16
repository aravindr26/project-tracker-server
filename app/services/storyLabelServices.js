var sequelize = require('../../config/sequelizeConfig');
var _ = require('lodash');
var db = require('../models').storyLabel;

exports.addLabels = function (req, res) {
	var storylabel = {
      story_label: req.body.story_label,
      story_id: req.body.story_id
	};

	sequelize.sync({ force: false }).then(function () {
	  db.create(storylabel).then(function (data) {
	    res.send({"status":true, "message": "Label added successfully"});
	  }, function (error) {
	    res.send({"status":false, "message": "Failed to add label"});
	  });
	});
}

exports.getLabelList = function (req, res) {
  var storyLabelsList = [];
  return db.findAll({
      where: {
        story_id: req.param('story_id')
      }
    })
    .then(function(storyList) {
      _(storyList).forEach(function(value, key) {
        storyLabelsList.push(storyList[key].dataValues);
      })
      return storyLabelsList;

    })
}