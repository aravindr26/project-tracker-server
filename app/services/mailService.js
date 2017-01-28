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

exports.sendForgotLink = function(req, res, data) {
  var updatedData = data.password.replace(/\//g, "#");
  var mailLink = 'http://localhost:8080/#/forgot-link/'+ updatedData;
  var mailOptions = {
      from: '"ProjectTracker 👥" <projecttracker16@gmail.com>', // sender address 
      to: req.param('email'), // list of receivers 
      subject: 'ProjectTracker account recovery', // Subject line 
      text: 'ProjectTracker', // plaintext body 
      html: '<b>ProjectTracker</b></br>' +
             'Click on below link to recover your account</br>'+
             '<a href="'+ mailLink +'"> Click Here</a>'
    };
    transporter.sendMail(mailOptions, function(error, info){
      console.log('error----', error);
      if(error){
        res.send({
          message: "Failed to send Mail"
        });
      }else {
        res.send({
          message: "Mail send successfully"
        })
      }
      
    });
}