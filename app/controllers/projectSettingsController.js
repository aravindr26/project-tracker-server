var projectSettingsService = require('../services/projectSettingsService');

exports.saveProjectsSettings = function(req, res) {
  projectSettingsService.saveProjectSettingsData(req, res);
}

exports.fetchProjectSettingsById = function(req, res) {
	projectSettingsService.getProjectSettings(req, res);
}