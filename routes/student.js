var express = require('express');
const Student_controlers= require('../controllers/Student');
var router = express.Router();
/* GET costumes */
router.get('/', Student_controlers.Student_view_all_Page );

router.get('/detail', Student_controlers.Student_view_one_Page);
/* GET create Student page */
router.get('/create', Student_controlers.Student_create_Page);
router.get('/update', Student_controlers.Student_update_Page);
router.get('/delete', Student_controlers.Student_delete_Page);

module.exports = router;
