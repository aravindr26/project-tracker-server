var nodemailer = require('nodemailer');
var memberReference = require('./projectMemberReferenceService');
var connection = {
	 service: 'Gmail',
	 host: 'smtp.gmail.com',
     port: 465,
     secure: true,
     auth: {
         user: 'projecttracker16@gmail.com',
         pass: 'projecttracker'
     },
};
var transporter = nodemailer.createTransport(connection);
exports.registrationMail = function (req, res) {
	var mailOptions = {
      from: '"Aravind 👥" <projecttracker16@gmail.com>', // sender address 
      to: req.body.projectMemberEmail, // list of receivers 
      subject: 'ProjectTracker account verification', // Subject line 
      text: 'ProjectTracker', // plaintext body 
      html: '<b>ProjectTracker</b></br>' +
            '<a href="http://localhost:8080/register"> Join project</a>' // html body 
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return error;
      }else {
      	console.log(info);
        memberReference.addProjectMemberReference(req, res);
      }
      
    });
}