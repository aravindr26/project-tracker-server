 var storyLabelService = require('../services/storyLabelServices');

exports.addStoryLabel = function (req, res) {
  storyLabelService.addLabels(req,res);
}

exports.getlabelsByStory = function(req, res) {
	storyLabelService.getLabelList(req, res).then(function (labelList) {
		if(!labelList) {
          res.send({"status": false, "message": "No labels available"});
		} else {
          res.send({"status": true, "labelList":labelList});
		}
	});
}

exports.removeLabelById = function(req, res) {
	storyLabelService.deleteLabelById(req, res).
	then(function(data){
		if(data === 1) {
           res.send({
           	status: true,
           	message: "Label removed successfully"
           });
		}else {
           res.send({
           	 status: false,
           	 message: "Failed to remove the label"
           });
		}
	})
}