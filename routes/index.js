const express =require('express');
const { getUser,addEmployee,updateEmployee,deleteEmployee,searchEmployee,paginatedResults} = require('../controllers/emp_Controller');
const router=express.Router();


//const {Employee}=require('../models/Emp_models');


router.get('/nodeapi/employees',getUser)


router.post('/nodeapi/employees/add',addEmployee)
//router.get('/nodeapi/employees/:id',getUserById)

router.put('/nodeapi/employees/edit/:id',updateEmployee)

router.delete('/nodeapi/employees/:id',deleteEmployee)

router.search('/nodeapi/employees/:name',searchEmployee)

router.get("/nodeapi/employees?page=1&size=2",paginatedResults );

module.exports=router;