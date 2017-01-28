/**
 * Created by aravind on 10/8/16.
 */

var router = require('express').Router();
var projectsMemberController =  require('../controllers/projectMemberManagementController');

router.post('/addMember',projectsMemberController.addMember);
router.get('/updateMember',projectsMemberController.updateMember);
router.get('/getMemberDetails',projectsMemberController.getMemberDetails);
router.delete('/deleteMemberById',projectsMemberController.deleteMember);
router.post('/exportMemberData',projectsMemberController.exportMemberData)

module.exports = router;