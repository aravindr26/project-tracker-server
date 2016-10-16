var storyCommentService = require('../services/storyCommentServices');

exports.addComment = function (req, res) {
	storyCommentService.addComment(req, res);
}

exports.fetchCommentsByStory = function(req, res) {
	storyCommentService.fetchCommentByStory(req, res)
	.then(function(commentsList){
		if(!commentsList) {
          res.send({"status": false, "message": "No comments available"});
		} else {
          res.send({"status": true, "commentsList":commentsList});
		}
	})
}
