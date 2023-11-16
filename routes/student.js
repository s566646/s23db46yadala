var express = require('express');
const Student_controlers= require('../controllers/Student');
var router = express.Router();
/* GET costumes */
router.get('/', Student_controlers.Student_view_all_Page );

router.get('/detail', Student_controlers.Student_view_one_Page);
/* GET create Student page */
router.get('/create', Student_controlers.Student_create_Page);

module.exports = router;
